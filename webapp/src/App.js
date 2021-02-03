import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { List } from  './components/employees/List';
import { Search, AdvancedSearch } from './components/Search';
import { Button } from 'react-bootstrap';
import { Create } from './components/employees/Create';
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
        employees: data, 
        loading: false, 
        existingUsernames: usernames
      });
      
    })
  }

  render() {
    return this.state.loading? null :  (<div>
        <div className="empty-div"></div>
        <div>
          <div className="create-search-employee">
            <Create  existingUsernames={this.state.existingUsernames || []} />
            <Search />
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
