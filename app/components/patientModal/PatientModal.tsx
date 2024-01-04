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
    const header = ['Name','Age','Blood Type','Donor / Patient','Date and Time','RBC','WBC',
    'Hematorcit','Plasma Volume','Hemoglobin','Platelet Count','Blood Pressure',
    'Cholesterol Level','Glucose Level', 'BMI'];
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
             {header[idx]} : {patient[idx]}     
            </p>
           ))
        }
        </Col>
        <Col>
        {
           Array.from({ length: 8}).map((_, idx) => (
            <p key={7+idx}>
             {header[7+idx]} : {patient[7+idx]}     
            </p>
           ))
        }
        </Col>
        </Row>
        
       
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
