import React from "react";
import styled from "styled-components";

const StatusButton = () => {
  return (
    <Wrapper>
      <div className="status-container">
        <div className="point"></div>
        <div className="status-text">Pending</div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .status-container {
    grid-area: 1 / 5 / 2 / 6;
    margin-left: 2.5rem;
    margin-right: 1.25rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    margin-left: auto;
    width: 6.5rem;
    height: 2.5rem;
    border-radius: 6px;
    background: rgba(55, 59, 83, 0.06);
    @media (max-width: 776px) {
      grid-area: 2 / 2 / 4 / 3;
      margin-left: auto;
    }
    .point {
      width: 0.5rem;
      height: 0.5rem;
      margin-right: 0.5rem;
      border-radius: 50%;
      background: rgb(51, 214, 159);
    }
    .status-text {
      font-family: Spartan, sans-serif;
      transition: color 0.3s ease 0s;
      font-size: 0.75rem;
      line-height: 1.125;
      letter-spacing: -0.25px;
      color: rgb(51, 214, 159);
      font-weight: bold;
      text-transform: capitalize;
    }
  }
`;

export default StatusButton;
