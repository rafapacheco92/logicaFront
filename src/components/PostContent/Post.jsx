// Post.js
import React, { useState } from 'react';
import './Post.css';
import SideBar from '../SideBar/SideBar';
import CommentSection from './CommentSection/CommentSection';

function Post({ post }) {
  const [likes, setLikes] = useState(0); // Estado para contar os likes
  const [liked, setLiked] = useState(false); // Estado para marcar se o post foi curtido
  const [isExpanded, setIsExpanded] = useState(false); // Estado para expandir ou retrair o conteúdo

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
      setLiked(false);
    } else {
      setLikes(likes + 1);
      setLiked(true);
    }
  };

  const toggleExpanded = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="postContainer">
      <div className="post">
        <h2>{post.user}</h2>
        <img src={`/posts/${post.id}.jpg`} alt="Drink" />
        <div className="like-section">
          <button
            className={`like-button ${liked ? 'liked' : ''}`}
            onClick={handleLike}
          >
            {liked ? '💜' : '🤍'}
          </button>
          <span>{likes} curtidas</span>
        </div>
        <h4>{post.title}</h4>

        <p className={`description ${isExpanded ? 'expanded' : 'truncated'}`}>
          {post.description}
        </p>

        {!isExpanded && (
          <p onClick={toggleExpanded} className="toggle-text">
            Ver mais
          </p>
        )}

        {isExpanded && (
          <>
            <h6>Ingredientes:</h6>
            <ul>
              {post.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <p>{post.recipe}</p>

            <p
              onClick={toggleExpanded}
              className="toggle-text"
              style={{ color: '#FFF' }}
            >
              Ver menos
            </p>
          </>
        )}

        <CommentSection comments={post.comments} />
      </div>
    </div>
  );
}

export default Post;
