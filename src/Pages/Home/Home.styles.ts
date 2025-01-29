import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #161513;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #161513;

  @media (min-width: 1200px) {
    width: 1196px;
  }
`;

export const BorderAvatar = styled.div`
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  width: 270px;
  height: 270px;
  border: 2px solid #fff;
  border-radius: 50%;
  margin-top: 50px;
  margin-bottom: 50px;

  background: rgb(2, 0, 36);
  background: linear-gradient(
    0deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
`;

export const WrapperTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: "Poppins", serif;
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  text-align: center;
`;

export const WrapperSubtitle = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: "Poppins", serif;
  font-size: 20px;
  font-weight: 400;
  color: #c5c5c5;
  text-align: center;
  vertical-align: middle;
  letter-spacing: 3px;
  line-height: 2;
  margin: 40px;
`;

export const WrapperButtonActions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 20px;
`;

export const WrapperExperience = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;

  h1 {
    font-family: "Poppins", serif;
    font-size: 24px;
    font-weight: 700;
    color: #c5c5c5;
    text-align: center;
  }

  img {
    width: 100px;
    height: 100px;
    margin: 10px;
  }

  .circular {
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    gap: 10px;
  }
`;

export const WrapperProjects = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;

  h1 {
    font-family: "Poppins", serif;
    font-size: 24px;
    font-weight: 700;
    color: #c5c5c5;
    text-align: center;
  }

  .showingProjects {
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
`;

export const WrapperExperienced = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-top: 96px;

  h1 {
    font-family: "Poppins", serif;
    font-size: 40px;
    font-weight: 700;
    color: #3c94eb;
    text-align: center;
  }
`;
