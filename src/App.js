
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import {BrowserRouter ,Route} from 'react-router-dom';
import Personalinfo from './components/Personalinfo';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Template from './components/Template';
import ExportPdfComponent from './components/ExportPdfComponent';
function App() {
    return(
        <div className="App">
            <BrowserRouter>
            <Route path ='/' exact component={Home}/>
            <Route path = "/personal" component={Personalinfo}/>
            <Route path ="/education" component={Education}/>
            <Route path = "/skills" component={Skills}/>
            <Route path = "/experience" component={Experience}/>
            <Route path = '/export' component={ExportPdfComponent}/>
            <Route path = "/template" component={Template}/>
        </div>

    )
}

export default App;
