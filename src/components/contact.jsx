import React, { Component } from "react";

export class Contact extends Component {

  constructor(...props) {
    super(props);
  }

  changeText(event) {
    let fileName = null
    let file = event.target.files && event.target.files[0]
    if(file) {
      if(file.size > 1024 * 1024 * 2){
        event.target.value = "";
        alert("Upload file size is limited to 2Mb");
      } else {
        if(file.name.trim().length > 0) {
          fileName = file.name
        }
      }
    }
    let labelEl = document.getElementById("selectedFileName")
    if(labelEl) labelEl.innerHTML = fileName || "Tải lên CV của bạn (.pdf, .docx)";
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
                          placeholder="Họ tên"
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
                            placeholder="Vị trí ứng tuyển"
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
                            placeholder="Điện thoại"
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
                          <span id="selectedFileName" className="placeholder">Tải lên CV của bạn (.pdf, .docx)</span>
                        </label>
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div id="success"></div>
                  <button type="submit" id="submit" className="btn btn-custom btn-lg">
                    Ứng tuyển
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-3 col-md-offset-1 contact-info">
              <div className="contact-item">
                <h3>Liên hệ</h3>
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Địa chỉ
                  </span>
                  { this.props.data ? this.props.data.info.address : "loading"}
                </p>
              </div>
              {/*<div className="contact-item">*/}
              {/*  <p>*/}
              {/*    <span>*/}
              {/*      <i className="fa fa-phone"></i> Phone*/}
              {/*    </span>{" "}*/}
              {/*    { this.props.data ? this.props.data.info.phone : "loading"}*/}
              {/*  </p>*/}
              {/*</div>*/}
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
