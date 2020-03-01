import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        html: ''
    }
  };

  // _fecth() {
  //   fetch('https://github.com/').then(res => {
  //     console.log(res.headers.raw());
  //   })
  // }

  _fecth_local() {
    const f = fetch(
      'http://vmdev:8081/fetch',
      {
        method: "GET"
        ,headers: {
          'Accept': 'application/json, application/xml, text/play, text/html, *.*'
          ,'Content-Type': 'application/json; charset=utf-8'
        }
      }
    ).then(function(res) {
      // console.log('Request failed At ', res.json());
      // console.log('Request res At ', res.json());
      return res.json();
      // return res.json().then(data => {
      //   return data;
      //   // console.log(data);
      //   // this.setState({ html: data.message }); 
      // })
    // }).then(function(data) {
    //   console.log('Request data At ', data);
      // return data;
    }).catch(function(error) {
      console.log('Request failed At ', error);
    });
    console.log(f);
    f.then(data => {
      this.setState({ html: data.message }); 
    }).catch(function(error) {
      console.log('Request data failed At ', error);
    });
    // fetch('http://vmdev:8081/fetch',
    //   {
    //     method: "GET",
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'accept':'application/json'
    //     }
    // }).then(res => {
    //   console.log(res.json())
    //   this.setState({ html: res.json() });
    // }).catch(error => { console.log(error); })
  }

  render() {
    // this._fecth()
    this._fecth_local()
    return (
      <div>
        { this.state.html }
      </div>
    );
  }
}
export default App;
