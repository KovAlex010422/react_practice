import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './app.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, name: 'Jhon D.', salary: 800, increase: false, rise: true },
        { id: 2, name: 'David E.', salary: 3000, increase: true, rise: false },
        { id: 3, name: 'Bob K.', salary: 5000, increase: false, rise: false },
      ]
    }
  }

  deleteItem = (id) => {
    // console.log(id);
    this.setState(({ data }) => {
      return { data: data.filter(el => el.id !== id) }
    })
  }

  createEmpl = (employee) => {
    // this.setState([this.state.data.push(employee)])
    this.setState(({ data }) => {
      const nArr = [...data, employee]
      return {
        data: nArr
      }
    })
  }

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      // const index = data.findIndex(elem => elem.id === id),
      //       old = data[index],
      //       newItem = {...old, increase: !old.increase},
      //       newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)];


      data: data.map(el => {
        if (el.id === id) {
          return { ...el, [prop]: !el[prop] }
        }
        return el
      })
    }))
  }
  render() {
    const empl = this.state.data.length;
    const emplIncr = this.state.data.filter(el => el.increase).length
    return (
      <div className="app">
        <AppInfo empl={empl} emplIncr={emplIncr} />
        
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList
          data={this.state.data}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm
          createEmpl={this.createEmpl}
        />
      </div>
    );
  }
}


export default App;
