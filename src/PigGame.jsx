import React, { useState } from 'react';

const PigGame = () => {
  const [level, setLevel] = useState(0);
  const [size, setSize] = useState(100); 
  const [pigImage, setPigImage] = useState('https://www.khaosod.co.th/wpapp/uploads/2024/09/Nong-Moo-Deng4548-5.jpg'); 

  const feedPig = (foodValue) => {
    const newLevel = level + foodValue;
    setLevel(newLevel);
    setSize(size + foodValue * 2); 

    if (newLevel > 100) {
      setPigImage('/phu.png'); 
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Level: {level}</h1>
      <img 
        src={pigImage} 
        alt="pig" 
        style={{ width: `${size}px`, height: `${size}px` }} 
      />
      <div>
        <button onClick={() => feedPig(5)}>แตงโม (+5)</button>
        <button onClick={() => feedPig(10)}>ฟักทอง (+10)</button>
        <button onClick={() => feedPig(20)}>หญ้า (+20)</button>
      </div>
    </div>
  );
};

export default PigGame;
