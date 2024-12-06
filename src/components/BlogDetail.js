import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Mock fetch, replace with real API call
    const fetchPost = async () => {
      const response = await fetch(`/api/blogs/${id}`); // Replace with your API endpoint
      const data = await response.json();
      setPost(data);
    };
    fetchPost();
  }, [id]);

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div className='blog-detail-container'>
      <h1>{post.title}</h1>
      <p className='blog-detail-date'>
        {new Date(post.date).toLocaleDateString()}
      </p>
      <div className='blog-detail-content'>
        <p>{post.content}</p>
      </div>
    </div>
  );
};

export default BlogDetail;
