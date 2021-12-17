import './App.css';
import { Component } from "react";
import { Projects, Socials } from './projects.json'

class App extends Component<{}> {
  state = {
    "projects": [],
    "socials": {}
  }

  componentDidMount() {
    const socials = {}

    Object.keys(Socials).map(function(keyName, keyIndex) {
      Object.keys(Socials[keyName]).map(function(keyNameElem, keyIndexElem) {
        socials[keyNameElem] = Socials[keyName][keyNameElem]
      })
    })
    this.setState({ projects: Projects.map((data) => data), socials})

    document.title = "Simon Provost / Official Website"
  }

  openLink = (link) => {
    window.open(link, '_blank');
  }

  publication_section = () => {
    return (
      this.state.projects.map((project) => (
        <img src={project.path_image} className="publication-generic-css-characs" alt="Medium" onClick={() => this.openLink(project.hyperlink)}/>
      ))
    )
  }

  render() {
    console.log(this.state)
    return (
      <div className="core_wallpaper">
        <div className="core_top">
          <div className="top_left_corner">
            <div className="top_left_corner_persona_information">
              <p className="top_left_corner_title">Simon Provost</p>
              <div className="floating">
                <div className="top_left_corner_tag">
                  <p className="top_left_corner_tag_title">At the moment, busy</p>
                </div>
                <img src="./resources/rope_2.png" className="special_rope_left"  alt="rope"/>
                <img src="./resources/rope_2.png" className="special_rope_right"  alt="rope"/>
              </div>
            </div>
          </div>
          <div className="top_right_corner">
            <div className="top_right_corner_socials">
              <img src="./resources/medium.png" onClick={() => this.openLink(this.state.socials.Medium)} className="top_right_corner_social_img_medium"  alt="Medium"/>
              <img src="./resources/github.png" onClick={() => this.openLink(this.state.socials.Github)} className="top_right_corner_social_img_github"  alt="Github"/>
              <img src="./resources/linkedin.png" onClick={() => this.openLink(this.state.socials.Linkedin)} className="top_right_corner_social_img_linkedin"  alt="Linkedin"/>
            </div>
          </div>
        </div>
        <div className="core_body">
          <div className="body_left_side">
            <div className="body_left_side_description">
              <p className="body_left_side_description_title" onClick={() => this.openLink(this.state.socials.Linkedin)}>
                <span className="wave">👋</span> Hi, I’m Simon
              </p>
              <div className="body_left_side_description_content">
                <p className="body_left_side_description_content_text">My interest in <b>Computer Science</b> and <b>problem solving</b> led me to seek a graduate degree
                  in Advanced Computer Science and Research last year, where I acquired a critical interest in <b>research</b> and <b>machine learning</b> while achieving the highest honour, a distinction. I developed advanced analytical approaches and <b>strong programming</b> abilities during my undergraduate studies in France, earning me another distinction degree from
                  the final jury. By integrating research with machine learning, I wish to discover previously uncharted areas and empower the
                  way Computer Science is perceived today.</p>

                <div className="body_left_side_description_sub_content">
                  <p className="body_left_side_description_sub_content_text">I’m currently working at <div className="body_left_side_coloured_text_no_wrap">LittleBigCode</div> in
                    Paris 🇫🇷 as well as Researcher at <div className="body_left_side_coloured_text_no_wrap">East Kent
                      University Hospital NHS foundation trust </div>
                    in the UK 🇬🇧</p>
                  <div className="body_left_side_separator">
                    <p className="body_left_side_name">Provost Simon</p>
                    <p className="body_left_side_email" onClick={() => this.openLink(this.state.socials.Mail)}>
                      Simon1.provost@epitech.eu
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="body_right_side">
            <div className="body_right_side_card_content">
              <div className="body_right_side_card_content_card">
                <div className="body_right_side_card_content_card_profile_pic">
                  <img src="./resources/simon-provost-02-min.jpg" alt="profile_pic"/>
                </div>
                <div className="body_right_side_card_content_card_ellipse">
                  <p className="body_right_side_card_content_card_title">ML/RESEARCH</p>
                </div>
                <p className="body_right_side_card_content_card_name">Simon provost</p>
                <p className="body_right_side_card_content_card_location">Paris, France</p>
              </div>

              <div className="body_right_side_tags_container">
                <div className="body_right_side_tags_common body_right_side_tags_machinelearning">
                  <img src="./resources/machinelearning.png" className="body_right_side_tags_icon" alt="ML"/>
                  <p className="body_right_side_tags_common_text">Machine Learning</p>
                </div>
                <div className="body_right_side_tags_common body_right_side_tags_automl">
                  <img src="./resources/automl.png" className="body_right_side_tags_icon" alt="ML"/>
                  <p className="body_right_side_tags_common_text">AutoML</p>
                </div>
                <div className="body_right_side_tags_common body_right_side_tags_datamining">
                  <img src="./resources/datamining.png" className="body_right_side_tags_icon" alt="ML"/>
                  <p className="body_right_side_tags_common_text">Data Mining</p>
                </div>
                <div className="body_right_side_tags_common body_right_side_tags_UIUX">
                  <img src="./resources/uiux.png" className="body_right_side_tags_icon" alt="ML"/>
                  <p className="body_right_side_tags_common_text">UI.UX</p>
                </div>
                <div className="body_right_side_tags_common body_right_side_tags_research">
                  <img src="./resources/research.png" className="body_right_side_tags_icon" alt="ML"/>
                  <p className="body_right_side_tags_common_text">Research</p>
                </div>
                <div className="body_right_side_tags_common body_right_side_tags_MLOPS">
                  <img src="./resources/mlops.png" className="body_right_side_tags_icon" alt="ML"/>
                  <p className="body_right_side_tags_common_text">MLOps</p>
                </div>
                <div className="body_right_side_tags_common body_right_side_tags_devops">
                  <img src="./resources/devops.png" className="body_right_side_tags_icon" alt="ML"/>
                  <p className="body_right_side_tags_common_text">DevOps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="core_body_bottom_section">
          <p className="body_bottom_title">👇 Check some projects & publications</p>
          <div className="body_bottom_content">
            {this.publication_section()}
          </div>
        </div>
        <div className="core_footer">
          <div className="footer_content">
            <p className="footer_copyright_text">Copyright © 2021 - 2022 👍🏻</p>
            <p className="footer_remerciements">
              Thanks to Cristopher Galarce Arcila <br/>
              for the idea with Figma - Design.
            </p>
            <div>
              <p className="footer_email" onClick={() => this.openLink(this.state.socials.Mail)}>Simon1.provost@epitech.eu</p>
              <div className="footer_socials">
                <img src="./resources/medium.png" className="footer_social_img_medium"  alt="Medium"/>
                <img src="./resources/github.png" className="footer_social_img_github"  alt="Github"/>
                <img src="./resources/linkedin.png" className="footer_social_img_linkedin"  alt="Linkedin"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
