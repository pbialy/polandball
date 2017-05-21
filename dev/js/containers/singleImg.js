import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class SingleImg extends React.Component {

    render() {
        return (
            <p>singleImg here</p>
        )
    }
}

function mapStateToProps(state) {
    return {
        //pageNumber: state.pageNumber
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        //setPageNumber: setPageNumber,
        //updateImagesList: updateImagesList
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SingleImg);