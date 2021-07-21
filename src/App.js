import logo from './logo.svg';
import './App.css';
import Ekle from './Ekle';
import ReactDOMServer from 'react-dom/server';

function App() {
  return (
    <div className="App">
 
 <Ekle/>

    </div>
  );
}

export default App;
ReactDOMServer.renderToString(<App />);