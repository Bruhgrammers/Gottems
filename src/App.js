import React from 'react';
import classNames from 'classnames';
import { IndexRoute, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

import Login from './components/Login';
import Signup from './components/Signup';
import MainProfile from './components/MainProfile';

const store = configureStore();

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
  MainContainer,
} from '@sketchpixy/rubix';

/* Common Components */

/* Pages */

// class App extends React.Component {
//   render() {
//     return (
//
//         <div
//           style={{
//             background: '#E9F0F5',
//             paddingTop: '25px',
//             paddingBottom: '25px',
//             marginTop: '0px',
//           }}
//           id='body'>
//           <Grid>
//             <Row>
//               <Col xs={12}>
//                 wtf
//                 {this.props.children}
//               </Col>
//             </Row>
//           </Grid>
//         </div>
//
//     );
//   }
// }
//
// const routes = (
//   <Route path='/' component={App}>
//     <Route path ='/signup' component={Signup} />
//     <Route path ='/login' component={Login} />
//     <Route path ='/main' component={MainProfile} />
//   </Route>
// );
//
// export default routes;

import Sidebar from '../src2/common/sidebar';
import Header from '../src2/common/header';
import Footer from '../src2/common/footer';

/* Pages */

import Homepage from '../src2/routes/Homepage';
import DefaultDashboard from '../src2/routes/DefaultDashboard';

import Dashboard from '../src2/routes/Dashboard';
import Lesson from '../src2/routes/Lesson';
import Module from '../src2/routes/Module';

import Proceed from '../src2/routes/Proceed';

import ProceedPracticeTest from '../src2/routes/ProceedPracticeTest';
import ProceedDiagnosticQuiz from '../src2/routes/ProceedDiagnosticQuiz';

import Inbox from '../src2/routes/Inbox';
import Mail from '../src2/routes/Mail';
import Compose from '../src2/routes/Compose';

import Gallery from '../src2/routes/Gallery';

import Social from '../src2/routes/Social';

import Posts from '../src2/routes/Posts';
import Post from '../src2/routes/Post';

import Panels from '../src2/routes/Panels';

import LineSeries from '../src2/routes/LineSeries';
import AreaSeries from '../src2/routes/AreaSeries';
import BarColSeries from '../src2/routes/BarColSeries';
import MixedSeries from '../src2/routes/MixedSeries';
import PieDonutSeries from '../src2/routes/PieDonutSeries';

import Chartjs from '../src2/routes/Chartjs';
import C3js from '../src2/routes/C3js';
import Morrisjs from '../src2/routes/Morrisjs';

import StaticTimeline from '../src2/routes/StaticTimeline';
import InteractiveTimeline from '../src2/routes/InteractiveTimeline';

import Codemirrorjs from '../src2/routes/Codemirrorjs';
import Maps from '../src2/routes/Maps';
import Editor from '../src2/routes/Editor';

import Buttons from '../src2/routes/Buttons';
import Dropdowns from '../src2/routes/Dropdowns';
import TabsAndNavs from '../src2/routes/TabsAndNavs';
import Sliders from '../src2/routes/Sliders';
import Knobs from '../src2/routes/Knobs';
import Modals from '../src2/routes/Modals';
import Messengerjs from '../src2/routes/Messengerjs';

import Controls from '../src2/routes/Controls';
import XEditable from '../src2/routes/XEditable';
import Wizard from '../src2/routes/Wizard';

import Tables from '../src2/routes/Tables';
import Datatablesjs from '../src2/routes/Datatablesjs';
import Tablesawjs from '../src2/routes/Tablesawjs';

import Grids from '../src2/routes/Grids';
import Calendar from '../src2/routes/Calendar';

import Dropzonejs from '../src2/routes/Dropzonejs';
import Cropjs from '../src2/routes/Cropjs';

import Fonts from '../src2/routes/Fonts';

// import Login from '../src2/routes/Login';
// import Signup from '../src2/routes/Signup';
import Invoice from '../src2/routes/Invoice';
import Pricing from '../src2/routes/Pricing';

