import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import HomeButton from '~/js/containers/commons/homeButton.js';
import Comments from '~/js/containers/singleImg/comments.js';

class SingleImg extends React.Component {

    prepareImg() {
        const img = this.props.singleImage;
        //const thumb = img.width > 1024 ? 'h' : ''; // if img is too big then show 1024x1024 version
        const thumb = img.width > 640 ? 'l' : ''; // if img is too big then show 640x640 version
        return `http://imgur.com/${img.id}${thumb}.png`
    }

    displayComment(comm, id, depth) {
        const divClass = depth === 1 ? 'generalCommentDiv' : 'commentDiv';
        const commDate = (new Date(comm.datetime * 1000)).toDateString();
        return (
            <div key={'comm_depth'+depth+'id'+id} className={divClass}>
                <p>
                    <span className={'authorSpan'}>{comm.author} </span>
                    <span className={'ptsSpan'}>{'['}{comm.points} {'pts'}{']'} </span>
                    <span className={'dateSpan'}>{commDate}</span>
                </p>
                <p>{comm.comment}</p>
                {comm.children.map((subComm, subId) => (
                    this.displayComment(subComm, subId, depth+1)
                ))}
            </div>
        )
    }

    render() {
        const img = this.props.singleImage;

        return (
            <div id={'singleImg'}>
                <HomeButton />
                <p>Title: {img.title || '-----'}</p>
                <p>Description: {img.description || '-----'}</p>
                <p>Views: {img.views || '-----'}</p>
                <p>Points: {img.points || '-----'}</p>
                <img src={this.prepareImg()} />
                <Comments />
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