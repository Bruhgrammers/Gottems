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

export default class HelpPanel extends React.Component {
  render() {
	return (
	  <PanelContainer>
		<Panel>
		  <PanelBody style={{padding: 0}}>
			<Grid>
			  <Row>
				<Col xs={12}>
				  <h4>Help Panel</h4>
          <ul>
            <li style={{cursor: "pointer"}} onClick={this.props.renderCheatSheet}>Cheatsheet</li>
            <li style={{cursor: "pointer"}} onClick={this.props.renderHint}>Hints</li>
            <li style={{cursor: "pointer"}} onClick={this.props.renderFriend}>Ask the world</li>
            <li style={{cursor: "pointer"}} onClick={this.props.renderSimplify}>Simplify</li>
          </ul>
				</Col>
			  </Row>
			</Grid>
		  </PanelBody>
		</Panel>
	  </PanelContainer>
	);
  }
}
