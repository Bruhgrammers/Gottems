import React from 'react';
import RecommendedPanel from '../components/RecommendedPanel';
import LessonPanel from '../components/LessonPanel';
import SidePanel from '../components/SidePanel';
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

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className='dashboard'>
        <Row>
          <Col sm={9}>
            <RecommendedPanel name="Exponents" content="You are almost there!" progress={65} link="/ltr/module"/>
            <LessonPanel name="Fractions" content="Keep it up, my man!" progress={55} />
            <LessonPanel name="Number Properties" content="Keep it up, my man" progress={30} />
            <LessonPanel name="Roots" content="Keep it up, my man" progress={21} />
            <LessonPanel name="Quadratic Equations" content="Keep it up, my man" progress={43} />
            <LessonPanel name="Common Equations" content="Keep it up, my man" progress={12} />
            <LessonPanel name="Toolkit" content="Keep it up, my man" progress={43} />
            <LessonPanel name="Inequalities" content="Keep it up, my man" progress={5} />
          </Col>
          <Col sm={3}>
            <SidePanel title="Panel Body + Header without Panel Footer"/>
          </Col>
        </Row>
      </div>
    );
  }
}
