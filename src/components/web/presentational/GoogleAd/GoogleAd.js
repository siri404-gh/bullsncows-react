import React, { Component } from 'react';

export default class GoogleAd extends Component {
  // This code is ran when the component mounts
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    const { wrapperDivStyle, client, slot, format, style } = this.props;
    return (
      <div style={wrapperDivStyle} >
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
