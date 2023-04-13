import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import GlobalStyle from './style/GlobalStyle'
import theme from './style/Theme';
import Home from './pages/Home';
import Event from './pages/Event';
import BizSupport from './pages/BizSupport';
import List from './pages/List';
import Board from './components/Post/Board';
import Login from './pages/Login';
import Register from './pages/Register';
import FindAccount from './pages/FindAccount';
import FreeApply from './pages/FreeApply';
import { useForm, FormProvider } from "react-hook-form";
import EditProfile from './pages/EditProfile';
import InsuranceInfo from './pages/InsuranceInfo';
import PrivateRoute from './pages/PrivateRoute';
import PublicRoute from './pages/PublicRoute';
import EditPassword from './pages/EditPassword';


function App() {
  const methods = useForm({
    mode: 'onBlur'
  });
  const auth = localStorage.getItem("@access-Token");
  

  return (
    <ThemeProvider theme={theme}>
      <FormProvider {...methods}>
        <GlobalStyle />
        <Router>
          <Routes>
            <Route path='/' element={<PublicRoute component={<Home />} />} />
            <Route path='?:category'  element={<PublicRoute componen={<Home />}/>} />
            <Route path='/view?:id'  element={<Home />} />
            <Route path='?:page'  element={<Home />} />
            <Route path='/event' element={<Event />} />
            <Route path='/bizsupport/*' element={<BizSupport />} />
            <Route path='/bizsupport/:list' element={<List />} />
            <Route path='/insuranceInfo' element={<InsuranceInfo />} />
            <Route path='/freeApply' element={<FreeApply />} />

            <Route path='/myProfile' element={<PrivateRoute auth={auth} component={<EditProfile />} />} />
            <Route path='/myProfile/password' element={<PrivateRoute auth={auth} component={<EditPassword />} />} />
            <Route path='/board' element={<Board />} />
            <Route path='/login' element={<PublicRoute auth={auth} restricted component={<Login />}/>} />
            <Route path='/login/findAccount' element={<PublicRoute auth={auth} restricted component={<FindAccount />}/>} />
            <Route path='/register' element={<PublicRoute auth={auth} restricted component={<Register />} />} />
          </Routes>
        </Router>       
      </FormProvider>
    </ThemeProvider>
  );
}

export default App;
