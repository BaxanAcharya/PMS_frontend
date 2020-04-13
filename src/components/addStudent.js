import React, { Component } from 'react';
import Nav from './navbar'
import './addStudent.css'
import { Container, Row, Col } from 'react-bootstrap'
import {  Redirect } from 'react-router-dom';
import bsCustomFileInput from 'bs-custom-file-input';
import axois from "axios";

class addStudent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('myToken')}` }
            },
            firstname: '',
            lastname: '',
            class: '',
            cast: '',
            section: '',
            roll_no: '',
            sex: '',
            dob: '',
            birth_place: '',
            admission_date: '',
            address: '',
            facuilty: '',
            tel_no: '',
            father_name: '',
            father_occupation: '',
            father_religion: '',
            father_nationality: '',
            mother_name: '',
            mother_occupation: '',
            mother_religion: '',
            mother_nationality: '',
            pre_school: '',
            pre_class: '',
            remarks: '',
            devnagari: '',
            bus_stop: '',
            sdb: '',
            deposit: '',
            scholarship: '',
            lock: false,
            symbol_no: '',
            file: null,
            image: '',
            added:false,
            showBusStop: false
        }
    }


    //for adding post
    postSubmit = ((e) => {
        e.preventDefault();
        const formdata = new FormData()
        formdata.append('studentImage', this.state.file)
        axois.post('http://192.168.1.235:8080/uploadStudent', formdata, this.state.config)
            .then((response) => {
                localStorage.setItem('myImage', response.data.filename)


                var data = {
                    firstname: this.state.firstname,
                    lastname: this.state.lastname,
                    class: this.state.class,
                    cast: this.state.cast,
                    section: this.state.section,
                    roll_no: this.state.roll_no,
                    sex: this.state.sex,
                    dob: this.state.dob,
                    birth_place: this.state.birth_place,
                    admission_date: this.state.admission_date,
                    address: this.state.address,
                    facuilty: this.state.facuilty,
                    tel_no: this.state.tel_no,
                    father_name: this.state.father_name,
                    father_occupation: this.state.father_occupation,
                    father_religion: this.state.father_religion,
                    father_nationality: this.state.father_nationality,
                    mother_name: this.state.mother_name,
                    mother_occupation: this.state.mother_occupation,
                    mother_religion: this.state.mother_religion,
                    mother_nationality: this.state.mother_nationality,
                    pre_school: this.state.pre_school,
                    pre_class: this.state.pre_class,
                    remarks: this.state.remarks,
                    devnagari: this.state.devnagari,
                    bus_stop: this.state.bus_stop,
                    sdb: this.state.sdb,
                    deposit: this.state.deposit,
                    scholarship: this.state.scholarship,
                    lock: this.state.lock,
                    symbol_no: this.state.symbol_no,
                    image: localStorage.getItem('myImage')

                }
                axois.post('http://192.168.1.235:8080/students/add', data, this.state.config)
                    .then((response1) => {
                        localStorage.removeItem('myImage');
                        this.setState({
                            firstname: '',
                            lastname: '',
                            class: '',
                            cast: '',
                            section: '',
                            roll_no: '',
                            sex: '',
                            dob: '',
                            birth_place: '',
                            admission_date: '',
                            address: '',
                            facuilty: '',
                            tel_no: '',
                            father_name: '',
                            father_occupation: '',
                            father_religion: '',
                            father_nationality: '',
                            mother_name: '',
                            mother_occupation: '',
                            mother_religion: '',
                            mother_nationality: '',
                            pre_school: '',
                            pre_class: '',
                            remarks: '',
                            devnagari: '',
                            bus_stop: '',
                            sdb: '',
                            deposit: '',
                            scholarship: '',
                            lock: false,
                            symbol_no: '',
                            file: null,
                            image: '',
                            added:true,
                            showBusStop: false
                        })

                    }).catch((err) => console.log(err.response1))
            }).catch((err) => console.log(err.response))


        this.setState({
            images: localStorage.getItem('myImage')
        })
    })

    //to handle change of form
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.value)
    }


    //for file select
    handleFileSelect = ((e) => {
        this.setState({
            file: e.target.files[0]
        })
        console.log(e.target.files[0])
    })


    componentDidMount() {
        bsCustomFileInput.init()
    }

    handleCheckChange = (e) => {
        if (e.target.value === "on") {
            this.setState({
                showBusStop: true
            })
        }
    }

    handleLockChange = (e) => {
        if (e.target.value === "on") {
            this.setState({
                lock: true
            })
        }
    }





    render() {
        if (this.state.added === true) {
            return <Redirect to='/dashboard' location="User Registered"/>
        }
        return (
            <>
                <Nav />
                <Container>
                    <p align="center">Personal Details</p>
                    <Row>
                        <Col xs={6}>
                            <div className="form-group">
                                <label>Firstname</label>
                                <input type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange} className="form-control" placeholder="Enter Firstname" />
                            </div>
                        </Col>

                        <Col xs={6}>
                            <div className="form-group">
                                <label>Lastname</label>
                                <input type="text" name="lastname" value={this.state.lastname} onChange={this.handleChange} className="form-control" placeholder="Enter Lastname" />
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col xs={6}>
                            <label>Choose class</label>
                            <select className="form-control" value={this.state.class} onChange={this.handleChange} name='class'>
                                <option>None</option>
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
                            <select className="form-control" value={this.state.cast} onChange={this.handleChange} name="cast">
                                <option>None</option>
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
                            <select className="form-control" value={this.state.section} onChange={this.handleChange} name="section">
                                <option>None</option>
                                <option>A</option>
                                <option>B</option>
                                <option>C</option>
                                <option>D</option>
                            </select>
                        </Col>
                        <Col xs={3}>
                            <label>Enter roll no</label>
                            <input type="number" name="roll_no" value={this.state.roll_no} onChange={this.handleChange} className="form-control" placeholder="Enter Rollno" />
                        </Col>
                        <Col xs={3}>
                            <label>Select Sex</label>
                            <select className="form-control" value={this.state.sex} onChange={this.handleChange} name="sex">
                                <option>None</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Others</option>
                            </select>
                        </Col>
                        <Col xs={3}>
                            <label>Pick DOB</label>
                            <input type="date" name="dob" value={this.state.dob} onChange={this.handleChange} className="form-control" placeholder="Pick DOB" />
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col xs={4}>
                            <label>Enter Birth place</label>
                            <input type="text" name="birth_place" value={this.state.birth_place} onChange={this.handleChange} className="form-control" placeholder="Enter Birth place" />
                        </Col>
                        <Col xs={4}>
                            <label>Pick Admission date</label>
                            <input type="date" name="admission_date" value={this.state.admission_date} onChange={this.handleChange} className="form-control" placeholder="PIck Admission date" />
                        </Col>
                        <Col xs={4}>
                            <label>Address</label>
                            <input type="text" name="address" value={this.state.address} onChange={this.handleChange} className="form-control" placeholder="Enter address" />
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col xs={6}>
                            <label>Faculty</label>
                            <select className="form-control" value={this.state.facuilty} onChange={this.handleChange} name="facuilty">
                                <option>None</option>
                                <option>Management</option>
                                <option>School</option>
                            </select>
                        </Col>

                        <Col xs={6}>
                            <label>Tel no.</label>
                            <input type="text" name="tel_no" value={this.state.tel_no} onChange={this.handleChange} className="form-control" placeholder="Enter telephone no. " />
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
                            <input type="text" name="father_name" value={this.state.father_name} onChange={this.handleChange} className="form-control" placeholder="Enter father name" />
                        </Col>

                        <Col xs={3}>
                            <label>Father's Occupation</label>
                            <input type="text" name="father_occupation" value={this.state.father_occupation} onChange={this.handleChange} className="form-control" placeholder="Enter father occupation" />
                        </Col>
                        <Col xs={3}>
                            <label>Father's Religion</label>
                            <input type="text" name="father_religion" value={this.state.father_religion} onChange={this.handleChange} className="form-control" placeholder="Enter father religion" />
                        </Col>
                        <Col xs={3}>
                            <label>Father's Nationality</label>
                            <input type="text" name="father_nationality" value={this.state.father_nationality} onChange={this.handleChange} className="form-control" placeholder="Enter father nationality" />
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col xs={3}>
                            <label>Mother's Name</label>
                            <input type="text" name="mother_name" value={this.state.mother_name} onChange={this.handleChange} className="form-control" placeholder="Enter mother name" />
                        </Col>

                        <Col xs={3}>
                            <label>Mother's Occupation</label>
                            <input type="text" name="mother_occupation" value={this.state.mother_occupation} onChange={this.handleChange} className="form-control" placeholder="Enter mother occupation" />
                        </Col>
                        <Col xs={3}>
                            <label>Mother's Religion</label>
                            <input type="text" name="mother_religion" value={this.state.mother_religion} onChange={this.handleChange} className="form-control" placeholder="Enter mother religion" />
                        </Col>
                        <Col xs={3}>
                            <label>Mother's Nationality</label>
                            <input type="text" name="mother_nationality" value={this.state.mother_nationality} onChange={this.handleChange} className="form-control" placeholder="Enter mother nationality" />
                        </Col>
                    </Row>
                </Container>

                <hr />

                <Container>
                    <Row>
                        <Col xs={6}>
                            <label>Pre. School </label>
                            <input type="text" name="pre_school" value={this.state.pre_school} onChange={this.handleChange} className="form-control" placeholder="Enter pre. school" />
                        </Col>
                        <Col xs={6}>
                            <label>Pre. class</label>
                            <input type="text" name="pre_class" value={this.state.pre_class} onChange={this.handleChange} className="form-control" placeholder="Enter pre. class" />
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col xs={6}>
                            <label>Remarks </label>
                            <input type="text" name="remarks" value={this.state.remarks} onChange={this.handleChange} className="form-control" placeholder="Enter remarks" />
                        </Col>
                        <Col xs={6}>
                            <label>Devnagari</label>
                            <input type="text" name="devnagari" value={this.state.devnagari} onChange={this.handleChange} className="form-control" placeholder="Enter devnagari" />
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col xs={4}>
                            <input className="my " type="checkbox" name="check" onChange={this.handleCheckChange} />
                            <label className="form-check-label" >
                                Bus Rider
                            </label>
                        </Col>

                        {
                            (this.state.showBusStop === true) ?
                                <Col xs={4}>
                                    <label>Bus Stop</label>
                                    <input type="text" name="bus_stop" value={this.state.bus_stop} onChange={this.handleChange} className="form-control" placeholder="Enter bus stop" />
                                </Col> :
                                null
                        }


                        <Col xs={4}>
                            <label>SBD</label>
                            <select className="form-control" name="sbd" value={this.state.sdb} onChange={this.handleChange} >
                                <option>None</option>
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
                            <input type="number" name="deposit" value={this.state.deposit} onChange={this.handleChange} className="form-control" placeholder="Enter deposit " />
                        </Col>
                        <Col xs={3}>
                            <label>Scholarship</label>
                            <input type="number" name="scholarship" value={this.state.scholarship} onChange={this.handleChange} className="form-control" placeholder="Enter scholarship" />
                        </Col>
                        <Col xs={3}>
                            <input className="my" type="checkbox" name="lock" onChange={this.handleLockChange} />
                            <label className="form-check-label" >
                                Lock
                            </label>
                        </Col>
                        <Col xs={3}>
                            <label>Enter symbol no</label>
                            <input type="text" name="symbol_no" value={this.state.symbol_no} onChange={this.handleChange} className="form-control" placeholder="Enter symbol_no" />
                        </Col>
                    </Row>
                </Container>
                <hr />
                <Container>
                    <Row>
                        <Col xs={12}>
                            <div className="custom-file">
                                <input id="inputGroupFile01" type="file" className="custom-file-input" onChange={this.handleFileSelect} />
                                <label className="custom-file-label" >Choose Student Image</label>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <hr />
                <Container>
                    <Row>
                        <Col xs={12}>
                            <button type="submit" onClick={this.postSubmit} className="btn btn-primary btn-block">Add</button>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
export default addStudent