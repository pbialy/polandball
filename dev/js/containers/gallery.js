import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {setPageNumber} from '~/js/actions/index.js';
import ImagesList from '~/js/containers/imagesList.js';

class Gallery extends React.Component {
    render () {
        return (
            <div id={'gallery'}>
                <p> prev | pageNr | next | searchStr | doSearch</p>
            {(this.props.pageNumber >= 2) && (
                <button onClick={() => {this.props.setPageNumber(this.props.pageNumber - 1)}}>{'<'}</button>
            )}{/* TODO else - some space for this button */}
                <div id={'pageNumber'}>{this.props.pageNumber}</div>
                {/* TODO if pageNr <= totalPages */}
                <button onClick={() => {this.props.setPageNumber(this.props.pageNumber + 1)}}>{'>'}</button>
                <ImagesList />
                <p>go up</p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        pageNumber: state.pageNumber
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        setPageNumber: setPageNumber
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Gallery);