import React, { Component } from 'react';

import Link from 'next/link';
// import { Inter } from '@next/font/google'
import content from '../content/home.md';

// const inter = Inter({ subsets: ['latin'] })

export default class Home extends Component {
  render() {
    const { attributes, html } = content;
    return (
      <React.Fragment>
        <h1>{attributes.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <style jsx>{`
          h1,
          div {
            text-align: center;
          }
        `}</style>
      </React.Fragment>
    );
  }
}
