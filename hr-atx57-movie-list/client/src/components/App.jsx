import React from 'react';

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

// const App = (props) => (
//   <div>Hello World!</div>
// );

class App extends React.Component {
  constructor(props): {
    super(props);
  }
  render(): {
    <ul>
    return movies.map(function({title}) {
      return (<li>{title}</li>)
    })
    </ul>
  }
}

export default App;