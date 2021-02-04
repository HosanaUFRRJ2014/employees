import React, { useState } from 'react';
import { Formik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Button, Col, Form, InputGroup, Modal, Row } from 'react-bootstrap';
import { createEmployee } from "../../api/create";
import { updateEmployee } from '../../api/update';


export function Create(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button
                className="button-create-employee"
                variant="primary"
                size="sm"
                onClick={handleShow}>
                 <FontAwesomeIcon icon={"user-plus"} /> Register new
            </Button>
            <CreateOrUpdateModal
                show={show}
                handleShow={handleShow}
                handleClose={handleClose}
                existingUsernames={props.existingUsernames}
                modalTitle={"Register Employee"} />
        </>

    )
}


export class CreateOrUpdateModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
    }

    render() {
        const { show, employee, handleClose, modalTitle, applyReadOnlyFields, existingUsernames, isUpdate } = this.props;

        return (
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                
            >
                <Modal.Header closeButton>
                    <Modal.Title>{modalTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CreateOrUpdateForm 
                        handleClose={handleClose} 
                        applyReadOnlyFields={applyReadOnlyFields} 
                        isUpdate={isUpdate} 
                        employee={employee} 
                        existingUsernames={existingUsernames} />
                </Modal.Body>
                {/*<Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button type="submit" variant="primary" onClick={(() => this.submit())}>
                        Save
                    </Button>
                </Modal.Footer>*/}
            </Modal>
        );
    }


}


class CreateOrUpdateForm extends React.Component {
    constructor(props) {
        super(props);
        let employee = this.props.employee || {};
        this.state = {
            id: employee.id,
            firstName: employee.firstName,
            lastName: employee.lastName,
            username: employee.username,
            birthdate: employee.birthdate,
            position: employee.position,
            password: employee.password
        }
    }

    handleChange = (event) => {
        console.log("handling change...");
        const target = event.target;
        let key = target.name;
        let value = target.value;
        this.setState({ [key]: value });
    }

    submit = (values) => {
        const { isUpdate }  = this.props;
        if(isUpdate) {
            return updateEmployee(values.id, values);
        } else
            return createEmployee(values);
    }

    alreadyExists = (value) => {
        return this.props.existingUsernames.includes(value.toLocaleLowerCase());
    }

    render() {
        return (
            <Formik
                initialValues={this.state}
                validate={values => {
                    const errors = {};
                    if (!this.props.applyReadOnlyFields) {
                        if (values.username) {
                            console.log("Chamou validação");
                            let usernameExists = this.alreadyExists(values.username);
                            if (usernameExists)
                                errors.username = 'This username already exists!'
                        }
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    console.log("Submitting: ", values);
                    this.submit(values).then(_ => this.props.handleClose());

                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting
                    /* and other goodies */
                }) => (
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col>
                                <Form.Label>First name</Form.Label>
                                <Form.Control
                                    name={"firstName"}
                                    placeholder="First name"
                                    onChange={handleChange}
                                    value={values.firstName}
                                    required />
                            </Col>
                            <Col>
                                <Form.Label>Last name</Form.Label>
                                <Form.Control
                                    name={"lastName"}
                                    placeholder="Last name"
                                    onChange={handleChange}
                                    value={values.lastName}
                                    required />
                            </Col>
                        </Row>
                        <br />
                        <Form.Row>
                            <Form.Group as={Col} controlId="validationCustomUsername">
                                <Form.Label>Username</Form.Label>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                        type="text"
                                        placeholder="Username"
                                        aria-describedby="inputGroupPrepend"
                                        name={"username"}
                                        onChange={handleChange}
                                        value={values.username}
                                        isInvalid={!!errors.username}
                                        disabled={this.props.applyReadOnlyFields}
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.username}
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formBirthdate">
                                <Form.Label>Birthdate</Form.Label>
                                <Form.Control
                                    name={"birthdate"}
                                    type="date"
                                    placeholder="Birthdate"
                                    onChange={handleChange}
                                    value={values.birthdate}
                                    required />
                            </Form.Group>
                        </Form.Row>
                        <Form.Group controlId="formBasicPosition">
                            <Form.Label>Position</Form.Label>
                            <InputGroup>
                                <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroupPrepend">
                                            <FontAwesomeIcon icon={"briefcase"} />
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                <Form.Control
                                    name={"position"}
                                    type="text"
                                    placeholder="Position (e.g Software Developer)"
                                    onChange={handleChange}
                                    value={values.position}
                                    required />
                            </InputGroup>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                </Button>
                    </Form>
                )}
            </Formik>
        );
    }
}