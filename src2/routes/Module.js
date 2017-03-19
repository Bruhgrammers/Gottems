import React from 'react';
import HelpPanel from '../components/HelpPanel';
import ScoreEstimatePanel from '../components/ScoreEstimatePanel';
import ModuleContentPanel from '../components/ModuleContentPanel';
import NextLesson from '../components/NextLesson';
// import HintsPanel from '../components/HintsPanel';

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

export default class Module extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "testingtesting",
      currentView: "cheatSheet",
      isSubmittingAnswerDisabled: true,
      isNextButtonNecessary: true,
      questions: [
        { question: "(1) What is the smallest integer x for which 81^x > 3^24?",
          answerChoices: [
            { letter: "A", friend: true, text: "6", correct: false},
            { letter: "B", text: "7", correct: true},
            { letter: "C", friend: true, text: "8", correct: false},
            { letter: "D", text: "10", correct: false},
            { letter: "E", text: "24", correct: false},
          ],
          hints : ['4^2x = 2 ^ 4x', '8^y = 2 ^ 3y'],
          correctLesson : ['You got it right. Since you got question 1 right, we are showing you a short lesson.'],
          wrongLesson : ['You got it wrong. Since you got question 1 wrong, we are showing you a long lesson.'],
          answered: false,
          correctResponse: false,
        },
        { question: "(2) (2 ^ 15 + 2 ^ 18) / 6^2 =",
          answerChoices: [
            { letter: "A", friend: true, text: "2^12" },
            { letter: "B", text: "2^13" },
            { letter: "C", friend: true, text: "2^14" },
            { letter: "D", text: "2^15" },
            { letter: "E", text: "2^16" },
          ],
          hints : ['2^15 + 2 ^18 = (2 ^ 15) * (1 + 2^3)', '6 ^ 2 = (3^2) * (2^2)'],
          correctLesson : ['You got it right. Since you got question 1 right, we are showing you a short lesson.'],
          wrongLesson : ['You got it wrong. Since you got question 1 wrong, we are showing you a long lesson.'],
          answered: false,
          correctResponse: false,
        },
        { question: "(3) What is the smallest integer x for which 81^x > 3^24?",
          answerChoices: [
            { letter: "A", text: "6" },
            { letter: "B", text: "7" },
            { letter: "C", text: "8" },
            { letter: "D", text: "10" },
            { letter: "E", text: "24" },
          ],
          hints : ['first hint', 'second hint'],
          correctLesson : ['You got it right. Since you got question 1 right, we are showing you a short lesson.'],
          wrongLesson : ['You got it wrong. Since you got question 1 wrong, we are showing you a long lesson.'],
          answered: false,
          correctResponse: false,
        },
        { question: "(4) What is the smallest integer x for which 81^x > 3^24?",
          answerChoices: [
            { letter: "A", text: "6" },
            { letter: "B", text: "7" },
            { letter: "C", text: "8" },
            { letter: "D", text: "10" },
            { letter: "E", text: "24" },
          ],
          hints : ['first hint', 'second hint'],
          correctLesson : ['You got it right. Since you got question 1 right, we are showing you a short lesson.'],
          wrongLesson : ['You got it wrong. Since you got question 1 wrong, we are showing you a long lesson.'],
          answered: false,
          correctResponse: false,
        },
      ],
      questionNum: 0,
      score: 0,
      needHint: false,
      friendUsed: false,
      cheatSheetToggle: false,
      simplify: false,

    };
    this.update = this.update.bind(this);
    this.changeQuestion = this.changeQuestion.bind(this);
    this.renderHint = this.renderHint.bind(this);
    this.selectedAnswer = this.selectedAnswer.bind(this);
    this.renderFriend = this.renderFriend.bind(this);
    this.renderCheatSheet = this.renderCheatSheet.bind(this);
    this.renderSimplify = this.renderSimplify.bind(this);
  }
  update() {
    this.setState({ content: "button clicked" });
  }
  changeQuestion() {
    if (this.state.currentView === "cheatSheet") return this.setState({
      currentView: this.state.questions[this.state.questionNum],
      needHint: false,
      friendUsed: false,
      cheatSheetToggle: false,
      simplify: false,
    });

    var num = this.state.questionNum + 1 >= this.state.questions.length ? 0 : this.state.questionNum + 1;
    var view = this.state.questions[num];

    this.setState({
      currentView: view,
      questionNum: num,
      needHint: false,
      friendUsed: false,
      cheatSheetToggle: false,
      simplify: false,
    })
  }

  renderHint() {
    var hint = this.state.needHint ? 2 : 1;
    this.setState({
      needHint: hint,
      isSubmittingAnswerDisabled: true,
      isNextButtonNecessary: false,
    })
  }

  renderFriend() {
    this.setState({ friendUsed: true });
  }

  renderCheatSheet() {
    this.setState({ cheatSheetToggle: !this.state.cheatSheetToggle });
  }

  renderSimplify() {
    this.setState({ simplify: true});
  }

  selectedAnswer() {
    this.setState({ isSubmittingAnswerDisabled: false});
  }


  render() {

    return (
      <div className='module'>
        <Row>
          <Col sm={8}>
            <ModuleContentPanel
              currentView={this.state.currentView}
              content={this.update}
              changeQuestion={this.changeQuestion}
              questionNum={this.state.questionNum}
              needHint={this.state.needHint}
              renderHint={this.renderHint}
              isSubmittingAnswerDisabled={this.state.isSubmittingAnswerDisabled} selectedAnswer={this.selectedAnswer}
              friendUsed={this.state.friendUsed}
              cheatSheetToggle={this.state.cheatSheetToggle}
              simplify={this.state.simplify}
            />
          </Col>
          <Col sm={4}>
            <ScoreEstimatePanel />
            <HelpPanel
              renderHint={this.renderHint}
              renderFriend={this.renderFriend}
              renderCheatSheet={this.renderCheatSheet}
              renderSimplify={this.renderSimplify}
            />
            <NextLesson
              update={this.update}
              changeQuestion={this.changeQuestion}
              isNextButtonNecessary={this.state.isNextButtonNecessary}
            />
          </Col>
        </Row>
      </div>
    );
  }
}
