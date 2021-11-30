import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { Form, FormControl, FormLabel } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import './FormModalClient.css'
import Swal from 'sweetalert';

const MySwal = withReactContent(Swal);

var updateEventClient = async function(){
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    let resp = await fetch("http://localhost:3001/updateClients",
        {
            method: "PUT",
            headers: myHeaders,
            body: JSON.stringify(
                {
                    name: document.getElementById("name").value,
                    lastName: document.getElementById("lastName").value,
                    dateOfBirth: document.getElementById("dateOfBirth").value,
                    emailAddress: document.getElementById("emailAddress").value,
                    rol: document.getElementById("rol").value,
                    status: document.getElementById("status").value,
                    gender: document.getElementById("gender").value
                }
            )
        }
    );

    let auxResp = await resp.json();
    await MySwal.fire({
        tittle: "<strong>"+auxResp.mssg+"</strong>",
        html: (auxResp.status === 1) ? <i>Cliente modificado</i> : <i>ERROR</i>,
        icon: (auxResp.status ===1) ? 'success' : 'error'
    })
    return;
};

export default function FormModalClient(props) {
    const [show, setShow] = useState(false);
    return (
        <Modal {...props} className="modal" aria-labelledby="contained-modal-title-center">
            <Modal.Header closeButton>
                <h1>Nuevo Cliente</h1>
            </Modal.Header>
            <Modal.Body className="modalBody">
                <>
                    <FormLabel> Nombre *</FormLabel>
                    <FormControl id="name"></FormControl>

                    <FormLabel> Apellidos *</FormLabel>
                    <FormControl id="lastName"></FormControl>

                    <FormLabel> Fecha de Nacimiento *</FormLabel>
                    <FormControl id="dateOfBirth"></FormControl>

                    <FormLabel> Correo Electrónico *</FormLabel>
                    <FormControl id="emailAddress"></FormControl>

                    <FormLabel> Rol *</FormLabel>
                    <FormControl id="rol"></FormControl>

                    <FormLabel> Estatus *</FormLabel>
                    <FormControl id="status"></FormControl>

                    <FormLabel> Género *</FormLabel>
                    <FormControl id="gender"></FormControl>
                </>
            </Modal.Body>
            <Modal.Footer>
                <>
                    <Button variant="secondary" onClick={updateEventClient}>
                        Cancelar
                    </Button>
                    <Button variant="primary">
                        Guardar
                    </Button>
                </>
            </Modal.Footer>
        </Modal >
    )
}

/* ADD CLIENT
var addEventClient = async function(){
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    let resp = await fetch("http://localhost:3000/addClients",
        {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify(
                {
                    name: document.getElementById("name").value,
                    lastName: document.getElementById("lastName").value,
                    dateOfBirth: document.getElementById("dateOfBirth").value,
                    emailAddress: document.getElementById("emailAddress").value,
                    rol: document.getElementById("rol").value,
                    status: document.getElementById("status").value,
                    gender: document.getElementById("gender").value
                }
            )
        }
    );

    let auxResp = await resp.json();
    await MySwal.fire({
        tittle: "<strong>"+auxResp.mssg+"</strong>",
        html: (auxResp.status === 1) ? <i>Cliente agregado</i> : <i>ERROR</i>,
        icon: (auxResp.status ===1) ? 'success' : 'error'
    })
    return;
}; */


/* DELETE CLIENT
var deleteEventClient = async function(){
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    let resp = await fetch("http://localhost:3000/deleteClients",
        {
            method: "DELETE",
            headers: myHeaders,
            body: JSON.stringify(
                {
                    emailAddress: document.getElementById("emailAddress").value
                }
            )
        }
    );

    let auxResp = await resp.json();
    await MySwal.fire({
        tittle: "<strong>"+auxResp.mssg+"</strong>",
        html: (auxResp.status === 1) ? <i>Cliente eliminado</i> : <i>ERROR</i>,
        icon: (auxResp.status ===1) ? 'success' : 'error'
    })
    return;
}; */