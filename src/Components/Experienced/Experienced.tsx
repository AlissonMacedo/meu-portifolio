import * as Styles from "./Experienced.styles";

interface ExperiencedProps {
  logo: string;
  title: string;
  dateRange: string;
  description: string;
}

const Experienced = ({
  logo,
  title,
  dateRange,
  description,
}: ExperiencedProps) => {
  return (
    <Styles.Wrapper>
      <img src={logo} alt="avatar" />
      <h2>{title}</h2>
      <span>{dateRange}</span>
      <span>{description}</span>
    </Styles.Wrapper>
  );
};

export default Experienced;
