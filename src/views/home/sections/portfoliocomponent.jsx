/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";

import img1 from "../../../assets/images/portfolio/img1.jpg";
import img2 from "../../../assets/images/portfolio/img2.jpg";
import img3 from "../../../assets/images/portfolio/img3.jpg";
import img4 from "../../../assets/images/portfolio/img4.jpg";
import img5 from "../../../assets/images/portfolio/img5.jpg";
import img6 from "../../../assets/images/portfolio/img6.jpg";

const PortfolioComponent = () => {
  // const cardStyle () = > {

  // }
  return (
    <div>
      <div className="spacer">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h2 className="title">프로그램 소개</h2>
              <h6 className="subtitle">
                PHOENIX TRADER 은(는) 전세계인이 이용하는 해외선물 외환거래 전용 AI기반 전자거래 플랫폼입니다.
              </h6>
            </Col>
          </Row>
          <Row className="m-t-40">
            <Col md="4">
              <Card className="card-shadow">
                <a href="#" className="img-ho">
                  <img
                    className="card-img-top"
                    src={img1}
                    alt="wrappixel kit"
                  />
                </a>
                <CardBody>
                  <h5 className="font-medium m-b-0">AI 기반의 거래 신호</h5>
                  <p className="m-b-0 font-14">MetaQuotes Software를 딥러닝하여 최적의 거래신호를 제공</p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow">
                <a href="#" className="img-ho">
                  <img
                    className="card-img-top"
                    src={img2}
                    alt="wrappixel kit"
                  />
                </a>
                <CardBody>
                  <h5 className="font-medium m-b-0">Leverage</h5>
                  <p className="m-b-0 font-14">
                    레버리지는 원래의 자본보다 더 큰 규모의 거래를 가능하게 하는 금융 도구 입니다.
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow">
                <a href="#" className="img-ho">
                  <img
                    className="card-img-top"
                    src={img3}
                    alt="wrappixel kit"
                  />
                </a>
                <CardBody>
                  <h5 className="font-medium m-b-0">Trading</h5>
                  <p className="m-b-0 font-14">
                    적은 스프레드와 유연한 레버리지로 외환 주요 양방향, 비주요 양방향, 특수 양방향 등의 트레이딩
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default PortfolioComponent;
