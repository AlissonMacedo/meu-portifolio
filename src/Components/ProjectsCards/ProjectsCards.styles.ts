import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 390px;
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid #2a2a2a;
  cursor: pointer;

  img {
    width: 100%;
    height: 300px;
  }

  &:hover {
    border: 2px solid #fff;
  }
`;

export const WrapperTitle = styled.div`
  background-color: #2a2a2a;
  padding: 12px 23px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 10px;

    .title {
      font-size: 10px;
      font-family: "Poppins", serif;
      font-weight: 700;
    }

    .description {
      font-size: 19px;
      font-family: "Poppins", serif;
      font-weight: 700;
    }
  }
`;
