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
import {addcomment} from '../redux/ActionCreator';



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
  addcomment:(dishId,rating,author,comment)=>dispatch(addcomment(dishId,rating,author,comment)),
});


class Main extends Component{
  // constructor(props){
  //   super(props);
  // }
  render(){
    const HomePage = () => {
          return(
          <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}   
          promotion={this.props.promotions.filter((promotion) => promotion.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          comment={this.props.comments.filter((comment) => comment.featured)[0]}
          />
        );
    }
    const DishWithID = ({match}) => {
      return(
        <DishDetail  dish={this.props.dishes.filter((dish) => dish.id ===parseInt(match.params.dishId,10))[0]}  
        comments={this.props.comments.filter((comment)=>comment.dishId===parseInt(match.params.dishId,10))}
        addcomment={this.props.addcomment}
      
      );
    }
    const AboutUs = () => {
      return(
        <About leaders={this.props.leaders} />
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
            <Switch>
                <Route path='/home' component={HomePage}/>
                <Route path='/map' component={Map}/>
                <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes}/> } />
                <Route path='/menu/:dishId' component={DishWithID}></Route>
                <Route path='/aboutus' component={AboutUs}></Route>
                <Route path='/contactus' component={()=><Contact/>}/>
                <Redirect to='/home' />              
            </Switch>
        <Footer />
      </div>
      
    );
  }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
