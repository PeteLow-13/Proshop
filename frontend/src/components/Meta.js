import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defautProps = {
  titel: 'Welcome to Proshop',
  description: 'We sell the best stuff cheap',
  keywords: 'electronics, buy electronics, cheap',
};

export default Meta;
