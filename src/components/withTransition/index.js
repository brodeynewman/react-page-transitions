import React from 'react';

import { TransitionContext } from '../TransitionProvider';

const withTransition = ComposedComponent => props => (
  <TransitionContext.Consumer>
    {details => <ComposedComponent {...props} {...details} />}
  </TransitionContext.Consumer>
);

export default withTransition;
