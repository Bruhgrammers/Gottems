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

export default class CheatSheetPanel extends React.Component {
  render() {

    if (this.props.cheatSheetToggle) {
      return (
        <Panel>
        <PanelBody style={{padding: 0}}>
        <Grid>
        <Row>
        <Col xs={12}>
        <h4>To succeed on GMAT exponent problems, it is imperative that you are comfortable working with the following rules:</h4>
        <Table striped bordered condensed hover>
        <thead>
        <tr>
        <th style={{width: 130}}>Rule</th>
        <th>Explanation</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>(x • y)a = xa • ya </td>
        <td>The exponent distributes to all terms within the parentheses. To convince
        yourself, you can derive this rule quickly using smaller numbers (4 • 3)2 = (4 •
          3) • (4 • 3), and, since multiplication is both associative and commutative, that
          equals (4 • 4) • (3 • 3) = 42 • 32. ( xy )a=xa ya This rule goes hand in hand with the above; again, the exponent distributes
          to all terms within the parentheses. A quick derivation: ( 43 )2= ( 43 )( 43 ) =4 • 43 • 3 =4232
          </td>
          </tr>
          <tr>
          <td>xa • xb = xa+b</td>
          <td>Try this with small numbers representing the exponents, such as a = 3 and
          b = 2: x3• x2 = (x • x • x) • (x • x) = x • x • x • x • x = x5 = x3 + 2 xa xb = xa − b This is the counterpart to the above. Try using a=5 and b=2 and simplifying the fraction by cancelling:
          x5 x2 = x • x • x • x • x
          x • x = x • x • x • x • x
          x • x = x3 = x5 – 2</td>
          </tr>
          <tr>
          <td>(xa)b = xab</td>
          <td>Again, convince yourself with small numbers. Try a = 2 and b = 3:
          (x2)3 = (x • x)3 = (x • x) • (x • x) • (x • x) = x • x • x • x • x • x = x6 = x2•3
          x0 = 1 Think of the fact that for the powers of a given number, each time you
          increase the exponent by 1, you are multiplying by the base again—so each
          time you decrease the exponent by 1, you are dividing through by the base.
          For instance, to get from 31 to 32, you multiply by 3; to get from 32 to 33,
          you multiply by 3 again; 34 = 33 • 3, and so on. </td>
          </tr>
          </tbody>
          </Table>
          </Col>
          </Row>
          </Grid>
          </PanelBody>
          </Panel>
      )
    } else return null;
  }
}
