import './auth.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import ResetPassword from '../../components/resetPassword/resetPassword';

class Auth extends Component {
  render() {
    const { authMode, code } = this.props;

    switch (authMode) {
      case 'resetPassword':
        return (
          <ResetPassword code={code} />
        );
      default:
        return null;
    }
  }
}

const mapStateToProps = state => {
  const authMode = (state.router.location.search.replace(/\?mode=/g, '').replace(/&[\s\S]*/g, ''));
  const code = (state.router.location.search.replace(/\?mode=[\s\S]*&oobCode=/g, '').replace(/&apiKey[\s\S]*/g, '')) || '';

  return {
    authMode,
    code
  };
};

export default connect(mapStateToProps)(Auth);