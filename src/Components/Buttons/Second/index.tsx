import * as Styles from "./Second.styles";

interface PrimaryButtonProps {
  children: React.ReactNode;
}

const SecondButton: React.FC<PrimaryButtonProps> = ({ children }) => {
  return <Styles.Button>{children}</Styles.Button>;
};

export default SecondButton;
