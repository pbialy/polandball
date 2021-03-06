import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import GalleryPagePaging from '~/js/containers/gallery/galleryPagePaging.js';
import HomeButton from '~/js/containers/commons/homeButton.js';
import {changeTempAdditionalQuery, runAdditionalQuery} from '~/js/actions/index.js';

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

    changeTempAdditionalQuery(e) {
        this.props.changeTempAdditionalQuery(e.target.value);
    }

    runAdditionalQuery() {
        this.props.runAdditionalQuery(this.props.tempAdditionalQuery);
    }

    render() {
        return (
            <div id='galleryHead'>
                <HomeButton />
            {!this.props.additionalQuery && (
                <GalleryPagePaging />
            )}
                <div id='gallerySearchDiv'>
                    <input id='additionalQueryInput' value={this.props.tempAdditionalQuery} onChange={
                        (e) => {this.changeTempAdditionalQuery(e)}
                    }/>
                    <button id='additionalQueryButton' className={'mainButton'} onClick={() => {this.runAdditionalQuery()}}>SEARCH</button>
                </div>
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
        changeTempAdditionalQuery: changeTempAdditionalQuery,
        runAdditionalQuery: runAdditionalQuery,
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(GalleryHead);
