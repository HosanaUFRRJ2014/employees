import genericFetch from './genericFetch';


export function createEmployee(bodyData) {
    return genericFetch('/employees/', 'POST', bodyData);
}