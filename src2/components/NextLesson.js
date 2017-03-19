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
  //if(this.props.isNextButtonNecessary){
  render() {
    return (
      <PanelContainer>
        <Panel>
        	<PanelBody className='bg-brown'>
        		<Grid>
        		  <Row>
        		    <Col xs={12} className='fg-white'>
        		      <Button bsStyle="red" inverse style={{margin: 30}} outline onClick={this.props.changeQuestion}>
        		        Next
        		      </Button>
        		    </Col>
        		  </Row>
        		</Grid>
          </PanelBody>
      	 </Panel>
        </PanelContainer>
     	);
    }
  //}
}
