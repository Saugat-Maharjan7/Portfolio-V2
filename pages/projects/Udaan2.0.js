import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { projects } from '../../public/scripts/Datas/projects';

function Udaan2() {
  const router = useRouter();
  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => {
    // Redirect to Dribbble after a short delay
    const timer = setTimeout(() => {
      window.location.href = 'https://dribbble.com/shots/25920729-Udaan-V2-0';
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      backgroundColor: '#f5f5f5'
    }}>
      <h1 style={{ marginBottom: '2rem' }}>Projects</h1>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        gap: '1rem',
        width: '100%',
        maxWidth: '600px'
      }}>
        {projects.map((project) => (
          <Link 
            key={project.id}
            href={project.link}
            style={{
              padding: '1rem',
              backgroundColor: 'white',
              borderRadius: '8px',
              textDecoration: 'none',
              color: 'black',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s ease',
              ':hover': {
                transform: 'translateY(-2px)'
              }
            }}
          >
            <h2 style={{ margin: 0 }}>{project.title}</h2>
            <p style={{ margin: '0.5rem 0 0 0', color: '#666' }}>{project.projectBrief}</p>
          </Link>
        ))}
      </div>
      <p style={{ marginTop: '2rem', color: '#666' }}>
        Redirecting to Dribbble...
      </p>
    </div>
  );
}

export default Udaan2;