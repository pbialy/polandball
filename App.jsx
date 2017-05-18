import React from 'react';
//import Page from './dev/js/components/Page.jsx';
import ImagesList from '~/js/containers/images-list.js';

class App extends React.Component {
    render() {
        return (
            <div id={"mainDiv"}>
                <img id={'firstImg'} style={{width:'200px', height:'150px'}} />
                <ImagesList />
            </div>
        );
    }
}

export default App;
