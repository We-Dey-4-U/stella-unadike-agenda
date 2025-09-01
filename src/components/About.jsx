const About = () => {
  return (
    <section id="about" style={styles.container}>
      <h2 style={styles.title}>About Artisan Connect</h2>
      <div style={styles.content}>
        <img
          src="https://images.unsplash.com/photo-1601597113307-6b3aa7e775b8?auto=format&fit=crop&w=800&q=80"
          alt="Artisans at work"
          style={styles.image}
        />
        <p style={styles.text}>
          Artisan Connect is your ultimate platform to discover and hire trusted local artisans with ease. 
          Whether you need an electrician to fix a flickering light, a plumber for a leaky pipe, a painter 
          to refresh your walls, or a carpenter for custom furniture, we've got you covered. 
          Our mission is to make hiring professionals fast, safe, and reliable. Explore verified artisans, 
          read real customer reviews, and get your projects done efficiently—all from the comfort of your home.
        </p>
      </div>
    </section>
  );
};

const styles = {
  container: {
    padding: '80px 20px',
    maxWidth: '1000px',
    margin: '0 auto',
    textAlign: 'center',
  },
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '40px',
    color: '#333',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '40px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  image: {
    width: '400px',
    maxWidth: '100%',
    borderRadius: '12px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
  },
  text: {
    fontSize: '18px',
    color: '#555',
    lineHeight: '1.8',
    maxWidth: '500px',
    textAlign: 'left',
  },
};

export default About;