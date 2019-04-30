import React from 'react';
import { connect } from 'react-redux';
import AlertModal from '../alertModal.component/alertModal.component'
import moment from 'moment';


export class AppsComponent extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {
      appNum: 0,
      Alertmodal: false,
      isOpen: false,
      remove: false,
      update: moment().calendar()
    }
  }


  removeApp = (aid) => {
    this.setState({
      Alertmodal: true,
      appNum: aid,
      what: false,
      isOpen: true,
      textalert: 'אתה עומד למחוק אפליקציה התהליך בלתי הפיך האם אתה בטוח?',
      mykey: Math.random()
    });
  }

  editApp = (aid) => {
    this.setState({
      Alertmodal: true,
      what: true,
      isOpen: true,
      modalIsOpen: true,
      appNum: aid,
      textalert: "Edit Your App",
      mykey: Math.random()
    })
  }


  render() {
    return (

      <div className="container">
        {
          this.state.Alertmodal ? <AlertModal isOpen={this.state.isOpen} key={this.state.mykey} what={this.state.what} appNum={this.state.appNum} textalert={this.state.textalert}></AlertModal> : console.log(this.state.isOpen)
        }
        <div className="row">
          {
            this.props.apps.map((qu, index) => {
              return <div key={Math.random()} className="col-md-4 list-item" >
                <div className="row cardheader">
                  <div className="col-xs-9 ">
                    <div className="flex ">
                      <img src="/images/ico.jpg" className="img-circle" />
                      <h3>{qu.appName}</h3></div>
                  </div>
                  <div className="col-xs-3 editicons">
                    <button className="transparentBt" onClick={() => this.editApp(index)}><i className="fas  fa-pen fa-s"></i></button>
                    <button className="transparentBt" onClick={() => this.removeApp(index)}>X</button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 descriptin">
                    <h4>{qu.appDescription}</h4>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-9">
                    <h5>Last update: {qu.appUpdate == '' ? this.state.update : qu.appUpdate}</h5>
                  </div>
                  <div className="col-md-3">
                    <h5>{qu.appUser}</h5>
                  </div>
                </div>
              </div>
            })
          }
        </div>
      </div>
    )
  }
}



const mapStateToProps = (state) => {
  return {
    apps: state.apps
  };
};
export default connect(mapStateToProps)(AppsComponent);
