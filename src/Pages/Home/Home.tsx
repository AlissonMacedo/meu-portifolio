import * as Styles from "./Home.styles";

import avatar from "../../assets/avatar.png";
import react from "../../assets/reactjs.png";
import javascript from "../../assets/javascript.png";
import nextjs from "../../assets/nextjs.png";
import nodejs from "../../assets/nodejs.png";
import kubernetes from "../../assets/kubernetes.png";
import caixeiroViajante from "../../assets/caixeiro-viajante.jpg";

import PrimaryButton from "../../Components/Buttons/Primary";

import SecondButton from "../../Components/Buttons/Second";
import ProjectsCards from "../../Components/ProjectsCards/ProjectsCards";

const HomePage = () => {
  return (
    <Styles.Wrapper>
      <Styles.Container>
        <Styles.BorderAvatar>
          <img src={avatar} style={{ width: 280, height: 280 }} alt="avatar" />
        </Styles.BorderAvatar>
        <Styles.WrapperTitle>
          <h1>I do code and</h1>
          <h1>make content about it</h1>
        </Styles.WrapperTitle>

        <Styles.WrapperSubtitle>
          <p>
            I am a seasoned full-stack software engineer with over 8 years of
            professional experience, specializing in backend development. My
            expertise lies in crafting robust and scalable SaaS-based
            architectures on the Amazon AWS platform.
          </p>
        </Styles.WrapperSubtitle>
        <Styles.WrapperButtonActions>
          <PrimaryButton>Get in touch</PrimaryButton>
          <SecondButton>Download CV</SecondButton>
        </Styles.WrapperButtonActions>

        <Styles.WrapperExperience>
          <h1>EXPERIENCE WITH</h1>
          <div>
            <img src={javascript} alt="avatar" />
            <img src={react} alt="avatar" className="circular" />
            <img src={nextjs} alt="avatar" className="circular" />
            <img src={nodejs} alt="avatar" />
            <img src={kubernetes} alt="avatar" />
          </div>
        </Styles.WrapperExperience>
        <Styles.WrapperProjects>
          <h1>PROJECTS</h1>
          <div className="showingProjects">
            <ProjectsCards
              imgSrc={caixeiroViajante}
              title="CLICK HERE TO VISIT"
              description="Caixeiro Viajante"
              url="/"
            />
            <ProjectsCards
              imgSrc={caixeiroViajante}
              title="CLICK HERE TO VISIT"
              description="Caixeiro Viajante"
              url="/"
            />
          </div>
        </Styles.WrapperProjects>
        <Styles.WrapperExperienced>
          <h1>EXPERIENCE</h1>
          <div>
            <span>teste</span>
            <span>teste</span>
          </div>
        </Styles.WrapperExperienced>
      </Styles.Container>
    </Styles.Wrapper>
  );
};

export default HomePage;
