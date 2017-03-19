import React from 'react';
import { browserHistory } from 'react-router'

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

export default class SidePanel extends React.Component {

  render() {
  return (
    <PanelContainer>
    <Panel>
      <PanelHeader className='bg-red'>
        <Grid>
          <Row>
              <Col xs={12} className='fg-white'>
                <h4>{this.props.title}</h4>
            </Col>
          </Row>
        </Grid>
      </PanelHeader>

      <PanelBody style={{padding: 0}}>
      <Grid>
        <Row>
        <Col xs={12}>
          <h3>Please wait while we import your data</h3>
          <p>
          <LoremIpsum query='5s' />
          </p>
        </Col>
        </Row>
      </Grid>
      </PanelBody>
    </Panel>
    </PanelContainer>
  );
  }
}
