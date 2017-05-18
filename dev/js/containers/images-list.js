import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchImagesList} from '~/js/actions/index.js';

class ImagesList extends React.Component {

    componentDidMount() {
        console.log('imagesList - component-did-mount');
        var settings = {
            async: true,
            crossDomain: true,
            url: "https://api.imgur.com/3/gallery/search/time/all/1?q=polandball",
            method: "GET",
            headers: {
                "authorization": "Client-ID c15b126ab623153"
            }
        }

        const self = this;
        $.ajax(settings).then(
            function(response) {
                const imagesList = response.data.map((img) => {
                    return {cover: img.cover}
                })
                self.props.fetchImagesList(imagesList); //TODO should be updateImagesList
            }, function() {
                console.log( "$.get failed!" );
            }
        );
    }

    createImagesList() {
        if (this.props.images) {
            return this.props.images.map((img, i) => {
                return (
                    <img key={i} style={{width: '150px', height: '100px'}} src={`http://i.imgur.com/${img.cover}.png`}/>
                )
            })
        } else {
            return (
                <p>Getting images failed. Check Your internet connection.</p>
            )
        }
    }

    render() {
        return (
            <div>
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