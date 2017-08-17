import React, { Component } from 'react';
import Styles from './GoogleAd.less';
export default class GoogleAd extends Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    const { client, slot, format } = this.props;
    return (
      <div className={Styles.Ad}>
        <ins className="adsbygoogle"
          style={{ 'display': 'block' }}
          data-ad-client={client}
          data-ad-slot={slot}
          data-ad-format={format}>
        </ins>
      </div>
    );
  }
}
