
import React from "react";
import styled from "styled-components";

const BasicCss = () => {
  return (
    <div className="bg-white py-8 px-8 gap-8 flex">
      <div className="w-6/12">
        <TitleTextStyled>{`Pre`}</TitleTextStyled>
        <img src={require("./images/css_local.png")} alt="div-a" />
        <GapStyled />
        <TitleTextStyled>{`Compare`}</TitleTextStyled>
        <img src={require("./images/compare.png")} alt="div-a" />
        <GapStyled />
      </div>
      <div className="w-6/12">
     
      </div>
    </div>
  );
};

const GapStyled = styled.div`
  height: 25px;
`;

const TitleTextStyled = styled.p`
  font-size: 20px;
  font-weight: bold;
  --tw-text-opacity: 1;
  color: rgb(239 68 68 / var(--tw-text-opacity));
`;

export default BasicCss;
