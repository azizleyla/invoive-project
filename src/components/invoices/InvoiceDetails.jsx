import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import StatusButton from "../common/StatusButton";

const InvoiceDetails = () => {
  return (
    <Wrapper>
      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginBottom: "50px",
          color: "#333",
        }}
      >
        <img src="https://invoice-app-giraffe.vercel.app/images/icon-arrow-left.svg" />
        <span>Go back</span>
      </Link>
      <div className="invoice-details-action">
        <div className="status-wrapper">
          <span>Status: </span>
          <StatusButton />
        </div>
        <div className="buttons-container">
          <button className="action-btn edit-btn">Edit</button>
          <button className="action-btn delete-btn">Delete</button>
          <button className="action-btn mark-as-paid">Mark As Paid</button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 50.625rem;
  height: 100%;
  padding: 5.5rem 3rem;
  margin-left: 100px;
  @media (max-width: 776px) {
    margin-left: 0;
  }
  .invoice-details-action {
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    box-shadow: rgb(72 84 159 / 10%) 0px 10px 10px -10px;
    padding: 1.5rem;
    background: rgb(255, 255, 255);
    transition: background 0.3s ease 0s;
    display: flex;
    margin: 0 auto;
  }
  .action-btn {
    border-radius: 10rem;
    padding: 1rem 1.5rem;
    font-family: Spartan, sans-serif;
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 1.25;
    -webkit-font-smoothing: antialiased;
    cursor: pointer;
    transition: background 0.3s ease 0s, color 0.3s ease 0s;
    outline: none;
    border: none;
    @media (max-width: 776px) {
      display: none;
    }
    &.edit-btn {
      background: rgb(249, 250, 254);
      color: rgb(126, 136, 195);
    }
    &.delete-btn {
      background: rgb(236, 87, 87);
      color: #fff;
    }
    &.mark-as-paid {
      background: rgb(124, 93, 250);
      color: #fff;
    }
  }
  .buttons-container {
    display: flex;
    gap: 30px;
  }
  .status-wrapper {
    display: flex;
    align-items: center;

    @media (max-width: 776px) {
      justify-content: space-between;
      width: 100%;
    }
    span {
      margin-right: 15px;
    }
  }
`;
export default InvoiceDetails;
