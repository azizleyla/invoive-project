import React from "react";
import styledComponents from "styled-components";
import { FaAngleRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const InvoiceItem = () => {
  const navigate = useNavigate();

  return (
    <SingleInvoice
      onClick={() => navigate("/invoice-details")}
      className="single-invoice"
    >
      <div>
        <h2>
          <span>#</span>
          Y78789
        </h2>
      </div>

      <div>
        <p className="invoice-date">Due 28 Apr 2022</p>
      </div>

      <p className="">Leyla Aziz</p>
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

const SingleInvoice = styledComponents.div`
  display:grid;
  grid-template-columns: 5rem 9rem 1fr min-content min-content min-content;
  grid-template-rows: min-content;
  -webkit-box-align: center;
  align-items: center;display: grid;
  grid-template-rows: max-content 1fr;
  width: 100%;
  border: 1px solid transparent;
  border-radius: 8px;
  padding: 1rem 1.5rem;
  background: rgb(255, 255, 255);
  text-decoration: none;
  transition: border 0.3s ease 0s, background 0.3s ease 0s;
  cursor: pointer;
  h2{
    color: rgb(12, 14, 22);
    font-family: Spartan, sans-serif;
    font-weight: bold;
    transition: color 0.3s ease 0s;
    font-size: 0.8rem;
    line-height: 1.1;
    letter-spacing: -0.63px;    

  }
  p{
    transition: color 0.3s ease 0s;
    color: rgb(136, 142, 176);
    font-size: 0.75rem;
    line-height: 1.125;
    letter-spacing: -0.25px;
  }
  .invoice-date{
    grid-area: 1 / 2 / 2 / 3;
  }
  .status-container{
    grid-area: 1 / 5 / 2 / 6;
    margin-left: 2.5rem;
    margin-right: 1.25rem;  
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 6.5rem;
    height: 2.5rem;
    border-radius: 6px;
    background: rgba(55, 59, 83, 0.06);
    .point{
     width: 0.5rem;
    height: 0.5rem;
    margin-right: 0.5rem;
    border-radius: 50%;
    background: rgb(51, 214, 159);
    }
    .status-text{
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
  .arrow-btn{
    grid-area: 1 / 6 / 2 / 7;
    background:transparent;
    border:none;
    cursor:pointer;
    
  }
`;
export default InvoiceItem;
