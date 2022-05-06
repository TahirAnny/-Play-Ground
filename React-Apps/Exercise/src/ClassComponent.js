import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  // printHeader(){
      render(){
        return(
            <div>
                <h1>
                    This is a Header!
                </h1>
            </div> 
        )
      }
  // }
}

// const headerComponent = new Header(); no need to initiate after extending

ReactDOM.render(<Header />, document.getElementById('root'));
