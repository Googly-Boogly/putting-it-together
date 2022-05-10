import logo from './logo.svg';
import './App.css';
import SomeClassComponent from './components/components_comp';


function App() {
  return (
    <div className="App">
      <SomeClassComponent firstName="Jane" lastName="Doe" age="45" hairColor="Black"/>
      <SomeClassComponent firstName="Smith" lastName="John" age="56" hairColor="Yellow"/>
      <SomeClassComponent firstName="Fill" lastName="More" age="2" hairColor="Red"/>
      <SomeClassComponent firstName="Maria" lastName="Maria" age="156" hairColor="Invisible"/>
    </div>
  );
}

export default App;
