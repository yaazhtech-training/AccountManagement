import React, { useState, useEffect } from 'react'

const FeatureCard = ({ icon, title, description, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      style={{
        background: 'rgba(255, 255, 255, 0.98)',
        padding: '1.5rem',
        borderRadius: '15px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
        transform: `translateY(${isVisible ? '0' : '20px'}) scale(${isHovered ? 1.02 : 1})`,
        opacity: isVisible ? 1 : 0,
        transition: 'all 0.4s ease-out',
        cursor: 'pointer',
        margin: '1rem',
        width: '280px'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{
        background: 'linear-gradient(135deg, #4a90e2 0%, #357ab8 100%)',
        width: '50px',
        height: '50px',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 1rem',
        boxShadow: '0 4px 12px rgba(74, 144, 226, 0.2)'
      }}>
        <img src={icon} alt={title} style={{ width: '30px', height: '30px', filter: 'brightness(0) invert(1)' }} />
      </div>
      <h3 style={{
        color: '#2d3748',
        fontSize: '1.2rem',
        fontWeight: '600',
        marginBottom: '0.75rem'
      }}>{title}</h3>
      <p style={{
        color: '#718096',
        fontSize: '0.95rem',
        lineHeight: '1.5'
      }}>{description}</p>
    </div>
  );
};

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  const features = [
    {
      icon: 'https://img.icons8.com/ios-filled/100/000000/bank-cards.png',
      title: 'Smart Banking',
      description: 'Manage multiple accounts, track transactions, and monitor your finances in real-time.'
    },
    {
      icon: 'https://img.icons8.com/ios-filled/100/000000/shield-checked.png',
      title: 'Secure Transactions',
      description: 'Bank with confidence using our advanced encryption and security protocols.'
    },
    {
      icon: 'https://img.icons8.com/ios-filled/100/000000/graph.png',
      title: 'Analytics Dashboard',
      description: 'Visualize your spending patterns and financial growth with interactive charts.'
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a365d 0%, #2d3748 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '4rem 2rem',
      transition: 'background 0.3s ease'
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.97)',
        padding: '3rem 4rem',
        borderRadius: '24px',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
        textAlign: 'center',
        maxWidth: '1200px',
        transform: `scale(${isHovered ? 1.01 : 1})`,
        transition: 'all 0.3s ease-in-out'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      >
        <div style={{
          background: 'linear-gradient(135deg, #4a90e2 0%, #357ab8 100%)',
          width: '120px',
          height: '120px',
          borderRadius: '30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 2rem',
          boxShadow: '0 12px 24px rgba(74, 144, 226, 0.3)',
          transform: 'rotate(-5deg)'
        }}>
          <img
            src="https://img.icons8.com/ios-filled/100/ffffff/bank-building.png"
            alt="Account Management"
            style={{ width: '70px', height: '70px' }}
          />
        </div>
        <h1 style={{ 
          color: '#1a1a1a', 
          marginBottom: '1.5rem',
          fontSize: '2.5rem',
          fontWeight: '800',
          letterSpacing: '-1px'
        }}>
          Welcome to <span style={{ 
            background: 'linear-gradient(90deg, #4a90e2 0%, #357ab8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            padding: '0 0.5rem'
          }}>Account Management</span>
        </h1>
        <p style={{ 
          color: '#4a5568', 
          marginBottom: '3rem',
          fontSize: '1.2rem',
          lineHeight: '1.6',
          maxWidth: '700px',
          margin: '0 auto 3rem'
        }}>
          Experience modern banking with our comprehensive account management platform.
          Stay in control of your finances with real-time tracking and smart features.
        </p>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '1rem'
        }}>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              delay={500 + (index * 200)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home