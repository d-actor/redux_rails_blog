import React from 'react';
import { connect } from 'react-redux';
import { addBlog } from '../actions/blogs';
import { incId } from '../actions/nextId';
import { Form, Button } from 'semantic-ui-react';

class BlogForm extends React.Component {
  state = { name: '', body: '' }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, body } = this.state;
    const { id, dispatch } = this.props;
    const blog = { id, name, body };
    dispatch(addBlog(blog))
    dispatch(incId())
    this.setState({ name: '', body: '' })
  }

  handleNameChange = (e) => this.setState({ name: e.target.value })
  handleBodyChange = (e) => this.setState({ body: e.target.value })

  render() {
    return(
      <Form onSubmit={this.handleSubmit}>
        Title:
        <input
          required
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <br />
        Body:
        <input
          required
          value={this.state.body}
          onChange={this.handleBodyChange}
        />
        <Button>Submit</Button>
      </Form>
    )
  }
}

const mapStateToProps = (state) => {
  return {id: state.nextId }
}

export default connect(mapStateToProps)(BlogForm);
