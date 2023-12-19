import React from "react";

export function World() {
  const generateRandomEmoji = () => { 
    const isRabbit = Math.random() < 0.5;
    return isRabbit ? '🐇' : '🐿️';
  };


  return (
    <div  style={{ backgroundImage: 'url("/freepik.png")', backgroundColor: '#268b07', width: '90%', height: '90%', borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {[...Array(8)].map((_, index) => (
        <span key={index} style={{ fontSize: '40px' }}>
          {generateRandomEmoji()}
        </span>
      ))}
    </div>
  );
}

