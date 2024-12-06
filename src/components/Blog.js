import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Blog.css';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state
  const [error, setError] = useState(null); // Added error state

  useEffect(() => {
    // Mock fetch, replace with real API call
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/blogs'); // Replace with your actual API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); // Set loading to false when request is done
      }
    };
    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Loading indicator
  }

  if (error) {
    return <div>Error: {error}</div>; // Error display
  }

  return (
    <div className='blog-container'>
      <h1 className='blog-header'>Blog</h1>
      <div className='blog-posts'>
        {posts.map((post) => (
          <div className='blog-post' key={post.id}>
            <h2 className='blog-post-title'>
              <Link to={`/blog/${post.id}`}>{post.title}</Link>
            </h2>
            <p className='blog-post-date'>
              {new Date(post.date).toLocaleDateString()}
            </p>
            <p className='blog-post-summary'>{post.summary}</p>
            <Link to={`/blog/${post.id}`} className='read-more'>
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
