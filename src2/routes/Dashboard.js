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
            <RecommendedPanel name="Algebra" content="You are almost there!!" progress={90} link="/ltr/lesson"/>
            <LessonPanel name="Advanced Verbal" content="Keep it up, my man!" progress={55} link="/ltr/lesson"/>
            <LessonPanel name="Arithmetic" content="Keep it up, my man" progress={30} link="/ltr/lesson"/>
            <LessonPanel name="Data Sufficiency" content="Keep it up, my man" progress={21} link="/ltr/lesson"/>
            <LessonPanel name="Sentence Correction" content="Keep it up, my man" progress={43} link="/ltr/lesson"/>
            <LessonPanel name="Advanced Word Problems" content="Keep it up, my man" progress={12} link="/ltr/lesson"/>
            <LessonPanel name="Geometry" content="Keep it up, my man" progress={43} link="/ltr/lesson"/>
            <LessonPanel name="Statistics & Combinatorics" content="Keep it up, my man" progress={5} link="/ltr/lesson"/>
            <LessonPanel name="Reading Comprehension" content="Keep it up, my man" progress={3} link="/ltr/lesson"/>
            <LessonPanel name="Critical Reasoning" content="Keep it up, my man" progress={1} link="/ltr/lesson"/>
          </Col>
          <Col sm={3}>
            <SidePanel title="Panel Body + Header without Panel Footer" />
          </Col>
        </Row>
      </div>
    );
  }
}
