import './App.css';
import WorkExperianceSlices from './Components/WorkExperiance/WorkExperianceSlices';
import Form from './Components/Form';

function App() {
  return (
    <div className="App">
      <div className="form">
        <WorkExperianceSlices />
        <Form />
      </div>
    </div>
  );
}

export default App;
