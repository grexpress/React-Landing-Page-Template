import React, {Component} from "react";

export class Careers extends Component {
    render() {
        return (
            <div id="careers" className="text-center">
                <div className="container">
                    <div className="col-md-10 col-md-offset-1 section-title">
                        <h2>{this.props.data ? this.props.data.title : ''}</h2>
                    </div>
                    <div className="row center">
                        {this.props.data
                            ? this.props.data.dataList.map((d, i) => (
                                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-4">
                                    {" "}
                                    <i className={d.icon}></i>
                                    <a href={d.url} target="_blank">
                                        <h3>{d.name}</h3>
                                        <p>{d.text}</p>
                                    </a>
                                </div>
                            ))
                            : "Loading..."}
                    </div>
                </div>
            </div>

            //   <div id="careers" className="text-center">
            //   <div className="container">
            //     <div className="col-md-8 col-md-offset-2 section-title">
            //       <h2>{ this.props.data ? this.props.data.title : '' }</h2>
            //       <p>{ this.props.data ? this.props.data.paragraph : '' }</p>
            //     </div>
            //     <div id="row">
            //       { this.props.data
            //         ? this.props.data.dataList.map((d, i) => (
            //             <div  key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
            //               <div className="thumbnail byPuGQ">
            //                 {" "}
            //                 {/*<img src={d.img} alt="..." className="team-img" />*/}
            //                 <div className="caption">
            //                   <h4>{d.name}</h4>
            //                   <p>{d.job}</p>
            //                 </div>
            //               </div>
            //             </div>
            //           ))
            //         : "loading"}
            //     </div>
            //   </div>
            // </div>
        );
    }
}

export default Careers;
