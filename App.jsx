import React from 'react';
import ImagesList from '~/js/containers/ImagesList.js';

class App extends React.Component {
    render() {
        return (
            <div id={"mainDiv"}>
                <div id={'mainContentDiv'}>
                    <p>guziczki jakies</p>
                    <ImagesList />
                    <p>inne guziczki</p>
                </div>
            </div>
        );
    }
}

export default App;
