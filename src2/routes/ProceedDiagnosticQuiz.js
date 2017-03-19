import React from 'react';
import { browserHistory } from 'react-router'


import {
  Row,
  Col,
  Nav,
  Grid,
  Form,
  Panel,
  Radio,
  Table,
  Button,
  Checkbox,
  PanelBody,
  FormGroup,
  InputGroup,
  LoremIpsum,
  PanelHeader,
  ButtonGroup,
  FormControl,
  PanelFooter,
  ControlLabel,
  PanelContainer,
} from '@sketchpixy/rubix';

export default class Wizard extends React.Component {
  componentDidMount() {

    Messenger.options = {
      theme: 'flat'
    };

    var isLtr = $('html').attr('dir') === 'ltr';
    var styles = {};

    $('#wizard-1').steps({
      autoFocus: true,
      onFinishing: function (event, currentIndex) {
        Messenger().post('You have successfully finished the diagnostic quiz!');
        browserHistory.push('/ltr/dashboard');
      },
      onFinished: function (event, currentIndex) {
        alert('Submitted!');
        Messenger().post('Submitted');
      }
    });


    $('#wizard-2').steps({
      onStepChanging: function (event, currentIndex, newIndex) {
        $('#form-2').validate().settings.ignore = ':disabled,:hidden';
        return $('#form-2').valid();
      },
      onFinishing: function (event, currentIndex) {
        $('#form-2').validate().settings.ignore = ':disabled';
        return $('#form-2').valid();
      },
      onFinished: function (event, currentIndex) {
        alert('Submitted!');
      }
    });


    $('#wizard-3').steps({
      onStepChanging: function (event, currentIndex, newIndex) {
        $('#form-2').validate().settings.ignore = ':disabled,:hidden';
        return $('#form-2').valid();
      },
      onFinishing: function (event, currentIndex) {
        $('#form-2').validate().settings.ignore = ':disabled';
        return $('#form-2').valid();
      },
      onFinished: function (event, currentIndex) {
        alert('Submitted!');
      }
    });

    $('#wizard-4').steps({
      onStepChanging: function (event, currentIndex, newIndex) {
        $('#form-2').validate().settings.ignore = ':disabled,:hidden';
        return $('#form-2').valid();
      },
      onFinishing: function (event, currentIndex) {
        $('#form-2').validate().settings.ignore = ':disabled';
        return $('#form-2').valid();
      },
      onFinished: function (event, currentIndex) {
        alert('Submitted!');
      }
    });

    $('#wizard-5').steps({
      onStepChanging: function (event, currentIndex, newIndex) {
        $('#form-2').validate().settings.ignore = ':disabled,:hidden';
        return $('#form-2').valid();
      },
      onFinishing: function (event, currentIndex) {
        $('#form-2').validate().settings.ignore = ':disabled';
        return $('#form-2').valid();
      },
      onFinished: function (event, currentIndex) {
        alert('Submitted!');
      }
    });
    $('#wizard-6').steps({
      onStepChanging: function (event, currentIndex, newIndex) {
        $('#form-2').validate().settings.ignore = ':disabled,:hidden';
        return $('#form-2').valid();
      },
      onFinishing: function (event, currentIndex) {
        $('#form-2').validate().settings.ignore = ':disabled';
        return $('#form-2').valid();
      },
      onFinished: function (event, currentIndex) {
        alert('Submitted!');
      }
    });



    $('#create-step').bind('submit', this.createStep);
    $('#insert-step').bind('submit', this.insertStep);
    $('#remove-step').bind('submit', this.removeStep);
  }

  componentWillUnmount() {
    $('#create-step').unbind('submit', this.createStep);
    $('#insert-step').unbind('submit', this.insertStep);
    $('#remove-step').unbind('submit', this.removeStep);
  }

  render() {
    return (
      <Row>
        <Col xs={12}>
          <PanelContainer noOverflow>
            <Panel>
              <PanelHeader className='bg-darkgreen45 fg-white' style={{margin: 0}}>
                <Grid>
                  <Row>
                    <Col xs={12}>
                      <h3>Diagnostic Quiz with steps</h3>
                    </Col>
                  </Row>
                </Grid>
              </PanelHeader>
              <PanelBody>
                <div id='wizard-1'>
                  <h1>First Step</h1>
                  <div>
                  <p><strong>Sentence Correction</strong>
                  (21) Known globally as one of the greatest musical acts of all time, The Beatles recorded 20 singles that reached the top spot on the Billboard charts; their songs, including Yesterday, which spent four weeks in the top spot, have been covered more often than any modern band.
                  </p>
                    <FormControl componentClass="select" multiple>
                      <option value="A">than any</option>
                      <option value="B">than any other</option>
                      <option value="C">compared to those of any</option>
                      <option value="D">than those of any other</option>
                      <option value="E">as have those of any</option>
                    </FormControl>
                  </div>
                  <h1>Second Step</h1>
                  <div><LoremIpsum query='5s' />
                    <FormControl componentClass="select" multiple>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                      <option value="E">E</option>
                    </FormControl>
                  </div>
                  <h1>Third Step</h1>
                  <div><LoremIpsum query='5s' />
                  <FormControl componentClass="select" multiple>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                  </FormControl>
                  </div>
                  <h1>Fourth Step</h1>
                  <div><LoremIpsum query='5s' />
                  <FormControl componentClass="select" multiple>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                  </FormControl>
                  </div>
                  <h1>Fifth Step</h1>
                  <div><LoremIpsum query='5s' />
                  <FormControl componentClass="select" multiple>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                  </FormControl>
                  </div>
                  <h1>Sixth Step</h1>
                  <div><LoremIpsum query='5s' />
                  <FormControl componentClass="select" multiple>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                  </FormControl>
                  </div>
                </div>
              </PanelBody>
            </Panel>
          </PanelContainer>
        </Col>
      </Row>
    );
  }
}
