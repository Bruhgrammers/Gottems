import React from 'react';

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

export default class SocialSwitches extends React.Component {
  componentDidMount() {
    var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));

    elems.forEach(function(html) {
      var switchery = new Switchery(html);
    });
  }
  render() {
    return (
      <Table className='panel-switches' collapsed>
        <tbody>
          <tr>
            <td>
              <Icon glyph='icon-fontello-twitter' className='fg-blue' /><span className='text-uppercase panel-switches-text'>twitter</span>
            </td>
            <td className='panel-switches-holder'><input type='checkbox' className='js-switch' defaultChecked /></td>
          </tr>
          <tr>
            <td>
              <Icon glyph='icon-fontello-facebook' className='fg-darkblue' /><span className='text-uppercase panel-switches-text'>facebook</span>
            </td>
            <td className='panel-switches-holder'><input type='checkbox' className='js-switch' /></td>
          </tr>
          <tr>
            <td>
              <Icon glyph='icon-fontello-gplus' className='fg-deepred' /><span className='text-uppercase panel-switches-text'>google+</span>
            </td>
            <td className='panel-switches-holder'><input type='checkbox' className='js-switch' /></td>
          </tr>
          <tr>
            <td>
              <Icon glyph='icon-fontello-linkedin' className='fg-deepred' /><span className='text-uppercase panel-switches-text'>linkedin</span>
            </td>
            <td className='panel-switches-holder'><input type='checkbox' className='js-switch' defaultChecked /></td>
          </tr>
          <tr>
            <td>
              <Icon glyph='icon-fontello-instagram' className='fg-deepred' /><span className='text-uppercase panel-switches-text'>instagram</span>
            </td>
            <td className='panel-switches-holder'>
              <Button bsStyle='primary'>connect</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
