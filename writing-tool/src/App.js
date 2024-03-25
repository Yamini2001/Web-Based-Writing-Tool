// App.js
import React, { useState } from 'react';
import { Layout, Button } from 'antd';
import Block from './Block';
import './App.css';

const { Header, Content } = Layout;

function App() {
  const [blocks, setBlocks] = useState([]);

  const addBlock = (type) => {
    const newBlock = { type, content: '' };
    setBlocks([...blocks, newBlock]);
  };

  const moveBlock = (index, direction) => {
    const newBlocks = [...blocks];
    const block = newBlocks.splice(index, 1)[0];
    if (direction === 'up') {
      newBlocks.splice(index - 1, 0, block);
    } else {
      newBlocks.splice(index + 1, 0, block);
    }
    setBlocks(newBlocks);
  };

  return (
    <Layout className="layout">
      <Header className="header">
        <h1 className="header-title">Writing Tool</h1>
      </Header>
      <Content className="content">
        <div className="block-container">
          {blocks.map((block, index) => (
            <Block
              key={index}
              block={block}
              index={index}
              moveBlock={moveBlock}
            />
          ))}
        </div>
        <div style={{ textAlign: 'center',margin:'10px'}}>
        <div className="add-block-button">
          <Button onClick={() => addBlock('text')}>Add Text Block</Button>
          <Button onClick={() => addBlock('image')}>Add Image Block</Button>
        </div>
        </div>
      </Content>
    </Layout>
  );
}

export default App;
