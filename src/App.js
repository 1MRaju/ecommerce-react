import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header';
import Home from './Component/Home';
import Cart from './Component/Cart';
import './Component/styles.css'

function App() {
  return (
    
    <BrowserRouter>
    
    <div className="App">
      <Header />  
    <Routes>
        <Route path="/" exact element={<Home/>}/>

        <Route path="/cart" element={<Cart/>}/>
    </Routes>
      
      </div>
      </BrowserRouter>
    
  );
}

export default App;
