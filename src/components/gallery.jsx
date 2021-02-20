import React, { Component } from "react";

export class Gallery extends Component {
  render() {
    return (
      <div id="portfolio" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>{ this.props.data ? this.props.data.title : '' }</h2>
            <p>{ this.props.data ? this.props.data.paragraph : '' }</p>
          </div>
          <div className="row">
            <div className="portfolio-items">
            { this.props.data
              ? this.props.data.dataList.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-sm-6 col-md-4 col-lg-4">
                  <div className="portfolio-item">
                    <div className="hover-bg">
                      <a
                          href={d.img}
                          title="Project Title"
                          data-lightbox-gallery="gallery1"
                      >
                        <div className="hover-text">
                          <h4>{d.name}</h4>
                        </div>
                        <img
                            src={d.img}
                            className="img-responsive"
                            alt="Project Title"
                        />{" "}
                      </a>{" "}
                    </div>
                  </div>
                </div>
              ))
              : "loading"
            }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
