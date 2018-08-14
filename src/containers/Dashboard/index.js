import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import propTypes from 'prop-types';
import pick from 'lodash.pick';

import { Sidebar, Items, Comments } from 'components/Dashboard';

import itemsActions from 'modules/items/actions';

import './styles.css';

class Dashboard extends Component {

  static propTypes = {
    items: propTypes.array.isRequired,
    createComment: propTypes.func.isRequired,
    createItem: propTypes.func.isRequired,
    deleteItem: propTypes.func.isRequired,
  }

  renderItems = (routeProps) => {

    return (
      <Items
        createItem={this.props.createItem}
        deleteItem={this.props.deleteItem}
        items={this.props.items}
        {...routeProps}
      />
    );
  }

  renderComments = (routeProps) => {
    const { itemId } = routeProps.match.params;
    const { items } = this.props;

    const itemIndex = items.findIndex(item => item.id === +itemId);
    const item = items[itemIndex];

    return (
      <Comments
        createComment={this.props.createComment}
        comments={item.comments}
        itemIndex={itemIndex}
        {...routeProps}
      />
    );
  }

  render() {
    return (
      <div className="dashboard-page">
        <Route path="/dashboard" component={Sidebar} />

        <div className="content">
          <Route path="/dashboard" component={this.renderItems}/>

          <Route path="/dashboard/:itemId" component={this.renderComments}/>
        </div>
      </div>
    );
  }

}

const mapStateToProps = ({ items }) => ({
  items: items.list,
});

const mapDispatchToProps = pick(itemsActions, ['createItem', 'deleteItem', 'createComment']);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
