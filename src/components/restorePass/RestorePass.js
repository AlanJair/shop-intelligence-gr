import React from 'react'
import './RestorePass.css'
import { Col, Container, Image, Row } from 'react-bootstrap'
import FormControl from 'react-bootstrap/FormControl'
import { Button } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import InputGroup from 'react-bootstrap/InputGroup'
import MyModal from '../modal/MyModal';
import Logo from '../../images/logo.png'

let modalText = [{}];


export default function RestorePass() {
    const [modalShow, setModalShow] = React.useState(false);
    const [email, setEmail] = React.useState();
    const [confEmail, setConfEmail] = React.useState();



    function sendEmail() {
        if (email === confEmail) {
            fetch('http://localhost:3001/restorePass', {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email })
            })
                .then(res => {
                    console.log('el servicio respondio correcto', res)
                })
                .catch(err => {
                    console.log(err)
                });
            modalText = [{ title: "Tu correo se envio", image: "CheckValid", modalP: "¡Exitosamente!" }];
        } else {
            modalText = [{ title: "¡Hubo un error!", image: "error", modalP: "Verificatus datos" }];
        }
    };


    return (
        <Container className="restorePass" fluid>
            <Row className="navbar">
                <Col className="logo" sm={1} md={1} lg={2} xl={2}>
                    <Image className="logo" src={Logo} />
                </Col>
                <Col xs={8} sm={8} md={8} lg={7} xl={6}>
                    <Row className="justify-content-md-end">
                        <FormControl id="email" className="mb-3" type="email" placeholder="Nombre de Usuario"></FormControl>
                        <FormControl id="pass" className="mb-3" type="password" placeholder="Contraseña"></FormControl>
                    </Row>
                </Col>
                <Col className="button" xs={4} sm={3} md={3} lg={3} xl={3}>
                    <Button id="button-login" className="mb-3" variant="primary">Iniciar Sesión</Button>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Card className="card">
                    <Card.Body>
                        <Card.Title className="title">Restablecer Contraseña</Card.Title>
                        <hr className="line" />
                        <>
                            <p className="label-form">Correo electrónico</p>
                            <InputGroup className="mb-2">
                                <InputGroup.Text className="icon-form" >@</InputGroup.Text>
                                <FormControl id="formEmail" type="email" placeholder="hagava1360@shopint.com" onChange={(e) => { setEmail(e.target.value) }} ></FormControl>
                            </InputGroup>
                            <p className="label-form">Confirmar correo electrónico</p>
                            <InputGroup className="mb-2">
                                <InputGroup.Text className="icon-form">@</InputGroup.Text>
                                <FormControl id="formConfMail" type="email" variant="second" placeholder="hagava1360@shopint.com" onChange={(e) => { setConfEmail(e.target.value) }}></FormControl>
                            </InputGroup>
                            <br></br>
                            <Row className="justify-content-md-end justify-content-sm-end">
                                <Button id="cancel" className="mb-3" variant="primary" >Cancelar</Button>
                                <Button id="send" className="mb-3" variant="primary" onClick={() => { sendEmail(); setModalShow(true) }}>Enviar</Button>
                            </Row>
                        </>
                    </Card.Body>
                </Card>
            </Row>
            <Row >
                <br></br>
                <MyModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    contenido={modalText}
                />
            </Row>
        </Container>
    )
}
