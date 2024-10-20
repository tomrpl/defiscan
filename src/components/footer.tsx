import React from 'react';
import { FaTwitter, FaLinkedinIn, FaDiscord, FaGithub } from 'react-icons/fa'; // Example icons

const Footer: React.FC = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.copyright}>
          &copy; {new Date().getFullYear()} DeFi Collective
        </div>
        <div>
          <a href="/terms" className="mr-4">Terms</a>
          <a href="/privacy" className="ml-4">Privacy</a>
        </div>
        <div style={styles.socialLinks}>
          <a href="https://twitter.com/DeFiCollective_" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/company/defi-collective" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <FaLinkedinIn />
          </a>
          <a href="https://discord.gg/Z467Ehv6VU" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <FaDiscord />
          </a>
          <a href="https://github.com/deficollective" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

// Define the styles as a TypeScript object with proper types
const styles: { [key: string]: React.CSSProperties } = {
  footer: {
    width: '100%',
    padding: '20px',
    backgroundColor: '#f8f8f8',
    borderTop: '1px solid #e7e7e7',
    position: 'fixed',
    bottom: 0,
    left: 0
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  copyright: {
    fontSize: '14px',
    color: '#555',
    textAlign: 'center',
  },
  socialLinks: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginLeft: '15px',
    fontSize: '20px',
    color: '#555',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
  }
};

export default Footer;
