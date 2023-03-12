
import './App.scss';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import VedioCard from './Components/VedioCard/VedioCard';

function App() {
  return (
    <div className="App">
  <Header />
  <div class="mainBody">
    <Sidebar/>
    <div class="videos">
    <div class="videos__container">
<VedioCard/>
      </div>
     </div>
  </div>
</div>

  );
}

export default App;
