import React, { useState } from "react";
import {Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Karyawan from '../Data/karyawan.json';
import {v4 as uuid} from "uuid";
import {link, useNavigate} from 'react-router-dom'

function Add(){
    const[nama, setNama] = useState("")
    const[pekerjaan, setPekerjaan] = useState("")

    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0,8);

        let a = nama,
        b = pekerjaan;

        Karyawan.push({id: uniqueId, nama: a, pekerjaan: b});

        history("/");
    }

    return <div>
        <Form className="d-grip gap-2" style={{margin:"15rem"}}>
            <Form.Group className="mb-3" controlId="formNama">
                <Form.Control type="text" placeholder="Masukkan Nama" required onChange={(e) => setNama(e.target.value)}>
                
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPekerjaan">
                <Form.Control type="text" placeholder="Masukkan Pekerjaan" required onChange={(e) => setPekerjaan(e.target.value)}>

                </Form.Control>
            </Form.Group>
            <Button onClick={(e) => handleSubmit(e)} type="submit">Submit</Button>
        </Form>
    </div>
}

export default Add