// fileNode.js
import { Position } from 'reactflow';
import BaseNode from './baseNode';

export const FileNode = ({ id }) => {
  const handles = [{ type: 'source', position: Position.Right, id: 'file-out' }];

  return (
    <BaseNode id={id} label="File Input" handles={handles}>
      <div className="node-field">
        <label className="field-label">Upload Data</label>
        <input type="file" className="node-input" style={{ fontSize: '10px' }} />
      </div>
    </BaseNode>
  );
};