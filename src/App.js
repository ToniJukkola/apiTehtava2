
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const URL = 'http://www.omdbapi.com/';
const API_KEY = '81981094';

function App() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  
  
  useEffect(() => {
    const parameter = '?t=tt';
    const address = URL + parameter + "&apikey=" + API_KEY;
  
    axios.get(address)
    .then((response) => {
      ///console.log(response.data);
      setItems(response.data.plot);
      console.log(response.data);
    }).catch(error => {
      alert(error);
    });

  }, []);
    
  

  return (
 <div>
   <h3>Random movies</h3>
   <div>
       {items?.map(item =>(
         <div key={item.title} onClick={e => setSelectedItem(item)}> 
           <h3>{items.plot}</h3>
           <p>{items.year}</p>
         </div>
     ))}
     
   </div>
 </div>
  );
}

export default App;
