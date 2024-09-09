import { useState } from 'react';
import './App.css';
import sprite from "./assets/sprite.svg"; // Ensure sprite.svg is in the assets folder

function App() {
  // Set default icon to 'facebook'
  const [selectedIcon, setSelectedIcon] = useState('facebook');

  const toggleIcon = () => {
    setSelectedIcon((prevIcon) => {
      switch (prevIcon) {
        case 'facebook':
          return 'twitter';
        case 'twitter':
          return 'instagram';
        case 'instagram':
          return 'linkedin';
        case 'linkedin':
          return 'youtube';
        default:
          return 'facebook';
      }
    });
  };

  return (
    <div>
      <h2>Current Icon: {selectedIcon.charAt(0).toUpperCase() + selectedIcon.slice(1)}</h2>
      
      {/* Conditionally render the selected icon */}
      <svg className="icon">
        <use xlinkHref={`#${selectedIcon}`} />
      </svg>

      <div>
        <button onClick={toggleIcon} style={{ marginTop: '20px' }}>
          Toggle Icon
        </button>
      </div>
    </div>
  );
}

export default App;
