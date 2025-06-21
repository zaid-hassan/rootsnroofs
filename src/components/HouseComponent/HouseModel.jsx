import { useGLTF } from "@react-three/drei";

export default function HouseModel(props) {
  const { scene } = useGLTF("./house.glb");
  return <primitive object={scene} {...props} />;
}
