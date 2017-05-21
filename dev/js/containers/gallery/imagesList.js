import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {showSingleImg, setComments} from '~/js/actions/index.js';

class ImagesList extends React.Component {

    imageClicked(e) {
        const settings = {
            "async": true,
            "crossDomain": true,
            "url": `https://api.imgur.com/3/gallery/image/${e.target.id}`,
            "method": "GET",
            "headers": {
                "authorization": "Client-ID c15b126ab623153"
            }
        };
        const settingsForComments = {
            "async": true,
            "crossDomain": true,
            "url": `https://api.imgur.com/3/gallery/${e.target.id}/comments/best`,
            "method": "GET",
            "headers": {
                "authorization": "Client-ID c15b126ab623153"
            }
        };

        const self = this;
        $.ajax(settingsForComments).done(function (response) {
            //var dd=response.data; debugger;
            self.props.setComments(response.data);
            $.ajax(settings).done(function (response) {
                //var dd=response.data; debugger;
                const { id, title, description, views, width, points } = response.data;
                self.props.showSingleImg({id, title, description, views, width, points})
            });
        });
    }

    createImagesList() {
        if (this.props.imagesList && this.props.imagesList.length !== 0) {
            // char in the end of url (before '.png' is for thumbnail
            // see https://api.imgur.com/models/image#thumbs for more
            return this.props.imagesList.map((img, i) => {
                return (
                    <div key={i+'div'} className={'imgInGallery'}>
                        <img id={img.thumbnail} key={i+'img'} className={'imgThumb'} onClick={
                            (e) => this.imageClicked(e)
                        } src={`http://i.imgur.com/${img.thumbnail}s.png`}/>
                        {(i%5===4 ) && (
                            <br key={i+'br'}/>
                        )}
                    </div>
                )
            })
        } else if (this.props.imagesList && this.props.imagesList.length === 0) {
            return (
                <p>No images to show on this page</p>
            )
        } else {
            return (
                <p>Getting images in progress.<br />
                Check Your internet connection if this message doesn't disappear.</p>
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
        imagesList: state.imagesList,
        pageNumber: state.pageNumber
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        showSingleImg: showSingleImg,
        setComments: setComments
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ImagesList);
