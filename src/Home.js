import React, { Component } from "react";
import Button from '@material-ui/core/Button'
import  {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import Project from "./components/ProjectCodeName"
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./modules/store";
import Weather from './Weather'

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

const routes = (
    <Router>
        <Switch>
            <Route exact path="/" component={Project}/>
            <Route path = "/weather/March/21" component={Weather}/>
            <Link to="weather/month/:day">Click me to see some projects code Names</Link>
        </Switch>
    </Router>
);

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            show1: "Bienvenido",
            show2: "Weather App"
        }
    }

    handleChange = () => {
        if(this.state.show1 === "Bienvenido"){
            this.setState({show1:"Weather App", show2:"Bienvenido"})
        }
        else{
            this.setState({show1: "Bienvenido", show2:"Weather App"})
        }
    }

    render(){
        return(
            <div style={{textAlign:'center'}}> 
                <header>
                    <h1>{this.state.show1}</h1>
                    <h1>{this.state.show2}</h1>
                </header>
                <Button color ="primary" variant = "contained" onClick ={this.handleChange}>
                    Intercalar
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