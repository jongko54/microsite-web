import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import GlobalStyle from './style/GlobalStyle'
import theme from './style/Theme';
import Home from './pages/Home';
import Event from './pages/Event';
import BizSupport from './pages/BizSupport';
import TestPage from './pages/TestPage';
import List from './pages/List';
import Board from './components/Post/Borad';
function App() {

  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/event' element={<Event />} />
          <Route path='/bizsupport/*' element={<BizSupport />} />
          <Route path='/bizsupport/:list' element={<List />} />
          <Route path='/test' element={<TestPage />} />
          <Route path='/board' element={<Board />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
