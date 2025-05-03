
import {Routes, Route} from 'react-router-dom';

import Home from '../Pages/Home';
import Sobre from '../Pages/Sobre';
import Contato from '../Pages/Contato';
import ProducingRoute from '../Components/Produção/indexRoute';


function RoutesApp(){
    return(
   
       <Routes>
        <Route path='/' element={  <ProducingRoute ativo={false}> <Home/> </ProducingRoute>}/>
        <Route path='/sobre' element={ <ProducingRoute ativo={true}> <Sobre /> </ProducingRoute> }/>
        <Route path='/contato' element={ <ProducingRoute ativo={true}> <Contato/> </ProducingRoute>} />
       </Routes>
    
    )
}

export default RoutesApp;