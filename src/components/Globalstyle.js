import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        background: ${(props) => props.theme.color.body.bg};
        font-family: 'Spartan', sans-serif;
        transition: background .3s;
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
    }
    .sidebar{
        background: ${(props) => props.theme.color.sidebar.bg};
    }
    .single-invoice{
      background: ${(props) => props.theme.color.invoiceItem.bg};
    }
    .title{
        color:${(props) => props.theme.color.text.heading};
    }
    .form{
        background: ${(props) => props.theme.color.form.bg};
    }
    .input-field{
        background: ${(props) => props.theme.color.form.fieldBg};
     
        border:1px solid  ${(props) => props.theme.color.form.fieldBorder};
    }
    .discard-btn{
        background-color:${(props) => props.theme.color.btn.secondary.bg}
    }
`;
