const eventListingTemplate = ({ items }) => {
  return (
    <div>
      <h2>Events:</h2>
      {items.map((item) => (
        <ul>
          <li>{item.title}</li>
        </ul>
      ))}
    </div>
  );
};

export default eventListingTemplate;
