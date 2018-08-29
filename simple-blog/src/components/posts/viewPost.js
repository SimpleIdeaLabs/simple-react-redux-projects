import React from 'react';
import postsActions from '../../actions/posts.action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

class ViewPost extends React.Component {

  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
  }

  async onDelete(id) {
    await this.props.deletePost(id);
    this.props.history.push('/');
  }

  componentWillMount() {
    const {id} = this.props.match.params;
    this.props.getPost(id);
  }

  render() {
    const { post } = this.props;
    if (!post) return null;
    return (
      <div>
        <Link to="/">Posts List</Link>
        <hr/>
        Title: { post.title }
        <br />
        Category: { post.categories }
        <br />
        Content: { post.content }
        <hr />
        <button onClick={() => this.onDelete(post.id)}>
          Delete
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    post: state.posts.post
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getPost: postsActions.getPost,
    deletePost: postsActions.deletePost
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewPost);