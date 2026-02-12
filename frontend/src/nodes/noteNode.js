import BaseNode from './baseNode';

export const NoteNode = ({ id }) => (
  <BaseNode id={id} label="Sticky Note" handles={[]}>
    <textarea 
      placeholder="Documentation..." 
      className="nodrag text-input" 
      style={{ background: '#fef9c3', border: 'none', height: '80px' }} 
    />
  </BaseNode>
);