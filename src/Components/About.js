import React, { Component } from "react";
import Fade from "react-reveal";
import Networks from "./Networks";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Nordic Giant Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>

              <p>{bio}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{name}</span>
                    <br />
                    <span>
                      {street}
                      <br />
                      {city} {state}, {zip}
                    </span>
                    <br />
                    <span><a href={`tel:+1${phone}`}>{phone}</a></span>
                    <br />
                    <span><a href={`mailto:${email}`}>{email}</a></span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href={resumeDownload} className="button" target="_blank" rel="noreferrer"
                    onClick={() => {
                      this.props.eventTrack("click", "click_download_pdf_resume", "pdf_resume")
                    }}
                    >
                      <i className="fa fa-download" />Download Resume
                    </a>
                  </p>
                </div>
              </div>
              <div>
                <Networks social={this.props.data.social} eventTrack={this.props.eventTrack}/>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
