/* eslint-disable */
import React from 'react';
import { Row, Col, Container, Card } from 'reactstrap';

import img1 from '../../../assets/images/blog/blog-home/coupon.png';
import img2 from '../../../assets/images/blog/blog-home/test.png';
import img3 from '../../../assets/images/blog/blog-home/notebook.png';

const BlogComponent = () => {
    return (
        <div>
            <div className="blog-home2 spacer">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="8" className="text-center">
                            <h2 className="title">MD software Event</h2>
                            <h6 className="subtitle">Event에 참여하시고 최고의 트레이딩을 경험하세요</h6>
                        </Col>
                    </Row>
                    <Row className="m-t-40 justify-content-center">
                        <Col lg="4" md="6">
                            <Card>
                                <a href="#"><img className="card-img-top" src={img1} alt="wrappixel kit" /></a>
                                <div className="date-pos bg-info-gradiant">12월<span>23</span></div>
                                <h5 className="font-medium m-t-30"><a href="#" className="link">10 + 2 쿠폰발급</a></h5>
                                <p className="m-t-20">PHONIX TRADER 사용하시는 고객분들에게 10 + 2 쿠폰을 발급합니다.</p>
                                <a href="#" className="linking text-themecolor m-t-10">상세보기<i className="ti-arrow-right"></i></a>
                            </Card>
                        </Col>
                        <Col lg="4" md="6">
                            <Card>
                                <a href="#"><img className="card-img-top" src={img2} alt="wrappixel kit" /></a>
                                <div className="date-pos bg-info-gradiant">2월<span>2</span></div>
                                <h5 className="font-medium m-t-30"><a href="#" className="link">PHONIX TRADER 오픈기념</a></h5>
                                <p className="m-t-20">1개월 동안 무료로 체험 이용하세요</p>
                                <a href="#" className="linking text-themecolor m-t-10">상세보기<i className="ti-arrow-right"></i></a>
                            </Card>
                        </Col>
                        <Col lg="4" md="6">
                            <Card>
                                <a href="#"><img className="card-img-top" src={img3} alt="wrappixel kit" /></a>
                                <div className="date-pos bg-info-gradiant">11월<span>1</span></div>
                                <h5 className="font-medium m-t-30"><a href="#" className="link">노트북 Event</a></h5>
                                <p className="m-t-20">한정된 기간에만 사용하실수있는 응모하여 이용해보세요</p>
                                <a href="#" className="linking text-themecolor m-t-10">상세보기<i className="ti-arrow-right"></i></a>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default BlogComponent;
