// logicNode.js
import { Position } from 'reactflow';
import BaseNode from './baseNode';

export const LogicNode = ({ id }) => {
  const handles = [
    { type: 'target', position: Position.Left, id: 'input' },
    { type: 'source', position: Position.Right, id: 'true', style: { top: '30%', background: '#22c55e' } },
    { type: 'source', position: Position.Right, id: 'false', style: { top: '70%', background: '#ef4444' } }
  ];

  return (
    <BaseNode id={id} label="Condition" handles={handles}>
      <div className="node-field">
        <select className="node-select">
          <option value="exists">Exists</option>
          <option value="contains">Contains</option>
          <option value="equals">Equals</option>
        </select>
      </div>
    </BaseNode>
  );
};