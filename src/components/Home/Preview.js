import React from 'react';
import './Preview.css';

export default class Preview extends React.Component {
  static propTypes = {
    title: React.PropTypes.string,
    link: React.PropTypes.string,
  };

  render() {
    return (
      <article className="article-preview-item">
        <h1>{this.props.title}</h1>
      </article>
    );
  }
}
