import { ReactFlowProvider } from 'reactflow'; // 1. Add this import
import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div>
      {/* 2. Wrap everything in ReactFlowProvider */}
      <ReactFlowProvider>
        <PipelineToolbar />
        <PipelineUI />
        <SubmitButton />
      </ReactFlowProvider>
    </div>
  );
}

export default App;