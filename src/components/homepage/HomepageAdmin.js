import React from 'react';
import './HomepageAdmin.css';
import { Button } from 'react-bootstrap';
import { Col, Container, Row } from 'react-bootstrap'
import { Image } from 'react-bootstrap';
import Logo2 from '../../images/logo2.svg';
import Casher from '../../images/casher.jpg'
import Cliente from '../../images/cleinte.jpg'
import Producto from '../../images/productos.jpg'

export default function HomepageAdmin() {

    return (
        <Container className="homeAdmin" fluid>
            <Row className="header">
                <Col sm={2} md={4} lg={4}>
                    <Image className="logo" src={Logo2}></Image>
                </Col>
                <Col className="title" xs={8} sm={7} md={4} lg={4}>
                    <h1> Administrar Catalogos</h1>
                </Col>
                <Col className="col-button-close" xs={4} sm={2} md={4} lg={4}>
                    <Button className="mb3 button-close" variant="primary">Cerrar sesión</Button>
                </Col>
            </Row>
            <Row className="casher">
                <Col xs={6} sm={6} md={4} lg={4}>
                    <Image className="img-casher" src={Casher} roundedCircle></Image>
                </Col>
                <Col className="title-casher" xs={6} sm={6} md={4} lg={4}>
                    <h1> Catalogo de Cajeros</h1>
                    <Row className="justify-content-md-center">
                        <Button className=" button-casher mb-3" varian="primary">Gestionar</Button>
                    </Row>
                </Col>
            </Row>
            <Row className="client">
                <Col xs={6} sm={6} md={4} lg={4}>
                    <Image className="img-casher" src={Cliente} roundedCircle></Image>
                </Col>
                <Col className="title-client" xs={6} sm={6} md={4} lg={4}>
                    <h1> Catalogo de Clientes</h1>
                    <Row className="justify-content-md-center">
                        <Button className="button-client mb-3" varian="primary">Gestionar</Button>
                    </Row>
                </Col>
            </Row>
            <Row className="product">
                <Col xs={6} sm={6} md={4} lg={4}>
                    <Image className="img-casher" src={Producto} roundedCircle></Image>
                </Col>
                <Col className="title-product" xs={6} sm={6} md={4} lg={4}>
                    <h1> Catalogo de Productos</h1>
                    <Row className="justify-content-md-center">
                        <Button className="button-product mb-3" varian="primary" >Gestionar</Button>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
