import React, { Component } from "react";

export class Contact extends Component {

  changeText(event) {
    let value = event.target.files && event.target.files[0] && event.target.files[0].name
    if(!value || value.trim() === 0) {
      value = "Click here to upload your CV (.pdf, .docx)"
    }
    let labelEl = document.getElementById("selectedFileName")
    if(labelEl) labelEl.innerHTML = value;
  }

  render() {
    return (
      <div>
        <div id="contact">
          <div className="container">
            <div className="col-md-8">
              <div className="row">
                <div className="section-title">
                  <h2>{ this.props.data ? this.props.data.title : '' }</h2>
                  <p>{ this.props.data ? this.props.data.paragraph : '' }</p>
                </div>
                <form name="sentMessage" id="contactForm" noValidate>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          className="form-control"
                          placeholder="Name"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          placeholder="Email"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                            type="text"
                            id="position"
                            className="form-control"
                            placeholder="Applying for job"
                            required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                            type="text"
                            id="phone"
                            className="form-control"
                            placeholder="Phone"
                            required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="form-control">
                          <input type="file" id="file" accept=".pdf,.docx" onChange={this.changeText} required="required"/>
                          <span id="selectedFileName" className="placeholder">Click here to upload your CV (.pdf, .docx)</span>
                        </label>
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div id="success"></div>
                  <button type="submit" className="btn btn-custom btn-lg">
                    Submit Application
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-3 col-md-offset-1 contact-info">
              <div className="contact-item">
                <h3>Contacts</h3>
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Address
                  </span>
                  { this.props.data ? this.props.data.info.address : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> Phone
                  </span>{" "}
                  { this.props.data ? this.props.data.info.phone : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i> Email
                  </span>{" "}
                  { this.props.data ? this.props.data.info.email : "loading"}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
          <div className="text-center">
            <p>
              Copyright &copy; 2021 Grexpress.net Co.,Ltd
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
