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
        { id: 1, name: 'Jhon D.', salary: 800, increase: false },
        { id: 2, name: 'David E.', salary: 3000, increase: true },
        { id: 3, name: 'Bob K.', salary: 5000, increase: false },
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

  onToggleIncrease = (id) => {
    this.setState(({ data }) => ({
      // const index = data.findIndex(elem => elem.id === id),
      //       old = data[index],
      //       newItem = {...old, increase: !old.increase},
      //       newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)];


      data: data.map(el => {
        if(el.id === id){
        return {...el, increase: !el.increase}
      }
        return el
    })
  }))
}

render() {
  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployeesList
        data={this.state.data}
        onDelete={this.deleteItem}
        onToggleIncrease={this.onToggleIncrease}
      />
      <EmployeesAddForm
        createEmpl={this.createEmpl}
      />
    </div>
  );
}
}


export default App;
