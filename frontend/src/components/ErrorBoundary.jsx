import { Component } from 'react';

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) return <div className='h-screen w-screen flex justify-center items-center'>
      <h2>Something went wrong.</h2>
    </div>;
    return this.props.children;
  }
}

export default ErrorBoundary;
