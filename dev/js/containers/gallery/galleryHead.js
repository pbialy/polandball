import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {setPageNumber, changeTempAdditionalQuery, runAdditionalQuery, resetStore} from '~/js/actions/index.js';

class GalleryHead extends React.Component {

    componentDidMount() {
        $('#additionalQueryInput').keyup(function(event){
            if(event.keyCode === 13){
                $('#additionalQueryButton').click();
            }
        });
    }

    resetStore() {
        this.props.resetStore();
    }

    changePageNumber(val) {
        this.props.setPageNumber(this.props.pageNumber + val);
    }

    changeTempAdditionalQuery(e) {
        this.props.changeTempAdditionalQuery(e.target.value);
    }

    runAdditionalQuery() {
        this.props.runAdditionalQuery(this.props.tempAdditionalQuery);
    }

    render() {
        return (
            <div id={'galleryHead'}>
                {/* TODO if not default */}
                <button onClick={() => {this.resetStore()}}>{'HOME'}</button>
            {(this.props.pageNumber >= 2) && (
                <button onClick={() => {this.changePageNumber(-1)}}>{'<'}</button>
            )}{/* TODO else - some space for this button */}
            <div id={'pageNumber'}>{this.props.pageNumber}</div>
            {/* TODO if pageNr <= totalPages */}
            <button onClick={() => {this.changePageNumber(1)}}>{'>'}</button>
            <input id={'additionalQueryInput'} value={this.props.tempAdditionalQuery} onChange={
            (e) => {this.changeTempAdditionalQuery(e)}
        }/> {/* TODO if enter hit then click button below */}
            <button id={'additionalQueryButton'} onClick={() => {this.runAdditionalQuery()}}>SEARCH</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        pageNumber: state.pageNumber,
        tempAdditionalQuery: state.tempAdditionalQuery,
        additionalQuery: state.additionalQuery
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        setPageNumber: setPageNumber,
        changeTempAdditionalQuery: changeTempAdditionalQuery,
        runAdditionalQuery: runAdditionalQuery,
        resetStore: resetStore
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(GalleryHead);