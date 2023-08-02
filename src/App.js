import logo from './logo.svg';
import './App.css';
import { getDatabase, ref, set } from "firebase/database";
import { initializeApp } from "firebase/app";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MenuPage } from './pages/MenuPage';
import { AddMenu } from './pages/AddMenu';
import { ChangePrice } from './pages/ChangePrice';


function App() {
  const firebaseConfig = {
    // ...
    // The value of `databaseURL` depends on the location of the database
    databaseURL: "https://nhat-quang-bd36d-default-rtdb.asia-southeast1.firebasedatabase.app/",
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  // set(ref(db, 'menu/' + '2'), {
  //   username: 'tùng',
  //   email: 'email',
  //   profile_picture: 'imageUrl'
  // });
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
