import Navbar from '../src/components/Navbar'
import Heropage from '../src/components/Heropage'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Secon from './components/Secon';
import Third from './components/Third';
import Fourth from './components/Fourth';
import Fivth from './components/Fivth';
import Sixth from './components/Sixth';
import Seven from './components/Seven';
import Eight from './components/Eight';




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Heropage/>
      <Secon/>
      <Third/>
      <Fourth/>
      <Fivth/>
      <Sixth/>
      <Seven/>
      {/* <Eight/> */}
    </div>
  );
}

export default App;
