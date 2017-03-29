import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'

class AttributeWindow extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.overlay.setElement(document.getElementById('info-window'));
    this.props.overlay.setPosition(this.props.overlay.getPosition());
    var closer = document.getElementById('popup-closer');
    closer.onclick = function() {
        closer.blur();
        this.props.overlay.setPosition(undefined);
        return false;
      }.bind(this);
  }
  
  

  render() {
    var dataValues = [];
    for (var i in this.props.infoWindow) {
      dataValues.push(<li key={i}>{this.props.translation[i]}: {this.props.infoWindow[i]}</li>);
    }

    return (
      <div id="info-window" className="ol-popup">
        <a href="#" id="popup-closer" className="ol-popup-closer"></a>
        <div id="popup-content">
          <ul>
            {dataValues}
          </ul>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    infoWindow: state.infoWindow,
    translation: state.translation,
  }
}



export default connect(mapStateToProps)(AttributeWindow);