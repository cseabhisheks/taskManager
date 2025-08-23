import Authenticate from "./pages/Authenticate"
import Menu from './pages/Menu';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DashboardComponent from "./pages/DashboardComponent";
import Setting from './pages/Setting'
import { ProtectedRoute, PublicRoute } from "./pages/Layout/ProtectedRoute";
export default function App() {



  return (<>
    <BrowserRouter>
      <Routes>

        <Route element={<PublicRoute />}>
          <Route path='/authenticate' element={<Authenticate />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path='/' element={<Menu />}>
            <Route path='' element={<DashboardComponent />} />
            <Route path='setting' element={<Setting />} />
          </Route>
        </Route>




      </Routes>

    </BrowserRouter>


  </>)
}

