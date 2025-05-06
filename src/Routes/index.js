
import {Routes, Route} from 'react-router-dom';

import Home from '../Pages/Home';
import Sobre from '../Pages/Sobre';
import Contato from '../Pages/Contato';
import Mercadao from '../Pages/Mercadao';
import ProducingRoute from '../Components/Produção/indexRoute';


function RoutesApp(){
    return(
   
       <Routes>
        <Route path='/' element={  <ProducingRoute ativo={false}> <Home/> </ProducingRoute>}/>
        <Route path='/sobre' element={ <ProducingRoute ativo={false}> <Sobre /> </ProducingRoute> }/>
        <Route path='/Contato' element={ <ProducingRoute ativo={true}> <Contato/> </ProducingRoute>} />
        <Route path='/Mercadao' element={ <ProducingRoute ativo={false}> <Mercadao/> </ProducingRoute> } />
       </Routes>
    
    )
}

export default RoutesApp;