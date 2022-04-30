import React from "react";
import styledComponents from "styled-components";
const Sidebar = ({ toggleTheme, theme }) => {
  return (
    <Wrapper className="sidebar">
      <div className="logo-wrapper">
        <img
          src="https://invoice-app-giraffe.vercel.app/images/logo.svg"
          alt="logo"
        />
      </div>{" "}
      <div className="sidebar-bottom">
        <button className="sidebar-toggle-btn" onClick={toggleTheme}>
          {" "}
          {theme === "light" ? (
            <img
              src="https://invoice-app-giraffe.vercel.app/images/icon-sun.svg"
              alt="moon"
            />
          ) : (
            <img
              src="https://invoice-app-giraffe.vercel.app/images/icon-moon.svg"
              alt="moon"
            />
          )}
        </button>
        <div className="sidebar-avatar">
          <img
            src="https://invoice-app-giraffe.vercel.app/images/image-avatar.jpg"
            alt=""
          />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styledComponents.div`
  position: sticky;
  height: 100vh;
  border-radius: 0px 20px 20px 0px;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
   text-align:center;
  top: 0px;
  z-index: 10000;
   align-items: center;
   background: rgb(55, 59, 83);
  transition: background 0.3s ease 0s;
  width:80px;
  @media(max-width:992px){
     height:5rem;
    width:100% ;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    border-radius:0;
  }
  .logo-wrapper{
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width:5rem;
    height: 5rem;
    border-radius: 0px 20px 20px 0px;
     background: rgb(124, 93, 250);
  }
  .sidebar-bottom{
    @media(max-width:992px){
      display:flex;
      flex-direction:row;
      align-items:center;
    }
  }
  .sidebar-toggle-btn{
      cursor:pointer;
      background:transparent;
      border:none;
      
  }
  .sidebar-avatar{
     width: 80px;
     margin:20px 0;
     padding-top:20px;
     cursor: pointer;
     display:flex;
     justify-content:center;
     align-items:center;
    border-top:1px solid rgb(73, 78, 110); 
     @media(max-width:992px){
      border:none;
      margin:0;
       padding:0; 
      height:5rem;
      margin-left:30px;
      border-left:1px solid rgb(73, 78, 110); 
      cursor: pointer;
      

  }
  img{ 
    width:2rem;
    height:100%;
    border-radius: 50%;
    @media(max-width:992px){
      height:2rem;
      width:2rem;
    }
    }
}
}
`;

export default Sidebar;
