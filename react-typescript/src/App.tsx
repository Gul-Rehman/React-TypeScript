
import './App.css';
import Greet from './components/Greet'
import Person from './components/Person';
import PersonList from './components/PersonList';
function App() {
  const names=[
    {
      first:"Gul",
      last:"Rehman"
    },
    {
      first:"Mubashir",
      last:"Amin"
    },
    {
      first:'Rafay',
      last:'Sarwar'
    }
  ]
  return (
    <div className="App">
        <Greet name={'Gul Rehman'}/>
        <Person name={{first:"Gul",last:"Rehman"}}/>
        <PersonList names={names}/>

    </div>
  );
}

export default App;
