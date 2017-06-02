import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {resetStore} from '~/js/actions/index.js';


class HomeButton extends React.Component {
    triggerButton() {
        if (this.props.additionalQuery || this.props.pageNumber !== 1 || this.props.displayMode !== 'gallery') {
            this.props.resetStore()
        }
    }

    render() {
        return (
            <div id='homeButtonDiv'>
                <button className={'mainButton'} onClick={() => {this.triggerButton()}}>{'HOME'}</button>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        pageNumber: state.pageNumber,
        additionalQuery: state.additionalQuery,
        displayMode: state.displayMode
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        resetStore: resetStore
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(HomeButton);
