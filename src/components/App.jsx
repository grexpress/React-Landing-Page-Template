import React, { Component } from 'react'
import Navigation from './navigation';
import Header from './header';
import Features from './features';
import About from './about';
import Services from './services';
import Gallery from './gallery';
import Testimonials from './testimonials';
import Careers from './careers';
import Contact from './contact';
import $ from 'jquery';

export class App extends Component {
  state = {
    resumeData : {},
  }

  getResumeData(){
    $.ajax({
      url:'/data.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Header data={this.state.resumeData.Header}/>
        { this.state.resumeData.Features ? <Features data={this.state.resumeData.Features}/> : null }
        <About  data={this.state.resumeData.About}/>
        <Services  data={this.state.resumeData.Services}/>
        <Gallery data={this.state.resumeData.Gallery}/>
        <Testimonials  data={this.state.resumeData.Testimonials}/>
        <Careers data={this.state.resumeData.Careers}/>
        <Contact  data={this.state.resumeData.Contact}/>
      </div>
    )
  }
}

export default App
