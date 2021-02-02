//import { Button } from 'bootstrap';
import { Accordion, Card, InputGroup, FormControl, Button } from 'react-bootstrap'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';

export function Search() {

    return (
        <InputGroup className="simple-search">
            <InputGroup.Prepend>
                <InputGroup.Text>First and last name</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl />
            <FormControl />
        </InputGroup>
    );
}

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionToggle(eventKey, () =>
        console.log('totally custom!'),
    );
  
    return (
      <a
        variant="secondary"
        onClick={decoratedOnClick}
      >
        {children}
      </a>
    );
  }
  

export function AdvancedSearch() {

    const [ active, setActive ] = useState(false);
    const handleIconChange = () => setActive(!active);
    let icon = active? " v " : "> ";

    return (
        <Accordion className="advanced-search">
            <Card>
            <Card.Header> 
                <CustomToggle eventKey="0" onClick={handleIconChange}> {icon}  Show Advanced Search</CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
                <Card.Body>
                <InputGroup className="mb-4">
                    <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                </Card.Body>
            </Accordion.Collapse>
            </Card>
        </Accordion>
        
    
    );
}