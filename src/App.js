import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import GlobalStyle from './style/GlobalStyle'
import theme from './style/Theme';
import Home from './pages/Home';
import Layout from './layout';
import TestPage from './pages/TestPage';
function App() {
  // const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/test' element={<TestPage />} />
          </Routes>
        </Router>
      </Layout>
      

    </ThemeProvider>
  );
}

export default App;
