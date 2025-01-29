import { styled } from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    font-size: ${px2vw(24)};

    @media (min-width: 768px) {
      font-size: ${px2vw(18)};
    }

    @media (min-width: 1200px) {
      font-size: ${px2vw(16)};
    }
  }
`;
