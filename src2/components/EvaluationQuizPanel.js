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


export default class EvaluationQuizPanel extends React.Component {
  handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    browserHistory.push('/ltr/proceed-diagnostic-quiz');
  }

  render() {
	return (
	  <PanelContainer>
		<Panel>
		  <PanelBody style={{padding: 0}}>
			<Grid>
			  <Row>
				<Col xs={12}>
				  <h3>Proceed by taking the Diagnostic Quiz</h3>
				  <Image src="https://img.veritasprep.com/gmat-question-bank-splash.jpg" responsive />
				  <p>
					<LoremIpsum query='1s' />
				  </p>
				</Col>
			  </Row>
			</Grid>
		  </PanelBody>
		  <PanelFooter className='bg-brown'>
			<Grid>
			  <Row>
				<Col xs={12} className='fg-white'>
            <Button bsStyle="red" inverse style={{margin: 30}} outline onClick={::this.handleClick}>
              Diagnostic Quiz
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
