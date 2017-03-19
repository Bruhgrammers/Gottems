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
//
// class HintsPanel extends React.Component {
//   render () {
//     if (this.props.needHint)
//     return (
//
//     )
//   }
// }

export default class HintsPanel extends React.Component {

  render() {

    if (this.props.needHint === 1) {

      // const more = () => {
      //
      // }
      // var hint = [<li>Hint 1: {this.props.hints[0]}</li>];
      // console.log(hint);
      // if (this.props.needHint === 1) {
      //   hint.push(<ul><li className="hi" style={{cursor: "pointer"}}onClick={more}> Another hint please! </li></ul>)
      // } else {
      //   hint.push(<ul><li>Hint 2: {this.props.hints[1]</li></ul>});
      // }

    	return (

    		<Panel>
    		  <PanelBody style={{padding: 0}}>
    			<Grid>
    			  <Row>
    				<Col xs={12}>
    				  <h4>Hints:</h4>
              <ul>
                <li>Hint 1: {this.props.hints[0]}</li>
                <li className="hi" style={{cursor: "pointer"}} onClick={this.props.renderHint}> Another hint please! </li>
              </ul>
    				</Col>
    			  </Row>
    			</Grid>
    		  </PanelBody>
    		</Panel>

    	);
    } else if (this.props.needHint === 2) {
      return (
        <Panel>
    		  <PanelBody style={{padding: 0}}>
    			<Grid>
    			  <Row>
    				<Col xs={12}>
    				  <h4>Hints:</h4>
              <ul>
                <li>Hint 1: {this.props.hints[0]}</li>
                <li>Hint 2: {this.props.hints[1]}</li>
              </ul>
    				</Col>
    			  </Row>
    			</Grid>
    		  </PanelBody>
    		</Panel>
      )
    } else {
      return null;
    }
  }
}
