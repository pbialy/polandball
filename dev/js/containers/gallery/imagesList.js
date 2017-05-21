import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {showSingleImg} from '~/js/actions/index.js';

class ImagesList extends React.Component {

    imageClicked(e) {
        //debugger;
        //e.target.id
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": `https://api.imgur.com/3/image/${e.target.id}`,
            "method": "GET",
            "headers": {
                "authorization": "Client-ID c15b126ab623153"
            }
        }

        const self = this;
        $.ajax(settings).done(function (response) {
            //var dd=response.data; debugger;
            const { id, title, description, views, width } = response.data; //datetime TODO
            self.props.showSingleImg({id, title, description, views, width})
        });
    }

    createImagesList() {
        if (this.props.imagesList) {
            // char in the end of url (before '.png' is for thumbnail
            // see https://api.imgur.com/models/image#thumbs for more
            return this.props.imagesList.map((img, i) => {
                //console.log(img);

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
        imagesList: state.imagesList,
        pageNumber: state.pageNumber
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        showSingleImg: showSingleImg
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ImagesList);
