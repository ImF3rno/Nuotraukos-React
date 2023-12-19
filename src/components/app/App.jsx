import Header from "../header/Header";
import About from '../about/About';
import Main from "../main/Main";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

const App=()=>{
    return(
        <div className="contianer">
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App;