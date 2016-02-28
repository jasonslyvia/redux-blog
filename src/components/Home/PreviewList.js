import React from 'react';
import Preview from './Preview';

export default class PreviewList extends React.Component {
  static propTypes = {
    articleList: React.PropTypes.arrayOf(React.PropTypes.object)
  };

  render() {
    return this.props.articleList.map(item => {
      return <Preview {...item} key={item.id} />
    });
  }
}
