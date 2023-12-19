import React from "react";

export function World() {
  const generateRandomEmoji = () => {
    const emojis = ['🐇', '🐿️']; 
    const isRabbit = Math.random() < 0.5;
    return isRabbit ? '🐇' : '🐿️';
  };

  return (
    <div style={{ backgroundColor: '#268b07', width: '500px', height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {[...Array(8)].map((_, index) => (
        <span key={index} style={{ fontSize: '24px' }}>
          {generateRandomEmoji()}
        </span>
      ))}
    </div>
  );
}

