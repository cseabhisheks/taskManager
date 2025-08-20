import Authenticate from "./pages/authenticate"
import Menu from './pages/Menu';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DashboardLayout from "./layout/DashboardLayout";
import Setting from './pages/Setting'
export default function App() {



  return (<>
    <BrowserRouter>
      <Routes>
        <Route path='/authenticate' element={<Authenticate />} />
        <Route path='/' element={<Menu />}>
          <Route path='' element={<DashboardLayout/>} />
          <Route path='setting' element={<Setting/>}/>
        </Route>
      </Routes>

    </BrowserRouter>


  </>)
}

