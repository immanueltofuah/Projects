import logo from './logo.svg';
import './App.css';
import './component/ClassCounter'
import ClassCounter from './component/ClassCounter';
import  FunctionCounter  from './component/FunctionCouter';

function App() {
  return (
    <div className="App">
      <ClassCounter />
      <FunctionCounter />
    </div>
  );
}

export default App;
