Food Point Dashboard<br>
Working Video:- https://drive.google.com/file/d/11sK4454N90BDg78J9PF5k_m49j2TUV7r/view?usp=sharing<br>
![Screenshot 2024-07-15 113542](https://github.com/user-attachments/assets/c6787170-9b23-478f-b202-9c63ae5005b7)
![Screenshot 2024-07-15 113600](https://github.com/user-attachments/assets/0f7a7b0a-aa2e-4734-a6a7-1099de996bc6)
🍽️ Overview
Welcome to Food Point Dashboard—a full-stack web application designed to manage and display dish information effortlessly. Built with a modern tech stack, this app leverages Node.js, Express, MongoDB, and React to provide a seamless user experience.

🚀 Features
View Dishes: Browse through a comprehensive list of dishes, complete with detailed information.
Toggle Publish Status: Easily manage the visibility of each dish with a simple toggle.
Real-time Updates: Experience instantaneous updates through Server-Sent Events (SSE).
Responsive Design: Enjoy a smooth experience across all devices.
💻 Installation
Backend
Clone the repository and navigate to the project directory:

bash
Copy code
git clone https://github.com/your-username/food-port-dashboard.git
cd food-port-dashboard
Install dependencies and configure MongoDB connection in db.js and server.js:

bash
Copy code
npm install
<br>

Populate the database and start the server:

bash
Copy code
node db.js
npm start
Frontend
<br>

Navigate to the client directory, install dependencies, and start the React app:

bash
Copy code
cd client
npm install
npm start
<br>

🛠️ Usage
Ensure the backend runs on port 5000 and the frontend on port 5173.
Open http://localhost:5173/ in your browser to access the dashboard.

<br>

📡 API Endpoints
GET /api/dishes - Fetch all dishes
POST /api/dishes/:id/toggle - Toggle the publish status of a dish
<br>

🧰 Technologies Used
Backend: Node.js, Express, MongoDB, Mongoose
Frontend: React, Axios
<br>

🎉 Contributing
Contributions are welcome! If you have suggestions or improvements, feel free to create a pull request.
