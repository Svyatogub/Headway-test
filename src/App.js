import './App.css';
import { FifthSlide } from './components/FifthSlide';
import { FirstSlide } from './components/FirstSlide';
import { FourthSlide } from './components/FourthSlide';
import { Header } from './components/Header';
import { SecondSlide } from './components/SecondSlide';
import { SeventhSlide } from './components/SeventhSlide';
import { SixthSlide } from './components/SixthSlide';
import { ThirdSlide } from './components/ThirdSlide';

function App() {
  return (
    <div className="App">
      <Header/>
        <div className="Content">
          <FirstSlide/>
          <SecondSlide/>
          <ThirdSlide/>
          <FourthSlide/>
          <FifthSlide/>
          <SixthSlide/>
          <SeventhSlide/>
        </div>
    </div>
  );
}

export default App;
