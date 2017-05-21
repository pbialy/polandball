import React from 'react';
import Gallery from '~/js/containers/gallery.js';
import SingleImg from '~/js/containers/singleImg.js';

class App extends React.Component {
    render() {
        return (
            <div id={"mainDiv"}>
                <div id={'mainContentDiv'}>
                    <Gallery /> {/* TODO if detail then ImageDetails */}
                </div>
            </div>
        );
    }
}

export default App;
