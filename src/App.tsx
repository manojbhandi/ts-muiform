import './App.css';
import { MyForm } from './MyForm';

function App() {
  return (
    <div className="App">
      <MyForm onSubmit={({ firstName, lastName, email }) => {
        console.log(firstName, lastName, email)
      }} />
    </div>
  );
}

export default App;
