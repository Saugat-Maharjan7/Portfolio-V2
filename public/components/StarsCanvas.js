import { useEffect, useRef } from 'react';

const StarsCanvas = ({ starColor, starSize, numStars  }) => {
  const canvasRef = useRef(null);
  let ctx;

  useEffect(() => {
    const canvas = canvasRef.current;
    ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = [];

    for (let i = 0; i < numStars ; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: (Math.random() * starSize) + 0.1,
        color: starColor || 'white',
        velocity: {
          x: (Math.random() - 0.5) * 0.2,
          y: (Math.random() - 0.5) * 0.2
        }
      });
    }

    const handleMouseMove = e => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      stars.forEach(star => {
        const dx = mouseX - star.x;
        const dy = mouseY - star.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 50) {
          star.velocity.x = (Math.random() - 0.5) * 2; // Faster movement on hover
          star.velocity.y = (Math.random() - 0.5) * 2; // Faster movement on hover
        }
      });
    };

    const animateStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 8);
        ctx.fillStyle = star.color;
        ctx.fill();
      });

      stars.forEach(star => {
        star.x += star.velocity.x;
        star.y += star.velocity.y;

        if (
          star.x < 0 ||
          star.x > canvas.width ||
          star.y < 0 ||
          star.y > canvas.height
        ) {
          star.x = Math.random() * canvas.width;
          star.y = Math.random() * canvas.height;
        }
      });

      requestAnimationFrame(animateStars);
    };

    animateStars();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [starColor, starSize,numStars ]);

  return (
    <canvas
      style={{
        position: 'absolute',
        width: '100%',
        height: '100vh',
        zIndex: '5',
        pointerEvents: 'none'
      }}
      ref={canvasRef}
    />
  );
};

export default StarsCanvas;