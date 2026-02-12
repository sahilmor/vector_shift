import { useState, useEffect } from 'react';
import { Position } from 'reactflow';
import BaseNode from './baseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);

  useEffect(() => {
    const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
    const matches = [...currText.matchAll(regex)].map(match => match[1]);
    setVariables([...new Set(matches)]);
  }, [currText]);

  const nodeHandles = [
    { type: 'source', position: Position.Right, id: 'output' },
    ...variables.map((v, i) => ({
      type: 'target',
      position: Position.Left,
      id: v,
      style: { top: `${(i + 1) * (100 / (variables.length + 1))}%` }
    }))
  ];

  return (
    <BaseNode id={id} label="Text" handles={nodeHandles}>
      <div className="node-field">
        <label className="field-label">Text Content</label>
        <textarea
          className="nodrag text-input"
          value={currText}
          onChange={(e) => setCurrText(e.target.value)}
          style={{
            width: `${Math.max(160, currText.length * 6)}px`,
            height: `${Math.max(40, currText.split('\n').length * 20)}px`
          }}
        />
      </div>
    </BaseNode>
  );
};