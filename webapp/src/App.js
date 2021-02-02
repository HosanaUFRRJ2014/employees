import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './logo.svg';
import './App.css';
import { List } from  './components/employees/List';
import { Search, AdvancedSearch } from './components/Search';
import { Button } from 'react-bootstrap';
import { Create } from './components/employees/Create';

function App() {

  let employees = [
    {
        "id": 1,
        "username": "admin",
        "firstName": "Admin",
        "lastName": "",
        "birthdate": "2021-01-30",
        "email": "admin.admin@foo.com",
        "age": 0,
        "position": ""
    },
    {
        "id": 2,
        "username": "hosana1234",
        "firstName": "Hosana",
        "lastName": "Gomes Pinto",
        "birthdate": "1996-01-05",
        "email": "hosana.gomes@foo.com",
        "age": 25,
        "position": "Middle Software Developer"
    }
]

  return (
    <div>
      <div>
        <div className="create-search-employee">
          <Create />
          <Search />
        </div>
        <AdvancedSearch />
      </div>
      <List employees={employees} />
    </div>
  );
}

export default App;
