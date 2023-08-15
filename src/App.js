import logo from './logo.svg';
import './App.css';
import { getDatabase, ref, set } from "firebase/database";
import { initializeApp } from "firebase/app";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MenuPage } from './pages/MenuPage';
import { AddMenu } from './pages/AddMenu';
import { ChangePrice } from './pages/ChangePrice';


function App() {

  return (
    <div className="">
      <Router>
        <Routes>
          <Route path='/' element={<MenuPage />} />
          <Route path='/addItem' element={<AddMenu />}/>
          <Route path='/changeprice' element={<ChangePrice />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
