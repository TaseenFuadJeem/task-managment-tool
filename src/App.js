import './App.css';
import Navbar from './Components/Navbar/Navbar';
import bg from './Assets/bg.jpg';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Todo from './Components/To-do/Todo';
import CompletedTasks from './Components/CompletedTask/CompletedTasks';
import Calender from './Components/Calender/Calender';
import InvalidPage from './Components/InvalidPage/InvalidPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <section className='overflow-hidden bg-no-repeat bg-cover bg-fixed' style={{ backgroundImage: `url(${bg})` }}>

      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/to-do' element={<Todo />} />
        <Route path='/completed-tasks' element={<CompletedTasks />} />
        <Route path='/calender' element={<Calender />} />
        <Route path='*' element={<InvalidPage />} />
      </Routes>

      <Footer />

      <ToastContainer />
    </section>
  );
}

export default App;
