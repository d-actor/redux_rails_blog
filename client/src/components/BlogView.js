import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';

const BlogView = ({ id, name, body, dispatch}) => (
  <div>
    <h2>{name}</h2>
    <p>{body}</p>
    <br />
    <Button onClick={'#'}>Edit</Button>
    <Button color='red' onClick={'#'}>Delete</Button>
    <Button primary onClick={'#'}>Back</Button>
  </div>
)

export default connect()(BlogView);
