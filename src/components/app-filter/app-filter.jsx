//import "./app-filter.css";

import styled from "styled-components";

const AppFilter = (props) => {


    const BtnGroup  = styled.div`
        margin-top: 20px;
    `
    const buttonsData = [
        { name: 'all', label: 'Все сотрудники' },
        { name: 'rise', label: 'На повышение' },
        { name: 'moreThen100', label: 'З/П больше 1000$' },
    ];


    const buttons = buttonsData.map(({ name, label }) => {

        const active = props.filter == name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button className={`btn ${clazz}`}
                key={name}
                onClick={() => { props.onFilterSelect(name) }}>
                {label}
            </button>
        );
    })

    return (
        <BtnGroup className="btn-group">
            {buttons}
        </BtnGroup>
    );
}
export default AppFilter;