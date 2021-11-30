import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import FormModalClient from '../forms/formModalClient/FormModalClient'
import Logo from '../../images/logo2.svg'
import Table from 'react-bootstrap/Table'
import Customer from '../../images/customer.jpg'
import './SupportCustomer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export default function SupportCustomer() {
    const [show, setShow] = useState(false);
    return (

        <Container className="supportCustomer">
            <Row>
                <Col md={4} lg={4}>
                    <Image className="logo" src={Logo}></Image>
                </Col >
                <Col className="title" sm={6} md={4} lg={4}>
                    <h1>Catálogo de Clientes</h1>
                </Col>
                <Col className="col-button-close" sm={4} md={4} lg={4}>
                    <Button className="mb-3 button-inicio" variant="link">Inicio</Button>
                    <Button className="mb-3 button-close" variant="primary">Cerrar sesión</Button>
                </Col>
            </Row>
            <Row className="justify-content-md-end">
                <Col lg={11}>
                    <Button className="mb-3 add-customer" variant="light" onClick={() => { setShow(true) }}>Nuevo Cliente <FontAwesomeIcon className="icon-plus" icon={faPlus} /></Button>
                </Col>
            </Row>
            <Row>
                <Col xs={9} sm={12} md={12} lg={12}>
                    <Table className="table-customers" bordered size="sm" responsive>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellidos</th>
                                <th>Fecha de Nacimiento</th>
                                <th>Correo electrónico</th>
                                <th>Rol</th>
                                <th>Estatus</th>
                                <th>Género</th>
                                <th>Editar</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Sarai</td>
                                <td>Resendiz Mendoza</td>
                                <td>20/07/1998</td>
                                <td>Saraaresendiz@gmail.com</td>
                                <td>UIX</td>
                                <td>Active</td>
                                <td>Muujer</td>
                                <td>✏️</td>
                                <td><FontAwesomeIcon className="icon-trash" icon={faTrashAlt} /></td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row className="justify-content-md">
                <Col lg={12}>
                    <Image className="img-customer" src={Customer} roundedCircle></Image>
                </Col>
            </Row>
            <FormModalClient
                show={show}
                onHide={() => setShow(false)}
            />
        </Container>
    )
}
