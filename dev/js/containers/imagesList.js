import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {updateImagesList} from '~/js/actions/index.js';

class ImagesList extends React.Component {

    componentDidMount() {
        console.log('-------componentDidMount---------')
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

    createImagesList() {
        //debugger;
        if (this.props.images) {
            // char in the end of url (before '.png' is for thumbnail
            // see https://api.imgur.com/models/image#thumbs for more
            return this.props.images.map((img, i) => {
                //console.log(img);

                return (
                    <div key={i+'div'} className={'imgInGallery'}>
                        <img key={i+'img'} className={'imgThumb'} src={`http://i.imgur.com/${img.thumbnail}s.png`}/>
                        {(i%5===4 ) && (
                            <br key={i+'br'}/>
                        )}
                    </div>
                )
            })
        } else {
            return (
                <p>Getting images in progress. Check Your internet connection if this message doesn't disappear.</p>
            )
        }
    }

    render() {
        return (
            <div id={'imagesList'}>
                {this.createImagesList()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        images: state.images,
        pageNumber: state.pageNumber
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        updateImagesList: updateImagesList
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ImagesList);
