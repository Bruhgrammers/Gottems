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

class ImportingDataPanel extends React.Component {

  render() {
  setTimeout(function() {
    browserHistory.push('/ltr/dashboard');
  }.bind(this), 3000);


	return (
	  <PanelContainer>
		<Panel>
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

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className='dashboard'>
        <Row>
          <Col sm={12}>
            <ImportingDataPanel />
          </Col>
        </Row>
      </div>
    );
  }
}
