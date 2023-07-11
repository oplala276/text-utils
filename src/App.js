import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar />
      <div className="container my-4">

        <TextForm />
      </div>
    </>
  );
}

export default App;
