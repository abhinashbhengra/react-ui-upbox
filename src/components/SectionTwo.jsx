import React from "react";
import styled from "styled-components";

const SectionTwo = () => {
  return (
    <Wrapper>
      <div className="heading">
        <h1>Pick your plan</h1>
      </div>
      <div className="subscription">
        <div className="planOne">
          <h2 className="subsMonth">Monthly</h2>
          <p> $18/mo</p>
          <button>Find your box</button>
        </div>
        <div className="planeTwo">
          <h2 className="subsYear">Yearly</h2>
          <p> $15/mo</p>
          <button>Find your box</button>
        </div>
      </div>
      <div>
        <p>
          Your plan auto-renews at the end of 30 days from the 1st day you
          signed-up.
        </p>
      </div>
    </Wrapper>
  );
};

export default SectionTwo;

const Wrapper = styled.div`
  margin: 70px 85px;
  text-align: center;
  .subscription {
    display: flex;
    justify-content: center;
    gap: 120px;
    .planOne {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 575px;
      height: 291px;
      border: 2px solid #efefef;
    }
    .planeTwo {
      display: flex;
      flex-direction: column;
      justify-content: center;
      /* align-items: center; */
      width: 575px;
      height: 291px;
      border: 2px solid #efefef;
    }
  }
`;
