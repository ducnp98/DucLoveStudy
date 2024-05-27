import React from "react";
import styled from "styled-components";

const BasicKnowledgeScreen = () => {
  return (
    <div className="bg-white py-8 px-8 gap-8 flex">
      <div className="w-6/12">
        <TitleTextStyled>{`Static Website - Web tĩnh`}</TitleTextStyled>
        <p>
          - Là dạng trang web mà mỗi lần người dùng request, máy chủ lại gửi các
          css, html, js đơn giản để hiển thị lên trình duyệt, về cơ bản không có
          bất kì thay đổi nào trên trang web
        </p>
        <GapStyled />
        <TitleTextStyled>{`Dynamic Website - Web động`}</TitleTextStyled>
        <p>
          - Là trang web mà được update on time: ví dụ facebook: các bài đăng
          mới, bình luận, ... update liên tục và phản hồi ontime với người dùng
        </p>
        <p>- Cần server lớn để quản lý</p>
        <TitleTextStyled>{`Cấu trức của 1 file HTML`}</TitleTextStyled>
        <img src={require("./images/html-file.png")} alt="html-file" />
        <GapStyled />
        <TitleTextStyled>{`Cấu trức của 1 file HTML`}</TitleTextStyled>
        <p>{`<!DOCTYPE html>: khai báo để trình duyệt biết rằng bạn đang sử dùng HTML5`}</p>
        <p>{`<html lang='vi'>: Chỉ duy nhất 1 cặp thẻ html, dùng để định nghĩa phần thân tài liệu, lang='vi' để khai báo browser trang web này sử dụng tiếng việt`}</p>
        <GapStyled />
        <TitleTextStyled>{`Các loại thẻ`}</TitleTextStyled>
        <img src={require("./images/div-type.png")} alt="div-type" />
        <GapStyled />
        <TitleTextStyled>{`ul-li-ol`}</TitleTextStyled>
        <img src={require("./images/ul-ol-li.png")} alt="div-type" />
        <GapStyled />
        <img src={require("./images/ul-ol-li.example.png")} alt="div-type" />
        <GapStyled />
        <TitleTextStyled>{`Thẻ a`}</TitleTextStyled>
        <img src={require("./images/div-a.png")} alt="div-a" />
        <GapStyled />
        <img src={require("./images/div-a-1.png")} alt="div-a" />
        <GapStyled />
        <img src={require("./images/div-a-2.png")} alt="div-a" />
        <GapStyled />
        <TitleTextStyled>{`Thẻ img`}</TitleTextStyled>
        <img src={require("./images/div-img.png")} alt="div-a" />
        <GapStyled />
        <TitleTextStyled>{`HTML entities`}</TitleTextStyled>
        <img src={require("./images/html-entity.png")} alt="div-a" />
        <GapStyled />
        <TitleTextStyled>{`Pre`}</TitleTextStyled>
        <img src={require("./images/pre.png")} alt="div-a" />
      </div>
      <div className="w-6/12">
        <TitleTextStyled>{`Code`}</TitleTextStyled>
        <img src={require("./images/code.png")} alt="div-a" />
        <GapStyled />
        <TitleTextStyled>{`Table`}</TitleTextStyled>
        <img src={require("./images/table.png")} alt="div-a" />
        <GapStyled />
        <TitleTextStyled>{`Colspan & Rowspan`}</TitleTextStyled>
        <img src={require("./images/colspan.png")} alt="div-a" />
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

export default BasicKnowledgeScreen;
