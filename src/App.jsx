import React, {Component} from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import Features from './components/features';
import About from './components/about';
import Services from './components/services';
import Testimonials from './components/testimonials';
import Careers from './components/careers';
import Contact from './components/contact';
import JsonData from './data/data.json';
import Gallery from "./components/gallery";

export class App extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Header data={this.state.landingPageData.Header} />
        { this.state.landingPageData.Features ? <Features data={this.state.landingPageData.Features}/> : null }
        <About data={this.state.landingPageData.About} />
        <Services data={this.state.landingPageData.Services} />
        <Gallery data={this.state.landingPageData.Gallery}/>
        <Testimonials data={this.state.landingPageData.Testimonials} />
        <Careers data={this.state.landingPageData.Careers} />
        <Contact data={this.state.landingPageData.Contact} />
      </div>
    )
  }
}

export default App;
