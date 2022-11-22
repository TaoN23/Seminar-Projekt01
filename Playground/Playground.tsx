import Border from "./components/Border";
import Lights from "./components/Lights";
import Obstacles from "./components/Obstacles";
import Controls from "./Controls/Controls";

function Playground() {
  return (
    <>
      <Border />
      <Obstacles />
      <Controls />
      <Lights />
    </>
  );
}

export default Playground;
