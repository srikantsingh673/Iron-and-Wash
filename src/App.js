import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Main from './Components/Main';
import Schedule from './Components/Schedule';

function App() {
  return (
    <div className='App'>
      <Container fluid="md">
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Main/>} />
            <Route path='/schedule' element={<Schedule/>} />
          </Routes>
        </BrowserRouter>
      </Container>

    </div>
  );
}

export default App;
