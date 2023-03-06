import logo from './logo.svg';
import './App.css';
import Home from './home';
import {BrowserRouter ,Routes ,Route} from 'react-router-dom';
import Uicolor from './uicolor';
import Script from './Script';
import Modals from './modals';
import Simpletable from './simpletable';
import Progressbar from './progressbar';
import Category from './category';
import Subcategory from './subcategory';
import Formbasics from './formbasic';
import Property from './property';
import Size from './size';
import DispalyData from './DispalyData';
import Login from './login';
import Registration from './registration';


function App() {
  return (
  <>
    <BrowserRouter>
    <Routes><Route path='/'element={<Home/>}/>
    <Route path='/ui-color'element={<Uicolor/>}/>
    <Route path='/modals'element={<Modals/>}/>
    <Route path='/simpletable'element={<Simpletable/>}/>
    <Route path='/progressbar'element={<Progressbar/>}/>
    <Route path='/category' element={<Category/>}/>
    <Route path='/subcategory' element={<Subcategory />}/>
    <Route path='/formbasic' element={<Formbasics />}/>
    <Route path='/property' element={<Property />}/>
    <Route path='/size' element={<Size />}/>
    <Route path="/display" element={<DispalyData/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Registration/>}/>
    
      </Routes>
      </BrowserRouter>
      <Script/>
  </>
  );
}

export default App;
