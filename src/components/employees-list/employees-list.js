import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({ data, onDelete, createEmpl, onToggleIncrease }) => {
    
    // const onDelete = () => {
    //     console.log('Delete')
    // }
    
    const employees = data.map(el => {
        const { id, ...employeeProps } = el;
        return (
            <EmployeesListItem 
            key={id} 
            {...employeeProps}
            onDelete={() => onDelete(id)}
            onToggleIncrease={()=> onToggleIncrease(id)}
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