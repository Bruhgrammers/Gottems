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

export default class HintsPanel extends React.Component {
  handleClick(e) {
    browserHistory.push(this.props.link);
  }

  render() {
	return (
	  <PanelContainer>
		<Panel>
		  <PanelBody style={{padding: 0}}>
			<Grid>
			  <Row>
				<Col xs={12}>
				  <h4>Score Estimate</h4>
				</Col>
			  </Row>
			</Grid>
		  </PanelBody>
		</Panel>
	  </PanelContainer>
	);
  }
}
