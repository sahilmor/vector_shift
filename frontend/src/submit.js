import { useReactFlow } from 'reactflow';
import './submit.css'; // Optional: for styling the button

export const SubmitButton = () => {
    // useReactFlow hook allows us to grab the current state of the entire canvas
    const { getNodes, getEdges } = useReactFlow();

    const handleSubmit = async () => {
        const nodes = getNodes();
        const edges = getEdges();

        try {
            const response = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nodes, edges }),
            });

            if (response.ok) {
                const data = await response.json();
                
                // Displaying the results in a user-friendly alert as requested in Part 4
                alert(
                    `🚀 Pipeline Analysis:\n\n` +
                    `• Total Nodes: ${data.num_nodes}\n` +
                    `• Total Edges: ${data.num_edges}\n` +
                    `• Is Valid DAG: ${data.is_dag ? 'Yes (No Cycles) ✅' : 'No (Cycles Detected) ❌'}`
                );
            } else {
                alert('Backend Error: Failed to parse pipeline.');
            }
        } catch (error) {
            console.error('Submission Error:', error);
            alert('Connection Error: Make sure your FastAPI server is running on localhost:8000');
        }
    };

    return (
        <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            padding: '20px' 
        }}>
            <button 
                type="submit" 
                onClick={handleSubmit}
                className="submit-button"
            >
                Submit Pipeline
            </button>
        </div>
    );
};