import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import LoadCountries from './Components/LoadCountries/LoadCountries';
import ShowCountry from './Components/ShowCountry/ShowCountry';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <LoadCountries></LoadCountries>
      

    </div>
  );
}

export default App;
