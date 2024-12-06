import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch('/blogs.json'); // Fetch from local blogs.json file
        if (!response.ok) {
          throw new Error('Failed to fetch post');
        }
        const data = await response.json();
        const post = data.find((p) => p.id === parseInt(id)); // Find the post by id
        if (post) {
          setPost(post);
        } else {
          throw new Error('Post not found');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!post) {
    return <div>No post found</div>;
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
