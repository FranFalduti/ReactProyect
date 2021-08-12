import { Route, Router, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import AboutPage from "./Router-App/AboutPage";
import ContactPage from "./Router-App/ContactPage";
import HomePage from "./Router-App/HomePage";
import NotFoundPage from "./Router-App/NotFoundPage";


export default function AppRouter() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/about" component={AboutPage}/>
                <Route exact path="/contact" component={ContactPage}/>
                <Route exact path="/" component={HomePage}/>
                <Route path="*" component={NotFoundPage}/>
            </Switch>
        </Router>
    );
}