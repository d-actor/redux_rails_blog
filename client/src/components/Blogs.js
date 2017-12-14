import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import BlogForm from './BlogForm';
import BlogList from './BlogList';
import Blog from './Blog';
import { Segment, Container, Header } from 'semantic-ui-react';

const filtered = (blogs, activeFilter) => {
  switch (activeFilter) {
    case 'Unread':
      return blogs.filter( b => !b.read )
    case 'Read':
      return blogs.filter( b => b.read )
    default:
      return blogs;
  }
}

const Blogs = ({ blogs, filter }) => (
  <Container text>
    <Header as='h1' textAlign='center'>Blogs!</Header>
    <Segment>
      <BlogForm />
      <BlogList />
      <ul>
        { filtered(blogs, filter).map( b => <Blog key={b.id} {...b} /> )}
      </ul>
    </Segment>
  </Container>
)

const mapStateToProps = (state) => {
  return { blogs: state.blogs, filter: state.filter }
}

export default connect(mapStateToProps)(Blogs);
