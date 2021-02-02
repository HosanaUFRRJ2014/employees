import genericFetch from './genericFetch';
import mapEmployeeToJson from "../utils/mapEmployeeToJson"


export function fetchList() {
    return genericFetch('/employees', 'GET');
}