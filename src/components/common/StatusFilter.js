import React from "react";
import styled from "styled-components";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useState } from "react";

const status = ["paid", "pending", "draft"];
const StatusFilter = () => {
  const [isShowOption, setIsShowOption] = useState(false);

  const handleClick = () => {
    setIsShowOption(!isShowOption);
  };
  return (
    <Wrapper>
      <div className="filter-box" onClick={handleClick}>
        <span>
          Filter by Status
          {isShowOption ? (
            <FaAngleUp
              style={{
                fontSize: "18px",
                marginLeft: "5px",
                color: "#7C5DFA",
              }}
            />
          ) : (
            <FaAngleDown
              style={{
                fontSize: "18px",
                marginLeft: "5px",
                color: "#7C5DFA",
              }}
            />
          )}
        </span>
        {isShowOption && (
          <ul className="filter-option">
            {status.map((item) => (
              <li>
                <input type="checkbox" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  div {
    position: relative;
    cursor: pointer;
    span {
      color: rgb(12, 14, 22);
      font-family: Spartan, sans-serif;
      font-weight: bold;
      transition: color 0.3s ease 0s;
      font-size: 0.75rem;
      line-height: 1.25;
      letter-spacing: -0.5px;
      display: flex;
      align-items: center;
    }
  }
  .filter-option {
    position: absolute;
    top: 2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    width: 12rem;
    border-radius: 8px;
    box-shadow: rgb(72 84 159 / 25%) 0px 10px 20px;
    padding: 1.5rem;
    background: rgb(255, 255, 255);
    transition: box-shadow 0.3s ease 0s, background 0.3s ease 0s;
    li {
      display: flex;
      align-items: center;
      transition: color 0.3s ease 0s;
      font-size: 0.75rem;
      line-height: 1.125;
      letter-spacing: -0.25px;
      color: rgb(12, 14, 22);
      font-weight: bold;
      text-transform: capitalize;

      span {
        margin-left: 1rem;
      }
    }
    input {
      outline: none;
    }
  }
`;

export default StatusFilter;
