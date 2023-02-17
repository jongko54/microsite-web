import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import GlobalStyle from './style/GlobalStyle'
import theme from './style/Theme';
import Home from './pages/Home';

import TestPage from './pages/TestPage';
function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      
        <Router>
          <Routes>
          
            <Route path='/' element={<Home />} />
            <Route path='/test' element={<TestPage />} />
       
          </Routes>
        </Router>
   
      

    </ThemeProvider>
  );
}

export default App;
