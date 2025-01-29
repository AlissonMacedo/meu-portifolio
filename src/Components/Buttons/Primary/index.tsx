import * as Styles from "./Primary.styles";

interface PrimaryButtonProps {
  children: React.ReactNode;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children }) => {
  return <Styles.Button>{children}</Styles.Button>;
};

export default PrimaryButton;
