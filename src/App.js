import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./pages/footer";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Entrepreneurs from "./pages/entrepreneurs";
import Mentors from "./pages/mentors";
import Dashboard from "./pages/dashboard";
import Account_Infor from "./pages/profile/profile_account_info";
import SelfAssessment from "./pages/profile/profile_self_assessment";
import Profile_Entrepreneuers from "./pages/profile/profile_entrepreneurs";
import profile_mentor from "./pages/profile/profile_mentor";
import profile_contact_setting from "./pages/profile/profile_contact_setting";
import MemberDetail from "./pages/member";
import ItemDetails from "./pages/ItemDetails";
import './static/css/style.css';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route exact path="/entrepreneurs" component={Entrepreneurs} />
          <Route exact path="/mentors" component={Mentors} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/profile/account-info" component={Account_Infor} />
          <Route exact path="/profile/entrepreneur" component={Profile_Entrepreneuers} />
          <Route exact path="/profile/self-assessment" component={SelfAssessment} />
          <Route exact path="/profile/mentor" component={profile_mentor} />
          <Route exact path="/profile/contact-settings" component={profile_contact_setting} />
          <Route exact path="/member" component={MemberDetail} />
          <Route path="/shop/:id" component={ItemDetails} />
        </Switch>
        <Footer/>
      </Router>
    </>
  );
};

export default App;
