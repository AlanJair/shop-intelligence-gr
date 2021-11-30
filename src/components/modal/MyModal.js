import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Image from 'react-bootstrap/Image'
import CheckValid from '../../images/check-mark.png'
import CheckInValid from '../../images/warning.png'
import './Modal.css'


function MyModal(props) {
    const valid = props.contenido[0].image==='CheckValid'? CheckValid : CheckInValid
    return (
        <Modal {...props} className="modal" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body className="modalBody">
                <h1>{props.contenido[0].title}</h1>
                <Image className="images" src={valid} />
                <p>{props.contenido[0].modalP}</p>
            </Modal.Body>
        </Modal >
    )
}

export default MyModal

