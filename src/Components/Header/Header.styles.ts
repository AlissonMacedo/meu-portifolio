import styled from "styled-components";
import pixelToRem from "../../utils/pixelToRem";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  background-color: #1e1e1d;

  .container {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 15px 10px;

    .logo {
      h1 {
        font-size: 14px;
        color: #fff;
        font-family: "Plus Jakarta Sans", serif;
        font-optical-sizing: auto;
        font-weight: <weight>;
        font-style: normal;
      }
    }

    .nav {
      ul {
        display: flex;
        list-style: none;
        gap: 10px;

        li {
          a {
            text-decoration: none;
            color: #fff;
            font-size: ${pixelToRem(14)};
            font-family: "Plus Jakarta Sans", serif;
            font-optical-sizing: auto;
            font-weight: <weight>;
            font-style: normal;
          }
        }
      }
    }
  }

  @media (min-width: 1200px) {
    .container {
      width: 1196px;
    }
  }
`;
