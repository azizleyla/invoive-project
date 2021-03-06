import React from "react";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";
import StatusFilter from "./common/StatusFilter";
const PageHeader = ({ setIsShowAddForm }) => {
  return (
    <Wrapper>
      <div>
        <h1 className="title"> Invoices </h1>{" "}
        <p> There are 8 total voices </p>{" "}
      </div>
      <div className="filter-container">
        <StatusFilter />
        <button
          className="add-btn"
          onClick={() => {
            setIsShowAddForm(true);
          }}
        >
          <span className="plus-icon-container">
            <FaPlus style={{ color: "#8F73FE" }} />
          </span>
          New<span className="text">Invoice </span>
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
   margin-bottom: 4rem;
   display:flex;
   justify-content:space-between;
   align-items:center;
@media(max-width:576px){
  align-items:flex-start;

}
   .filter-container{
     display:flex;
     align-items:center;

     justify-content:flex-end;
     @media(max-width:776px){
      align-items:flex-start;
    }
   }
  h1 {
    color: #000;
    font-family: Spartan, sans-serif;
    font-weight: bold;
    transition: color 0.3s ease 0s;
    font-size: 2rem;
    line-height: 1.125;
    letter-spacing: -1px;
    margin-bottom:0.5rem;
     color: ${(props) => props.color || props.theme.color.text.bodyA};
    @media(max-width:992px){
      font-size: 1rem;
    }
  
  }
  p{
    color: ${(props) => props.color || props.theme.color.text.bodyA};
    font-family: Spartan, sans-serif;
    transition: color 0.3s ease 0s;
    color: rgb(136, 142, 176);
    font-size: 0.75rem;
    line-height: 1.125;
    letter-spacing: -0.25px;
  }
  .add-btn{
    border-radius: 10rem;
    background: rgb(124, 93, 250);
    color: white;
    font-family: Spartan, sans-serif;
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 1.25;
    -webkit-font-smoothing: antialiased;
    cursor: pointer;
    transition: background 0.3s ease 0s, color 0.3s ease 0s;
    outline: none;   
     min-width: 5.875rem;
    padding: 0.5rem 1rem 0.5rem 0.5rem;
    border:none;
    display:flex;
    align-items:center;
    margin-left:40px;
    .text{
      padding-left:8px;
      @media(max-width:576px){
        display:none;
      }
    }
    

}
.plus-icon-container{
  width:30px;
  height:30px;
  background:#fff;
  border-radius:50%;
  display:flex;
  justify-content:center;
  align-items:center;
  margin-right:7px;
}
  }
`;

export default PageHeader;
