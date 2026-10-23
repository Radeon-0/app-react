import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SerachPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './app.css'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: "Jony", salary: 800, increase: false, rise: true, id: 1 },
                { name: "Alex", salary: 950, increase: true, rise: true, id: 2 },
                { name: "Djimi", salary: 1500, increase: false, rise: false, id: 3 }
            ],
            term: '',
            filter: 'all',
        }
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        });
    }

    onToggleProp = (id, prop) => {

        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] }
                }
                return item;
            })
        }));

    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        });
    }


    addItem = (name, salary) => {

        const id = this.state.data.length + 1;
        const newItem = {
            name,
            salary: Number(salary),
            increase: false,
            rise: false,
            id: id
        };

        this.setState(({ data }) => ({
            data: [...data, newItem]
        }));
    };

    onUpdateSearch = (term) => {
        this.setState({ term });
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'moreThen100':
                return items.filter(item => item.salary > 1000);
            default:
                return items;
        }
    }

    onFilterSelect = (filter) =>{
        this.setState({filter});
    }



    render() {

        const { data, term, filter } = this.state;

        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;

        const visibleData = this.filterPost(this.searchEmp(data, term),filter);

        return (
            <div className="app">
                <AppInfo employees={employees} increased={increased}></AppInfo>

                <div className="search-panel">
                    <SerachPanel onUpdateSearch={this.onUpdateSearch}></SerachPanel>
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}></AppFilter>
                </div>
                <nav>
                    <EmployeesList
                        data={visibleData}
                        onDelete={this.deleteItem}
                        onToggleProp={this.onToggleProp}
                    ></EmployeesList>
                </nav>
                <EmployeesAddForm onAdd={this.addItem} ></EmployeesAddForm>
            </div>
        );
    }
}

export default App