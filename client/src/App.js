import React, { useState } from 'react';
import './App.css';

function App() {
  const [videoId, setVideoId] = useState('');
  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

  const handleSubmit = (e) => {
    e.preventDefault();
    const encodedVideoId = encodeURIComponent(videoId);
    window.open(`${API_URL}/video?id=${encodedVideoId}`, '_blank');
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
