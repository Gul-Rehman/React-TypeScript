
import './App.css';
import Greet from './components/Greet'
import Heading from './components/Heading';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
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
        {/* <Greet name={'Gul Rehman'}/>
        <Person name={{first:"Gul",last:"Rehman"}}/>
        <PersonList names={names}/> */}
        <Status status='error' />
        <Heading>Hello I am writing in heading</Heading>
    </div>
  );
}

export default App;
