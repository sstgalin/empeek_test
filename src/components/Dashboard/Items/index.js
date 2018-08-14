import React, { Component } from 'react';
import propTypes from 'prop-types';

import { Card, Title } from 'components/common';
import { AddItemField, Item } from 'components/Dashboard';

class Items extends Component {

  static propTypes = {
    items: propTypes.array.isRequired,
    deleteItem: propTypes.func.isRequired,
    createItem: propTypes.func.isRequired,
  }

  handleAddItem = (value) => {
    this.props.createItem(value);
  }

  handleDeleteItem = (id) => {
    this.props.deleteItem(id);

    this.props.history.push('/dashboard');
  }

  renderItems = () => {
    const { items, location } = this.props;

    return (
      <div>
        {items.map(item => (
          <Item
            key={item.id}
            item={item}
            currentPath={location.pathname}
            onDelete={this.handleDeleteItem}
          />
        ))}
      </div>
    );
  }

  render() {
    return (
      <Card>
        <Title text="Items" />

        <AddItemField
          onAddItem={this.handleAddItem}
        />

        {this.renderItems()}
      </Card>
    );
  }

}

export default Items;
