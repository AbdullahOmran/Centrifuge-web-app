"use client";
import styles from "./PatientModal.module.scss";
import { Form, Button, Modal, ListGroup, Row, Col, InputGroup } from "react-bootstrap";
import { BsCapsule, BsPlusCircle, BsStopwatch } from "react-icons/bs";
import { FaSyringe } from "react-icons/fa6";
import {FaDroplet, FaCommentMedical, FaFileMedical
        ,FaMars, FaNotesMedical, FaTablets, FaVenus,FaVial, FaVirus} from "react-icons/fa6";

function PatientModal({
  show,
  handleClose,
  patient,
}: {
  show: boolean;
  handleClose: any;
  patient: Array<string>;
}) {
    const header = ['Name','Age','Blood Type','Type','Date and Time','RBC','WBC',
    'Hematorcit','Plasma Volume','Hemoglobin','Platelet Count','Blood Pressure',
    'Cholesterol Level','Glucose Level', 'BMI'];
    const units = ['',' years','','','',' million cells/uL',' cells/uL',
    ' %',' mL','',' /uL',' mmHg',
    ' mg/dL',' mg/dL', ''];
  return (
    <Modal className="text-black" size = "lg" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{patient[0]}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
        <Col>
        {
           Array.from({ length: 7}).map((_, idx) => (
            <p key={idx}>
             <FaDroplet style = {{color:"#dd1e3d", marginRight:"5px"}}/>{header[idx]} : {patient[idx]+units[idx]}     
            </p>
           ))
        }
        
        </Col>
        <Col>
        {
           Array.from({ length: 8}).map((_, idx) => (
            <p key={7+idx}>
             <FaDroplet style = {{color:"#dd1e3d", marginRight:"5px"}}/>{header[7+idx]} : {patient[7+idx]+units[7+idx]}     
            </p>
           ))
        }
        </Col>
        </Row>
        
        {patient[3] == "Patient" ? <p style = {{textAlign:"center", fontWeight:"500", fontSize:"18px"}}>الف سلامة</p>:<p style = {{textAlign:"center", fontWeight:"500", fontSize:"18px"}}>كتر خيرك</p>}
      </Modal.Body>
      <Modal.Footer>
      
        <Button variant="primary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PatientModal;
