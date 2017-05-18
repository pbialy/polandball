import React from 'react';
import ImagesList from '~/js/containers/images-list.js';

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
