import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Portfolio from "./Components/Portfolio";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {}
    };

    ReactGA.initialize("UA-192022314-1");
    ReactGA.pageview(window.location.pathname);
  }

  eventTrack(category, action, label) {
    console.log("GA Event:", category, ":", action, ":", label)
    ReactGA.event({category: category, action: action, label: label})
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} eventTrack={this.eventTrack}/>
        <Resume data={this.state.resumeData.resume} eventTrack={this.eventTrack}/>
        <Portfolio data={this.state.resumeData.portfolio} eventTrack={this.eventTrack}/>
        <Footer data={this.state.resumeData.main} eventTrack={this.eventTrack}/>
      </div>
    );
  }
}

export default App;
