import './App.css';
import Router1 from './routes/Router1';
import './style.css';
import ReactGA from 'react-ga4';
import { BrowserRouter } from 'react-router-dom';
import Analytics from './Analytics';

function App() {
  // Initialize Google Analytics with your measurement ID
  ReactGA.initialize('G-WZ6YB7NNHN');

  return (
    <BrowserRouter>
      <Analytics /> {/* Tracks page views automatically */}
      <div className="App">
        <Router1 />
      </div>
    </BrowserRouter>
  );
}

export default App;
