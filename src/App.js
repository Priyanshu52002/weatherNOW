import logo from './logo.svg';
import './App.css';
import Container from './components/Container';
import { useWeather } from './context/weather';
import { useEffect } from 'react';
function App() {
  const weather=useWeather();
  useEffect(()=>{
    weather.fetchLocation();
  },[]);
  return (
    <div className="App">
      <Container/>
    </div>
  );
}

export default App;
