import { useState } from 'react';
import Table from 'react-bootstrap/Table'
import { CreateOrUpdateModal } from './Create';

export function List(props) {
    const [show, setShow] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState({})

    const handleClose = () => setShow(false);
    const handleShow = (clickedEmployee) => {
        setSelectedEmployee(clickedEmployee);
        setShow(true);
    };

    const { employees } = props;
    const listItems = employees.map((employee, i) =>
        <tr key={`list-employee-${i}`} onClick={() => handleShow(employee)}>
            <td>{ employee.id }</td>
            <td>{ employee.firstName }</td>
            <td>{ employee.lastName }</td>
            <td>{ employee.age }</td>
            <td>{ employee.position }</td>
            <td>{ employee.username }</td>
        </tr>
    );
    return (
        <>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Position</th>
                <th>Username</th>
                </tr>
            </thead>
            <tbody>
                {listItems}
            </tbody>
        </Table>
        <CreateOrUpdateModal
        show={show}
        handleShow={handleShow}
        handleClose={handleClose}
        modalTitle={"Update Employee"}
        employee={selectedEmployee} 
        />
        </>
    );
}