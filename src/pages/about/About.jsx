import "./about.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg"
const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vitae
        at tempora error consequatur aliquid pariatur dolore qui accusantium
        iure?
      </Header>
      <section className="about_story">
        <div className="container about_story-container">
          <div className="about_section-image">
            <img src={StoryImage} alt="Our Story img" />
          </div>
          <div className="about_section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus doloremque nostrum, expedita enim corporis optio
              architecto porro eligendi vitae in, magnam tempore magni
              recusandae cumque ipsam reiciendis saepe! Officia, similique sit!
              Eligendi quibusdam repudiandae error, reiciendis alias velit
              maiores beatae.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laboriosam corporis incidunt dolorum ipsum repellat hic nobis
              mollitia ipsam totam ut accusamus, nulla, laborum officiis, eius
              earum maxime unde eveniet? Quaerat.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, ratione!
            </p>
          </div>
        </div>
      </section>

      <section className="about_Vision">
        <div className="container about_Vision-container">
          <div className="about_section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus doloremque nostrum, expedita enim corporis optio
              architecto porro eligendi vitae in, magnam tempore magni
              recusandae cumque ipsam reiciendis saepe! Officia, similique sit!
              Eligendi quibusdam repudiandae error, reiciendis alias velit
              maiores beatae.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laboriosam corporis incidunt dolorum ipsum repellat hic nobis
              mollitia ipsam totam ut accusamus, nulla, laborum officiis, eius
              earum maxime unde eveniet? Quaerat.
            </p>
          </div>
          <div className="about_section-image">
            <img src={VisionImage} alt="Our Vision img" />
          </div>
        </div>
      </section>

      <section className="about_mission">
        <div className="container about_mission-container">
          <div className="about_section-image">
            <img src={MissionImage} alt="Our mission img" />
          </div>
          <div className="about_section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus doloremque nostrum, expedita enim corporis optio
              architecto porro eligendi vitae in, magnam tempore magni
              recusandae cumque ipsam reiciendis saepe! Officia, similique sit!
              Eligendi quibusdam repudiandae error, reiciendis alias velit
              maiores beatae.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laboriosam corporis incidunt dolorum ipsum repellat hic nobis
              mollitia ipsam totam ut accusamus, nulla, laborum officiis, eius
              earum maxime unde eveniet? Quaerat.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, ratione!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
