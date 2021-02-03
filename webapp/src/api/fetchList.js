import genericFetch from './genericFetch';

export function fetchList() {
    return genericFetch('/employees', 'GET');
}