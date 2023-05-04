import logo from './logo.svg';
import './App.css';
import Laptops from './components/Laptop';
import { Route, Routes } from 'react-router-dom';
import Laptopdetail from './components/Laptopdetail';
import SearchBox from './components/SearchBox';
import SearchBackend from './components/SearchBackend';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='laptops' element={<Laptops/>}/>
        <Route path=':id' element={<Laptopdetail/>}/>
        <Route path='detail/:id' element={<Laptopdetail/>}/>
        <Route path='' element={<SearchBox/>}/>
        <Route path='search/:keyword' element={<SearchBackend/>}/>
      </Routes>
    </div>
  );
}

export default App;
