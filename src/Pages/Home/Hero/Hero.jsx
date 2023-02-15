import React, { useState } from "react";
import { SlideImage, StyledSlider, StyledHeading, ImageWrap } from "./Slider.Styled";
import {IoIosArrowDropright, IoIosArrowDropleft } from 'react-icons/io'
import { StyledHero } from "./Hero.Styled";
const Hero = ({ slides, ratio, btnColor }) => {
  // uses state to keep track of the current picture, sets it on first picture
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  // two arrow functions that adds or subtracts one based on a ternary
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  return (
    <StyledHero>
      <StyledSlider>
        <StyledHeading buttonColor={btnColor}>
          <IoIosArrowDropleft className="leftArrow" onClick={prevSlide} />
          <IoIosArrowDropright className="rightArrow" onClick={nextSlide} />
        </StyledHeading>
        {/* Maps through the passed array slides, and creates a div and if the index is equal to the current image it will do the SlideImage */}
        {slides.map((slide, index) => {
          return (
            <ImageWrap key={index} aspectRatio={ratio}>
              {index === current && (
                <SlideImage
                  key={index}
                  src={slide}
                  alt="Udvalgte billeder af Homelands boliger"
                />
              )}
            </ImageWrap>
          );
        })}
      </StyledSlider>
    </StyledHero>
  );
};

export default Hero;
