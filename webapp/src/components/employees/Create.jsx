import { useState } from 'react';
import { Button, Col, Form, InputGroup, Modal, Row } from 'react-bootstrap'


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
                + Register new
            </Button>
            <CreateOrUpdateModal
                show={show}
                handleShow={handleShow}
                handleClose={handleClose}
                modalTitle={"Register Employee"} />
        </>

    )
}


export function CreateOrUpdateModal(props) {

    const { show, employee, handleShow, handleClose, handleSubmit, modalTitle } = props;

    const submit = () => {
        console.log("submeteu");
    };

    return (
        <>
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
                    <CreateOrUpdateForm employee={employee} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={submit}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );


}


function CreateOrUpdateForm(props) {
    const employee = props.employee || {};

    return (
        <Form>
            <Row>
                <Col>
                    <Form.Label>First name</Form.Label>
                    <Form.Control placeholder="First name" value={employee.firstName}/>
                </Col>
                <Col>
                    <Form.Label>Last name</Form.Label>
                    <Form.Control placeholder="Last name" value={employee.lastName}/>
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
                        value={employee.username}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please choose a username.
                    </Form.Control.Feedback>
                </InputGroup>
            </Form.Group>
            <Form.Group as={Col} controlId="formBirthdate">
                <Form.Label>Birthdate</Form.Label>
                <Form.Control type="date" placeholder="Birthdate" value={employee.birthdate} />
            </Form.Group>
            </Form.Row>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={employee.email} />
                <Form.Text className="text-muted">
                    E.g.: john@doe.com
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPosition">
                <Form.Label>Position</Form.Label>
                <Form.Control type="text" placeholder="Position (e.g Software Developer)" value={employee.position} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={employee.password} />
            </Form.Group>
            {/*<Button variant="primary" type="submit">
                Submit
            </Button>*/}
        </Form>
    );
}