import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

class Home extends Component {

  render() {
    return (
      <div className="home-page">
        <Link to="/dashboard" className="home__link">
          Go to Dashboard
        </Link>
      </div>
    );
  }

}

export default Home;
