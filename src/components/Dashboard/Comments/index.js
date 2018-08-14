import React, { Component } from 'react';
import propTypes from 'prop-types';

import { Comment, AddCommentField } from 'components/Dashboard';
import { Card, Title } from 'components/common';

import './styles.css';

class Comments extends Component {

  static propTypes = {
    comments: propTypes.array.isRequired,
    createComment: propTypes.func.isRequired,
    itemIndex: propTypes.number.isRequired,
  }

  handleAddComment = (value) => {
    const { itemId } = this.props.match.params;

    this.props.createComment(value, itemId);
  }

  renderComments = () => (
    <div className="comment__list">
      {this.props.comments.map((comment, index) => (
        <Comment
          key={comment.id}
          index={index}
          text={comment.value}
        />
      ))}
    </div>
  );

  render() {
    const { itemIndex } = this.props;

    return (
      <Card className="comments">
        <Title text={`Comments #${itemIndex + 1}`}/>

        {this.renderComments()}

        <AddCommentField
          onAddComment={this.handleAddComment}
        />
      </Card>
    );
  }

}

export default Comments;
