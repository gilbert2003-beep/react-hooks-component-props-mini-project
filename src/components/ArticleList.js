// src/components/ArticleList.js
import React from 'react';
import Article from './Article';

const ArticleList = ({ posts }) => {
  return (
    <main>
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date || "January 1, 1970"} // Use a default date if no date prop is provided
          preview={post.preview}
        />
      ))}
    </main>
  );
};

export default ArticleList;
