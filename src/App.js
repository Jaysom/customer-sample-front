import React, { useEffect, useState } from 'react';
import './App.css';
import Details from './components/Detail';
import List from './components/List';
function App() {
  const [appState, setAppState] = useState({
    customers: null
  });


  return (
    <div className = 'App'>
     
      <div className = 'customers-container'>  
      <List />
      </div>
    </div>
  );
}
export default App;