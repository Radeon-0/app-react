import AppInfo from '../app-info/app-info';
import SerachPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './app.css'

function App() {

    const data = [
        { name: "Jony", salary: 800, increase:false},
        { name: "Alex", salary: 950, increase:true},
        { name: "Djimi", salary: 1500, increase:false}
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