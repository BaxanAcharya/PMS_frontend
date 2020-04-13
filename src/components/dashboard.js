import React, { Component } from 'react';
import Nav from './navbar'
import { Container, Row, Col } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
// import {Tbl} from './Tbl'
import axois from "axios";
class dashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            students: [],
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('myToken')}` }
            }
        }
    }

    componentDidMount() {

        //for getting students
        axois.get('http://192.168.1.235:8080/students/all', this.state.config)
            .then((response) => {
                this.setState({
                    students: response.data.message,
                })

            }).catch((err) => {
                console.log(err.response)
            })

    }


    render() {
        return (
            <>
                <Nav />
                <Container >
                    <Row>
                        <Col xs={12}>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Student Name</th>
                                        <th>Action</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.students.map((object, i) => {
                                            return (
                                                <tr key={object._id}>
                                                    <td>{object._id}</td>
                                                    <td key={object._id}>{object.firstname} {object.lastname}</td>
                                                    <td><Button variant="danger">Delete</Button></td>
                                                    <td>Edit</td>
                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>
                            </Table>
                        </Col>

                    </Row>
                </Container>
            </>
        )
    }
}

export default dashboard