import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchImagesList} from '~/js/actions/index.js';

class ImagesList extends React.Component {

    componentDidMount() {
        console.log('imagesList - component-did-mount');
        const settings = {
            async: true,
            crossDomain: true,
            url: "https://api.imgur.com/3/gallery/search/time/all/1?q=polandball",
            method: "GET",
            headers: {
                "authorization": "Client-ID c15b126ab623153"
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
                self.props.fetchImagesList(imagesList); //TODO should be updateImagesList
            }, function() {
                console.log( "$.get failed!" );
            }
        );
    }

    createImagesList() {
        if (this.props.images) {
            // 'b' in the end of url is for thumbnail
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
        images: state.images
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({fetchImagesList: fetchImagesList}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ImagesList);