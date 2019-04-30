import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import moment from 'moment';
import { startEditApp, startRemoveApp } from '../../actions/apps';


export class AlertModal extends React.Component {
  constructor(props) {
    super(props);
    this.flag1 = true;
    this.flag2 = true;
    this.flag3 = true;

    this.state = {
      isOpen: this.props.isOpen,
      modalIsOpen: this.props.isOpen,
      appId: this.props.apps[this.props.appNum].appId,
      appName: this.props.apps[this.props.appNum].appName,
      appDescription: this.props.apps[this.props.appNum].appDescription,
      appUser: this.props.apps[this.props.appNum].appUser,
      update: moment().calendar(),

    };
    this.appUpdate = this.appUpdate.bind(this);
  }

  onNameChange = (e) => {
    if (this.flag1) {
      e.target.value = ""
      this.flag1 = false
    }
    const appName = e.target.value;
    this.setState({ appName: appName });
  };

  onDescriptionChange = (e) => {
    if (this.flag2) {
      e.target.value = ""
      this.flag2 = false
    }
    const appDescription = e.target.value;
    this.setState({ appDescription });
  };

  onUserChange = (e) => {
    if (this.flag3) {
      e.target.value = ""
      this.flag3 = false
    }
    const appUser = e.target.value;
    this.setState(() => ({ appUser }));
  };

  closemod = (e) => {
    e.preventDefault();
    this.setState({ isOpen: false });
  }
  handleRemove = () => {
    this.setState({ isOpen: false })
    this.props.startRemoveApp({ "id": this.state.appId });
  }

  appUpdate = (e) => {
    e.preventDefault();
    this.setState({ isOpen: false })
    this.updateObj = {
      appName: document.getElementById("appname").value,
      appDescription: document.getElementById("appdescription").value,
      appUser: document.getElementById("appuser").value,
      appUpdate: this.state.update,
      isOpen: false,
      textalert,
    };

    let textalert = 'האפליקציה נערכה ונשמרה בהצלחה';
    this.props.startEditApp(this.state.appId, this.updateObj);
  }

  render() {
    return (
      <Modal
        ariaHideApp={false}
        isOpen={this.state.isOpen}
        contentLabel={this.props.textalert}
        closeTimeoutMS={200}
        shouldCloseOnOverlayClick={false}
        className="modal">
        {
          this.props.what ? <div className="modal__body">
            <h1> {this.props.textalert}</h1>
            <form>
              <div className="row">
                <div className="col-md-4">
                  <label>App name</label>
                </div>
                <div className="col-md-8">
                  <input id="appname" type="text" value={this.state.appName}
                    onChange={this.onNameChange} className="form-control" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 ">
                  <label>app description</label>
                </div>
                <div className="col-md-8">
                  <input id="appdescription" type="text" value={this.state.appDescription}
                    onChange={this.onDescriptionChange} className="form-control" name="description" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <label>app User</label>
                </div>
                <div className="col-md-8">
                  <input id="appuser" type="text" value={this.state.appUser}
                    className="form-control"
                    onChange={this.onUserChange} name="appuser" />
                </div>
                <div className="row">
                  <div className="col-md-12"><label>update: {this.state.update}</label></div>
                </div>
              </div>
              <button onClick={this.appUpdate}>Okay</button>
              <button className={this.props.removeClass} onClick={this.closemod}>בטל פעולה</button>
            </form>
          </div> :
            <div className="removeClass">
              <h2> {this.props.textalert}</h2>
              <button onClick={this.handleRemove} >Okay</button>
              <button className={this.props.removeClass} onClick={this.closemod}>בטל פעולה</button>
            </div>
        }
      </Modal>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startEditApp: (appId, appToedit) => dispatch(startEditApp(appId, appToedit)),
  startRemoveApp: (obj) => dispatch(startRemoveApp(obj))
});


const mapStateToProps = (state) => {
  return {
    apps: state.apps
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AlertModal);
