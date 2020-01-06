import React,{Component} from 'react';
import {Form,FormGroup,Label,Input,Navbar,NavbarBrand,Jumbotron,Nav,NavItem,NavbarToggler,Collapse,Button,Modal,ModalBody,ModalHeader} from 'reactstrap';
import {NavLink} from 'react-router-dom';
class Header extends Component{
    constructor(props){
        super(props);
        this.state ={
            isNavOpen:false,
            isModalOpen:false
        }
    }
    toggleNav = () =>{
        this.setState({
            isNavOpen:!this.state.isNavOpen
        });
    }
    toggleModal = () => {
        this.setState({
            isModalOpen:!this.state.isModalOpen
        });
    }
    handleLogIn=(event)=>{
        this.toggleModal();
        alert("UserName:"+this.username.value +"Password:" +this.password.value+"Remember Me:"+this.remember.checked);
        event.preventDefault();
    }
    render(){
        return(
            <>
                <Navbar dark expand='md'>
                    <div className="container">
                        <NavbarBrand className='mr-auto' href="/" >
                            <img src='assets/images/logo.png' height='30' width='41' 
                            alt='Restaturant' />  
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav}  />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav  className='ml-auto' navbar>
                                <NavItem>
                                    <NavLink className='nav-link' to='/home'>
                                        <span className='fa fa-home fa-lg'></span>
                                        &nbsp;Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/aboutus'>
                                        <span className='fa fa-info fa-lg'></span>
                                        &nbsp;About Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/menu'>
                                        <span className='fa fa-list fa-lg'></span>
                                        &nbsp;Menu
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/contactus'>
                                        <span className='fa fa-address-card fa-lg'></span>
                                        &nbsp;Contact Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <Button className='mybtn' outline onClick={this.toggleModal}>
                                        <span className='fa fa-sign-in fa-lg'></span>
                                        &nbsp;Sign In
                                    </Button>
                                </NavItem>
                            </Nav>
                        </Collapse>    
                    </div>
                </Navbar>
                <Jumbotron id='jum'>
                    <div className='container'>
                        <div className='row row-header'>
                            <div className='col-12 col-sm-6 col-md-6'>
                                <h1>Restorante da confusion</h1>
                                <p>We take inspiration from the World best cusines, and create a unique fusion experience.Our lipsmacking creation will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div> 
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>LogIn</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor='username'>Username</Label>
                                <Input type='text' id='username' name='username' 
                                placeholder='User Name' required
                                innerRef={(input)=>this.username=input}></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='password'>Password</Label>
                                <Input type='password' id='password' name='password' 
                                placeholder='password' required
                                innerRef={(input)=>this.password=input}></Input>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type='checkbox' id='remember' name='remember' 
                                    innerRef={(input)=>this.remember=input}
                                    />
                                  Remember me                                 
                                 </Label>
                            </FormGroup>
                            <Button type='submit' value='submit' className='bg-primary'>
                                LogIn
                            </Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}
export default Header;