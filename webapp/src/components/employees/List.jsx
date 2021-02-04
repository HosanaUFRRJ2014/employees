import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Table from 'react-bootstrap/Table'
import { CreateOrUpdateModal } from './CreateOrUpdate';
import { fetchList } from '../../api/fetchList';
import { deleteEmployee } from '../../api/delete';

export class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            openEmployee: false,
            selectedEmployee: {}
        }
    }

    componentDidMount() {
        let employeesCount = this.props.employees.lenght;
        for(let i = 0; i < employeesCount; i++) {
            this.setState({[`garbage_${i}`]: false});
        }
    }

    render() {
    const { employees, existingUsernames } = this.props;
    const { selectedEmployee, openEmployee} = this.state;
    
    const setShowEmployee = (value) => this.setState({openEmployee: value});

    const handleCloseEmployee = () => setShowEmployee(false);

    const handleShowEmployee = (clickedEmployee) => {
        this.setState({selectedEmployee: clickedEmployee});
        setShowEmployee(true);
    };

    const handleDeleteEmployee = (clickedEmployee, i) => {
        deleteEmployee(clickedEmployee.id).then(_ =>
            window.location.reload()
        );
       // this.setState({[`garbage_${i}`]: undefined});
    }

    const handleShowGarbage = (i) => {
        this.setState({[`garbage_${i}`]: true});
    }

    const handleHideGarbage = (i) => {
        this.setState({[`garbage_${i}`]: false});
    }

    const garbageIcon = (i) => {
        let icon = null;
        const allStates = this.state;
        let willShow = allStates[`garbage_${i}`] === true;
        
        if(willShow)
            icon = <FontAwesomeIcon icon={"trash-alt"} />;
        
        return icon;
    }

    const listItems = employees.map((employee, i) =>
        <tr key={`list-employee-${i}`} 
            onMouseEnter={() => handleShowGarbage(i)}
            onMouseLeave={() => handleHideGarbage(i)}
        >
            <td onClick={() => handleShowEmployee(employee)}>{employee.id}</td>
            <td onClick={() => handleShowEmployee(employee)}>{employee.firstName}</td>
            <td onClick={() => handleShowEmployee(employee)}>{employee.lastName}</td>
            <td onClick={() => handleShowEmployee(employee)}>{employee.age}</td>
            <td onClick={() => handleShowEmployee(employee)}>{employee.position}</td>
            <td onClick={() => handleShowEmployee(employee)}>{employee.username}</td>
            <td onClick={() => handleDeleteEmployee(employee, i)}
                className="table-actions table-actions-data">
                {garbageIcon(i)} 
            </td>
        </tr>
    );
    return (
        <>
            <Table bsPrefix="table" striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Position</th>
                        <th>Username</th>
                        <th className="table-actions"><FontAwesomeIcon icon={"ellipsis-h"} /> </th>
                    </tr>
                </thead>
                <tbody>
                    {listItems}
                </tbody>
            </Table>
            <CreateOrUpdateModal
                show={openEmployee}
                handleShow={handleShowEmployee}
                handleClose={handleCloseEmployee}
                modalTitle={"Update Employee"}
                employee={selectedEmployee}
                existingUsernames={existingUsernames}
                applyReadOnlyFields={true}
                isUpdate={true}
            />
        </>
    );
    }
}