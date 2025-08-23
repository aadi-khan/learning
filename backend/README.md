

# Backend Services

This directory contains the microservices that power the PTE preparation SaaS platform.

## Services

### Auth Service
- Handles user authentication and JWT token management
- Social login integration (Google, Facebook)
- Password reset functionality

### User Service
- Manages user profiles and account information
- Role-based access control (Student, Instructor, Admin)
- Email verification system

### API Gateway
- Single entry point for all client requests
- Request routing and load balancing
- Authentication and authorization middleware

## Development

Each service is a separate Node.js application with its own package.json.

To start all services:
```bash
npm run dev
```

