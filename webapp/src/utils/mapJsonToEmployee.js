const toSnakeCase = (s) => {
    return s.replace(/[\w]([A-Z])/g, function(m) {
        return m[0] + "_" + m[1];
    }).toLowerCase();
}


export default function mapJsonToEmployee(employee) {
    let mappedEmployee = employee;

    Object.entries(employee).forEach(([key, value]) => {
        let keyInCamelCase = toSnakeCase(key)
        delete mappedEmployee[key];
        mappedEmployee[keyInCamelCase] = value;
     });

    return mappedEmployee;
}