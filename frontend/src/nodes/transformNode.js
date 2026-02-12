// transformNode.js
import { Position } from 'reactflow';
import BaseNode from './baseNode';

export const TransformNode = ({ id }) => {
  const handles = [
    { type: 'target', position: Position.Left, id: 'input' },
    { type: 'source', position: Position.Right, id: 'output' }
  ];

  return (
    <BaseNode id={id} label="JS Transform" handles={handles}>
      <div className="node-field">
        <label className="field-label">Code Snippet</label>
        <textarea 
          className="nodrag text-input" 
          placeholder="return input.toLowerCase();"
          style={{ height: '60px', fontFamily: 'monospace', fontSize: '11px' }}
        />
      </div>
    </BaseNode>
  );
};