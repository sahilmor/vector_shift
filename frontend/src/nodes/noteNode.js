import { Position } from 'reactflow';
import BaseNode from './baseNode';

export const NoteNode = ({ id, data }) => {
  return (
    <BaseNode 
      id={id} 
      label="Sticky Note" 
      handles={[{ type: 'source', position: Position.Right, id: 'output' }]}
    >
      <textarea placeholder="Write a note..." className="nodrag" />
    </BaseNode>
  );
};