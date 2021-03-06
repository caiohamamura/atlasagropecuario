import React, { Component, PropTypes } from 'react'
import MyModal from '../components/MyModal'
import FieldGroup from '../components/FieldGroup'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'


const Metadata = props => {
    return (
        <MyModal
            show={props.show ? props.show : false}
            title={props.title}
            onHide={props.hideMetadata}
            handleSubmit={props.hideMetadata}
            noClose>
            {props.metadata}
            <br />
            <a className="downloadMetadata" target="_blank" href={props.link}>{props.translation['downloadMetadata']}</a>
        </MyModal>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        layer: state.metadata.layer,
        show: state.metadata.show,
        title: state.metadata.layer && state.translation.layersObj[state.metadata.layer].name,
        metadata: state.metadata.layer && state.translation.layersObj[state.metadata.layer].metadata,
        link: state.metadata.layer && state.translation.layersObj[state.metadata.layer].link,
        translation: state.translation,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        hideMetadata: () => {
            dispatch(actions.hideMetadata())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Metadata)


