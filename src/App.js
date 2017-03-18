import React from 'react';
import classNames from 'classnames';
import { IndexRoute, Route, browserHistory } from 'react-router';

import {
  Row,
  Tab,
  Col,
  Nav,
  Icon,
  Grid,
  Form,
  Table,
  Label,
  Panel,
  Button,
  NavItem,
  Checkbox,
  Progress,
  PanelBody,
  FormGroup,
  PanelLeft,
  isBrowser,
  InputGroup,
  LoremIpsum,
  PanelRight,
  PanelHeader,
  ControlLabel,
  PanelFooter,
  FormControl,
  Radio,
  PanelContainer,
  PanelTabContainer,
  Image,
  Well,
  MainContainer,
} from '@sketchpixy/rubix';

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
