import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HomeScreen = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="bg-white py-8 px-8">
        <ContainerButton className="w-36 h-16 px-4 bg-red-300 flex justify-center items-center rounded-lg" onClick={() => navigate('router')}>
          <p className="text-white text-base text-center">Router Component</p>
        </ContainerButton>
      </div>
    </>
  );
};

const ContainerButton = styled.div`
  box-shadow: -4px -3px 19px 5px #d3d0d0;
`;

export default HomeScreen;