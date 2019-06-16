import React, { Fragment } from 'react';
import articleContent from './article-content';
import ArticlesList from '../components/ArticlesList';

const ArticlesListPage = ({ match }) => (
  <Fragment>
    <h1>Articles</h1>
    <ArticlesList articles={articleContent} />
  </Fragment>
);

export default ArticlesListPage;
