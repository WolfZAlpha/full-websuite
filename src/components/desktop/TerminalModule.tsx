// src/components/desktop/TerminalModule.tsx
import React, { useState } from 'react';

const TerminalModule = () => {
  const [output, setOutput] = useState<string[]>([]);

  const handleCommand = (command: string) => {
    let newOutput = [...output];
    newOutput.push(`> ${command}`);
    switch (command) {
      case 'clear':
        newOutput = [];
        break;
      case 'npm run ico':
        window.open('https://www.ico.prosperadefi.com', '_blank');
        break;
      case 'npm run dashboard':
        newOutput.push('Opening Dashboard...');
        // Implement dashboard opening logic
        break;
      case 'npm run tokenomics':
        newOutput.push('Opening Tokenomics...');
        // Implement tokenomics opening logic
        break;
      case 'npm run documents':
        newOutput.push('Opening Documents...');
        // Implement documents opening logic
        break;
      case 'npm run settings':
        newOutput.push('Opening Settings...');
        // Implement settings opening logic
        break;
      case 'npm run mp3player':
        newOutput.push('Opening MP3 Player...');
        // Implement MP3 player opening logic
        break;
      default:
        newOutput.push('Command not found');
    }
    setOutput(newOutput);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const command = (event.target as HTMLInputElement).value;
      handleCommand(command);
      (event.target as HTMLInputElement).value = '';
    }
  };

  return (
    <div className="terminal">
      <div className="output">
        {output.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
      <input type="text" onKeyDown={handleKeyDown} />
    </div>
  );
};

export default TerminalModule;
