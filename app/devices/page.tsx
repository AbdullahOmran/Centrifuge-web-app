"use client";
import {
  Button,
  Card,
  CloseButton,
  Col,
  Container,
  Row,
  Stack,
} from "react-bootstrap";
import styles from "./page.module.scss";
import Image from "next/image";
import {
  BsArrowRightCircle,
  BsCheckCircle,
  BsPlusCircle,
  BsXCircle,
} from "react-icons/bs";
import { FaHouse } from "react-icons/fa6";
import Link from "next/link";
import { FaSignInAlt } from "react-icons/fa";
import clsx from "clsx";
import { FaMicroscope } from "react-icons/fa";
import { CiViewList } from "react-icons/ci";
import { useEffect, useState } from "react";
import readData from "./utilities";
import Papa from "papaparse";
import PatientModal from "../components/patientModal/PatientModal";

function Devices() {
  const [data, setData] = useState("");
  const [path, setPath] = useState("/files/centrifuge_data.csv");
  const [records, setRecords] = useState([]);
  const [active,setActive] = useState([true,false,false]);
  const [showPatientModal, setShowPatientModal] = useState(false);
  const handleClosePatientModal= () => setShowPatientModal(false);
  const [is_delete, setIsDelete] = useState(true);

  const handleCloseCard = (event: any)=> {
    
    const key = event.currentTarget.getAttribute('btn-key');
    records.splice(key,1);
    setRecords(records);
    setIsDelete(true);
  };
  const [currentPatient, setCurrentPatient] = useState([]);

  const handleShowPatientModal = (event: any) => {
   if(!is_delete){
    const key = event.currentTarget.getAttribute('card-key');
    setCurrentPatient(records[key]);
    setShowPatientModal(true);
    
   }else{
    setIsDelete(false);
   }
  };
  const handleReader = () => {
    readData(path).then((text) => {
      setData(text);
    });
  };
  const handleParser = () => {
    if (data != "") {
      const res = Papa.parse(data).data;
      setRecords(res);
    }
  };
  const handleDevice1 = ()=>{
    setActive([true,false,false]);
    setRecords([]);
    setData('');
  };
  const handleDevice2 = ()=>{
    setActive([false,true,false]);
    setRecords([]);
    setData('');
  };
  const handleDevice3 = ()=>{
    setActive([false,false,true]);
    setRecords([]);
    setData('');
  };
  useEffect(handleParser, [data]);

  return (
    <>
    <main className={styles.main}>
      <div className={styles.menu}>
        <ul className={styles.items}>
          <li className={clsx({ [styles.logo]: true })}>
            <div className={styles.imgBox}>
              <Image
                src="/images/logo.svg"
                alt="logo"
                width={200}
                height={200}
              ></Image>
            </div>
          </li>
          <li>
            <h3 className={styles.logoText}>Devices</h3>
          </li>
          <li>
            <Link
              href="#"
              className={clsx({ [styles.item]: true, [styles.active]: active[0] })}
              onClick={handleDevice1}
            >
              <FaMicroscope className={styles.icon} />
              <p className={styles.itemText}>Device1</p>
            </Link>
          </li>
          <li>
            <Link href="#"  onClick={handleDevice2} className={clsx({ [styles.item]: true, [styles.active]: active[1] })}>
              <FaMicroscope className={styles.icon}></FaMicroscope>
              <p className={styles.itemText}>Device2</p>
            </Link>
          </li>
          <li>
            <Link href="#"  onClick={handleDevice3} className={clsx({ [styles.item]: true, [styles.active]: active[2] })}>
              <FaMicroscope className={styles.icon}></FaMicroscope>
              <p className={styles.itemText}>Device3</p>
            </Link>
          </li>
          <li className={clsx({ [styles.logOut]: true })}>
            <Link
              href="/"
              className={clsx({
                [styles.logOutItem]: true,
                [styles.item]: true,
              })}
            >
              <FaSignInAlt className={styles.icon} />
              <p className={styles.itemText}>Log out</p>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.container}>
      
        <Container>
          <Row className="mb-4 mt-2">
            <Stack direction="horizontal" gap={3}>
              <Button onClick={handleReader} className="p-1" variant="primary">
                <BsPlusCircle className={styles.openfileIcon} />
                Read Data
                <span className="visually-hidden">unread messages</span>
              </Button>

              <Button
                style={{ visibility: "hidden" }}
                className="p-1 ms-auto"
                variant="primary"
              >
                <BsPlusCircle className={styles.icon} />
                btn
                <span className="visually-hidden">unread messages</span>
              </Button>

              <Button
                style={{ visibility: "hidden" }}
                className="p-1"
                variant="primary"
              >
                <BsPlusCircle className={styles.icon} />
                btn
                <span className="visually-hidden">unread messages</span>
              </Button>
              <Button
                
                className="p-1"
                variant="primary"
              >
                <BsPlusCircle className={clsx({[styles.icon]:true,[styles.openfileIcon]:true})} />
                 Add Card
                <span className="visually-hidden">unread messages</span>
              </Button>
            </Stack>
          </Row>
          <Row className="mb-1">
            <h3 className={styles.header}>
              <CiViewList className={styles.viewListIcon} />
              Patients List
            </h3>
          </Row>
          <Row xl={4} md={2} className="g-3">
            {Array.from({ length: records.length }).map((_, idx) => (
              <Col key={idx}>
                <Card
                  card-key={idx}
                  onClick={handleShowPatientModal}
                  
                  className={clsx({
                    "position-relative": true,
                    [styles.card]: true,
                  })}
                >
                  <CloseButton btn-key = {idx} onClick={handleCloseCard} className="position-absolute end-0 p-2" />
                  <Card.Img variant="top" src="/images/drug_img.jpg" />
                  <Card.Body>
                    <Card.Title>{records[idx][0]}</Card.Title>
                    <Card.Text>
                      <p className="m-0">
                        <span className="fw-bold">Age:</span> {records[idx][1]}
                      </p>
                      <p className="m-0">
                        <span className="fw-bold">Blood Group:</span> {records[idx][2]}
                      </p>
                      <p className="m-0">
                        <span className="fw-bold">Donor/Patient:</span> {records[idx][3]}
                      </p>
                      <p className="m-0">
                        <span className="fw-bold">Date:</span> {records[idx][4]}
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </main>
    
    <PatientModal patient={currentPatient} show={showPatientModal} handleClose={handleClosePatientModal}  />
    </>
  );
}

export default Devices;
