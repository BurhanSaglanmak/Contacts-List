
import { useState } from 'react';
import './App.css';
import Contact from './components/Contact';
import Filter1 from './components/Filter1';

function App() {
  const [callName,setCallName]=useState([]);
  return (
    <div className="App" id='container'>
      <h1>Contacts</h1>
      <Filter1 callName={callName} />
      <Contact setCallName={setCallName}   callName={callName}  />
    </div>
  );
}

export default App;
