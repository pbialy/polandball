import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {setPageNumber} from '~/js/actions/index.js';

class GalleryPagePaging extends React.Component {

    changePageNumber(val) {
        this.props.setPageNumber(this.props.pageNumber + val);
    }

    render() {
        return (
            <div id={'galleryPagePaging'}>
            {(this.props.pageNumber >= 2) && (
                <button onClick={() => {this.changePageNumber(-1)}}>{'<'}</button>
            )}{/* TODO else - some space for this button */}
            <div id={'pageNumber'}>{this.props.pageNumber}</div>
            {/* TODO if pageNr <= totalPages */}
            <button onClick={() => {this.changePageNumber(1)}}>{'>'}</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        pageNumber: state.pageNumber,
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        setPageNumber: setPageNumber
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(GalleryPagePaging);