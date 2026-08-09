// Dummy database for destinations
let destinations = [
  {
    id: 1,
    city: 'ahmedabad',
    description: 'World best tourist place ',
    country: 'India',
  },
  {
    id: 2,
    city: 'jaipur',
    description: 'pink city ',
    country: 'India',
  },
];
let nextId = 3;

exports.getMessages = (req, res) => {
  const message = 'Get 50% cashback on saving your first spot.';
  res.json({ message });
};

exports.getDestinations = (req, res) => {
  let count = req.query.count ? parseInt(req.query.count, 10) : 100;
  let result = destinations;
  
  if (req.query.country) {
    result = result.filter(d => d.country === req.query.country);
  }
  
  res.json(result.slice(0, count));
};

exports.getDestinationById = (req, res) => {
  const destination = destinations.find(d => d.id === parseInt(req.params.id, 10));
  if (!destination) {
    return res.status(404).json({ error: 'Destination not found' });
  }
  res.json(destination);
};

exports.createDestination = (req, res) => {
  const newDestination = {
    id: nextId++,
    city: req.body.city,
    description: req.body.description,
    country: req.body.country,
  };
  destinations.push(newDestination);
  res.status(201).json(newDestination);
};

exports.updateDestination = (req, res) => {
  const index = destinations.findIndex(d => d.id === parseInt(req.params.id, 10));
  if (index === -1) {
    return res.status(404).json({ error: 'Destination not found' });
  }
  destinations[index] = {
    ...destinations[index],
    city: req.body.city || destinations[index].city,
    description: req.body.description || destinations[index].description,
    country: req.body.country || destinations[index].country,
  };
  res.json(destinations[index]);
};

exports.deleteDestination = (req, res) => {
  const index = destinations.findIndex(d => d.id === parseInt(req.params.id, 10));
  if (index === -1) {
    return res.status(404).json({ error: 'Destination not found' });
  }
  const deleted = destinations.splice(index, 1);
  res.status(200).json(deleted[0]);
};
