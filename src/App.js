import React, { useEffect } from 'react';

const App = () => {
  const drumPadData = [
    { id: 'Snare', text: 'Q', audioSrc:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },
    { id: 'Heater 2', text: 'W', audioSrc:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"  },
    { id: 'Heater 3', text: 'E', audioSrc:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"  },
    { id: 'Heater 4', text: 'A', audioSrc:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"  },
    { id: 'Clap', text: 'S', audioSrc:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"  },
    { id: 'Open-HH', text: 'D', audioSrc:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"  },
    { id: 'Kick-n-Hat', text: 'Z', audioSrc:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"  },
    { id: 'Kick', text: 'X', audioSrc:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"  },
    { id: 'Closed-HH', text: 'C', audioSrc:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"  },
  ];

  const handlePadClick = (pad) => {
    const audioElement = document.getElementById(pad.text);

    if (audioElement) {
      audioElement.currentTime = 0; 
      audioElement.play();
      document.getElementById("display").innerText = pad.id;
    }
  };
  const handleKeyDown = (event) => {
    const pressedPadData = drumPadData.find((pad) => pad.text === event.key.toUpperCase());

    if (pressedPadData) {
      handlePadClick(pressedPadData);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    
        return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []); 

  return (
    <div id="drum-machine">
      <div id="display"></div>
      <div className="drum-pads">
        {drumPadData.map((pad) => (
          <div key={pad.id} className="drum-pad" id={pad.id} onClick={() => handlePadClick(pad)}>
            {pad.text}
            <audio className="clip" id={pad.text} src={pad.audioSrc}></audio>
          </div>
        ))}
      </div>
      {/* Other elements can be added here */}
    </div>
  );
}

export default App;

