from fastapi import FastAPI, Body
from fastapi.middleware.cors import CORSMiddleware
import networkx as nx

app = FastAPI()

# Enable CORS so your React frontend (localhost:3000) can talk to this backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: dict = Body(...)):
    """
    Expects JSON body: { "nodes": [...], "edges": [...] }
    Returns count of nodes, edges, and if the structure is a DAG.
    """
    nodes = pipeline.get('nodes', [])
    edges = pipeline.get('edges', [])

    num_nodes = len(nodes)
    num_edges = len(edges)

    # Logic to check if the graph is a DAG
    # 1. Initialize a Directed Graph
    G = nx.DiGraph()

    # 2. Add nodes and edges to the graph
    for node in nodes:
        G.add_node(node.get('id'))
    
    for edge in edges:
        G.add_edge(edge.get('source'), edge.get('target'))

    # 3. Check for cycles
    # A graph is a DAG if it is directed and has no cycles.
    is_dag = nx.is_directed_acyclic_graph(G)

    return {
        'num_nodes': num_nodes,
        'num_edges': num_edges,
        'is_dag': is_dag
    }