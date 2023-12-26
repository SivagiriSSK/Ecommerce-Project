// error boundary should be class comp
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false
  };

  static getDerivedStateFromError(error) {
    console.log(error);
    return {
      hasError: true
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log('🚀 ~ file: ErrorBoundary.js:24 ~ ErrorBoundary ~ componentDidCatch:');
    console.log(error);
    console.log(errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='alert alert-danger'>
          <h1>Some Error Occurred!</h1>
          <p>Try again later. If the error persists contact the Admin</p>
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element
};

export default ErrorBoundary;
