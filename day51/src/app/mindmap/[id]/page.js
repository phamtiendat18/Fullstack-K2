import MindMap from "@/components/MindMap/MindMap";

export async function generateMetadata({ params }) {
  return {
    title: "Mindmap - Các Mindmap của tôi",
  };
}
const MindmapItem = () => {
  return <MindMap />;
};

export default MindmapItem;
