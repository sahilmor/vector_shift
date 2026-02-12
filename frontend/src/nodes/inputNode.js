import { useState } from 'react';
import { Position } from 'reactflow';
import BaseNode from './baseNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handles = [{ type: 'source', position: Position.Right, id: 'value' }];

  return (
    <BaseNode id={id} label="Input" handles={handles}>
      <div className="node-field">
        <label className="field-label">Name</label>
        <input className="node-input" type="text" value={currName} onChange={(e) => setCurrName(e.target.value)} />
      </div>
      <div className="node-field">
        <label className="field-label">Type</label>
        <select className="node-select" value={inputType} onChange={(e) => setInputType(e.target.value)}>
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </div>
    </BaseNode>
  );
};