import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Comments extends React.Component {
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
        return (
            <div id='commentsDiv'>
            {this.props.comments.map((comm, id) => (
                this.displayComment(comm, id, 1)
            ))}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        comments: state.comments
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        //setPageNumber: setPageNumber,
        //updateImagesList: updateImagesList
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Comments);
