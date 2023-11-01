import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

// core components
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import Leftnavi from "./sections/infos.jsx";
import { Container, Row, Col } from "reactstrap";
import { useLocation } from "react-router-dom";
import Kakao from "./sections/Kakao.jsx";
import HotelRoominfomation from "./sections/hotelinfo.jsx";
import RoomInfomation from "./sections/roominfomation.jsx";
import Resrvinfomation from "./sections/reservinfomation.jsx";

//scss

const Information = () => {
  const Location = useLocation();
  const [open, setopen] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  useEffect(() => {
    const i_num = Location.state.num;
    viewchage(i_num);
  }, [Location]);

  const viewchage = (i_num) => {
    setopen({ [i_num]: true });
  };

  return (
    <div>
      <Header />
      <Container >
        <Row>
          <Col md="3" style={{ border: "none" }}>
            <Leftnavi />
          </Col>
          <Col md="9" style={{ border: "none" }}>
            {open[1] && <HotelRoominfomation />}
            {open[2] && <RoomInfomation />}
            {open[4] && <Resrvinfomation />}
            {open[3] && <Kakao />}
          </Col>
        </Row>
      </Container>
      <div className="page-wrapper">
        <div className="container-fluid"></div>
      </div>
      <Footer />
    </div>
  );
};

Information.propTypes = {
  classes: PropTypes.object,
};

export default Information;
