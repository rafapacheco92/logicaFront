import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Search from './Search/Search';
import NewPost from './NewPost/NewPost';
import './Sidebar.css';

function Sidebar({ setActivePage }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNewPostOpen, setIsNewPostOpen] = useState(false);
  const searchRef = useRef(null);
  const modalRef = useRef(null);

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
    setActivePage('search');
  };

  const handleNewPostClick = () => {
    setIsNewPostOpen(true);
    setActivePage('NewPost');
  };

  // Fechar o menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsNewPostOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchRef, modalRef]);

  return (
    <div className="sidebar">
      <div className="logo">
        <img src="./png/liquidTransp.png" alt="logo" className="profile-pic" />
      </div>
      <nav className="navMenu">
        <div className="menu">
          <NavLink className="menu-item" activeClassName="active" to="/">
            Feed
          </NavLink>
          <NavLink className="menu-item" activeClassName="active" to="/profile">
            Perfil
          </NavLink>
          <div className="menu-item" onClick={handleNewPostClick}>
            Nova Postagem
          </div>
          <NavLink className="menu-item" activeClassName="active" to="/barbot">
            Bar Bot
          </NavLink>
          <NavLink className="menu-item" activeClassName="active" to="/explore">
            Explorar
          </NavLink>
          <NavLink
            className="menu-item"
            activeClassName="active"
            to="/notifications"
          >
            Notificações
          </NavLink>
          <div className="menu-item" onClick={handleSearchClick}>
            Pesquisa
          </div>
        </div>
      </nav>

      {isSearchOpen && (
        <div ref={searchRef}>
          <Search />
        </div>
      )}

      {isNewPostOpen && (
        <div className="modal-background">
          <div className="modal-content" ref={modalRef}>
            {/* <button className="close-button" onClick={() => setIsNewPostOpen(false)}>X</button> */}
            <NewPost />
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
