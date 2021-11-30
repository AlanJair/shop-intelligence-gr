import React from 'react'
import './RecoverAccount.css'
import { Col, Container, Image, Row } from 'react-bootstrap'
import FormControl from 'react-bootstrap/FormControl'
import { Button } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import InputGroup from 'react-bootstrap/InputGroup'
import MyModal from '../modal/MyModal';
import Logo from '../../images/logo.png'


let modalText = [{}];
export default function RecoverAccount() {
    const [modalShow, setModalShow] = React.useState(false);
    const [user, setUser] = React.useState('Juan');
    const [newPass, setNewPasss] = React.useState();
    const [confNewPass, setConfNewPasss] = React.useState();
    function upNewPass() {
        if (newPass === confNewPass) {
            fetch('http://localhost:3001/recoverAccount', {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ user: user, newPass: newPass })
            })
                .then(res => {
                    console.log('el servicio respondio correcto', res)
                })
                .catch(err => {
                    console.log(err)
                });
            modalText = [{ title: "Tu contraseña se actualizo", image: "CheckValid", modalP: "¡Exitosamente!" }];
        } else {
            modalText = [{ title: "¡Hubo un error!", image: "error", modalP: "Verificatus datos" }];
        }
    };



    return (
        <Container className="recoverAcount" fluid>
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
                        <Card.Title className="title">Recupera tu cuenta</Card.Title>
                        <hr className="line" />
                        <>
                            <p className="label-form">Nombre de usuario</p>
                            <InputGroup className="mb-2">
                                <InputGroup.Text className="icon-form" >@</InputGroup.Text>
                                <FormControl id="formUser" type="text" value={user} disabled ></FormControl>
                            </InputGroup>
                            <p className="label-form">Nueva contraseña</p>
                            <InputGroup className="mb-2">
                                <InputGroup.Text className="icon-form">@</InputGroup.Text>
                                <FormControl id="formNewPass" type="password" variant="second" onChange={(e) => { setNewPasss(e.target.value) }}></FormControl>
                            </InputGroup>
                            <p className="label-form">Confirmar contraseña</p>
                            <InputGroup className="mb-2">
                                <InputGroup.Text className="icon-form">@</InputGroup.Text>
                                <FormControl id="formConfPass" type="password" variant="second" onChange={(e) => { setConfNewPasss(e.target.value) }}></FormControl>
                            </InputGroup>
                            <br></br>
                            <Row className="justify-content-md-end justify-content-sm-end">
                                <Button id="cancel" className="mb-3" variant="primary">Cancelar</Button>
                                <Button id="send" className="mb-3" variant="primary"  onClick={()=>{upNewPass()}}>Guardar</Button>
                            </Row>
                        </>
                    </Card.Body>
                </Card>
                <Row className="justify-content-md-end links">
                    <Col className="col-link" >
                        <Button id="button-link" className="mb-3" variant="link">Restablecer contraseña</Button>
                    </Col>
                </Row>
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

    /* const [modalShow, setModalShow] = React.useState(false);
    return (
        <div className="recover">
            <div className="nav">
                <div className="logo-head">
                    <Image className="logo" src={Logo} />
                </div>
                <div className="user">
                    <Form.Control id="email" className="mb-3" type="email" placeholder="Nombre de Usuario"></Form.Control>
                    <Form.Control id="pass" className="mb-3" type="password" placeholder="Contraseña"></Form.Control>
                </div>
                <div className="button-header">
                    <Button id="button-login" className="mb-3" variant="second">Iniciar Sesión</Button>
                </div>
            </div>

            <div className="body">
                <div className="form-user">
                    <div className="head-form">
                        <h1>Recupera tu cuenta</h1>
                    </div>
                    <hr className="line" />
                    <div className="form">
                        <FormControl id="formEmail" className="mb-3" type="text" variant="second" placeholder="Nombre de Usuario" disabled></FormControl>
                        <FormControl id="formEmail" className="mb-3" type="password" variant="second" placeholder="Nueva contraseña"></FormControl>
                        <FormControl id="formEmail" className="mb-3" type="password" variant="second" placeholder="Confirmar contraseña"></FormControl>
                    </div>
                    <div className="buttons">
                        <Button id="button-login" className="mb-3-2" variant="second">Cancelar</Button>
                        <Button id="button-login" className="mb-3" variant="second" onClick={() => { setModalShow(true) }}>Guardar</Button>
                    </div>
                </div>
                <div className="link">
                    <Button id="recoverPass" className="recoverPass" variant="links" size="lg" >Restablecer Contraseña</Button>
                </div>
            </div>


            <div className="footer">
            </div>
            <MyModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                contenido={modalText}
            />
        </div>
    ) */
}
