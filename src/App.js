import './App.css';
import Row from './Row';
import requests from './Requests';

function App() {

  


  return (
    <div className="App">
      <h1>Hey clever programer let's build netflix clone today</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTreding}/>

    </div>
  );
}

export default App;
