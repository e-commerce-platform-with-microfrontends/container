import React, { useRef, useEffect } from 'react';

export default function User({ onLoginSuccessful }) {
  const ref = useRef(null);

  const renderMicrofrontend = () => {
    window.mountUserMfe(ref.current, onLoginSuccessful);
  }

  useEffect(() => {
    if (window && document) {
      const script = document.createElement('script');
      script.id = 'app-user';
      script.src = 'http://localhost:3000/login/userWithContainer.bundle.js';
      script.onload = renderMicrofrontend;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div ref={ref} />
  )
}