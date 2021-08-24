import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import ItemListContainer from "./Item/ItemListContainer";
import ItemDetailContainer from "./ItemDetail/ItemDetailContainer";
import NavBar from "./Main/NavBar";
import AboutPage from "./Router-App/AboutPage";
import CartPage from "./Router-App/CartPage";
import ContactPage from "./Router-App/ContactPage";
import NotFoundPage from "./Router-App/NotFoundPage";


export default function AppRouter(props) {
    return (
        <Router>
            {props.children}
            <NavBar />
            <Switch>
                <Route exact path="/about" component={AboutPage}/>
                <Route exact path="/contact" component={ContactPage}/>
                <Route exact path="/" component={ItemListContainer}/>
                <Route exact path="/category/:id" component={ItemListContainer}/>
                <Route exact path="/item/:id" component={ItemDetailContainer}/>
                <Route exact path="/cart" component={CartPage}/>
                <Route path="*" component={NotFoundPage}/>
            </Switch>
        </Router>
    );
}