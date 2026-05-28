import { Route, Switch } from "wouter";

import Header from "./components/Header";

import Home from "./pages/Home";
import Impact from "./pages/Impact";
import About from "./pages/About";
import Donate from "./pages/Donate";
import Volunteer from "./pages/Volunteer";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

import VehicleDonation from "./pages/VehicleDonation";
import MoneyDonation from "./pages/MoneyDonation";
import FoodDonation from "./pages/FoodDonation";

import Partner from "./pages/Partner";
import Internships from "./pages/Internships";

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />

      <Switch>
        {/* MAIN */}
        <Route path="/" component={Home} />
        <Route path="/impact" component={Impact} />
        <Route path="/about" component={About} />
        <Route path="/donate" component={Donate} />
        <Route path="/volunteer" component={Volunteer} />
        <Route path="/faq" component={FAQ} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />

        {/* DONATIONS */}
        <Route path="/vehicle-donation" component={VehicleDonation} />
        <Route path="/money-donation" component={MoneyDonation} />
        <Route path="/food-donation" component={FoodDonation} />

        {/* INVOLVEMENT */}
        <Route path="/partner" component={Partner} />
        <Route path="/internships" component={Internships} />
      </Switch>
    </div>
  );
}

export default App;