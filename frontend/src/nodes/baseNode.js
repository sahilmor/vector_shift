import { Handle } from 'reactflow';
import './nodes.css';

const BaseNode = ({ id, label, children, handles = [] }) => {
  return (
    <div className="node-container">
      <div className="node-header">
        <span className="node-label">{label}</span>
        <div className="node-icon">✨</div>
      </div>
      <div className="node-content">
        {children}
      </div>
      {handles.map((handle, index) => (
        <Handle
          key={`${id}-handle-${index}`}
          type={handle.type}
          position={handle.position}
          id={`${id}-${handle.id}`}
          style={{ 
            background: '#8b5cf6', 
            width: '10px', 
            height: '10px',
            border: '2px solid #fff',
            ...handle.style 
          }}
        />
      ))}
    </div>
  );
};

export default BaseNode;