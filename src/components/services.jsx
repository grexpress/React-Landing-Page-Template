import React, { Component } from "react";

export class Services extends Component {
  render() {
    return (
      <div id="services" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>{ this.props.data ? this.props.data.title : '' }</h2>
            <p>{ this.props.data ? this.props.data.paragraph : '' }</p>
          </div>
          <div className="row center-block">
            { this.props.data
              ? this.props.data.dataList.map((d, i) => (
                  <div  key={`${d.name}-${i}`} className="col-md-4">
                    {" "}
                    <i className={d.icon}></i>
                    <div className="service-desc">
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
