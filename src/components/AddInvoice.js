import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import Demo from "./sidebar/Demo";

const AddInvoice = ({ isShowAddForm, setIsShowAddForm }) => {
  const formik = useFormik({
    initialValues: {
      createdAt: "2021-08-18",
      paymentDue: "2021-08-19",
      description: "",
      street: "",
      city: "",
      postCode: "",
      country: "",
      clientName: "",
      clientEmail: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <FormContainer className={isShowAddForm ? "form show" : "form"}>
      <Demo setIsShowAddForm={setIsShowAddForm} />
    </FormContainer>
  );
};
const FormContainer = styled.div`
  /* overflow-y: auto; */

  width: 50%;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.6);
  position: fixed;
  background-color: #fff;
  top: 0;
  height: 100vh;
  left: -100%;
  z-index: 999;
  border-radius: 0px 20px 20px 0px;
  transition: all 0.5s;
  padding: 3.5rem 2rem 0px 7.5rem;

  @media (max-width: 992px) {
    width: 80%;
    padding: 3.5rem 2rem 0px 2.5rem;
  }
  @media (max-width: 776px) {
    width: 100%;
    padding: 3.5rem 2rem 0px 2.5rem;
  }
  &.show {
    left: 0;
  }
  form {
    h2 {
      font-family: Spartan, sans-serif;
      font-weight: bold;
      transition: color 0.3s ease 0s;

      line-height: 1.1;
      letter-spacing: -0.63px;
      margin-bottom: 3rem;
      font-size: 1.2rem;
    }
    h4 {
      margin-bottom: 1.5rem;
      font-family: Spartan, sans-serif;
      transition: color 0.3s ease 0s;
      font-size: 1rem;
      line-height: 1.125;
      letter-spacing: -0.25px;

      font-weight: bold;
    }
  }
  input,
  select {
    height: 50px !important;
    border-radius: 5px;
  }
  label {
  }
  .inputs-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.5rem;
  }
  .form-btn {
    width: initial;
    border: none;
    border-radius: 10rem;
    padding: 1rem 1.7rem;
    font-family: Spartan, sans-serif;
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 1.25;
    -webkit-font-smoothing: antialiased;
    cursor: pointer;
    transition: background 0.3s ease 0s, color 0.3s ease 0s;
    outline: none;

    color: rgb(126, 136, 195);
    &.discard-btn {
      background: rgb(249, 250, 254);
    }
    &.draft-btn {
      background: rgb(54, 59, 83);
    }
    &.save-btn {
      background: rgb(124, 93, 250);
      color: white;
    }
  }
`;
export default AddInvoice;
