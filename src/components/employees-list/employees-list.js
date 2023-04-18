import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({ data, onDelete, onToggleProp }) => {
    
    // const onDelete = () => {
    //     console.log('Delete')
    // }
    
    const employees = data.map(el => {
        const { id,  ...employeeProps } = el;
        return (
            <EmployeesListItem 
            key={id} 
            {...employeeProps}
            onDelete={() => onDelete(id)}
            onToggleProp={(e)=> onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
            />
        )
    }
    )

    return (
        <ul className="app-list list-group">
            {employees}
        </ul>
    )
}

export default EmployeesList;