import React, { useCallback, useEffect, useState } from "react";
import { Container, Row, Col, Table, Modal, Input, Label } from "reactstrap";
import Modaldetail from "./adminnoicedetail";

const Admintabel = () => {
  const [notice, setnotice] = useState([]);
  const [modalop, setmodalopp] = useState(false);
  const [detail, setdetail] = useState([]);
  const [addmodal, setaddmodal] = useState(false);
  const [addnotice, setaddnotice] = useState({
    n_content: "",
    n_title: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    fetch(process.env.REACT_APP_SERVER_LOCAL + "/admin/notice")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setnotice(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const Readnotice = (event) => {
    fetch(
      process.env.REACT_APP_SERVER_LOCAL +
        "/admin/ndetail?n_num=" +
        event.target.id
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setdetail(data);
      })
      .catch((err) => {
        console.log(err);
      });
    setmodalopp(true);
  };

  const Notice = () => {
    if (notice !== undefined) {
      return notice.map((notice) => (
        <tr key={notice.n_num}>
          <td>{notice.n_num}</td>
          <td>
            <input
              style={{ border: "none", backgroundColor: "white" }}
              type="button"
              value={notice.n_title}
              id={notice.n_num}
              onClick={Readnotice}
            />
          </td>
          <th>
            <span className="label label-danger">admin</span>
          </th>
        </tr>
      ));
    } else {
      return (
        <tr>
          <td colSpan={3}>작성된 공지가 없습니다.</td>
        </tr>
      );
    }
  };

  const changeaddnotice = (event) => {
    setaddnotice({ ...addnotice, [event.target.name]: event.target.value });
  };

  const addnoticefetch = () => {
    if (addnotice.n_title === "" || addnotice.n_content === "") {
      alert("제목과 내용은 필수입니다.");
      return;
    }
    fetch(process.env.REACT_APP_SERVER_LOCAL + "/admin/addnotice", {
      method: "POST", //전송 mapper를 설정
      headers: { "Content-Type": "application/json" }, //값을 json형식으로 보내므로 headers에 전송값을 설정해줌
      body: JSON.stringify(addnotice), //보디에는 json형식으로 문자형으로 변경하여 위에서 저장한 값을 뿌려줌
    })
      .then((response) => {
        if (response.ok) {
          alert("글작성에 성공했습니다.");
          fetchData();
          addmodaltogle();
          setaddnotice({
            n_content: "",
            n_title: "",
          });
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  const modaltogle = () => {
    setmodalopp(!modalop);
  };

  const addmodaltogle = () => {
    setaddmodal(!addmodal);
    setaddnotice({
      n_content: "",
      n_title: "",
    });
  };

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    content: {
      left: "0",
      margin: "auto",
      width: "500px",
      height: "450px",
      padding: "0",
      overflow: "auto",
    },
  };
  const customStyles2 = {
    overlay: {
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    content: {
      left: "0",
      margin: "auto",
      width: "500px",
      height: "450px",
      padding: "0",
      overflow: "auto",
    },
  };
  return (
    <div>
      <Container>
        <Row>
          <Col
            style={{
              fontSize: "40px",
              fontFamily: "Orbit",
              margin: "30px 0 30px 20px",
              textAlign: "center",
            }}
          >
            공지 작성
          </Col>
        </Row>
        <Row style={{ textAlign: "center", marginLeft: "130px" }}>
          <Col style={{}}>
            <div className="table-responsive">
              <Table>
                <thead>
                  <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                  </tr>
                </thead>
                <tbody>
                  <Notice />
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
        <Row>
          <Col style={{ textAlign: "right" }}>
            <input
              type="button"
              className="btn btn-gaya-gradiant"
              value={"글작성"}
              onClick={addmodaltogle}
            />
          </Col>
        </Row>
      </Container>
      <Modal
        id="modal1"
        isOpen={modalop}
        style={customStyles}
        ariaHideApp={false}
      >
        <Modaldetail
          detail={detail}
          setdetail={setdetail}
          modaltogle={modaltogle}
          setmodalopp={setmodalopp}
          setrender={fetchData}
        />
      </Modal>
      <Modal
        id="modal2"
        isOpen={addmodal}
        style={customStyles}
        ariaHideApp={false}
      >
        <div style={{ padding: "40px" }}>
          <div style={{ textAlign: "center" }}>
            <Label style={{ fontSize: "24px", fontFamily: "Orbit" }}>
              공지 작성
            </Label>
            <br />
          </div>
          <Label htmlFor="name">제목</Label>
          <Input type="text" name={"n_title"} onChange={changeaddnotice} />
          <Label style={{ marginTop: "20px" }} htmlFor="name">
            내용
          </Label>
          <br />
          <textarea
            style={{
              height: "100px",
              width: "100%",
              border: "1px solid #e2e2e2",
              borderRadius: "5px",
            }}
            type="text"
            name={"n_content"}
            onChange={changeaddnotice}
          />
          <Input
            style={{
              margin: "30px 0 10px",
              background: "#8f103d",
              color: "#FFF",
            }}
            type="button"
            value={"작성"}
            onClick={addnoticefetch}
          />
          <Input type="button" value={"취소"} onClick={addmodaltogle} />
        </div>
      </Modal>
    </div>
  );
};
export default Admintabel;
