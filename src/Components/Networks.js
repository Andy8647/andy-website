import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  fa500px,
} from "@fortawesome/free-brands-svg-icons";

class Networks extends Component {
  render() {
    const { social } = this.props;

    return (
      <ul className="social-links">
        <li key={social[0].name}>
          <a href={social[0].url} target="_blank" rel="noreferrer"
             onClick={() => {
                 this.props.eventTrack("click", "click_github", "network")
             }}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li key={social[1].name}>
          <a href={social[1].url} target="_blank" rel="noreferrer"
             onClick={() => {
                 this.props.eventTrack("click", "click_linkedin", "network")
             }}>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li key={social[2].name}>
          <a href={social[2].url} target="_blank" rel="noreferrer"
             onClick={() => {
                 this.props.eventTrack("click", "click_ins", "network")
             }}>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li key={social[3].name}>
          <a href={social[3].url} target="_blank" rel="noreferrer"
             onClick={() => {
                 this.props.eventTrack("click", "click_500px", "network")
             }}>
            <FontAwesomeIcon icon={fa500px} />
          </a>
        </li>
      </ul>
    );
  }
}

export default Networks;
