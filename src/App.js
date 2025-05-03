import {BrowserRouter} from 'react-router-dom';
import RoutesApp from './Routes';
import Header from './Components/Header';
import Footer from './Components/Footer/Footer';


export default function App() {
  return (
   <BrowserRouter>
    <Header/>
    <RoutesApp/>
    <Footer/>
   </BrowserRouter>
  )
}


