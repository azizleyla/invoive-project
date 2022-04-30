import React from "react";
import { useState } from "react";
import AddInvoice from "../components/AddInvoice";
import InvoiceLists from "../components/invoices/InvoiceLists";
import PageHeader from "../components/PageHeader";

const Home = ({ isShowAddForm, setIsShowAddForm }) => {
  return (
    <div className="right-side">
      <PageHeader setIsShowAddForm={setIsShowAddForm} />
      <InvoiceLists />
      <AddInvoice
        isShowAddForm={isShowAddForm}
        setIsShowAddForm={setIsShowAddForm}
      />
    </div>
  );
};

export default Home;
