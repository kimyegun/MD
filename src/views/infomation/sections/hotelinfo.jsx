import { Card, CardBody, Col, Container, Row } from "reactstrap";
import img1 from '../../../assets/images/landingpage/vranov-castle-2-with-big-sky-picjumbo-com.jpg';
import { Link } from "react-router-dom";


export default function HotelRoominfomation() {

    return (
        <div className="spacer ">
            <Container className="feature30" style={{marginLeft:"50px"}}>
                <Row style={{margin:"0 0 50px 0", fontSize:"80px", fontFamily:"Orbit"}}>
                    <Col  >
                        <Row style={{textAlign:"center"}}>
                            <Col>
                                <span style={{color:"#8f103d",fontFamily:"Orbit"}}>M</span>D
                                <span style={{color:"#c2a575",fontFamily:"Orbit"}}> S</span>OFTWARE
                            </Col> 
                        </Row>
                        <Row>
                        <hr style={{margin:"0 auto 4px", width:"400px", color:"#8f103d"} }/>
                        </Row>
                        <Row>
                        <hr style={{margin:"0 auto 4px", width:"400px", color:"#8f103d"} }/>
                        </Row>
                    </Col>
                </Row>
                <Row style={{margin:"30px"}}>
                    <Col lg="5" md="7" className="text-center wrap-feature30-box" style={{top:"40%"}}>
                        <Card className="card-shadow">
                            <CardBody>
                                <div className="p-20">
                                    <h3 className="title">대한민국 최고의 프로그램 PHONIXTRADER</h3>
                                    <p>고객 분들에게 최고의 투자 경험할수 있게 해드립니다.<br /> 지금당장 문의 연락주세요.</p>
                                    <Link className="nav-link btn-gaya-gradiant btn" to={"/"} >
                                        연락
                                    </Link>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                
                <Row>
                    <Col lg="10"><img src={img1} className="rounded img-responsive" alt="wrappixel" /></Col>
                </Row>
            </Container>
        </div>
    )
}