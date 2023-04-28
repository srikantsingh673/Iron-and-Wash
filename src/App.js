import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Main from './Components/Main';
import Schedule from './Components/Schedule';
import Result from './Components/Result';
import Navigation from './Components/Navigation';
import Support from './Components/Support';

function App() {
  return (
    <div>
      <Navigation/>
      <Container fluid="md">
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Main/>} />
            <Route path='/schedule' element={<Schedule/>} />
            <Route path='/result' element={<Result/>} />
          </Routes>
        </BrowserRouter>
        <Support/>
      </Container>
      
    </div>
  );
}

export default App;
