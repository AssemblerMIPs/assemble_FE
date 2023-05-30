import {
  IcHome,
  IcHomeSelected,
  IcMainIcon,
  IcManage,
  IcManageSelected,
} from "../../assets/icons";
import { React, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import styled from "styled-components";

const Nav = () => {
  const location = useLocation();

  const [selectedButton, setSelectedButton] = useState(location.pathname);
  const navigate = useNavigate();

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
    navigate(`/${buttonName}`);
  };

  return (
    <StNavWrapper>
      <button
        className={selectedButton === "/home" ? "selected" : ""}
        type="button"
        onClick={() => handleButtonClick("home")}
      >
        {selectedButton === "/home" ? <IcHomeSelected /> : <IcHome />}

        <p>메인 홈</p>
      </button>
      <button
        id="center"
        className={selectedButton === "/promise" ? "selected" : ""}
        type="button"
        onClick={() => handleButtonClick("promise")}
      >
        <IcMainIcon />
        <p>약속잡기</p>
      </button>
      <button
        className={selectedButton === "/manage" ? "selected" : ""}
        type="button"
        onClick={() => handleButtonClick("manage")}
      >
        {selectedButton === "/manage" ? <IcManageSelected /> : <IcManage />}
        <p>약속관리</p>
      </button>
    </StNavWrapper>
  );
};

export default Nav;

const StNavWrapper = styled.nav`
  display: flex;
  justify-content: space-around;
  gap: 7rem;
  position: relative;

  width: 36rem;
  height: 7.2rem;

  background-color: #f7f7f8;

  & > button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    width: 4.8rem;
    height: 70%;

    & > svg {
      margin-top: 0.7rem;
    }

    & > p {
      font-family: "Pretendard";
      font-style: normal;
      font-weight: 500;
      font-size: 10px;
      line-height: 12px;

      color: #9ca3ad;
    }
  }

  & > button.selected > p {
    color: black; /* Change the color of the selected button's name */
  }

  & > #center {
    height: 100%;
    position: absolute;
    top: -2.2rem;

    & > svg {
      margin-bottom: 0.7rem;
    }
  }
`;
