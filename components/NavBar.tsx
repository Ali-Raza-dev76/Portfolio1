'use client';

import PopupMenu from './PopupMenu';

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li><PopupMenu /></li>
      </ul>
      <style jsx>{`
        nav {
          padding: 1rem;
          background-color: #332;
          color: black;
        }
        ul {
          list-style: none;
          display: flex;
          gap: 1rem;
        }
        li {
          display: inline-block;
        }
      `}</style>
    </nav>
  );
}
