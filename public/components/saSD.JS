import React, { useEffect, useRef } from 'react';

const ImageGravityCanvas = ({ Images }) => {
  const canvasRef = useRef(null);
  const images = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const loadedImages = Images.map((src, index) => {
      const image = new Image();
      image.src = src;
      image.onload = () => {
        images.current[index].width = image.width;
        images.current[index].height = image.height;
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

    loadedImages.forEach((image, index) => {
      images.current[index] = {
        src: image.src,
        x: index % 2 === 0 ? 1800 : 0,
        z: 0,
        y: 0,
        velocityY: 4,
        width: 0,
        height: 0,
      };
    });

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
          images.current[index].isDragging = true;
          images.current[index].mouseOffsetX = mouseX - imgX;
          images.current[index].mouseOffsetY = mouseY - imgY;
        }
      });
    };

    const handleMouseMove = (e) => {
      loadedImages.forEach((image, index) => {
        if (images.current[index].isDragging) {
          const rect = canvas.getBoundingClientRect();
          const mouseX = e.clientX - rect.left;
          const mouseY = e.clientY - rect.top;

          images.current[index].x = mouseX - images.current[index].mouseOffsetX;
          images.current[index].y = mouseY - images.current[index].mouseOffsetY;

          drawImages();
        }
      });
    };

    const handleMouseUp = () => {
      loadedImages.forEach((image, index) => {
        images.current[index].isDragging = false;
      });
    };

    const handleBoundaryCollision = () => {
      loadedImages.forEach((image, index) => {
        const canvasWidth = canvas.clientWidth;
        const canvasHeight = canvas.clientHeight;

        if (images.current[index].x < 0) {
          images.current[index].x = 0;
        } else if (images.current[index].x > canvasWidth - image.width) {
          images.current[index].x = canvasWidth - image.width;
        }

        if (images.current[index].y < 0) {
          images.current[index].y = 0;
        } else if (images.current[index].y > canvasHeight - image.height) {
          images.current[index].y = canvasHeight - image.height;
        }
      });
    };

    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseup', handleMouseUp);

    const applyGravity = () => {
      loadedImages.forEach((image, index) => {
        images.current[index].y += images.current[index].velocityY;

        if (images.current[index].y < canvas.clientHeight - image.height) {
          images.current[index].velocityY += 0.4;
        } else {
          images.current[index].y = canvas.clientHeight - image.height;
          images.current[index].velocityY = 0;
        }
      });

      handleBoundaryCollision();
      drawImages();
      requestAnimationFrame(applyGravity);
    };

    requestAnimationFrame(applyGravity);

    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(applyGravity);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only run this effect once on mount

  return (
    <canvas
      className='ImageGravityCanvas'
      ref={canvasRef}
      style={{
        position: 'absolute',
        zIndex: 5,
        bottom: 0,
        width: '100%',
        height: '890px',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        cursor: 'grab',
      }}
    />
  );
};

export default ImageGravityCanvas;


