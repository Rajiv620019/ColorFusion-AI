import { Center, Environment } from "@react-three/drei";
import Shirt from "./Shirt";
import CameraRig from "./CameraRig";

const Canvas = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      <CameraRig>
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
  );
};
export default Canvas;
