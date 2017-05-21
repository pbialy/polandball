import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {updateImagesList} from '~/js/actions/index.js';
import ImagesList from '~/js/containers/gallery/imagesList.js';
import GalleryHead from '~/js/containers/gallery/galleryHead.js';

class Gallery extends React.Component {

    componentDidMount() {
        this.fetchImagesList();
    }

    componentDidUpdate() {
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
               `https://api.imgur.com/3/gallery/search/top/${pageNr}?q=polandball` :
               `https://api.imgur.com/3/gallery/search/score?q=polandball+${addQuery}`
        });

        const self = this;
        $.ajax(settings).then(
            function(response) {
                //const dd=response.data; debugger;
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

    render () {
        return (
            <div id={'gallery'}>
                <GalleryHead />
                <ImagesList />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        pageNumber: state.pageNumber,
        additionalQuery: state.additionalQuery
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        updateImagesList: updateImagesList
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Gallery);