import { Position } from 'reactflow';
import BaseNode from './baseNode';

export const LLMNode = ({ id }) => {
  const handles = [
    { type: 'target', position: Position.Left, id: 'system', style: { top: '33%' } },
    { type: 'target', position: Position.Left, id: 'prompt', style: { top: '66%' } },
    { type: 'source', position: Position.Right, id: 'response' },
  ];

  return (
    <BaseNode id={id} label="LLM" handles={handles}>
      <p style={{ fontSize: '13px', margin: 0 }}>Advanced Language Model Instance</p>
    </BaseNode>
  );
};