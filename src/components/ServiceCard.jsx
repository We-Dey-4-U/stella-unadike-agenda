const ServiceCard = ({ service }) => (
  <div style={{ border: '1px solid #ccc', padding: '10px', margin: '5px' }}>
    <h4>{service.name}</h4>
    <p>{service.description}</p>
    <p>Price: ${service.price}</p>
  </div>
);

export default ServiceCard;