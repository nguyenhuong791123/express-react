import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      header: ''
    }
  };

  _fecth_local() {
    fetch(
      'http://vmdev:8081/fetch',
      {
        method: "GET"
        ,headers: {
          'Accept': 'application/json, application/xml, text/play, text/html, *.*'
          ,'Content-Type': 'application/json; charset=utf-8'
        }
      }
    ).then((response) => response.json())
    .then((responseJson) => {
      // console.log('Request failed At ', responseJson);
      this.setState({ header: responseJson.message.toString() })
      // console.log(this.state);
      this.forceUpdate();
    }).catch(function(error) {
      console.log('Request failed At ', error);
    });
  }

  componentWillMount() {
    this._fecth_local();
  }

  render() {
    return (
      <div>
        { this.state.header }
      </div>
    );
  }
}
export default App;
