import React from 'react';
import {connect} from 'react-redux';
import Gallery from '~/js/containers/gallery.js';
import SingleImg from '~/js/containers/singleImg.js';
import Size from '~/js/containers/commons/size.js';

class App extends React.Component {
    render() {
        return (
            <div id={"mainDiv"}>
                <div id={'mainContentDiv'}>
                    <div id={'pageHeader'}>
                        <span id={'titlePart1'}>POLANDBALL</span> <span id={'titlePart2'}>GALLERY</span>
                    </div>
                    <Size />
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

export default connect(mapStateToProps)(App);
