import { useState } from 'react';
import './App.css';
import AddEmployee from './Components/AddEmployee';
import DisplayTable from './Components/DisplayTable';
import Header from './Components/Header';

function App() {
  // state shifting
  const [addEmpResponse,setAddEmpResponse] = useState("")
  return (
    <div >
      <Header />
      <AddEmployee setAddEmpResponse={setAddEmpResponse} />
      <DisplayTable addEmpResponse={addEmpResponse}/>
    </div>
  );
}

export default App;
