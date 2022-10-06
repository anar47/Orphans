import { Route, Routes} from 'react-router-dom'
import Auth from './components/Auth';
import Quiz from './pages/Quiz';
import Essay from './pages/Essay';
import Submit from './pages/Submit';

function App() {
  return (
    <div className='bg-stone-50 h-screen'>
      <div className='container mx-auto'>
        <Routes>
          <Route path='/auth' element={<Auth />} />
          <Route path='/essay' element={<Essay/>} />
          <Route path='/submit' element={<Submit/>}/>
          <Route path='*' element={<Quiz/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
