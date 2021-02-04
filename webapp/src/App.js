import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import './App.css';
import { List } from  './components/employees/List';
import { Search, AdvancedSearch } from './components/Search';
import { Create } from './components/employees/CreateOrUpdate';
import { fetchList } from './api/fetchList';


class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {loading:true, employees: null, existingUsernames: null }
  };

  componentDidMount() {
    this.setState({loading:true})
    fetchList().then(data => {
      let usernames = data.map(employee => employee.username);
      this.setState({
        allEmployees: data.slice(1, data.length),
        employees: data.slice(1, data.length), 
        loading: false, 
        existingUsernames: usernames
      });
      
    })
  }

  filtering = (event) => {
    let attributeName = event.target.name;
    let value = event.target.value;
    
    if(value && value.length >= 3) {
      console.log("Chamou filtro para valor: ", value);

      let filtered = this.state.employees.filter(employee => {
        return employee[attributeName].toLowerCase().includes(value.toLowerCase());
      });
      this.setState({employees: filtered});
    } else {
      this.setState({employees: this.state.allEmployees});
    }
  }

  render() {
    return this.state.loading? null :  (<div>
        <div>
          <div className="search-employee">
            <Search filtering={this.filtering} employees={this.state.employees || []}  />
            <Create existingUsernames={this.state.existingUsernames || []} />
          </div>
          <AdvancedSearch />
        </div>
        <List 
          employees={this.state.employees || []} 
          existingUsernames={this.state.existingUsernames || []} />
      </div>);
  }
}

export default App;
