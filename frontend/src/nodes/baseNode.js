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
            background: '#555', 
            width: '8px', 
            height: '8px',
            ...handle.style 
          }}
        />
      ))}
    </div>
  );
};

export default BaseNode;