import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;()
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
`;

export const ButtonC = styled.button`
  background-color: transparent;
  border: 1px solid #b90abf;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #fff;
  padding: 0.5em 2.5em;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  text-transform: none;

  &:hover {
    background-color: #b90abf;
    transition: 0.2s ease-in-out;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Putin = styled.div`
  input[type="text"] {
    width: 60%;
    padding: 5px 20px;
    margin: 8px 0;
    background-color: transparent;
    border: none;
    border-bottom: 3px solid #b90abf;
    color: #000;
    font-weight: bold;

    input[type="text"]::focus {
      border: none !important;
      background-color: transparent !impoortant;
      outline: none;
    }

    ::placeholder {
      color: #000;
    }
  }
`;