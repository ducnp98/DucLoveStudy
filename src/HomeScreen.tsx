import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HomeScreen = () => {
  return (
    <>
      <div className="bg-white py-8 px-8 flex flex-wrap gap-4">
        <Button
          title="Basic Knowledge"
          color="bg-red-300"
          navigateRoute="basic-knowledge"
        />
        <Button
          title="Basic Css"
          color="bg-red-400"
          navigateRoute="basic-css"
        />
      </div>
    </>
  );
};

const Button = ({
  title,
  color,
  navigateRoute,
}: {
  title: string;
  color: string;
  navigateRoute: string;
}) => {
  const navigate = useNavigate();

  return (
    <ContainerButton
      className={`w-36 h-16 px-4 ${color} flex justify-center items-center rounded-lg`}
      onClick={() => navigate(navigateRoute)}
    >
      <p className="text-white text-base text-center font-bold">{title}</p>
    </ContainerButton>
  );
};

const ContainerButton = styled.div`
  box-shadow: -4px -3px 19px 5px #d3d0d0;
`;

export default HomeScreen;
