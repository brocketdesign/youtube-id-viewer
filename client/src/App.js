import React, { useState } from 'react';
import './App.css';

function App() {
  const [videoId, setVideoId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(`http://localhost:3000/video/${videoId}`, '_blank');
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={videoId} 
            onChange={(e) => setVideoId(e.target.value)} 
            placeholder="Enter YouTube Video ID"
          />
          <button type="submit">Watch Video</button>
        </form>
      </header>
    </div>
  );
}

export default App;
