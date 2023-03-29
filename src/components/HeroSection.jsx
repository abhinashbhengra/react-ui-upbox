import React from "react";
import styled from "styled-components";
import ButtonOne from "./ButtonOne";

const HeroSection = () => {
  return (
    <Wrapper>
      <div className="left-section">
        <div className="left-heading">
          <h1>Look good without leaving your house.</h1>
        </div>
        <div className="left-desc">
          <p>
            Upbox is the easiest way to look your best without having to hunt
            for the perfect makeup combination. Our stylists curate the latest
            trends and send them directly to your door every month.
          </p>
        </div>
        <div className="left-btn">
          <ButtonOne name="sign up"></ButtonOne>
        </div>
      </div>
      <div className="right-section">
        <img src="./images/hero-f.png" alt="hero-img" />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* height: 500px; */
  font-family: "DM Serif Display", serif;
  padding: 17px 112px;
  background-color: #f5f8ff;
  display: flex;
  justify-content: space-between;
  position: relative;
  .left-section {
    width: 511px;
    margin-bottom: 120px;
    .left-heading {
      margin-right: 90px;
      line-height: 56px;
      margin-bottom: 19px;
      margin-top: 105px;
    }
    .left-heading h1 {
      font-size: 48px;
      font-weight: 400;
    }
    .left-desc {
      margin-right: 70px;
      margin-bottom: 30px;
    }
    .left-desc p {
      font-family: "DM Sans", sans-serif;
      font-size: 18px;
      font-weight: 400;
      letter-spacing: 0.01em;
      line-height: 23px;
    }
  }
  .right-section {
    /* position: relative; */
  }
  .right-section {
    position: absolute;
    margin-top: 35px;
    right: 0;
    img {
      right: 68;
      width: 982px;
    }
  }
`;
export default HeroSection;
