import mapEmployeeToJson from "../utils/mapEmployeeToJson"

export default function genericFetch(uri, method, bodyData = null) {
    let params = {
        method: method,
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        }
    };

    if(bodyData) 
        params['body'] = JSON.stringify(bodyData);
    

    return fetch(uri, params)
    .then(response => { return response.json()})
    .then(jsonResponse => {
        if(Array.isArray(jsonResponse))
            return jsonResponse.map(data => mapEmployeeToJson(data));
        else
            return mapEmployeeToJson(jsonResponse);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}