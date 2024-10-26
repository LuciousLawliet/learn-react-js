import React, { Fragment } from "react";
import Karyawan from "../Data/karyawan.json";
import {Button, Table} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link, useNavigate} from 'react-router-dom'

function CRUD(){

    let history = useNavigate();

    const handleEdit = (id, nama, pekerjaan) => {
        localStorage.setItem('nama', nama);
        localStorage.setItem('pekerjaan', pekerjaan);
        localStorage.setItem('id', id);
    }

    const handleDelete = (id) => {
        var index = Karyawan.map(function(e){
            return e.id
        }).indexOf(id);

        Karyawan.splice(index, 1);

        history('/');
    }

    return(
        <Fragment>
            <div style={{margin:"10rem"}}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>
                                Nama
                            </th>
                            <th>
                                Pekerjaan
                            </th>
                            <th>
                                aksi
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Karyawan && Karyawan.length > 0
                            ?
                            Karyawan.map((item) => {
                                return(
                                    <tr>
                                        <td>
                                            {item.nama}
                                        </td>
                                        <td>
                                            {item.pekerjaan}
                                        </td>
                                        <td>
                                            <Link to={'/edit'}>
                                            <Button onClick={() => handleEdit(item.id, item.nama, item.pekerjaan)}>EDIT</Button>
                                            </Link>
                                            &nbsp;
                                            <Button onClick={() => handleDelete(item.id)}>DELETE</Button>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            "No Data Available"
                        }
                    </tbody>
                </Table>
                <br>
                </br>
                <Link to="/create">
                <Button size="lg">Create</Button>
                </Link>
            </div>
        </Fragment>
    )
}

export default CRUD