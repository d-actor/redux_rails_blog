import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Blogs from './Blogs';
import BlogView from './BlogView';
import { getBlogs } from '../actions/blogs';
import { Loader, Segment, Dimmer } from 'semantic-ui-react';

class FetchBlogs extends Component {
  state = { loaded: false }

  componentDidMount() {
    this.props.dispatch(getBlogs(this.setLoaded))
  }

  setLoaded = () => this.setState({ loaded: true })

  render() {
    const { loaded } = this.state;
    if (loaded) {
      return(
        <Segment>
          <Route exact path='/blogs' component={Blogs} />
          <Route exact path='/blogs/:id' component={BlogView} />
        </Segment>
      )
    } else {
      return(
        <Segment>
          <Dimmer active>
          <Loader />
          </Dimmer>
        </Segment>
      )
    }
  }
}

export default connect()(FetchBlogs);
