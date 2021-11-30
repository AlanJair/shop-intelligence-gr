import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import FormModalCashers from '../forms/formModalCashers/FormModalCashers';
import Table from 'react-bootstrap/Table'
import Logo from '../../images/logo2.svg'
import Casher from '../../images/casher.jpg'
import './SupportCasher.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons'



export default function SupportCasher(props) {
    const [show, setShow] = useState(false);
    return (
        <Container className="supportCasher">
            <Row>
                <Col md={4} lg={4}>
                    <Image className="logo" src={Logo}></Image>
                </Col >
                <Col className="title" sm={6} md={4} lg={4}>
                    <h1>Catálogo de Cajeros</h1>
                </Col>
                <Col className="col-button-close" sm={4} md={4} lg={4}>
                    <Button className="mb-3 button-inicio" variant="link">Inicio</Button>
                    <Button className="mb-3 button-close" variant="primary">Cerrar sesión</Button>
                </Col>
            </Row>
            <Row className="justify-content-md-end">
                <Col lg={11}>
                    <Button className="mb-3 add-casher" variant="light" onClick={() => { setShow(true) }}>Nuevo Cajero <FontAwesomeIcon className="icon-plus" icon={faPlus} /></Button>
                </Col>
            </Row>
            <Row>
                <Col xs={9} sm={12} md={12} lg={12}>
                    <Table className="table-cashers" bordered size="sm" responsive>
                        <thead>
                            <tr>
                                <th>Clave</th>
                                <th>Fecha de Entrada</th>
                                <th>Nombre</th>
                                <th>Apellidos</th>
                                <th>Edad</th>
                                <th>Dirección</th>
                                <th>Teléfono</th>
                                <th>Correo electrónico</th>
                                <th>Editar</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>00001</td>
                                <td>02/11/2021</td>
                                <td>Sofia</td>
                                <td>Pérez Castro</td>
                                <td>23</td>
                                <td>Calle condesa</td>
                                <td>55-67-87-35-23</td>
                                <td>Sofiacastro@gmail.com</td>
                                <td>✏️</td>
                                <td><FontAwesomeIcon className="icon-trash" icon={faTrashAlt} /></td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row className="justify-content-md">
                <Col lg={12}>
                    <Image className="img-casher" src={Casher} roundedCircle></Image>
                </Col>
            </Row>
            <FormModalCashers
                show={show}
                onHide={() => setShow(false)}
            />
        </Container >
    )
}
