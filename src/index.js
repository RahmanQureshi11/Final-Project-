import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navbar,Footer } from './components/layout';
import { Home } from './pages/home';
import { Products } from './pages/products';
import { ContactUs } from './pages/contactus';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App(){
  return(
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>
      
    </Routes>

    
 <Footer/>

    </BrowserRouter>
    
    </>
    
  );
  
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


