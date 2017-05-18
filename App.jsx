import React from 'react';
import ImagesList from '~/js/containers/ImagesList.js';

class App extends React.Component {
    render() {
        return (
            <div id={"mainDiv"}>
                <ImagesList />
            </div>
        );
    }
}

export default App;
