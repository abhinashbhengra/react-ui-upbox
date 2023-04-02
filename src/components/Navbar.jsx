import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Wrapper>
      <div className="topbar">
        <img src="./images/top3.png" alt="topbar" />
      </div>
      <div className="main-container">
        <div className="logo">
          <div className="nav-logo">
            <img className="logo-img" src="./images/logo.png" alt="logo" />
          </div>
          <div className="brand-name">
            <p>UPBOX</p>
          </div>
        </div>
        <div className="menulist">
          <ul>
            <li>This month</li>
            <li>Skin</li>
            <li>Hair</li>
            <li>Bath</li>
            <li>Sales</li>
          </ul>
          <div>
            <button>
              Log In <span>&#62;</span>{" "}
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  font-family: "DM Sans", sans-serif;
  position: relative;
  /* width: 100%; */
  .topbar {
    img {
      width: 100%;
      position: absolute;
      top: -10;
      height: 10px;
    }

    /* height: fit-content; */
  }
  .main-container {
    padding: 17px 112px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-right: 315px;
      .logo-img {
        width: 50px;
        height: 50px;
      }
      .brand-name {
        font-size: 28px;
        font-weight: 700;
        letter-spacing: 0.28em;
      }
    }
    .menulist {
      display: flex;
      align-items: center;
      button {
        width: 124px;
        height: 37px;
        border: 2px solid #4a4a4a;
        border-radius: 300px;
        background-color: #ffff;
        text-transform: uppercase;
        font-size: 14px;
        font-weight: 500;
        line-height: 18.23px;
        letter-spacing: 0.12erm;
      }
    }
    .menulist ul {
      display: flex;
      list-style: none;
      font-size: 14px;
    }
    .menulist li {
      font-size: 14px;
      font-weight: 500;
      margin-right: 40px;
      text-transform: uppercase;
      letter-spacing: 0.16em;
    }
  }
`;
export default Navbar;
