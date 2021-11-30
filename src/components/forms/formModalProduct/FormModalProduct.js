import React  from 'react'
import Modal from 'react-bootstrap/Modal'
import { FormControl, FormLabel } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import './FormModalProduct.css'

const MySwal = withReactContent(Swal);

//ADD PRODUCT
var addEventProd = async function(){
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    let resp = await fetch("http://localhost:3001/api/products/",
        {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify(
                {
                    code: document.getElementById("code").value,
                    name: document.getElementById("name").value,
                    qty: document.getElementById("qty").value,
                    price: document.getElementById("price").value,
                    realPrice: document.getElementById("realPrice").value,
                    marca: document.getElementById("marca").value,
                    type: document.getElementById("type").value
                }
            )
        }
    );

    let auxResp = await resp.json();
    await MySwal.fire({
        tittle: "<strong>" + auxResp.mssg + "</strong>",
        html: (auxResp.status === 1) ? <i>Producto agregado</i> : <i>ERROR</i>,
        icon: (auxResp.status === 1) ? 'success' : 'error'
    })
    return;
};

export default function FormModalProduct(props) {
    return (
        <Modal {...props} className="modal" aria-labelledby="contained-modal-title-center">
            <Modal.Header closeButton>
                <h1>Nuevo Producto</h1>
            </Modal.Header>
            <Modal.Body className="modalBody">
                <>
                    <FormLabel> Código de barras *</FormLabel>
                    <FormControl id="code" />

                    <FormLabel> Nombre *</FormLabel>
                    <FormControl id="name"/>

                    <FormLabel> Cantidad actual *</FormLabel>
                    <FormControl id="qty" type="number" />

                    <FormLabel> Precio público *</FormLabel>
                    <FormControl id="price" type="number" />

                    <FormLabel> Precio real *</FormLabel>
                    <FormControl id="realPrice" type="number" />

                    <FormLabel> Marca *</FormLabel>
                    <FormControl id="marca" />

                    <FormLabel> Tipo *</FormLabel>
                    <FormControl id="type" />
                </>
            </Modal.Body>
            <Modal.Footer>
                <>
                    <Button variant="secondary">Cancelar</Button>
                    <Button variant="primary" onClick={addEventProd}>Guardar</Button>
                </>
            </Modal.Footer>
        </Modal >
    )
}
