Food Point Dashboard
![Screenshot 2024-07-15 113542](https://github.com/user-attachments/assets/c6787170-9b23-478f-b202-9c63ae5005b7)
![Screenshot 2024-07-15 113600](https://github.com/user-attachments/assets/0f7a7b0a-aa2e-4734-a6a7-1099de996bc6)

A full-stack web application to manage and display dish information using Node.js, Express, MongoDB, and React.

Features
View list of dishes with details
Toggle publish status
Real-time updates with Server-Sent Events (SSE)
Responsive design
Installation
Backend
Clone the repository and navigate to the project directory:

bash
Copy code
git clone https://github.com/your-username/food-port-dashboard.git
cd food-port-dashboard
Install dependencies and set up MongoDB connection in db.js and server.js:

bash
Copy code
npm install
Populate the database and start the server:

bash
Copy code
node db.js
npm start
Frontend
Navigate to the client directory, install dependencies, and start the React app:

bash
Copy code
cd client
npm install
npm start
Usage
Ensure the backend runs on port 5000 and the frontend on port 5173.
Open http://localhost:5173/ in your browser.
API Endpoints
GET /api/dishes - Fetch all dishes
POST /api/dishes/:id/toggle - Toggle publish status
Technologies Used
Backend: Node.js, Express, MongoDB, Mongoose
Frontend: React, Axios
