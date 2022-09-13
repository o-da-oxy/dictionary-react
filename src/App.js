import './App.css';
import {Route, Routes} from "react-router-dom";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import Dictionary from "./components/dictionary/Dictionary";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path='/' element={<Navigation text='Start'/>}/>
                <Route path='/dictionary' element={<Dictionary/>}/>
            </Routes>
        </div>
    );
}

export default App;
