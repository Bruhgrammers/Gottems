import React from 'react';
import { browserHistory } from 'react-router'
import HintsPanel from './HintsPanel';
import CheatSheetPanel from './CheatSheetPanel';

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
  ControlLabel,
  PanelFooter,
  FormControl,
  Radio,
  PanelContainer,
  PanelTabContainer,
  Image,
  Well,
} from '@sketchpixy/rubix';

export default class ModuleContentPanel extends React.Component {
  handleClick(e) {
    browserHistory.push(this.props.link);
  }
  render() {
    console.log(this.props.simplify);

    if (this.props.currentView === "cheatSheet") {
      return (
        <PanelContainer>
          <CheatSheetPanel cheatSheetToggle={true}/>
        </PanelContainer>
      );
    } else {
      var answerChoicesArr = [];
      var answer = this.props.currentView.answerChoices;
      for (var i = 0; i < answer.length; i++) {
        var friend = "";
        if (this.props.friendUsed) {
          // style.color = "red";
          if (answer[i].friend){
            friend = " not this one bruh";
            // console.log(answer[i].letter + ' friends');
          }
        }
        //answerChoicesArr.push(<tr><td style={styles.answerChoiceLetter}>({answer[i].letter})</td><td>{answer[i].text}</td></tr>);
        answerChoicesArr.push(<Radio key={answer[i].letter} onChange={this.props.selectedAnswer} name='radio-options'>{answer[i].text + friend}</Radio>);
      }

      var submitButton = <Button outlined disabled={this.props.isSubmittingAnswerDisabled ? true : false} bsStyle='lightgreen' onClick={this.props.changeQuestion}>submit</Button>;

      return (
        <PanelContainer>
          <Panel>
            <PanelBody>
              <Grid>
                <Row>
                  <Col xs={12}>
                    <h4>{this.props.currentView.question}</h4>
					             <FormGroup>
                      	<ControlLabel></ControlLabel>
                        {answerChoicesArr}
		                  </FormGroup>
                  </Col>
                </Row>
              </Grid>
            </PanelBody>
			    <PanelFooter className='bg-darkgreen45 text-right'>
            <Grid>
              <Row>
                <Col xs={12}>
                  <br/>
                  <div>
                    {submitButton}
                  </div>
                  <br/>
                </Col>
              </Row>
            </Grid>
          </PanelFooter>
          </Panel>
          <HintsPanel
            hints={this.props.currentView.hints}
            needHint={this.props.needHint}
            renderHint={this.props.renderHint}
          />
        <CheatSheetPanel cheatSheetToggle={this.props.cheatSheetToggle} />
        </PanelContainer>
      )
    }
  }
}
