import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    fetchDishes();
    const eventSource = new EventSource('http://localhost:5000/events');
    eventSource.onmessage = (event) => {
      const updatedDish = JSON.parse(event.data);
      setDishes((prevDishes) =>
        prevDishes.map((dish) =>
          dish._id === updatedDish._id ? updatedDish : dish
        )
      );
    };

    return () => {
      eventSource.close();
    };
  }, []);

  const fetchDishes = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/dishes');
      setDishes(response.data);
    } catch (error) {
      console.error('Error fetching dishes:', error);
    }
  };

  const togglePublish = async (dishId) => {
    try {
      const response = await axios.post(`http://localhost:5000/api/dishes/${dishId}/toggle`);
      const updatedDish = response.data;
      setDishes((prevDishes) =>
        prevDishes.map((dish) =>
          dish._id === updatedDish._id ? updatedDish : dish
        )
      );
    } catch (error) {
      console.error('Error toggling publish status:', error);
    }
  };

  return (
    <div>
      <header className="header">
        <nav className="nav">
          <h1 className="nav-title">Food Point</h1>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="container">
        <h1 className="title">Dish Dashboard</h1>
        <ul className="dish-list">
          {dishes.map((dish) => (
            <li key={dish._id} className="dish-item">
              <img src={dish.imageUrl} alt={dish.dishName} className="dish-image" />
              <h2 className="dish-name">{dish.dishName}</h2>
              <p className={`dish-status ${dish.isPublished ? 'published' : 'unpublished'}`}>
                {dish.isPublished ? 'Published' : 'Unpublished'}
              </p>
              <button
                className={`toggle-button ${dish.isPublished ? 'unpublish' : 'publish'}`}
                onClick={() => togglePublish(dish._id)}
              >
                {dish.isPublished ? 'Unpublish' : 'Publish'}
              </button>
            </li>
          ))}
        </ul>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Food Port. All rights reserved.</p>
        <ul className="footer-links">
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
