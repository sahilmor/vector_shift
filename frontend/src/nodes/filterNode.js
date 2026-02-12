import { useState } from 'react';
import { Position } from 'reactflow';
import BaseNode from './baseNode';

export const FilterNode = ({ id }) => {
  const [filter, setFilter] = useState('');
  const handles = [
    { type: 'target', position: Position.Left, id: 'in' },
    { type: 'source', position: Position.Right, id: 'out' }
  ];

  return (
    <BaseNode id={id} label="Filter" handles={handles} icon="🔍">
      <label className="input-label">Condition:</label>
      <input type="text" className="text-input" value={filter} onChange={(e) => setFilter(e.target.value)} placeholder="e.g. x > 5" />
    </BaseNode>
  );
};