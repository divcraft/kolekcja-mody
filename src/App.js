import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './styles/App.sass';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/news' component={NewsPage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/contact' component={ContactPage} />
          <Redirect to='/' />
        </Switch>
      </ScrollToTop>
    </Router >
  );
}

export default App;
