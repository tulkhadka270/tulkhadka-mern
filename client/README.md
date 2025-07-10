# tulkhadka-mern

# Wise Academy

**Wise Academy** is an e-learning platform that provides a wide range of resources including books and video lectures. This MERN stack application allows students to access educational content, while instructors can manage and upload their courses. Admins can oversee the platform's functionality, including user and content management.


## Technologies Used
- **Frontend:**
  - React.js
  - Redux for state management
  - React Router for navigation
  - Tailwind CSS for styling

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB with Mongoose for database management

- **Authentication:**
  - JWT (JSON Web Tokens) for user authentication

- **Other Tools:**
  - Axios for making API requests
  - bcrypt for password hashing

## Features
- **Student Features:**
  - Browse and access courses (books, video lectures)
  - Profile management for tracking progress
  - View courses by category, instructor, or level

- **Instructor Features:**
  - Create and manage courses
  - Upload course materials (books, videos)
  - Track student progress

- **Admin Features:**
  - Manage users (students/instructors)
  - Admin dashboard for managing content and platform usage
  - Review and approve course materials

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (Local or MongoDB Atlas)
- npm (Node Package Manager)



# running the project
   ```bash
   git clone https://github.com/tulkhadka270/tulkhadka-mern.git

# for backend setup
cd server
npm install

add on .env file
MONGO_URI=your-mongo-uri
JWT_SECRET=your-jwt-secret

npm run dev

# for fronend 
cd client
npm install
npm run dev