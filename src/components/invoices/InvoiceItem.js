import React from "react";
import styled from "styled-components";
import { FaAngleRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const InvoiceItem = () => {
  const navigate = useNavigate();

  return (
    <SingleInvoice
      onClick={() => navigate("/invoice-details")}
      className="single-invoice"
    >
      <div className="left-content">
        <div className="column">
          <div>
            <h2>
              <span>#</span>
              Y78789
            </h2>
          </div>
          <div>
            <p className="invoice-date">Due 28 Apr 2022</p>
          </div>{" "}
        </div>
        <p className="name">Leyla Aziz</p>{" "}
      </div>
      <div className="status-container">
        <div className="point"></div>
        <div className="status-text">Pending</div>
      </div>
      <button className="arrow-btn">
        <FaAngleRight style={{ color: "#7C5DFA", fontSize: "20px" }} />
      </button>
    </SingleInvoice>
  );
};

const SingleInvoice = styled.div`
  display: flex;
  border: 1px solid red;
  -webkit-box-align: center;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: 1px solid transparent;
  border-radius: 8px;
  padding: 1rem 1.5rem;
  background: rgb(255, 255, 255);
  text-decoration: none;
  transition: border 0.3s ease 0s, background 0.3s ease 0s;
  cursor: pointer;
  @media (max-width: 776px) {
    padding: 1rem;
  }
  .left-content {
    display: flex;
    align-items: center;
    width: 60%;
  }
  .column {
    display: flex;
    column-gap: 30px;
    @media (max-width: 776px) {
      flex-direction: column;
    }
  }
  .name {
    margin-left: auto;
    font-size: 14px;
  }
  h2 {
    color: ${(props) => props.color || props.theme.color.text.bodyA};
    font-family: Spartan, sans-serif;
    font-weight: bold;
    transition: color 0.3s ease 0s;
    font-size: 0.8rem;
    line-height: 1.1;
    letter-spacing: -0.63px;
    @media (max-width: 776px) {
      margin-bottom: 1rem;
    }
  }
  p {
    transition: color 0.3s ease 0s;
    color: ${(props) => props.color || props.theme.color.text.bodyA};
    font-size: 0.75rem;
    line-height: 1.125;
    letter-spacing: -0.25px;
  }

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
  .arrow-btn {
    grid-area: 1 / 6 / 2 / 7;
    background: transparent;
    border: none;
    cursor: pointer;
    @media (max-width: 776px) {
      display: none;
    }
  }
`;
export default InvoiceItem;
