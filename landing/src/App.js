import logo from './dogparty.jpg';
import './App.css';
import FormRegistration from './FormRegistration';

function App() {
  return (
    <div className="App">
      <div>
        <img src={logo} className="banner-logo" alt="banner" />
        <div className='wrapper'>
          <h1>!Es mi cumpleaños!</h1>
          <p>Registrate para ir a la celebración</p>
          <FormRegistration/>
        </div>
      </div>
    </div>
  );
}

export default App;
