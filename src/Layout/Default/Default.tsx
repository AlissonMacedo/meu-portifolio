// Note: Default Layout
import Header from "../../Components/Header/Header";
import * as Styles from "./Default.styles";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <Styles.Container>
      <Header />
      <Outlet />
    </Styles.Container>
  );
};
