import React from "react";
import { useContext } from "react";
import { Web5Context } from "./utils/Web5Context";

const App = () => {
  const { web5, did } = useContext(Web5Context);

  console.log("web5 : ", web5);
  console.log("Did : ", did);
  return (
    <>
      <h1 className="text-3xl font-bold underline text-green-400">
        Hello world!
      </h1>
    </>
  );
};

export default App;
