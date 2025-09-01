const Services = () => {
  // Hardcoded artisan services
  const services = [
    { id: 1, name: 'Plumbing', description: 'Fix leaks, install pipes, and handle water-related issues.', image: '/images/plumber.jpg' },
    { id: 2, name: 'Electrical Work', description: 'Install and repair electrical systems safely.', image: '/images/electrician.jpg' },
    { id: 3, name: 'Carpentry', description: 'Furniture making, repairs, and custom woodwork.', image: '/images/carpenter.jpg' },
    { id: 4, name: 'Painting', description: 'Interior and exterior painting services for homes and offices.', image: '/images/painter.jpg' },
    { id: 5, name: 'Cleaning', description: 'House, office, and commercial cleaning services.', image: '/images/cleaner.jpg' },
    { id: 6, name: 'Tailoring', description: 'Custom clothing, alterations, and repairs.', image: '/images/tailor.jpg' },
    { id: 7, name: 'Masonry', description: 'Construction, brickwork, and other masonry services.', image: '/images/mason.jpg' },
    { id: 8, name: 'Gardening & Landscaping', description: 'Lawn care, planting, and garden maintenance.', image: '/images/gardener.jpg' },
    { id: 9, name: 'AC & Appliance Repair', description: 'Repair and maintenance for air conditioners and appliances.', image: '/images/appliance.jpg' },
    { id: 10, name: 'Home Decor & Interior Design', description: 'Design and decoration services for a beautiful living space.', image: '/images/decorator.jpg' },
  ];

  return (
    <section id="services" style={styles.container}>
      <h2 style={styles.title}>Services You Can Get</h2>
      <div style={styles.grid}>
        {services.map(s => (
          <div key={s.id} style={styles.card}>
            {s.image && <img src={s.image} alt={s.name} style={styles.image} />}
            <h3 style={styles.cardTitle}>{s.name}</h3>
            <p style={styles.cardDesc}>{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  container: {
    padding: '80px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '40px',
    color: '#333',
  },
  grid: {
    display: 'grid',
    gap: '20px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    justifyItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
    textAlign: 'center',
    transition: 'transform 0.2s, box-shadow 0.2s',
    width: '100%',
    maxWidth: '300px',
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: '600',
    margin: '15px 0 10px 0',
    color: '#333',
  },
  cardDesc: {
    fontSize: '14px',
    color: '#555',
    lineHeight: '1.5',
  },
  image: {
    width: '80px',
    height: '80px',
    objectFit: 'cover',
    borderRadius: '50%',
    marginBottom: '15px',
  },
};

export default Services;