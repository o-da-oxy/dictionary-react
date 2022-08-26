import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import Dictionary from "./components/dictionary/Dictionary";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Routes>
                    <Route path='/' element={<Navigation text='Click to start' />} />
                    <Route path='/dictionary' element={<Dictionary />} />
                </Routes>

            </div>
        </BrowserRouter>
    );
}

export default App;
