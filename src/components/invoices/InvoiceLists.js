import React from "react";
import styledComponents from "styled-components";
import InvoiceItem from "./InvoiceItem";

const InvoiceLists = () => {
  return (
    <Wrapper>
      <div className="invoices-list">
        <InvoiceItem />
        <InvoiceItem />
      </div>
    </Wrapper>
  );
};

const Wrapper = styledComponents.div`
.invoices-list{
    display:flex;
    flex-direction:column;
    gap:15px;
}

`;
export default InvoiceLists;
