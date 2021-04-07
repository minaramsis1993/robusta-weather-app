import './App.css';
import CityDetails from './components/CurrentCityDetails';
import CurrentCity from './components/CurrentCitySection';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Header />
        <CurrentCity />
        <CityDetails />
      </div>
    </div>
  );
}

export default App;
