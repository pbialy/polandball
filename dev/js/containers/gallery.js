import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {setPageNumber, updateImagesList, changeTempAdditionalQuery, runAdditionalQuery} from '~/js/actions/index.js';
import ImagesList from '~/js/containers/imagesList.js';

class Gallery extends React.Component {

    componentDidMount() {
        this.fetchImagesList();
    }

    componentDidUpdate() {
        //TODO do not fire this if tempAddQ is updated
        // hint - shouldComponentUpdate and move input/button into other comp OR update in imagesList
        this.fetchImagesList();
    }

    fetchImagesList() {
        const pageNr = this.props.pageNumber;
        const addQuery = this.props.additionalQuery;


        const settings = Object.assign({}, {
            async: true,
            crossDomain: true,

            //url: `https://api.imgur.com/3/gallery/search/time/all/${pageNr}?q=polandball`,
            //url: `https://api.imgur.com/3/gallery/search/time/all/${pageNr}?q=title: cats AND dogs ext: gif`,
            //url: `https://api.imgur.com/3/gallery/search/score?q=polandball+isis`,
            //url: `https://api.imgur.com/3/gallery/search/score?q=polandball+germany`, // WORKS!
            method: 'GET',
            headers: {
                'authorization': 'Client-ID c15b126ab623153'
            }
        }, {
           url: addQuery === '' ?
               `https://api.imgur.com/3/gallery/search/time/all/${pageNr}?q=polandball` :
               `https://api.imgur.com/3/gallery/search/score?q=polandball+${addQuery}`
        });

        const self = this;
        $.ajax(settings).then(
            function(response) {
                //var dd=response.data; debugger;
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
                console.log( "getting imagesList failed!" );
            }
        );
    }

    changePageNumber(val) {
        this.props.setPageNumber(this.props.pageNumber + val);
    }

    changeTempAdditionalQuery(e) {
        console.log('changeTempAdditionalQuery');
        this.props.changeTempAdditionalQuery(e.target.value);
        //debugger;
        // tempAddQ = e.target.value
    }

    runAdditionalQuery() {
        console.log('runAdditionalQuery')
        this.props.runAdditionalQuery(this.props.tempAdditionalQuery);
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
                <input id={'additionalQueryInput'} value={this.props.tempAdditionalQuery} onChange={
                    (e) => {this.changeTempAdditionalQuery(e)}
                }/> {/* TODO if enter hit then click button below */}
                <button id={'additionalQueryButton'} onClick={() => {this.runAdditionalQuery()}}>SEARCH</button>
                <ImagesList />
                <p>go up</p>
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
        updateImagesList: updateImagesList,
        changeTempAdditionalQuery: changeTempAdditionalQuery,
        runAdditionalQuery: runAdditionalQuery
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Gallery);