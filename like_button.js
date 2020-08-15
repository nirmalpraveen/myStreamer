// // import React from 'react';

// // function App(){
// //   React.render(
// //         <div>
// //         <video width="320" height="240" id="videoPlayer" controls muted="muted" autoplay> 
// //           <source src="/video" type="video/mp4"/>
// //         </video>
// //         </div>
// //     )
// // }

// // export default App;



// import React from 'react';
// import ReactDOM from 'react-dom';

// console.log('This is working');

// const myelement = () => { 
//   render(
//   <div>
// <video width="320" height="240" id="videoPlayer" controls muted="muted" autoplay> 
//   <source src="/video" type="video/mp4"/>
// </video>
// </div>);
// }
// const domContainer = document.querySelector('#like_button_container');
// ReactDOM.render(myelement, domContainer);

// 'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {

    super(props);
    console.log('This is one');
    this.state = { liked: false };
  }

  render() {

    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);
