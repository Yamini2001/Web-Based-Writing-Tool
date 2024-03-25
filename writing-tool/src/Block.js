import React, { useState } from 'react';
import { Button } from 'antd';
import './Block.css';

const Block = ({ block, index, moveBlock }) => {
  const [content, setContent] = useState(block.content);
  const [wordCount, setWordCount] = useState(0);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    console.log("Input Value:", newText); // Check the content of newText
    // Split the text by spaces to count words
    const words = newText.trim().split(' ');
    console.log("Words:", words); // Check the array of words after splitting
    const limitedWords = words.slice(0, 250);
    const limitedText = limitedWords.join(' ');
    
    setContent(limitedText);
    setWordCount(limitedWords.length);

    // Update block content
  };

  return (
    <div className="block">
      {block.type === 'text' ? (
        <div>
          <textarea
            className="text-area"
            placeholder="Enter text..."
            value={content}
            onChange={handleTextChange}
          />
          <p>{wordCount}/250</p>
        </div>
      ) : (
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              // Handle image upload
            }
          }}
        />
      )}
      <div className="block-actions">
        <Button
          onClick={() => moveBlock(index, 'up')}
          disabled={index === 0}
        >
          Move Up
        </Button>
        <Button
          onClick={() => moveBlock(index, 'down')}
          disabled={index === block.length - 1}
        >
          Move Down
        </Button>
      </div>
    </div>
  );
};

export default Block;
