import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import HomeButton from '~/js/containers/commons/homeButton.js';

class SingleImg extends React.Component {

    displayImage() {
        console.log(this.props.singleImage)
    }

    prepareImg() {
        const img = this.props.singleImage;
        const thumb = img.width > 1024 ? 'h' : ''; // if img is too big then show 1024x1024 version
        return `http://imgur.com/${img.id}${thumb}.png`
    }

    render() {
        return (
            <div id={'singleImg'}>
                <HomeButton />
                {this.displayImage()}
                <img src={this.prepareImg()} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        singleImage: state.singleImage
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        //setPageNumber: setPageNumber,
        //updateImagesList: updateImagesList
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SingleImg);