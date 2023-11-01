/* eslint-disable */
import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import {
  Container,
  NavbarBrand,
  Navbar,
  Nav,
  NavItem,
  NavbarToggler,
  Collapse,
} from "reactstrap";

import logo from "../../assets/images/logos/vertical_logo.png";

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";


const navItemStyle = {
  marginRight: '10px', // 원하는 간격으로 조정하세요
  marginLeft: '200px'
};

const Header = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const [grade, setGrade] = useState("");
  const toggle = () => setIsOpen(!isOpen);

  const [loginSession, setLoginSession] = useState(null);

  const bannerst = {
    positon: "relative",
    backgroundColor: "white",
  };

  useEffect(() => {
    setLoginSession(sessionStorage.getItem("id"));
    var id = {
      id: sessionStorage.getItem("id"),
    };
    if (sessionStorage.getItem("id") !== null) {
      fetch(process.env.REACT_APP_SERVER_LOCAL + "/user/gradecheck", {
        method: "POST", //조회
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(id),
      })
        .then((response) => {
          return response.json();
        })
        .then((date) => {
          sessionStorage.setItem("grade", date);
          setGrade(date);
        })
        .catch((err) => {
          console.log(err);
        });
      sessionCheck();
    }
  }, [loginSession]);

  const sessionClear = () => {
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("grade");
    setLoginSession(null);
    alert("로그아웃 되었습니다.");
  };

  const sessionCheck = () => {
    if (loginSession == null) {
      return (
        <Link className="nav-link" to={"/login"}>
          
        </Link>
      );
    } else {
      return (
        <Link className="nav-link" to={"/"} onClick={sessionClear}>
          로그아웃
        </Link>
      );
    }
  };
  const gradeCheck = () => {
    if (grade === 1) {
      return (
        <Link className="nav-link" to={"/mypage"}>
          관리자페이지
        </Link>
      );
    } else {
      return (
        <Link className="nav-link" to={"/mypage"}>
          마이페이지
        </Link>
      );
    }
  };
  /*--------------------------------------------------------------------------------*/
  /*To open NAVBAR in MOBILE VIEW                                                   */
  /*--------------------------------------------------------------------------------*/

  return (
    <div style={bannerst}>
      <Container>
        <Navbar className="navbar-expand-lg h2-nav">
          <NavbarBrand href="/">
         MDSoftware
          </NavbarBrand>
          <NavbarToggler onClick={toggle}>
            <span className="ti-menu text-white"></span>
          </NavbarToggler>
          <Collapse isOpen={isOpen} navbar id="header1">
      
           
              

             
             
          <NavItem style={navItemStyle}>
    <Link to={"/info"} state={{ num: 1 }}>
        회사소개
    </Link>
</NavItem>

<NavItem style={navItemStyle}>
    <Link to={"/info"} state={{ num: 2 }}>
        프로그램소개
    </Link>
</NavItem>

<NavItem style={navItemStyle}>
    <Link to={"/info"} state={{ num: 4 }}>
        문의안내
    </Link>
</NavItem>
         
          
           

          </Collapse>
        </Navbar>
      </Container>
    </div>
  );
};
export default Header;
