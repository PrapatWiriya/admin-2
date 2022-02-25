import React from 'react'
import logo from './ku-logo.png';
import './core.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Nav, Navbar,Row,Col,Dropdown,NavDropdown,Form,FormControl,Container,Table,ButtonGroup,ButtonToolbar,DropdownButton,Figure} from 'react-bootstrap'
import { useState,useEffect } from "react";
import { getHistorytunadmin } from './apiCore';

const Historytunadmin=()=> {const [employeeList, setEmployeeList] = useState([]);

    const loadHistorytun = () => {
      getHistorytunadmin().then(response => {
        setEmployeeList(response)
      }).catch(err => {
        console.error(err)
      })
    }
    
    useEffect(() => {
      loadHistorytun()
    })
  
  
  
    return (
      <div className="App">
       <Navbar bg ="header" variant="dark" sticky="top" >
         <Navbar.Brand>
           <img src={logo} alt="logo" style={{width:'88px',height:'78px'}}/>{'  '}
                ระบบขอทุนการศึกษา
       </Navbar.Brand>
       </Navbar>
       <br />
       <Nav className="justify-content-end" activeKey="/home">
      <>
        <Button href="/"variant="secondary" size="sm">กลับ</Button>{' '}&nbsp;&nbsp;&nbsp;
        
      </>
       </Nav>
       
      <Navbar bg="light" expand="lg">
      <Container fluid>
      <Navbar.Brand href="#"></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
        <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ประวัติทุนในแต่ละปีการศึกษา</h4>  
        </Nav>
        <DropdownButton id="dropdown-basic-button" variant="success" title="ปีการศึกษา">
        <Dropdown.Item href="#/action-1">ปีการศึกษา 2565</Dropdown.Item>
        <Dropdown.Item href="#/action-2">ปีการศึกษา 2564</Dropdown.Item>
        <Dropdown.Item href="#/action-3">ปีการศึกษา 2563</Dropdown.Item>
        <Dropdown.Item href="#/action-3">ปีการศึกษา 2562</Dropdown.Item>
        </DropdownButton>
        &nbsp;
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="รหัสนิสิต"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">ค้นหา</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
      
      
      <br/>
        <Table bordered hover responsive style={{marginLeft: '150px',width: '84%',textAlign: 'center'}}>
    <thead>
      <tr>
        <th width="10px">ลำดับที่</th>
        <th width="10px">รหัสนิสิต</th>
        <th width="88px">ชื่อ-นามสกุล</th>
        <th width="10px">สาขา</th>
        <th width="88px">ทุนที่ได้รับ</th>
        <th width="88px">วันที่ได้รับ</th>
        <th width="88px">หลักฐานการรับทุน</th>
      </tr>
    </thead>
    {employeeList.map((val, key) => {
            return (
            <>
              <tbody>
                  <tr>
                    <td>{val.NO}</td>
                    <td>{val.id}</td>
                    <td>{val.name}</td>
                    <td>{val.major}</td>
                    <td>{val.tun}</td>
                    <td>{val.date}</td>
                    <td> <Button variant="outline-secondary" size="sm">🔍</Button>{val.slip_money_pdf}</td>
                  </tr>
              </tbody></>
            );
          })}
    
  </Table>
  <br /><br />
  <Container>
    <Row>
      <Col></Col>
      <Col><ButtonGroup aria-label="Basic example">
    <Button variant="secondary">ก่อนหน้า</Button>
  
    <Button>1</Button> <Button>2</Button> <Button>3</Button> <Button>4</Button>
    
    
    <Button variant="secondary">ถัดไป</Button>
  </ButtonGroup></Col>
      <Col></Col>
    </Row>
  </Container>
  <br /><br /><br /><br />
  
  
  
        </div>
      
    );
}

export default Historytunadmin