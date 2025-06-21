import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { Suspense } from "react";
import HouseModel from "./HouseModel";

const HouseCanvas = ({rotateSpeed}) => {
  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <Canvas camera={{ position: [2, 2, 4], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <Stage
            environment="city"
            intensity={0.6}
            shadows
            adjustCamera={false}
          >
            <HouseModel position={[0, 0, 0]} scale={0.02} />
          </Stage>
        </Suspense>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={rotateSpeed} />
      </Canvas>
    </div>
  );
};

export default HouseCanvas;
