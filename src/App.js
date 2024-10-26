import './App.css';
import HelloWorld from './components/helloWorld';
import HelloDunia from './components/helloDunia';
import HelloHeroes from './components/helloHeroes';
import HelloCars from './components/helloCars';
import HelloJomblo from './components/helloJomblo';
import Counter from './components/Counter';
import List from './components/List';
import CRUD from './components/CRUD';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Add from './components/Add'
import Edit from './components/Edit'
import NestedMenu from './components/nestedList';
import { AuthWrapper } from './Auth/AuthWrapper';

function App() {
  return (
    <div className="App">
      {/* <HelloWorld />
      <HelloDunia /> */}

      {/* <HelloHeroes name='Clark' hero='Superman' ability='Super Human' />
      <p>Weakness: Kryptonite</p>
      <button>Like</button>
      <HelloHeroes name='Bruce' hero='Batman' ability='Rich' />
      <p>Weakness: Super Human</p>
      <button>Like</button>
      <HelloHeroes name='Diana' hero='Wonder Woman' ability='Strong Human' />
      <p>Weakness: -</p>
      <button>Like</button> */}

      {/* <HelloCars car='Ferrari' price='5 Miliar Rupiah++'/> */}

      {/* <HelloJomblo /> */}

      {/* <Counter /> */}

      {/* <List /> */}

      {/* <Router>
        <Routes>
          <Route path='/' element = {<CRUD />} />
          <Route path='/create' element = {<Add />} />
          <Route path='/edit' element = {<Edit />} />
        </Routes>
      </Router> */}
      <Router>
        <AuthWrapper />
      </Router>
    </div>
  );
}

export default App;
