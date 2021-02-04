import { Accordion, Card, InputGroup, Form, FormControl, Col } from 'react-bootstrap'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';

export function Search(props) {

    return (
        <InputGroup className="simple-search">
            <InputGroup.Prepend>
                <InputGroup.Text>
                    <FontAwesomeIcon icon={"search"} />
                </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl 
                name={"firstName"} 
                onChange={props.filtering} 
                placeholder="First Name" />
            <FormControl 
                name={"lastName"} 
                onChange={props.filtering} placeholder="Last Name" />
        </InputGroup>
    );
}

export function AdvancedSearch() {

    return (
        <Accordion className="advanced-search">
            <Card>
            <Card.Header className="card-header-advanced-search"> 
                <CustomToggle eventKey="0"> Advanced Search</CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
                <Card.Body>
                {/*<InputGroup className="mb-4">
                    <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>*/}
                    <Form.Row>
                        <Form.Group as={Col} controlId="idCustomUsername">
                            <Form.Label>ID</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    type="text"
                                    placeholder="ID"
                                    aria-describedby="inputGroupPrepend"
                                    name={"id"}
                                   // onChange={handleChange}
                                   // value={values.username}
                                   // isInvalid={!!errors.username}
                                   // disabled={this.props.applyReadOnlyFields}
                                   // required
                                />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group as={Col} controlId="CustomAge">
                            <Form.Label>Age</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    type="text"
                                    placeholder="Age"
                                    aria-describedby="inputGroupPrepend"
                                    name={"age"}
                                   // onChange={handleChange}
                                   // value={values.username}
                                   // isInvalid={!!errors.username}
                                   // disabled={this.props.applyReadOnlyFields}
                                   // required
                                />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formBirthdate">
                            <Form.Label>Birthdate</Form.Label>
                            <Form.Control
                                name={"birthdate"}
                                type="date"
                                placeholder="Birthdate"
                               // onChange={handleChange}
                               // value={values.birthdate}
                                //required 
                                />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="customPosition">
                            <Form.Label>Position</Form.Label>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroupPrepend">
                                        <FontAwesomeIcon icon={"briefcase"} />
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    placeholder="Position (e.g. Software Developer)"
                                    aria-describedby="inputGroupPrepend"
                                    name={"position"}
                                   // onChange={handleChange}
                                   // value={values.username}
                                   // isInvalid={!!errors.username}
                                   // disabled={this.props.applyReadOnlyFields}
                                   // required
                                />
                            </InputGroup>
                        </Form.Group>
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
                                   // onChange={handleChange}
                                   // value={values.username}
                                   // isInvalid={!!errors.username}
                                   // disabled={this.props.applyReadOnlyFields}
                                   // required
                                />
                            </InputGroup>
                        </Form.Group>
                    </Form.Row>
                </Card.Body>
            </Accordion.Collapse>
            </Card>
        </Accordion>
        
    
    );
}

function CustomToggle({ children, eventKey }) {
    const [ active, setActive ] = useState(false);

    const decoratedOnClick = useAccordionToggle(eventKey, () =>
        setActive(!active),
    );
  
    let iconName = active? "angle-down" : "angle-right";
    return (
      <div
        variant="secondary"
        onClick={decoratedOnClick}
      >
        <FontAwesomeIcon icon={iconName} />{children}
      </div>
    );
  }
  