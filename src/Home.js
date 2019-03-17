import React, { Component } from "react";
import Button from '@material-ui/core/Button'
import  {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import Project from "./components/ProjectCodeName"
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./modules/store";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

const routes = (
    <Router>
        <Switch>
            <Route path="/project-code-name" component={Project}/>
            <Link to="/project-code-name">Click me to see some projects code Names</Link>
        </Switch>
    </Router>
);

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {show: "Bienvenido a Project Code Names"}
    }

    handleChange = () => {
        if(this.state.show === "813N83N1D0 4 PR0J3CT C0D3 N4M3"){
            this.setState({show:"Bienvenido a Project Code Names"})
        }
        else{
            this.setState({show: "813N83N1D0 4 PR0J3CT C0D3 N4M3"})
        }
    }

    render(){
        return(
            <div style={{textAlign:'center'}}> 
                <header>
                    <h1>{this.state.show}</h1>
                </header>
                <Button color ="primary" variant = "contained" onClick ={this.handleChange}>
                    BOOM
                </Button>     
                <ReduxProvider store={reduxStore}>
                <div>
                    <br/>
                    {routes}
                </div>
                </ReduxProvider>
            </div>
        )
    }

}

export default Home;