import React, { useState } from "react";
import { SlideImage, StyledSlider, StyledHeading, ImageWrap } from "./Styled.Slider";
import {IoIosArrowDropright, IoIosArrowDropleft } from 'react-icons/io'
import { HeroStyled } from "./Styled.Hero";
const Hero = ({ slides }) => {
  // uses state to keep track of the current picture, sets it on first picture
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  console.log("slides er", slides)
  // two arrow functions that adds or subtracts one based on a ternary
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  return (
    <HeroStyled>
      <StyledSlider>
        <StyledHeading>
          <IoIosArrowDropleft className="leftArrow" onClick={prevSlide} />
          <IoIosArrowDropright className="rightArrow" onClick={nextSlide} />
        </StyledHeading>
        {/* Maps through the passed array slides, and creates a div and if the index is equal to the current image it will do the SlideImage */}
        {slides.map((slide, index) => {
          return (
            <ImageWrap key={index}>
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
    </HeroStyled>
  );
};

export default Hero;
