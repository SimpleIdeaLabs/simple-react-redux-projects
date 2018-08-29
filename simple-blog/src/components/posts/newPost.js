import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import postsActions from '../../actions/posts.action';
import { connect } from 'react-redux';

class NewPost extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(payload) {
    await this.props.savePost(payload);
    this.props.history.push('/');
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props

    return (
      <form onSubmit={handleSubmit(this.handleSubmit)}>
        <div>
          <label>Title</label>
          <div>
            <Field
              name="title"
              component="input"
              type="text"
              placeholder="Title"
            />
          </div>
        </div>
        <div>
          <label>Categories</label>
          <div>
            <Field
              name="categories"
              component="input"
              type="text"
              placeholder="Categories"
            />
          </div>
        </div>
        <div>
          <label>Content</label>
          <div>
            <Field name="content" component="textarea" />
          </div>
        </div>
        <div>
          <button type="submit" disabled={pristine || submitting}>
            Submit
        </button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
        </button>
        </div>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    savePost: postsActions.savePost
  }, dispatch);
}

const rfNewPost = reduxForm({
  form: 'NewPostForm'
})(NewPost);

export default connect(null, mapDispatchToProps)(rfNewPost);