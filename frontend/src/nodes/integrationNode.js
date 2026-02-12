// integrationNode.js
import { useState } from 'react';
import { Position } from 'reactflow';
import BaseNode from './baseNode';

export const IntegrationNode = ({ id }) => {
  const [channel, setChannel] = useState('#general');
  const handles = [{ type: 'target', position: Position.Left, id: 'message' }];

  return (
    <BaseNode id={id} label="Slack Notify" handles={handles}>
      <div className="node-field">
        <label className="field-label">Channel</label>
        <input 
          className="node-input" 
          value={channel} 
          onChange={(e) => setChannel(e.target.value)} 
        />
      </div>
    </BaseNode>
  );
};