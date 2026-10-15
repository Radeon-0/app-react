import AppInfo from '../app-info/app-info';
import SerachPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './app.css'

function App() {

    const data = [
        { name: "Jony", salary: 800, increase: false, id: 1 },
        { name: "Alex", salary: 950, increase: true, id: 2 },
        { name: "Djimi", salary: 1500, increase: false, id: 3 }
    ];

    return (
        <div className="app">
            <AppInfo></AppInfo>

            <div className="search-panel">
                <SerachPanel></SerachPanel>
                <AppFilter></AppFilter>
            </div>
            <nav>
                <EmployeesList data={data} ></EmployeesList>
            </nav>
            <EmployeesAddForm></EmployeesAddForm>
        </div>
    );
}

export default App