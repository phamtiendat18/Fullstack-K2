"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  useReactFlow,
  MiniMap,
  Background,
  Panel,
} from "reactflow";
import "reactflow/dist/style.css";
import CustomNode from "../CustomNode/CustomNode";
import { useParams } from "next/navigation";
import EditText from "../EditText/EditText";
const initialNodes = [
  {
    id: "0",
    type: "customNode",
    data: { label: "Công việc của bạn", id: 0 },
    position: { x: 0, y: 50 },
  },
];
const nodeTypes = { customNode: CustomNode };
let id = 1;
const getId = () => `${id++}`;

const AddNodeOnEdgeDrop = () => {
  const param = useParams();
  // console.log(param);
  let valueRef = useRef("");
  const reactFlowWrapper = useRef(null);
  const [name, setName] = useState("");
  const connectingNodeId = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const { screenToFlowPosition } = useReactFlow();
  const [rfInstance, setRfInstance] = useState(null);
  useEffect(() => {
    const getNode = async () => {
      const api = `https://mindmapdb.onrender.com/api/v1/mindmap/${param?.id}`;
      const response = await fetch(api, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      const flow = data?.data[0];
      valueRef.current = data?.name;
      document.title = data?.name;
      if (flow) {
        // const { x = 0, y = 0, zoom = 1 } = flow.viewport;
        id = flow?.nodes.length;

        setNodes(flow.nodes || []);
        setEdges(flow.edges || []);
        setName(data?.name);
        // setViewport({ x, y, zoom });
      } else {
        setNodes([
          {
            id: "0",
            data: { label: "Công việc của bạn" },
            position: { x: 0, y: 50 },
            type: "customNode",
          },
        ]);
      }
    };
    getNode();
  }, []);
  const onConnect = useCallback((params) => {
    // reset the start node on connections
    connectingNodeId.current = null;
    setEdges((eds) => addEdge(params, eds));
  }, []);

  const onConnectStart = useCallback((_, { nodeId }) => {
    connectingNodeId.current = nodeId;
  }, []);

  const onConnectEnd = useCallback(
    (event) => {
      if (!connectingNodeId.current) return;

      const targetIsPane = event.target.classList.contains("react-flow__pane");

      if (targetIsPane) {
        // we need to remove the wrapper bounds, in order to get the correct position
        const id = getId();
        const newNode = {
          id,
          position: screenToFlowPosition({
            x: event.clientX,
            y: event.clientY,
          }),
          data: { label: `Công việc ${id}`, id: id },
          origin: [0.5, 0.0],
          type: "customNode",
        };

        setNodes((nds) => nds.concat(newNode));
        setEdges((eds) =>
          eds.concat({ id, source: connectingNodeId.current, target: id })
        );
      }
    },
    [screenToFlowPosition]
  );
  const onSave = useCallback(async () => {
    if (rfInstance) {
      const flow = rfInstance.toObject();
      const data = {
        name: valueRef.current,
        title: "Vãi Trưởng",
        flow: flow,
      };
      const api = `https://mindmapdb.onrender.com/api/v1/mindmap/${param?.id}`;
      const response = await fetch(api, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      // console.log("data", flow);
      // localStorage.setItem(flowKey, JSON.stringify(flow));
    }
  }, [rfInstance]);
  const getValue = (value) => {
    valueRef.current = value;
  };

  return (
    <div className="wrapper h-[80vh]" ref={reactFlowWrapper}>
      <div>
        <EditText value={valueRef.current} onValue={getValue} />
      </div>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onConnectStart={onConnectStart}
        onConnectEnd={onConnectEnd}
        fitView
        fitViewOptions={{ padding: 2 }}
        nodeOrigin={[0.5, 0]}
        onInit={setRfInstance}
      >
        <Panel position="top-right">
          <button onClick={onSave} className="bg-green-500 p-[10px] text-white">
            Lưu
          </button>
        </Panel>
        <MiniMap nodeColor={"red"} />
        <Background />
      </ReactFlow>
    </div>
  );
};
export default AddNodeOnEdgeDrop;
