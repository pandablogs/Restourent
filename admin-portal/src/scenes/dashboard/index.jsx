import React, { useState } from 'react';
import '../../index.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Admin Dashboard</h1>
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          Toggle Sidebar
        </button>
      </header>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Users</li>
            <li>Settings</li>
          </ul>
        </nav>
      </div>
      <main className="content">
        <p>Welcome to the admin dashboard.</p>
      </main>
    </div>
  );
}

export default App;
