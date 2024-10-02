import Greetings from './components/greetings'
import './App.css';
import UserProfile from './components/userProfile'
function App() {
  return (
    <div className="App">
      <Greetings name='Ananya'/>
      <Greetings name='Anju'/>
      <UserProfile user={{"name":'Ananya',email:'anu@gmail.com'}}/>
    </div>
  );
}

export default App;
