import React, { useState, useEffect } from "react";
import "./Home_slideshow.css";

function Home_slideshow() {
  const [current, setCurrent] = useState(0);
  const images = [
    "https://st5.depositphotos.com/17110272/67706/i/450/depositphotos_677064534-stock-photo-modern-automatic-rifle-wooden-background.jpg",
    "https://images.pexels.com/photos/889709/pexels-photo-889709.jpeg",
    "https://w.forfun.com/fetch/83/83276ed6a54976919f986b94c23c8af6.jpeg"
  ];
  const imageSlides = document.getElementsByClassName("slide-image");
  const bubbles = document.getElementsByClassName("bubble-outer");

  const nextImage = () => {
    let newIndex = current === images.length - 1 ? 0 : current + 1;
    imageSlides[current].className = "slide-image leftOut";
    imageSlides[newIndex].className = "slide-image leftIn";
    updateBubbles(newIndex);
    setCurrent(newIndex);
  };

  const prevImage = () => {
    let newIndex = current === 0 ? images.length - 1 : current - 1;
    imageSlides[current].className = "slide-image rightOut";
    imageSlides[newIndex].className = "slide-image rightIn";
    updateBubbles(newIndex);
    setCurrent(newIndex);
  };

  const jumpImage = (e) => {
    let jumpIndex = parseInt(e.target.id);
    if (jumpIndex === current) return;
    if (jumpIndex - current >= 0) {
      imageSlides[current].className = "slide-image leftOut";
      imageSlides[jumpIndex].className = "slide-image leftIn";
    } else {
      imageSlides[current].className = "slide-image rightOut";
      imageSlides[jumpIndex].className = "slide-image rightIn";
    }
    updateBubbles(jumpIndex);
    setCurrent(jumpIndex);
  };

  const updateBubbles = (highlight) => {
    bubbles[current].style.borderColor = "black";
    bubbles[highlight].style.borderColor = "white";
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 9000);

    return () => {
      clearInterval(interval);
    };
  }, [current]);

  useEffect(() => {
    bubbles[current].style.borderColor = "white";
  }, []);

  return (
    <div className="gallery-container">
      <span className="button-prev" onClick={prevImage}>&#xE5E0;</span>
<span className="button-next" onClick={nextImage}>&#xE5E1;</span>

      <div className="gallery-track">
        {images.map((image, index) => (
          <div
            key={index}
            className="slide-image"
            style={
              index === 0
                ? { backgroundImage: `url(${image})`, transform: "translateX(0%)" }
                : { backgroundImage: `url(${image})`, transform: "translateX(100%)" }
            }
          ></div>
        ))}
      </div>
      <div className="gallery-footer">
        {images.map((image, index) => (
          <div className="bubble-outer" onClick={jumpImage} id={index} key={index}>
            <div className="bubble-inner" id={index}></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home_slideshow;
