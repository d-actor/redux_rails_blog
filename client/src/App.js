import React from 'react';
import BlogForm from './components/BlogForm';
import BlogList from './components/BlogList';
import Footer from './components/Footer';
import { Container } from 'semantic-ui-react';

const App = () => (
  <Container text>
    <div>
      <h1>Blogs!</h1>
      <BlogForm />
      <BlogList />
      <Footer />
    </div>
  </Container>
)

export default App;
