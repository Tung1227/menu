import logo from './logo.svg';
import './App.css';
import { getDatabase, ref, set } from "firebase/database";
import { initializeApp } from "firebase/app";


function App() {
  const firebaseConfig = {
    // ...
    // The value of `databaseURL` depends on the location of the database
    databaseURL: "https://nhat-quang-bd36d-default-rtdb.asia-southeast1.firebasedatabase.app/",
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  set(ref(db, 'menu/' + '2'), {
    username: 'tùng',
    email: 'email',
    profile_picture: 'imageUrl'
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
