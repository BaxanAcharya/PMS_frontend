import React, { Component } from 'react';
import Nav from './navbar'
import './addStudent.css'
import { Container, Row, Col } from 'react-bootstrap'
//import axois from "axios";

class addStudent extends Component {

    render() {
        return (
            <>
                <Nav />
                <Container>
                    <p align="center">Personal Details</p>
                    <Row>
                        <Col xs={6}>
                            <div className="form-group">
                                <label>Firstname</label>
                                <input type="text" name="firstname" className="form-control" placeholder="Enter Firstname" />
                            </div>
                        </Col>

                        <Col xs={6}>
                            <div className="form-group">
                                <label>Lastname</label>
                                <input type="text" name="lastname" className="form-control" placeholder="Enter Lastname" />
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col xs={6}>
                            <label>Choose class</label>
                            <select class="form-control" >
                                <option>Nursery</option>
                                <option>KG</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>Play Nursery</option>
                                <option>JKG</option>
                                <option>Leave Class</option>
                            </select>
                        </Col>
                        <Col xs={6}>
                            <label>Select Cast</label>
                            <select class="form-control" >
                                <option>Dalit</option>
                                <option>Janajati</option>
                                <option>Other</option>
                            </select>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col xs={3}>
                            <label>Select Section</label>
                            <select class="form-control" >
                                <option>None</option>
                                <option>A</option>
                                <option>B</option>
                                <option>C</option>
                                <option>D</option>
                            </select>
                        </Col>
                        <Col xs={3}>
                            <label>Enter roll no</label>
                            <input type="number" name="roll_no" className="form-control" placeholder="Enter Rollno" />
                        </Col>
                        <Col xs={3}>
                            <label>Select Sex</label>
                            <select class="form-control" >
                                <option>Male</option>
                                <option>Female</option>
                                <option>Others</option>
                            </select>
                        </Col>
                        <Col xs={3}>
                            <label>Pick DOB</label>
                            <input type="date" name="dob" className="form-control" placeholder="Pick DOB" />
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col xs={4}>
                            <label>Enter Birth place</label>
                            <input type="text" name="birth_place" className="form-control" placeholder="Enter Birth place" />
                        </Col>
                        <Col xs={4}>
                            <label>Pick Admission date</label>
                            <input type="date" name="admission_date" className="form-control" placeholder="PIck Admission date" />
                        </Col>
                        <Col xs={4}>
                            <label>Address</label>
                            <input type="text" name="address" className="form-control" placeholder="Enter address" />
                        </Col>
                    </Row>
                </Container>
                <hr />

                <Container>
                    <p align="center">Additional Details</p>
                </Container>

                <Container>
                    <Row>
                        <Col xs={3}>
                            <label>Father's Name</label>
                            <input type="text" name="father_name" className="form-control" placeholder="Enter father name" />
                        </Col>

                        <Col xs={3}>
                            <label>Father's Occupation</label>
                            <input type="text" name="father_occupation" className="form-control" placeholder="Enter father occupation" />
                        </Col>
                        <Col xs={3}>
                            <label>Father's Religion</label>
                            <input type="text" name="fater_religion" className="form-control" placeholder="Enter father religion" />
                        </Col>
                        <Col xs={3}>
                            <label>Father's Nationality</label>
                            <input type="text" name="father_nationality" className="form-control" placeholder="Enter father nationality" />
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col xs={3}>
                            <label>Mother's Name</label>
                            <input type="text" name="mother_name" className="form-control" placeholder="Enter mother name" />
                        </Col>

                        <Col xs={3}>
                            <label>Mother's Occupation</label>
                            <input type="text" name="mother_occupation" className="form-control" placeholder="Enter mother occupation" />
                        </Col>
                        <Col xs={3}>
                            <label>Mother's Religion</label>
                            <input type="text" name="mother_religion" className="form-control" placeholder="Enter mother religion" />
                        </Col>
                        <Col xs={3}>
                            <label>Mother's Nationality</label>
                            <input type="text" name="mother_nationality" className="form-control" placeholder="Enter mother nationality" />
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col xs={6}>
                            <label>Pre. School </label>
                            <input type="text" name="pre_school" className="form-control" placeholder="Enter pre. school" />
                        </Col>
                        <Col xs={6}>
                            <label>Pre. class</label>
                            <input type="text" name="pre_class" className="form-control" placeholder="Enter pre. class" />
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col xs={6}>
                            <label>Remarks </label>
                            <input type="text" name="remarks" className="form-control" placeholder="Enter remarks" />
                        </Col>
                        <Col xs={6}>
                            <label>Devnagari</label>
                            <input type="text" name="devnagari" className="form-control" placeholder="Enter devnagari" />
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col xs={4}>
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                            <label class="form-check-label" for="defaultCheck1" className="my">
                                Bus Rider
                            </label>
                        </Col>
                        <Col xs={4}>
                            <label>Bus Stop</label>
                            <input type="text" name="bus_stop" className="form-control" placeholder="Enter bus stop" />
                        </Col>
                        <Col xs={4}>
                            <label>SBD</label>
                            <select class="form-control" >
                                <option>Day Scholar</option>
                                <option>Day Boarder</option>
                                <option>Boarder</option>
                            </select>

                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col xs={3}>
                            <label>Deposit</label>
                            <input type="number" name="deposit" className="form-control" placeholder="Enter deposit " />
                        </Col>
                        <Col xs={3}>
                            <label>Scholarship</label>
                            <input type="number" name="scholarship" className="form-control" placeholder="Enter scholarship" />
                        </Col>
                        <Col xs={3}>
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                            <label class="form-check-label" for="defaultCheck1" className="my">
                                Lock
                            </label>
                        </Col>
                        <Col xs={3}>
                            <label>Enter symbol no</label>
                            <input type="text" name="symbol_no" className="form-control" placeholder="Enter symbol_no" />
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col xs={12}>
                            <button type="submit" className="btn btn-primary btn-block">Add</button>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
export default addStudent