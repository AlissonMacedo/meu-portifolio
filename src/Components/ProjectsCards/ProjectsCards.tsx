import * as Styles from "./ProjectsCards.styles";
import { AiOutlineArrowDown } from "react-icons/ai";

interface ProjectsCardsProps {
  imgSrc: string;
  title: string;
  description: string;
  url: string;
}

const ProjectsCards = ({ imgSrc, title, description }: ProjectsCardsProps) => {
  return (
    <Styles.Wrapper>
      <img src={imgSrc} alt="avatar" />
      <Styles.WrapperTitle className="teste">
        <div>
          <p className="title">{title}</p>
          <p className="description">{description}</p>
        </div>
        <AiOutlineArrowDown size={32} style={{ transform: "rotate(220deg)" }} />
      </Styles.WrapperTitle>
    </Styles.Wrapper>
  );
};

export default ProjectsCards;