import Lock from '../src2/routes/Lock';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainContainer {...this.props}>
          <Sidebar />
          <Header />
          <div id='body'>
            <Grid>
              <Row>
                <Col xs={12}>
                  {this.props.children}
                </Col>
              </Row>
            </Grid>
          </div>
          <Footer />
        </MainContainer>
      </Provider>
    );
  }
}

/**
 * Includes Sidebar, Header and Footer.
 */
const routes = (
  <Route component={App}>
    <Route path='dashboard' component={Dashboard} />
    <Route path='lesson' component={Lesson} />

    <Route path='proceed' component={Proceed} />
    <Route path='proceedpracticetest' component={ProceedPracticeTest} />
    <Route path='proceed-diagnostic-quiz' component={ProceedDiagnosticQuiz} />
    <Route path='module' component={Module} />

    <Route path='defaultdashboard' component={DefaultDashboard} />
    <Route path='mailbox/inbox' component={Inbox} />
    <Route path='mailbox/mail' component={Mail} />
    <Route path='mailbox/compose' component={Compose} />
    <Route path='gallery' component={Gallery} />
    <Route path='social' component={Social} />
    <Route path='blog/posts' component={Posts} />
    <Route path='blog/post' component={Post} />
    <Route path='panels' component={Panels} />
    <Route path='charts/rubix/line' component={LineSeries} />
    <Route path='charts/rubix/area' component={AreaSeries} />
    <Route path='charts/rubix/barcol' component={BarColSeries} />
    <Route path='charts/rubix/mixed' component={MixedSeries} />
    <Route path='charts/rubix/piedonut' component={PieDonutSeries} />
    <Route path='charts/chartjs' component={Chartjs} />
    <Route path='charts/c3js' component={C3js} />
    <Route path='charts/morrisjs' component={Morrisjs} />
    <Route path='timeline' component={StaticTimeline} />
    <Route path='interactive-timeline' component={InteractiveTimeline} />
    <Route path='codemirror' component={Codemirrorjs} />
    <Route path='maps' component={Maps} />
    <Route path='editor' component={Editor} />
    <Route path='ui-elements/buttons' component={Buttons} />
    <Route path='ui-elements/dropdowns' component={Dropdowns} />
    <Route path='ui-elements/tabs-and-navs' component={TabsAndNavs} />
    <Route path='ui-elements/sliders' component={Sliders} />
    <Route path='ui-elements/knobs' component={Knobs} />
    <Route path='ui-elements/modals' component={Modals} />
    <Route path='ui-elements/messenger' component={Messengerjs} />
    <Route path='forms/controls' component={Controls} />
    <Route path='forms/x-editable' component={XEditable} />
    <Route path='forms/wizard' component={Wizard} />
    <Route path='tables/bootstrap-tables' component={Tables} />
    <Route path='tables/datatables' component={Datatablesjs} />
    <Route path='tables/tablesaw' component={Tablesawjs} />
    <Route path='grid' component={Grids} />
    <Route path='calendar' component={Calendar} />
    <Route path='file-utilities/dropzone' component={Dropzonejs} />
    <Route path='file-utilities/crop' component={Cropjs} />
    <Route path='fonts' component={Fonts} />
    <Route path='invoice' component={Invoice} />
    <Route path='pricing' component={Pricing} />
    <Route path='main' component={MainProfile} />
  </Route>
);

/**
 * No Sidebar, Header or Footer. Only the Body is rendered.
 */
const basicRoutes = (
  <Route>
    <Route path='lock' component={Lock} />
    <Route path='login' component={Login} />
    <Route path='signup' component={Signup} />
  </Route>
);

const combinedRoutes = (
  <Route>
    <Route>
      {routes}
    </Route>
    <Route>
      {basicRoutes}
    </Route>
  </Route>
);

export default (
  <Route>
    <Route path='/' component={Login} />
    <Route path='/ltr'>
      {combinedRoutes}
    </Route>
    <Route path='/rtl'>
      {combinedRoutes}
    </Route>
  </Route>
);
