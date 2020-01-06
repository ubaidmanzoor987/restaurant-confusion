import React from 'react';
import About from './About';
import Car from './Car'
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
const CustomRoutes = () =>(
	<Router>
		<div>
				<ul>
					<li style={{float:"left"}}>
						<Link to="/index">Home</Link>
						
					</li>
					<li style={{paddingLeft:"150px"}}>
						<Link to="/about">About</Link>
					</li>
				</ul>
			<hr />

        <Route exact path="/" component={Car} />
        <Route exact path="/index" component={Car} />
		
        <Route path="/about" component={About} />
		
      </div>
	</Router>
)
export default CustomRoutes;