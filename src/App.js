import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Elementary from './pages/Elementary';
import Intermediate from './pages/Intermediate';
import UpperIntermediate from './pages/UpperIntermediate';
import Reading from './pages/Reading';
import Quiz from './pages/Quiz';
import Essay from './pages/Essay';

function App() {
  return (
    <div className='bg-stone-50 h-screen'>
      <Navbar />
      <div className='container mx-auto'>
        <Routes>
          <Route path='/elementary' element={<Elementary />} />
          <Route path='/intermediate' element={<Intermediate />} />
          <Route path='/upper-intermediate' element={<UpperIntermediate />} />
          <Route path='/reding' element={<Reading />} />
          <Route path='/qa' element={<Quiz />} />
          <Route path='/essay' element={<Essay />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
