const express = require('express');
const mongoose = require('mongoose');
const Dish = require('./Models/Dish');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://pkatiyar574:Ramji1234@cluster0.kynig5p.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected'))
  .catch(err => console.error(err));


let clients = [];

app.get('/events', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders(); 

  clients.push(res);

  req.on('close', () => {
    clients = clients.filter(client => client !== res);
  });
});


const sendEventsToAll = (newData) => {
  clients.forEach(client => client.write(`data: ${JSON.stringify(newData)}\n\n`));
};


app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/api/dishes', async (req, res) => {
  try {
    const dishes = await Dish.find();
    res.json(dishes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/dishes/:id/toggle', async (req, res) => {
  try {
    const dish = await Dish.findById(req.params.id);
    if (!dish) return res.status(404).json({ error: 'Dish not found' });
    dish.isPublished = !dish.isPublished;
    await dish.save();
    res.json(dish);
    sendEventsToAll(dish); 
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
