import { useEffect, useState } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Records from './components/records'
import Single from './components/single'
import Create from './components/newRecord'
import Edit from './components/editRecord'
import './App.css';

function App() {

  const [records, setRecords] = useState([])

  useEffect (() => {
    axios.get('http://localhost:3003/records')
    .then(res => setRecords(res.data))
  }, [])


  return (
    <div className="App">
    <h1> Hurry Up and Buy!</h1>
    <Router>

      <nav> <Link to = '/'>Home Page</Link></nav>

      <Routes>

        <Route path = '/' element = {<Records/>}></Route>
        <Route path = '/:id' element = {<Single/>} />
        <Route path = '/studio' element = {<Create/>} />
        <Route path = '/:id/edit' element = {<Edit/>} />

      </Routes>

    </Router>
    </div>
  );
}

export default App;
