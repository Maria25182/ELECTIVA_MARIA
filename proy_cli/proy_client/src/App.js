import "./scss/App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import routes from "../src/config/routes";

export default function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <route.layout>
                <route.component></route.component>
              </route.layout>
            }
          />
        ))}
      </Routes>
    </Router>
    /*<React.Fragment>
      <Router>
        {routes.map((route, index) => (
          <AdminSubRoutesViews key={index} {...route}></AdminSubRoutesViews>
        ))}
      </Router>
    </React.Fragment>
    /*
    /* <Router>
      <Routes>
        <Route path="/admin" element={<AdminHome />} exact="true"></Route>
      </Routes>
    </Router>
    /*   <BrowserRouter>
  <Link to='/'>Home</Link>
  <br/>
  <Link to="/contact">Contact</Link>
  <br/>
  <Link to="/users">Users</Link>
  <br/>
    < Routes>
    <Route path="/" element={<NotFound />}></Route>
    <Route path="contact" element={<Contact />}></Route>
    <Route path="users" element={<Users />}></Route>
    </Routes>
    </BrowserRouter>*/
  );
}

/*function AdminSubRoutesViews(route) {
  console.log(route);
  return true;
}*/
