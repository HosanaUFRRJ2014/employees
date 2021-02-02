const toCamelCase = (s) => {
    return s.replace(/([-_][a-z])/ig, ($1) => {
      return $1.toUpperCase()
        .replace('-', '')
        .replace('_', '');
    });
};

export default function mapEmployeeToJson(employee) {
    let mappedEmployee = employee;

    Object.entries(employee).forEach(([key, value]) => {
        let keyInCamelCase = toCamelCase(key)
        delete mappedEmployee[key];
        mappedEmployee[keyInCamelCase] = value;
     });

    return mappedEmployee;
}