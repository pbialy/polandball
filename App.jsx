import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Gallery from '~/js/containers/gallery.js';
import SingleImg from '~/js/containers/singleImg.js';

class App extends React.Component {
    render() {
        return (
            <div id={"mainDiv"}>
                <div id={'mainContentDiv'}>
                    {this.props.displayMode === 'gallery' && (<Gallery />)}
                    {this.props.displayMode === 'single' && (<SingleImg />)}
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        displayMode: state.displayMode
    }
}

function matchDispatchToProps(dispatch) { // TODO delete?
    return bindActionCreators({
        //updateImagesList: updateImagesList
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(App);
