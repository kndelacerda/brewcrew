import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { grey50, darkBlack } from 'material-ui/styles/colors';
import Header from './header';



const muiTheme = getMuiTheme({
  appBar: {
    width: '100%',
    color: grey50,
    textColor: darkBlack,
  },
});

export default class App extends Component {
  render() {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
            <Header />
            {this.props.children}
          </div>
        </MuiThemeProvider>
    );
  }
}
