
import './App.css';
import ButtonAlert from './Profile/ButtonAlert';
import Profile from './Profile/Profile';

function App() {
  const handleName=name=> alert(name)
  return (
    <div className="App">
    <Profile name="nawress" familyName="laouissi"  >
      <img src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg" alt='profile pic'></img>
    </Profile>
    <Profile bio="web development learner" />
    <Profile profession="student" />
    <ButtonAlert handleName={handleName} name="Nawress"/>
    </div>
  );
}

export default App;
