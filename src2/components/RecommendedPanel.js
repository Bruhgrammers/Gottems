import React from 'react';
import { browserHistory } from 'react-router';

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
  PanelFooter,
  FormControl,
  PanelContainer,
  PanelTabContainer,
  Image,
  Well,
} from '@sketchpixy/rubix';

export default class RecommendedPanel extends React.Component {
  handleClick(e) {
    browserHistory.push(this.props.link);
  }

  render() {
  return (
    <PanelContainer>
    <Panel>
      <PanelHeader className='bg-blue'>
        <Grid>
          <Row>
              <Col xs={12} className='fg-white'>
                <h4>{this.props.name}</h4>
            </Col>
          </Row>
        </Grid>
      </PanelHeader>

      <PanelBody style={{padding: 0}}>
      <Grid>
        <Row>
        <Col xs={9}>
          <p>
          {this.props.content}
          </p>
          <Progress value={this.props.progress} label={`Progress: ${this.props.progress}%`} />
        </Col>
        <Col xs={3}>
          <Button lg outlined style={{marginBottom: 5}} bsStyle='primary' onClick={::this.handleClick}>Continue</Button>{' '}
        </Col>
        </Row>
      </Grid>
      </PanelBody>
    </Panel>
    </PanelContainer>
  );
  }
}
