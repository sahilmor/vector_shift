import { useState, useEffect } from 'react';
import { Position } from 'reactflow';
import BaseNode from './baseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);

  // Part 3: Dynamic Variable Detection logic
  useEffect(() => {
    const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
    const matches = [...currText.matchAll(regex)].map(match => match[1]);
    setVariables([...new Set(matches)]); // Remove duplicates
  }, [currText]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  // Construct dynamic handles
  const nodeHandles = [
    { type: 'source', position: Position.Right, id: 'output' },
    ...variables.map((v, i) => ({
      type: 'target',
      position: Position.Left,
      id: v,
      // Evenly space handles on the left based on variable count
      style: { top: `${(i + 1) * (100 / (variables.length + 1))}%` }
    }))
  ];

  return (
    <BaseNode id={id} label="Text" handles={nodeHandles}>
      <div className="text-node-wrapper">
        <label className="input-label">Text:</label>
        <textarea
          className="nodrag text-input"
          value={currText}
          onChange={handleTextChange}
          rows={1}
          // Part 3: Dynamic Width/Height Logic
          style={{
            width: `${Math.max(150, currText.length * 7)}px`,
            height: `${Math.max(40, currText.split('\n').length * 20)}px`
          }}
        />
      </div>
    </BaseNode>
  );
};