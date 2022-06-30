import './App.css';
import Navbar from './Components/Navbar/Navbar';
import bg from './Assets/bg.jpg';

function App() {
  return (
    <section className='overflow-hidden bg-no-repeat bg-cover bg-fixed h-screen' style={{ backgroundImage: `url(${bg})` }}>
      <Navbar />
    </section>
  );
}

export default App;
