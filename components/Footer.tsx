// src/components/Footer.tsx
'use client';

export default function Footer() {
  return (
    <footer>
      <p>&copy; 2024 My Portfolio. All rights reserved.</p>
      <style jsx>{`
        footer {
          padding: 1rem;
          background-color: #333;
          color: white;
          text-align: center;
          margin-top: 2rem;
        }
      `}</style>
    </footer>
  );
}
