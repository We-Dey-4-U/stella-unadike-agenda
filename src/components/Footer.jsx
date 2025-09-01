const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Artisan Connect. All rights reserved.</p>
      <div style={styles.links}>
        <a href="#about" style={styles.link}>About</a>
        <a href="#services" style={styles.link}>Services</a>
        <a href="/contact" style={styles.link}>Contact</a>
      </div>
    </footer>
  );
};

const styles = {
  footer: { backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '30px 20px', marginTop: '50px' },
  links: { marginTop: '10px', display: 'flex', justifyContent: 'center', gap: '15px' },
  link: { color: '#fff', textDecoration: 'none' },
};

export default Footer;