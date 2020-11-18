import React from 'react';
import './App.css';
import './styles.css';

import Sidebar from './components/sidebar/sidebar';
import Main from './components/main/main';
import {
    HomeSolid,
    HashtagOutline,
    BellOutline,
    MailOutline,
    UserOutline,
    DotsCircleHorizontalOutline
} from "@graywolfai/react-heroicons";

class App extends React.Component {

    constructor() {
        super(); //Es necesario colocar super para poder crear mi estado para este componente
        this.state = {
            iconArray: [ 
              < HomeSolid />,
              < HashtagOutline />, 
              < BellOutline />, 
              < MailOutline />, 
              < UserOutline />, 
              < DotsCircleHorizontalOutline  />
            ],
            profileUrl: 
                'https://avatarfiles.alphacoders.com/147/thumb-1920-147101.png'
        }
    }

    /*cambiarImagen = () => {
      this.setState({profileUrl: 'https://screenshots.gamebanana.com/img/ico/sprays/nu8_2.png'})
    }*/

    render() {
        return (
            <div className="App">
                <Sidebar 
                    iconList={this.state.iconArray} 
                    profileUrl={this.state.profileUrl} />
                <Main 
                    profileUrl={this.state.profileUrl} 
                 />
            </div>
        )
    }
}

export default App;
