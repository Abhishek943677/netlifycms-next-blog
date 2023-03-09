import Image from 'next/image';
import React, { Component } from 'react';

class Post extends Component {
  static async getInitialProps({ query }) {
    const { slug } = query;
    const blogpost = await import(`../../../content/blogPosts/${slug}.md`).catch(error => null);

    return { blogpost };
  }
  render() {
    if (!this.props.blogpost) return <div>not found</div>;

    const {
      html,
      attributes: { thumbnail, title },
    } = this.props.blogpost.default;
console.log(html)
    return (
      <>
        <article className="flex justify-center flex-col border border-red-600 lg:w-2/3 sm:w-5/6">
          <p className='text-center font-normal text-2xl m-2'>{title}</p>
          <div className='flex justify-between top-0'>
            <div className='flex'>
              <p className='mx-3'>Author</p>
              <p className='mx-3'>created at : 02/09/2002</p>
            </div>
            <div>
              <p className='mx-3'>1 min read</p>
            </div>
          </div>
          <img src={thumbnail} className="rounded-md w-full m-auto"/>
          
          <div dangerouslySetInnerHTML={{ __html: html }} className="my-6 " id='articles'/>
        </article>
        <style jsx>{`
          article {
            margin: 0 auto;
          }
          
        `}</style>
      </>
    );
  }
}

export default Post;
