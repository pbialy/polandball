import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {setPageNumber, updateImagesList} from '~/js/actions/index.js';
import ImagesList from '~/js/containers/imagesList.js';

class Gallery extends React.Component {

    fetchImagesList() {
        console.log('-------fetchImagesList---------');
        const pageNr = this.props.pageNumber;
        const settings = {
            async: true,
            crossDomain: true,
            url: `https://api.imgur.com/3/gallery/search/time/all/${pageNr}?q=polandball`,
            method: 'GET',
            headers: {
                'authorization': 'Client-ID c15b126ab623153'
            }
        };

        const self = this;
        $.ajax(settings).then(
            function(response) {
                const imagesList = response.data.map((img) => {
                    if (img.cover) {
                        return {
                            thumbnail: img.cover
                        }
                    } else {
                        return {
                            thumbnail: img.id
                        }
                    }
                });
                self.props.updateImagesList(imagesList);
            }, function() {
                console.log( "$.get failed!" );
            }
        );
    }

    changePageNumber(val) {
        $.when(
            // TODO loader on
            this.fetchImagesList()
        ).then(
            // TODO loader off
            this.props.setPageNumber(this.props.pageNumber + val)
        );

        /*
        var f1 = (n) => {
            var s =0;
            for(var i = 0; i<n; i++) {s+=1;}
            console.log('f1 done');
        }
        console.log('start')
        $.when(f1(1000000000)).then(console.log('then works'));
        */
    }

    render () {
        return (
            <div id={'gallery'}>
                <p> prev | pageNr | next | searchStr | doSearch</p>
            {(this.props.pageNumber >= 2) && (
                <button onClick={() => {this.changePageNumber(-1)}}>{'<'}</button>
            )}{/* TODO else - some space for this button */}
                <div id={'pageNumber'}>{this.props.pageNumber}</div>
                {/* TODO if pageNr <= totalPages */}
                <button onClick={() => {this.changePageNumber(1)}}>{'>'}</button>
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
        setPageNumber: setPageNumber,
        updateImagesList: updateImagesList
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Gallery);