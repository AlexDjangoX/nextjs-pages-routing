import React from 'react';

import { useRouter } from 'next/router';

const Blog = () => {
  const router = useRouter();

  console.log(router.query);

  //   slug: Array [ "2020", "blog" ]

  return <div>Blog</div>;
};

export default Blog;

// http://localhost:3000/blog/2020/blog
