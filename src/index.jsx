import './index.less';
import React from 'react';
class Pager extends React.Component {
  constructor() {
    super();
  }
  render() {
    return <div>{this.props.content}</div>;
  }
}
Pager.displayName = 'Pager';
Pager.propTypes = {
  /**
   * content of element
   */
  content: React.PropTypes.string
};
Pager.defaultProps = {
    content: 'Hello world'
};
module.exports = Pager;
