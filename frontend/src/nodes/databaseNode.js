// databaseNode.js
import { Position } from 'reactflow';
import BaseNode from './baseNode';

export const DatabaseNode = ({ id }) => {
  const handles = [
    { type: 'target', position: Position.Left, id: 'db-in' },
    { type: 'source', position: Position.Right, id: 'db-out' }
  ];

  return (
    <BaseNode id={id} label="Database" handles={handles}>
      <div className="node-field">
        <label className="field-label">Table Name</label>
        <input className="node-input" placeholder="users_table" />
      </div>
    </BaseNode>
  );
};