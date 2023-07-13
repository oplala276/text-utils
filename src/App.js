import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
function App() {
  return (
    <>
      <Navbar />
      <div className="container my-4">
        {/* <About /> */}
        <TextForm />
      </div>
    </>
  );
}

export default App;
