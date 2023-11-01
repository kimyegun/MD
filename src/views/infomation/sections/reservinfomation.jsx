import React from "react";
import { Col, Container, Row } from "reactstrap";


const Resrvinfomation = () => {

const ReservTitle = {
    textAlign:"center",
    margin:"auto"
}

  return (
    <div>
        <Container style={{marginLeft:"50px", marginBottom:"50px"}}>

        <Row style={{margin:"80px 0 80px"}}>
                <Col>
                    <Row>
                        <Col>
                            <h1 style={{textAlign:"center", fontSize:"40px", fontFamily:"Orbit"}}>문의 안내</h1>
                        </Col>
                    </Row>
                    <Row>
                        <hr style={{margin:"0 auto 4px", width:"200px", color:"#8f103d"} }/>
                    </Row>
                    <Row>
                        <hr style={{margin:"0 auto 4px", width:"200px", color:"#8f103d"} }/>
                    </Row>
                </Col>
            </Row>
        <hr style={{ margin: "auto"}}/>
        <br/><br/>

        <Row style={{padding:"0 30px 0 30px"}}>
            <Col md="3" style={ReservTitle}>문의 시간 안내</Col>
            <Col md="9">- 문의 시간 : 오전 8시 부터<br/>- 문의 시간 : 오후 5시 까지</Col>
        </Row>
        <br/><br/>
        <hr style={{ margin: "auto"}}/>
        <br/><br/>
        <Row style={{padding:"0 30px 0 30px"}}> 
            <Col md="3" style={ReservTitle}>문의 안내</Col>
            <Col md="9">
                - 1인당 300,000원의 추가 비용이 발생하며 프로그램 제공됩니다.<br/>
                &nbsp;&nbsp;(추가 서비스 별도 요청 시  추가 비용이 발생하며 최대 2대 제공 가능합니다.)<br/>
                - 회원인원 초과 시 서비스 이용 불가합니다. (무단 유포 시, 벌금 부과됩니다.)​<br/>
                - 8세 미만의 추가 인원은 추가요금에서 제외됩니다.<br/>
                - 회원님의 권리를 보장하기 위해 본인 확인 후 회원 본인이 아닐 경우에는 회원 추천 요금이<br/> &nbsp;&nbsp;적용됩니다.<br/>
                - 얼리 체크인시 별도의 요금이 부과됩니다.<br/>
                &nbsp;&nbsp;&nbsp;- 10:00 ~ 11:00 40,000원<br/>
                &nbsp;&nbsp;&nbsp;- 12:00 ~ 13:00 30,000원<br/>
                &nbsp;&nbsp;&nbsp;- 13:00 ~ 14:00 20,000원<br/>
                &nbsp;&nbsp;&nbsp;(---)<br/>
            </Col>
        </Row>
        <br/><br/>
        <hr style={{ margin: "auto"}}/>
        <br/><br/>
        <Row style={{padding:"0 30px 0 30px"}}>
            <Col md="3" style={ReservTitle}>탈퇴 안내</Col>
            <Col md="9">
                - 다음 회원의 이용을 위하여 시간을 준수해 주시기 바랍니다.<br/>
                - 시간이 초과되는 경우 별도의 요금이 부과됩니다.<br/>
                - 시간 (00:00시 까지) 이후 객실 사용 시 추가요금 발생<br/>
                &nbsp;&nbsp;&nbsp;- 11:00 ~ 14:00 탈퇴 시 비용의 30%적용<br/>
                &nbsp;&nbsp;&nbsp;- 14:00 ~ 16:00 탈퇴 시 비용의 50%적용<br/>
                &nbsp;&nbsp;&nbsp;- 16:00 ~ 18:00 이후 탈퇴 시 비용의 100%적용<br/>
                - 탈퇴 전 말씀 꼭 부탁드립니다. 비용은<br/> &nbsp;&nbsp;추가 발생될 수 있습니다.<br/>
                - 익일날  <br/> &nbsp;&nbsp;요금이 발생됩니다.<br/>
                - 객실 프런트 : 031-123-1234/ 구내전화 031 - 123 - 1235</Col>
        </Row>
        <br/><br/>
        <hr style={{ margin: "auto"}}/>
        <br/><br/>
        <Row style={{padding:"0 30px 0 30px"}}>
            <Col md="3" style={ReservTitle}>상품</Col>
            <Col md="9">
                - NORMAL : 300,000원<br/>
                - --- : 무료<br/>
                - 이 상품은 타인에게 대여가 불가할 수 있습니다.<br/>
                - 안전상의 사유로 프로그램 제한될 수 있습니다. (4세초과 사용제한)<br/>
            </Col>
        </Row>
        <br/><br/>
        <hr style={{ margin: "auto"}}/>
        <br/><br/>
        <Row style={{padding:"0 30px 0 30px"}}>
            <Col md="3" style={ReservTitle}>추가요금</Col>
            <Col md="9">- 세트(1인) [구성 : 노트북, 패키지, ㅇㅇ] : 300,000원<br/> -상품 추가는 최대 2대까지 제공가능합니다.</Col>
        </Row>
        
        <br/><br/>
        <hr style={{ margin: "auto"}}/>

        </Container>

    </div>

  );
};


export default Resrvinfomation;