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
                console.log(response);
                //debugger;
                const imagesList = response.data.map((img) => {
                    return {cover: img.cover}
                })
                debugger;
                self.props.fetchImagesList(imagesList); //TODO should be updateImagesList
                const imgId = response.data[0].cover;
                document.getElementById('firstImg').src = `http://i.imgur.com/${imgId}.png`;
                console.log( "$.get succeeded" );

            }, function() {
                console.log( "$.get failed!" );
            }
        );
    }

    createImagesList() {
        return this.props.images.map((img, i) => {
            //debugger;
            return (
                <p key={i} onClick={() => this.props.fetchImagesList()}>{img.a} / {img.b}</p>
            )
        })
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