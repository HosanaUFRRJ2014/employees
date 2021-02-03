import mapEmployeeToJson from "../utils/mapEmployeeToJson"
import mapJsonToEmployee from "../utils/mapJsonToEmployee"
import getCookie from "../utils/getCookie"

export default function genericFetch(uri, method, bodyData = null) {
    let params = {
        method: method,
        credentials: 'same-origin',
        mode:        'same-origin',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken')
        },
        csrftoken: getCookie('csrftoken')
    };

    if(bodyData) {
        let djangoBody = mapJsonToEmployee(bodyData);
        params['body'] = JSON.stringify(djangoBody);
    }

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