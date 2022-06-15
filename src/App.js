// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
// import Templates from './components/Templates';
// import ModalWin from './components/ModalWin';
import {BrowserRouter ,Route} from 'react-router-dom';
import Personalinfo from './components/Personalinfo';
import Education from './components/Education';
import Skills from './components/Skills';
// import Templates from './components/Template';
//  import Dynamic2 from './components/Dynamic2';
import Experience from './components/Experience';
import Template from './components/Template';
// import Login from './components/Login'
// import GenericPdfDownloader from './components/ExportPdfComponent';
import ExportPdfComponent from './components/ExportPdfComponent';
// import ModalWin from './components/ModalWin';
function App() {
    return(
        <div className="App">
            <BrowserRouter>
            <Route path ='/' exact component={Home}/>
            {/* <Route path='/login' component={Login}/>
            <Route path='/register' component={ModalWin}/> */}
            <Route path = "/personal" component={Personalinfo}/>
            <Route path ="/education" component={Education}/>
            <Route path = "/skills" component={Skills}/>
            <Route path = "/experience" component={Experience}/>
            <Route path = '/export' component={ExportPdfComponent}/>
            <Route path = "/template" component={Template}/>
           
            </BrowserRouter>    
            {/* <Route path = '/export' component={ExportPdfComponent}/> */}
          
            {/* <Template/> */}
            {/* <Dynamic2/> */}
            {/* <Experience/> */}
            {/* <Experience/> */}
            {/* <ExportPdfComponent/> */}
            {/* < GenericPdfDownloader/> */}
        </div>

    )
}

export default App;