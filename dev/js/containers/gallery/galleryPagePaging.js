import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {setPageNumber} from '~/js/actions/index.js';
import PagingButtonPlaceholder from '~/js/containers/gallery/pagingButtonPlaceholder.js';

class GalleryPagePaging extends React.Component {

    changePageNumber(val) {
        this.props.setPageNumber(this.props.pageNumber + val);
    }

    render() {
        return (
            <div id={'galleryPagePaging'}>
            {(this.props.pageNumber >= 2) ? (
                <button id={'pageBack'} className={'mainButton'} onClick={() => {this.changePageNumber(-1)}}>{'<'}</button>
            ) : (
                <PagingButtonPlaceholder />
            )}
                <div id={'pageNumber'}>{this.props.pageNumber}</div>
            {(this.props.imagesList && this.props.imagesList.length !== 0) ? (
                <button id={'pageBack'} className={'mainButton'} onClick={() => {this.changePageNumber(1)}}>{'>'}</button>
            ) : (
                <PagingButtonPlaceholder />
            )}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        imagesList: state.imagesList,
        pageNumber: state.pageNumber
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        setPageNumber: setPageNumber
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(GalleryPagePaging);