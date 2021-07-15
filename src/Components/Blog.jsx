import React, { useState, useEffect } from 'react';
import butter from '../butter-client';
import PostSnippet from './PostSnippet.jsx';
import '../sass/blog.css';

//blog resource: https://rafaelquintanilha.com/adding-a-blog-into-an-existing-site
//butter resource: https://buttercms.com/home/

const Blog = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [data, setData] = useState(null)

  const fetchPosts = async () => {
    setLoading(true)
    setError(false)
    try {
      const response = await butter.post.list({
        page: 1,
        page_size: 10,
      })
      setData(response.data)
    } catch (e) {
      setError(`There was an error: ${e.message}`)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const getPosts = () => (
    <div>
      {data.data.map((post, i) => (
        <PostSnippet {...post} key={i} />
      ))}
    </div>
  )

  const getContent = () => {
    if (loading) return <p>Fetching posts...</p>
    if (error) return <p>{error}</p>
    if (!data) return null
    return getPosts();
  }

  return (
    <div class="main-blog">
      <div className="blog-header">
        <h1>Our Blog</h1>
        <p>This blog is managed by our Project Managers</p>
      </div>
        <div class="inner-blog">
            {getContent()}
        </div>
      
    </div>
  )
}

export default Blog;