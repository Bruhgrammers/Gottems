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

export default class BasicPanel extends React.Component {
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
				  <h3>{this.props.title}</h3>
				  <p>
					<LoremIpsum query={this.props.text} />
				  </p>
				</Col>
			  </Row>
			</Grid>
		  </PanelBody>
		  <PanelFooter className='bg-red'>
			<Grid>
			  <Row>
        <Col xs={12} className='fg-white'>
            <Button bsStyle="red" style={{margin: 30}} inverse outline onClick={::this.handleClick}>
              Skip
            </Button>
        </Col>
			  </Row>
			</Grid>
		  </PanelFooter>
		</Panel>
	  </PanelContainer>
	);
  }
}
