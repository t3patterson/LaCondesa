var React = require('react');

import DatePicker from '../node_modules/react-datepicker/dist/react-datepicker.js'

import {
  Thumbnail,
	TabbedArea,
	TabPane,
	ButtonToolbar,
	Alert,
	Button,
	Navbar, 
	Nav, 
	NavItem,
	DropdownButton,
	MenuItem,
	Grid, 
	Row, 
		Col
} from 'react-bootstrap'



const alertInstance = function(msg){
  return (
  	<Alert bsStyle='warning'>
    	<strong>{msg}</strong>
 	 </Alert>
 	)
};

const myButtonToolbar = (
	<ButtonToolbar>
	    <Button>Default</Button>

	    <Button bsStyle='primary'>Wow</Button>

	    <Button bsStyle='success'>Success</Button>

	    <Button bsStyle='info'>Info</Button>

	    <Button bsStyle='warning'>Warning</Button>

	    <Button bsStyle='danger'>Danger</Button>
	    <Button bsStyle='link'>Link</Button>
    </ButtonToolbar>   
)

const tabbedAreaInstance = (
  <TabbedArea defaultActiveKey={2} animation={false}>
    <TabPane eventKey={1} tab='1st tab'>lorem3fisofan</TabPane>
    <TabPane eventKey={2} tab='2nd Tab'>TabPane 2 content</TabPane>
    <TabPane eventKey={3} tab='3rd Tab'>TabPane 3 content</TabPane>
  </TabbedArea>
);

const navbarInstance = (
  <Navbar brand='React-Bootstrap'>
    <Nav>
      <NavItem eventKey={1} href='#'>Link</NavItem>
      <NavItem eventKey={2} href='#'>Link</NavItem>
      <DropdownButton eventKey={3} title='Dropdown'>
        <MenuItem eventKey='1'>Action</MenuItem>
        <MenuItem eventKey='2'>Another action</MenuItem>
        <MenuItem eventKey='3'>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey='4'>Separated link</MenuItem>
      </DropdownButton>
    </Nav>
  </Navbar>
);

const thumbnailInstance = (
  <Grid>
    <Row>
    <Col xs={6} md={4}>
      <Thumbnail src='/assets/thumbnaildiv.png' alt='242x200'>
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
          <Button bsStyle='primary'>Button</Button>&nbsp;
          <Button bsStyle='default'>Button</Button>
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src='/assets/thumbnaildiv.png' alt='242x200'>
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
          <Button bsStyle='primary'>Button</Button>&nbsp;
          <Button bsStyle='default'>Button</Button>
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src='/assets/thumbnaildiv.png' alt='242x200'>
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
          <Button bsStyle='primary'>Button</Button>&nbsp;
          <Button bsStyle='default'>Button</Button>
        </p>
      </Thumbnail>
    </Col>
    </Row>
  </Grid>
);




export class TopLevel extends React.Component {
	constructor(props){
		super(props)
	}

	render(){
		return (
			<div>
			{navbarInstance}
			Hellow!	
			{alertInstance('helloooo!')}
			{myButtonToolbar}
			{tabbedAreaInstance}
			{thumbnailInstance}

      <hr><hr>

			</div>
			)
	}
}
