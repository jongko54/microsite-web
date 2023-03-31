import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import GlobalStyle from './style/GlobalStyle'
import theme from './style/Theme';
import Home from './pages/Home';
import Event from './pages/Event';
import BizSupport from './pages/BizSupport';
import TestPage from './pages/TestPage';
import List from './pages/List';
import Board from './components/Post/Board';
import Login from './pages/Login';
import Register from './pages/Register';
import FindAccount from './pages/FindAccount';
import FreeApply from './pages/FreeApply';
import { useForm, FormProvider } from "react-hook-form";

function App() {
  const methods = useForm({
    mode: 'onChange'
  });
  
  

  return (
    <ThemeProvider theme={theme}>
      <FormProvider {...methods}>
        <GlobalStyle />
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='?:category'  element={<Home />} />
            <Route path='/view?:id'  element={<Home />} />
            <Route path='?:page'  element={<Home />} />
            <Route path='/event' element={<Event />} />
            <Route path='/bizsupport/*' element={<BizSupport />} />
            <Route path='/bizsupport/:list' element={<List />} />
            <Route path='/freeApply' element={<FreeApply />} />
            <Route path='/test' element={<TestPage />} />
            <Route path='/board' element={<Board />} />
            <Route path='/login' element={<Login />} />
            <Route path='/login/findAccount' element={<FindAccount />} />
            <Route path='/login/findAccount?:search' element={<FindAccount />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </Router>       
      </FormProvider>
    </ThemeProvider>
  );
}

export default App;
