import React from "react";
import styled from "styled-components";

const App = () => {
  return (
    <div className="bg-white py-8 px-8">
      <ContainerButton className="w-36 h-14 bg-red-300 flex justify-center items-center rounded-lg">
        <p className="text-white text-base">Hello</p>
      </ContainerButton>
    </div>
  );
};

const ContainerButton = styled.div`
  box-shadow: -4px -3px 19px 5px #d3d0d0;
`;

export default App;
