import logo from './logo.svg';
import './App.css';
import CreateElement from './createElement';
import StateManagement from './practice/stateManagement';
import ParentComponent from './practice/porps/parent';
function App() {
  return (
    <div className="App">
      {/* <CreateElement/>
      <StateManagement/> */}
      <ParentComponent/>
    </div>
  );
}

export default App;
