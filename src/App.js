import { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.svg'; // Імпортуйте логотип

function App() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(null);
  const [id, setId] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/people/${id}/`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleInputChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        {data ? (
          <div class>
            <h2>{data.name}</h2>
            <p>{data.height}</p>
            <p>{data.mass}</p>
            <p>{data.hair_color}</p>
            <p>{data.skin_color}</p>
            <p>{data.eye_color}</p>
            <p>{data.birth_year}</p>
            <p>{data.gender}</p>

          </div>
        ) : (
          'Loading...'
        )}
        {show && <img src={logo} className="App-logo" alt="logo" />} {/* Використовуйте logo */}
        <input type="text" value={id} onChange={handleInputChange} />
        <button onClick={() => setShow(!show)}>Switch</button>
      </header>
    </div>
  );
}

export default App;
