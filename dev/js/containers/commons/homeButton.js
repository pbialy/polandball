import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {resetStore} from '~/js/actions/index.js';


class HomeButton extends React.Component {
    render() {
        return (
            <div id={'homeButton'}>
            {(this.props.additionalQuery || this.props.pageNumber !== 1 || this.props.displayMode !== 'gallery') && (
                <button onClick={() => {this.props.resetStore()}}>{'HOME'}</button>
            )}
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