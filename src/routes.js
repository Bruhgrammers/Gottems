import React from 'react';
import classNames from 'classnames';
import { IndexRoute, Route } from 'react-router';

import { Grid, Row, Col, MainContainer } from '@sketchpixy/rubix';

/* Common Components */

/* Pages */

class App extends React.Component {
  render() {
    return (
      <MainContainer {...this.props}>
        <div id='body'>
        Hello, World   changes
          <Grid>
            <Row>
              <Col xs={12}>
                {this.props.children}
              </Col>
            </Row>
          </Grid>
        </div>
      </MainContainer>
    );
  }
}

const routes = (
  <Route path='/' component={App}>
   </Route>
);

export default routes;
