# FitSlot – Smart Gym Reservation System

FitSlot is a full-stack gym reservation and slot booking platform built to streamline session management, prevent booking conflicts, and provide a smooth user experience for gym members and administrators.

The application enables users to view available slots, book sessions, manage reservations, and track booking history through a modern full-stack architecture powered by Next.js, Node.js, Express.js, TypeScript, and MySQL.

---

## Features

- User authentication and session management
- Slot availability tracking
- Booking conflict prevention
- Slot reservation and cancellation workflow
- RESTful API architecture
- Optimised MySQL database queries
- Responsive frontend built with Next.js
- Centralised validation and error handling
- Scalable backend folder structure

---

## Tech Stack

### Frontend

- Next.js
- React.js
- TypeScript
- Tailwind CSS

### Backend

- Node.js
- Express.js
- TypeScript

### Database

- MySQL

### Tools & Technologies

- Git & GitHub
- REST APIs
- Server-Side Rendering (SSR)

---

## Project Architecture

```text
Frontend (Next.js)
        ↓
REST API Layer (Express.js)
        ↓
Business Logic & Controllers
        ↓
MySQL Database
```

---

## Core Functionalities

### Authentication & User Management

- User registration and login workflow
- Session handling and validation
- Secure route protection

### Slot Booking System

- View available gym slots
- Reserve gym sessions
- Prevent duplicate/conflicting bookings
- Track booking lifecycle

### Database Management

- Structured relational schema design
- Optimised queries for slot retrieval and booking management
- Persistent storage for users and reservations

---

## API Highlights

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /auth/register | Register new user |
| POST | /auth/login | Authenticate user |
| GET | /slots | Fetch available slots |
| POST | /bookings | Create booking |
| DELETE | /bookings/:id | Cancel booking |
| GET | /bookings/user | Fetch user bookings |

---

## Installation & Setup

### Clone Repository

```bash
git clone https://github.com/Swastika1205/Smart-Gym-Reservation-Booking-System.git
```

### Navigate to Project

```bash
cd Smart-Gym-Reservation-Booking-System
```

### Install Dependencies

#### Frontend

```bash
cd frontend
npm install
```

#### Backend

```bash
cd backend
npm install
```

---

## Environment Variables

Create a `.env` file in the backend directory.

Example:

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=fitslot
JWT_SECRET=your_secret_key
```

---

## Running the Application

### Start Backend

```bash
npm run dev
```

### Start Frontend

```bash
npm run dev
```

---

## Future Improvements

- JWT authentication enhancements
- Role-based access control (Admin/User)
- Docker containerisation
- Redis caching for performance optimisation
- Real-time slot updates using WebSockets
- Payment gateway integration
- Deployment using Vercel and Render

---

## Resume Highlights

- Developed a full-stack gym reservation system using Next.js, Node.js, Express.js, TypeScript, and MySQL.
- Implemented booking conflict prevention and slot availability tracking.
- Built RESTful APIs for booking lifecycle management.
- Integrated frontend and backend with scalable modular architecture.

---

## Author

Swastika Chatterjee

GitHub: https://github.com/Swastika1205  
LinkedIn: https://linkedin.com/in/swastika-chatterjee-81966a296


