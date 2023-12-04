import React, { useEffect, useRef, useState } from 'react';

const ImageGravityCanvas = ({ type }) => {
  const canvasRef = useRef(null);
  const [activeImage, setActiveImage] = useState(null);
  const imagesVariants = {
    SuperKrishak: [
      { src: '/assets/projects/reviews/SuperKrishak/review1.png', x: 1800, z: 0, y: 0, velocityY: 0 },
      { src: '/assets/projects/reviews/SuperKrishak/review2.png', x: 0, z: 0, y: 0, velocityY: 0 },
      { src: '/assets/projects/reviews/SuperKrishak/review3.png', x: 1800, z: 0, y: 0, velocityY: 0 },
      { src: '/assets/projects/reviews/SuperKrishak/review4.png', x: 0, z: 0, y: 0, velocityY: 0 },
      { src: '/assets/projects/reviews/SuperKrishak/review5.png', x: 1800, z: 0, y: 0, velocityY: 0 },
      { src: '/assets/projects/reviews/SuperKrishak/review6.png', x: 0, z: 0, y: 0, velocityY: 0 },
      // Images for variant 1
      // Update the src for variant 1 here
    ],
    Upkite: [
      { src: '/assets/projects/reviews/Upkite/review1.png', x: 1800, z: 0, y: 0, velocityY: 0 },
      { src: '/assets/projects/reviews/Upkite/review2.png', x: 0, z: 0, y: 0, velocityY: 0 },
      { src: '/assets/projects/reviews/Upkite/review3.png', x: 1800, z: 0, y: 0, velocityY: 0 },
      { src: '/assets/projects/reviews/Upkite/review4.png', x: 0, z: 0, y: 0, velocityY: 0 },
      { src: '/assets/projects/reviews/Upkite/review5.png', x: 1800, z: 0, y: 0, velocityY: 0 },
      { src: '/assets/projects/reviews/Upkite/review6.png', x: 0, z: 0, y: 0, velocityY: 0 },
      // Images for variant 2
      // Update the src for variant 2 here
    ],
    // Add more variants if needed
  };

  const images = useRef(imagesVariants[type] || []);


  const isDragging = useRef(false);
  const mouseOffsetX = useRef(0);
  const mouseOffsetY = useRef(0);
  const requestId = useRef(null);
  const gravity = useRef(0.3); // Adjust the gravity force here
  const lastImagePositions = useRef([]);

  // Function to check collision between two rectangles
  const isColliding = (rect1, rect2) => {
    return (
      rect1.x < rect2.x + rect2.width &&
      rect1.x + rect1.width > rect2.x &&
      rect1.y < rect2.y + rect2.height &&
      rect1.y + rect1.height > rect2.y
    );
  };

  // Function to handle collision between images (for stacking)
  const handleImageCollision = (image, otherImage) => {
    if (image.y < otherImage.y + otherImage.height) {
      // Stack the images vertically on collision
      image.y = otherImage.y - image.height;
      image.velocityY = 0;
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const loadedImages = images.current.map((imageData) => {
      const image = new Image();
      image.src = imageData.src;
      image.onload = () => {
        imageData.width = image.width;
        imageData.height = image.height;
        drawImages();
      };
      return image;
    });

    const drawImages = () => {
      const canvasWidth = canvas.clientWidth;
      const canvasHeight = canvas.clientHeight;

      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(0, 0, 0, 0)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      loadedImages.forEach((image, index) => {
        ctx.drawImage(image, images.current[index].x, images.current[index].y);
      });
    };

    const applyGravity = () => {
      images.current.forEach((image, index) => {
        const lastPosition = lastImagePositions.current[index];
        const updatedY = image.y + image.velocityY;

        if (!lastPosition || lastPosition.x !== image.x || lastPosition.y !== updatedY) {
          lastImagePositions.current[index] = { x: image.x, y: updatedY };
          image.y = updatedY;

          if (image.y < canvas.height - image.height) {
            image.velocityY += gravity.current;
          } else {
            image.y = canvas.height - image.height;
            image.velocityY = 0;
          }
        }

        handleBoundaryCollision(image, canvas);

        images.current.forEach((otherImage, otherIndex) => {
          if (index !== otherIndex) {
            if (isColliding(image, otherImage)) {
              // Handle collision between images for stacking
              handleImageCollision(image, otherImage);
            }
          }
        });
      });

      drawImages();
      requestId.current = requestAnimationFrame(applyGravity);
    };

    const handleMouseDown = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      loadedImages.forEach((image, index) => {
        const imgX = images.current[index].x;
        const imgY = images.current[index].y;

        if (
          mouseX >= imgX &&
          mouseX <= imgX + image.width &&
          mouseY >= imgY &&
          mouseY <= imgY + image.height
        ) {
          isDragging.current = true;
          setActiveImage(index);
          mouseOffsetX.current = mouseX - imgX;
          mouseOffsetY.current = mouseY - imgY;
          cancelAnimationFrame(requestId.current);
        }
      });
    };

    const handleMouseMove = (e) => {
      if (isDragging.current && activeImage !== null) {
        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        images.current[activeImage].x = mouseX - mouseOffsetX.current;
        images.current[activeImage].y = mouseY - mouseOffsetY.current;
      }
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      setActiveImage(null);
    };

    const handleBoundaryCollision = (image, canvas) => {
      if (image.y > canvas.height - image.height) {
        image.y = canvas.height - image.height;
        image.velocityY = 0;
      }

      if (image.x < 0) {
        image.x = 0;
      } else if (image.x > canvas.width - image.width) {
        image.x = canvas.width - image.width;
      }

      if (image.y < 0) {
        image.y = 0;
      }
    };

    window.addEventListener('resize', drawImages);
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseup', handleMouseUp);

    loadedImages.forEach((image, index) => {
      images.current[index].width = image.width;
      images.current[index].height = image.height;
    });

    requestId.current = requestAnimationFrame(applyGravity);

    return () => {
      window.removeEventListener('resize', drawImages);
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(requestId.current);
    };
  }, [activeImage]);

  return (
    <canvas
    className='ImageGravityCanvas'
      ref={canvasRef}
      style={{
        position:'absolute',
        zIndex:5,
        bottom:0,
        width: '100%',
        height: '900px',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        cursor: isDragging.current ? 'grabbing' : 'grab',
      }}
    />
  );
};

export default ImageGravityCanvas;