import React, { useEffect, useRef, useState } from 'react';

function BGERASER() {
  const canvasRef = useRef(null);
  const isPressRef = useRef(false);
  const ctxRef = useRef(null);
  const oldRef = useRef({ x: 0, y: 0 }); // Initialize oldRef with default values
  const [showTip, setShowTip] = useState(true); // State to manage tip visibility

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return; // Ensure canvas exists before proceeding
    }

    const ctx = canvas.getContext('2d');
    ctxRef.current = ctx;

    const img = new Image();
    img.src = '/assets/ERASER.png';

    img.onload = function () {
      const reference = document.querySelector('.designs-grid-container');
      const width = reference.clientWidth;
      const height = reference.clientHeight;

      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0, width, height);
    };

    const getBrushSize = () => {
      return 100; // Set default brush size
    };

    const performTapEffect = (x, y) => {
      const { current: ctx } = ctxRef;

      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(x, y, getBrushSize(), 0, 2 * Math.PI);
      ctx.fill();
    };

    const handleDown = (e) => {
      const rect = canvas.getBoundingClientRect();
      isPressRef.current = true;

      let offsetX, offsetY;
      if (e.type === 'mousedown') {
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;
      } else if (e.type === 'touchstart') {
        offsetX = e.touches[0].clientX - rect.left;
        offsetY = e.touches[0].clientY - rect.top;

        setShowTip(false);
        performTapEffect(offsetX, offsetY);
      }

      oldRef.current = { x: offsetX, y: offsetY };
    };

    const handleMove = (e) => {
      const { current: isPress } = isPressRef;
      const { current: old } = oldRef;
      const { current: ctx } = ctxRef;

      if (isPress) {
        const rect = canvas.getBoundingClientRect();
        let offsetX, offsetY;

        if (e.type === 'mousemove') {
          offsetX = e.clientX - rect.left;
          offsetY = e.clientY - rect.top;
        }

        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath();
        ctx.arc(offsetX, offsetY, getBrushSize(), 0, 2 * Math.PI);
        ctx.fill();

        ctx.lineWidth = 10;
        ctx.beginPath();
        ctx.moveTo(old.x, old.y);
        ctx.lineTo(offsetX, offsetY);
        ctx.stroke();

        oldRef.current = { x: offsetX, y: offsetY };
      }
    };

    const handleUp = () => {
      isPressRef.current = false;
    };

    canvas.addEventListener('mousedown', handleDown);
    canvas.addEventListener('mousemove', handleMove);
    canvas.addEventListener('mouseup', handleUp);

    canvas.addEventListener('touchstart', handleDown);
    canvas.addEventListener('touchend', handleUp);

    return () => {
      canvas.removeEventListener('mousedown', handleDown);
      canvas.removeEventListener('mousemove', handleMove);
      canvas.removeEventListener('mouseup', handleUp);

      canvas.removeEventListener('touchstart', handleDown);
      canvas.removeEventListener('touchend', handleUp);
    };
  }, []);

  return (
    <section className="section-visual-designs" id="visual-designs">
      <div className="container">
        <div className="border-l-r-b d-flex flex-row container-title">
          <div className=" container-header d-flex align-items-center" >
            <h2 className="secton-header-h2">VISUAL DESIGNS</h2>
          </div>
        </div>
      </div>
      <div className="container d-flex flex-column" style={{ justifyContent: 'center' }}>
        <div className="border-l-r-b w-100 visual-designcontainer">
          <div>
            <div>
              <p className="section-details TXTTailwindGray400">
                Graphic and visual design are the core of my work as a designer. They're the tools I use to tell compelling stories and create engaging experiences, simplifying complex ideas and captivating audiences in a visually-driven world.
              </p>
            </div>
          </div>
          <div className="designs-grid-container position-relative MTfxl" style={{ overflow: 'hidden' }}>
            {showTip && (
              <div className="tips position-absolute">
                <h5>Tip:</h5>
                <p>Somethings just need a TAP for magic to happen</p>
              </div>
            )}
            <div className="eraseable-content position-relative">
              <div className="box" style={{ overflow: 'hidden' }}>
                <canvas ref={canvasRef} id="canvas" />
              </div>
              <div className="designs-grid" style={{ pointerEvents: 'none' }}>
                <div className="design " id="design-0"><img src="https://i.ibb.co/r4ZHkfC/valentine-choclate-1.png" alt="choclate" /></div>
                <div className="design" id="design-1"><img src="https://i.ibb.co/fq9t1X9/Booklet.png" alt="Booklet design" /></div>
                <div className="design" id="design-2"><img src="https://i.ibb.co/tMGvw5P/Basanta.png" alt="Basanta poster" /></div>
                <div className="design" id="design-3"><img src="https://i.ibb.co/Kz3MLg6/nft.png" alt="NFT" /></div>
                <div className="design" id="design-4"><img src="https://i.ibb.co/pn8gBW8/Posters.png" alt="company posters" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BGERASER;
