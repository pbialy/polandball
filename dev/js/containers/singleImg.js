import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import HomeButton from '~/js/containers/commons/homeButton.js';
import Comments from '~/js/containers/singleImg/comments.js';

class SingleImg extends React.Component {

    prepareImg() {
        const img = this.props.singleImage;
        const maxWidth = this.props.size === 'small' ? 640 : 1024;
        const widthChanger = maxWidth === 640 ? 'l' : 'h';
        const thumb = img.width > maxWidth ? widthChanger : ''; // if img is too big then show smaller version
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
            <div id='singleImg'>
                <HomeButton />
                {img.title && (<p>Title: {img.title}</p>)}
                {img.account_url && (<p>Author: {img.account_url}</p>)}
                {img.description && (<p>Description: {img.description}</p>)}
                {img.views && (<p>Views: {img.views}</p>)}
                {img.points && (<p>Points: {img.points}</p>)}
                <img src={this.prepareImg()} />
                <Comments />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        singleImage: state.singleImage,
        size: state.size
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        //setPageNumber: setPageNumber,
        //updateImagesList: updateImagesList
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SingleImg);
