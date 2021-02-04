import genericFetch from './genericFetch';


export function deleteEmployee(id) {
    return genericFetch(`/employees/${id}/`, 'DELETE');
}