import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import postsAction from '../../actions/posts.action';

class PostList extends React.Component {

  componentWillMount() {
    this.props.getPosts();
  }

  render() {
    return (
      <div>
        Posts List | <Link to="/posts/create">Create New Post</Link>
        <hr/>
        <ul>
        {this.props.posts.map((data, key) => {
          return (<li key={key}>
            <Link to={`/posts/${data.id}`}>{data.title}</Link>
          </li>);
        })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getPosts: postsAction.getPosts
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
