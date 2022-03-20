import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router,Route, Routes,} from 'react-router-dom';
import { Login } from './components/pages/Login/Login';
import Cadastro from './components/pages/Cadastro/Cadastro';
import Perfil from './components/pages/Perfil/Perfil';
import Avaliacao from './components/pages/Avaliacao/AvaliacaoEmpresaria';

ReactDOM.render(
  <React.StrictMode>
   
    <App />
                
    <Router>         
           <Routes> 
            <Route path="/Login"  element={<Login/>}></Route>
            <Route path="/Cadastro" element={<Cadastro/>}></Route>
            <Route path="/Perfil" element={<Perfil/>}></Route>
            <Route path="/Avaliacao" element={<Avaliacao/>}></Route>                     
           </Routes>
       </Router>    

  </React.StrictMode>,
  document.getElementById('root')
)
