import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { FormProvider, useForm } from 'react-hook-form';
import GlobalStyle from './style/GlobalStyle'
import theme from './style/Theme';
import Home from './pages/Home';
import Event from './pages/Event';
import BizSupport from './pages/BizSupport';
import TestPage from './pages/TestPage';
import List from './pages/List';
import Board from './components/Post/Borad';
import Login from './pages/Login';
import SignUp from './pages/SignUp';


function App() {
  const method = useForm();
  return (
    <ThemeProvider theme={theme}>
      <FormProvider {...method}>
    
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
              <Route path='/test' element={<TestPage />} />
              <Route path='/board' element={<Board />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<SignUp />} />
            </Routes>
          </Router>
      </FormProvider>          
    </ThemeProvider>
  );
}

export default App;
