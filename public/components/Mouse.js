import React, { useEffect } from "react";

function Mouse({ mouseTargetElements = [] }) {
  useEffect(() => {
    const cursor = document.querySelector(".mouse-cursor");

    const handleMouseMove = (e) => {
      cursor.style.top = e.pageY - 10 + "px";
      cursor.style.left = e.pageX - 10 + "px";
    };

    const handleMouseEnter = (element, hoverClass) => {
      cursor.classList.add(hoverClass);
    };

    const handleMouseLeave = (element, hoverClass) => {
      cursor.classList.remove(hoverClass);
    };

    const handleMouseDown = (element, pressClass) => {
      cursor.classList.add(pressClass);
    };

    const handleMouseUp = (element, pressClass) => {
      cursor.classList.remove(pressClass);
    };

    window.addEventListener("mousemove", handleMouseMove);

    mouseTargetElements.forEach(({ targetClass, hoverClass, pressClass }) => {
      const elements = document.querySelectorAll(`.${targetClass}`);

      elements.forEach((element) => {
        element.addEventListener("mouseenter", () =>
          handleMouseEnter(element, hoverClass)
        );

        element.addEventListener("mouseleave", () =>
          handleMouseLeave(element, hoverClass)
        );

        element.addEventListener("mousedown", () =>
          handleMouseDown(element, pressClass)
        );

        element.addEventListener("mouseup", () =>
          handleMouseUp(element, pressClass)
        );
      });
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      mouseTargetElements.forEach(({ targetClass }) => {
        const elements = document.querySelectorAll(`.${targetClass}`);

        elements.forEach((element) => {
          element.removeEventListener("mouseenter", () => {});
          element.removeEventListener("mouseleave", () => {});
          element.removeEventListener("mousedown", () => {});
          element.removeEventListener("mouseup", () => {});
        });
      });
    };
  }, [mouseTargetElements]);

  return (
    <>
      <div className="mouse-cursor" />
    </>
  );
}

export default Mouse;
