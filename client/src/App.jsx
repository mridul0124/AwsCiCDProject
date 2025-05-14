import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/data')
      .then(res => setData(res.data.message))
      .catch(err => console.error(err));
  }, []);
 
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial' }}>
      <h1>React + Vite Frontend Project</h1>
      <p>Backend says: <strong>{data}</strong></p>
    </div>
  );
}

export default App;
