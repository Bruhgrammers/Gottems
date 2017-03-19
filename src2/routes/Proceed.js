import React from 'react';
import BasicPanel from '../components/BasicPanel';
import EvaluationQuizPanel from '../components/EvaluationQuizPanel';
import PracticeTestPanel from '../components/PracticeTestPanel';

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

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className='dashboard'>
        <Row>
          <Col sm={4}>
            <PracticeTestPanel />
          </Col>
          <Col sm={4}>
            <EvaluationQuizPanel />
          </Col>
          <Col sm={4}>
            <BasicPanel link="/ltr/dashboard" title="Skip Evaluation" text="1s"/>
          </Col>

        </Row>
      </div>
    );
  }
}
