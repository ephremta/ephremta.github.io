import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Blogs.css';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Fetch blog data from local file (public/blogs.json)
        const response = await fetch('/blogs.json');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='blog-container'>
      <h1 className='blog-header'>Blog</h1>
      <div className='blog-posts'>
        {posts.length === 0 ? (
          <p>No posts available</p>
        ) : (
          posts.map((post) => (
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
          ))
        )}
      </div>
    </div>
  );
};

export default Blog;
