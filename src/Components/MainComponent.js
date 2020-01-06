import React,{Component} from 'react';
import Home from './HomeComponent';
import DishDetail from './DishDetailComponent';
import Menu from './MenuComponent'
import About from './AboutComponent';
import MapContainer from './MapComponent';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Switch,Route,Redirect,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {postComment,fetchDishes,fetchPromotions,fetchLeaders,fetchComments,postFeedback} from '../redux/ActionCreator';
import {TransitionGroup,CSSTransition} from 'react-transition-group';
import {actions} from 'react-redux-form';

const mapStateToProps = state => {
    return{
      dishes:state.dishes,
      comments:state.comments,
      leaders:state.leaders,
      promotions:state.promotions  
    }
}

//we surround it with this () to return so we dont need to use return just apply this ()

const mapDispatchToProps =(dispatch) =>({
  postComment:(dishId,rating,author,comment)=>dispatch(postComment(dishId,rating,author,comment)),
  fetchDishes: () => { dispatch(fetchDishes())}, 
  fetchPromotions: () => {dispatch(fetchPromotions())},
  fetchLeaders: () => {dispatch(fetchLeaders())},
  fetchComments:()=> {dispatch(fetchComments())},
  postFeedback:(firstname,lastname,contactno,email,agree,contactType,message)=>dispatch(postFeedback(firstname,lastname,contactno,email,agree,contactType,message)),
  resetFeedbackForm:() => {dispatch(actions.reset('feedback'))},
  
});


class Main extends Component{
  // constructor(props){
  //   super(props);
  // }

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchPromotions();
    this.props.fetchLeaders();
    this.props.fetchComments();
  }
  render(){
    const HomePage = () => {
    return(
          <Home 
            dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
            dishesLoading={this.props.dishes.isLoading}
            dishesErrMess={this.props.dishes.errMess}
            promotions={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
            promotionsLoading={this.props.promotions.isLoading}
            promotionsErrMess={this.props.promotions.errMess}
            leader={this.props.leaders.leaders.filter((lead) => lead.featured)[0]}
            leaderLoading={this.props.leaders.isLoading}
            leaderErrMess={this.props.leaders.errMess}
          />
        );
    }
    const DishWithID = ({match}) => {
      return(
        <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
            isLoading={this.props.dishes.isLoading}
            errMess={this.props.dishes.errMess}
            comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
            commentserrMess={this.props.comments.errMess}
            postComment={this.props.postComment}
          />
      );
    }
    const AboutUs = () => {
      return(
        <About leaders={this.props.leaders.leaders} 
        leadersLoading={this.props.leaders.isLoading}
        leadersErrMess={this.props.leaders.errMess}
        />
      );
    }
    const Map=()=>{
      return(
        <MapContainer />
      );
    }
    return (
      <div>
        <Header />
          <TransitionGroup>
            <CSSTransition key={this.props.location.key} classNames='page' timeout={300}>
                <Switch>
                    <Route path='/home' component={HomePage}/>
                    <Route path='/map' component={Map}/>
                    <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes}/> } />
                    <Route path='/menu/:dishId' component={DishWithID}></Route>
                    <Route path='/aboutus' component={AboutUs}></Route>
                    <Route path='/contactus' component={()=><Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback}  />}/>
                    
                    {/* before redux implementation contact form is*/}
                        {/* <Route path='/contactus' component={()=><Contact/>}/> */}
                    
                    {/* after redux impementation form seee up */}

                    <Redirect to='/home' />              
                </Switch>
              </CSSTransition>
          </TransitionGroup>  
        <Footer />
      </div>
      
    );
  }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
