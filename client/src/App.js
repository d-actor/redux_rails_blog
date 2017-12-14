import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import FetchBlogs from './components/FetchBlogs';
import NoMatch from './components/NoMatch';

const App = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/blogs' component={FetchBlogs} />
    <Route component={NoMatch} />
  </Switch>
)

// const App = () => (
//   <Container text>
//     <div>
//       <h1>Blogs!</h1>
//       <BlogForm />
//       <BlogList />
//       <Footer />
//     </div>
//   </Container>
// )

export default App;
