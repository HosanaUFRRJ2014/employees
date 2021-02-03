import genericFetch from './genericFetch';


export function updateEmployee(id, bodyData) {
    return genericFetch(`/employees/${id}/`, 'PUT', bodyData);
}