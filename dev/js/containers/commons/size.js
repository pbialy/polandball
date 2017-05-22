import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {setSize} from '~/js/actions/index.js';


class Size extends React.Component {
    triggerButton(e, size) {
        this.props.setSize(size);
    }

    render() {
        const classesForSmall = this.props.size === 'small' ? 'mainButton buttonClicked' : 'mainButton';
        const classesForBig = this.props.size === 'BIG' ? 'mainButton buttonClicked' : 'mainButton';
        return (
            <div id={'sizeDiv'}>
                <button id={'size_small'} className={`${classesForSmall}`} onClick={(e) => {this.triggerButton(e, 'small')}}>{'small'}</button>
                <button id={'size_BIG'} className={`${classesForBig}`}  onClick={(e) => {this.triggerButton(e, 'BIG')}}>{'BIG'}</button>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        size: state.size
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        setSize: setSize
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Size);