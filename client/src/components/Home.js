import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from 'semantic-ui-react';

const Home = () => (
  <Header textAlign="center" as="h3">The <Link to='/blogs'>Blog</Link> <Link to='/blogs'>Blog</Link>! (A <Link to='/blogs'>Blog</Link> About <Link to='/blogs'>Blogs</Link>)</Header>
)

export default Home;
