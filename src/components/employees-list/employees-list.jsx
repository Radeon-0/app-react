import styled from "styled-components";
import EmployeesListItem from "../employees-list-item/employees-list-item";

//import './employees-list.css';

const EmployeesList = ({data,onDelete,onToggleProp}) => {

    const UL = styled.ul`
        margin-top: 30px;
        background-color: #3d5a80;
        border-radius: 4px;
        box-shadow: 15px 15px 30px rgba(0,0,0, .15);
        color: #fff;
    `
    
    const elements = data.map(item=>{
        const {id,...itemProps} = item;
        return (
            <EmployeesListItem 
            key={id} 
            {...itemProps}
            onDelete={()=>onDelete(id)}
            onToggleProp={(e)=>{onToggleProp(id,e.currentTarget.getAttribute("data-toggle"))}}
            />
        )
    })

    return (
        <UL className="app-list list-group">
            {elements}
        </UL>
    )
}

export default EmployeesList;