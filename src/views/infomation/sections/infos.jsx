import React from "react";

import { HashLink as Link } from "react-router-hash-link";

const fontcolor = {
  fontSize: "25px",
  color: "#c2a575",
  marginLeft: "15px",
};

const Leftnavi = () => {
  return (
    <div nav inNavbar style={{ backgroundColor: "#faebd7", height: "100%" }}>
      <ul class="nav flex-column text-white w-100">
        <hr></hr>
        <li
          href="#"
          class="nav-link"
          style={{ textAlign: "center", margin: "20px 0px 20px 0px" }}
        >
          <span
            style={{ fontSize: "45px", color: "#c2a575", fontWeight: "bold" }}
          >
            Information
          </span>
        </li>
        <hr></hr>
        <li href="#" class="nav-link">
          <i class="bx bxs-dashboard"></i>
          <Link to={"/info"} state={{ num: 1 }} style={fontcolor}>
            회사소개
          </Link>
        </li>
        <hr></hr>
        <li href="#" class="nav-link">
          <i class="bx bx-user-check"></i>
          <Link to={"/info"} state={{ num: 2 }} style={fontcolor}>
            프로그램 소개
          </Link>
        </li>
        <hr></hr>
        <li href="#" class="nav-link">
          <i class="bx bx-conversation"></i>
          <Link to={"/info"} state={{ num: 4 }} style={fontcolor}>
            문의안내
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Leftnavi;
