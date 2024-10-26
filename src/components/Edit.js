import React, { useState, useEffect } from "react";
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Karyawan from '../Data/karyawan.json';
import { v4 as uuid } from "uuid";
import { link, useNavigate } from 'react-router-dom'

function Edit() {
    const [nama, setNama] = useState("")
    const [pekerjaan, setPekerjaan] = useState("")
    const [id, setId] = useState("")

    let history = useNavigate();

    var index = Karyawan.map(function (e) {
        return e.id
    }).indexOf(id);

    const handleSubmit = (e) => {
        e.preventDefault();

        let a = Karyawan[index];
        a.nama = nama;
        a.pekerjaan = pekerjaan;

        history("/");
    }

    useEffect(() => {
        setNama(localStorage.getItem('nama'))
        setPekerjaan(localStorage.getItem('pekerjaan'))
        setId(localStorage.getItem('id'))
    }, [])


    return (
        <div>
            <Form className="d-grip gap-2" style={{ margin: "15rem" }}>
                <Form.Group className="mb-3" controlId="formNama">
                    <Form.Control type="text" placeholder="Masukkan Nama" value={nama} required onChange={(e) => setNama(e.target.value)}>

                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPekerjaan">
                    <Form.Control type="text" placeholder="Masukkan Pekerjaan" value={pekerjaan} required onChange={(e) => setPekerjaan(e.target.value)}>

                    </Form.Control>
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} type="submit">Update</Button>
            </Form>
        </div>
    )
}

export default Edit