# BlogsGo

BlogsGo is a foundational Go application designed to retrieve and display data from a MongoDB Atlas database. The application is currently deployed at [BlogsGo](https://pkp-blogsgo.vercel.app/). 

## Features

- **Home Page**: Displays featured posts with brief descriptions, allowing readers to quickly access highlighted content.
- **Blogs**: A comprehensive list of all published blogs, enabling users to browse and read posts of interest.
- **Create New Blog**: An intuitive interface for users to compose and publish their own blog posts.
- **About**: Provides information about BlogsGo, its mission, and the team behind the platform.
- **Newsletter Subscription**: Allows users to subscribe to a newsletter to receive the latest updates and articles directly in their inbox.
- **Testimonials**: Showcases feedback from readers, highlighting the platform's value and impact.
- **Backend built with Go and Gin framework**
- **Frontend built with Next.js and React**
- **Uses MongoDB Atlas for data storage**
- **API endpoints for retrieving and managing blogs**
- **Responsive UI**

## Technologies Used

- **Next.js**: A React framework that enables server-side rendering and static site generation, enhancing performance and SEO.
- **Vercel**: A platform for frontend developers, providing the infrastructure to deploy and scale web applications effortlessly.
- **Go & Gin**: Used for backend services and API development.
- **MongoDB Atlas**: Cloud-based database storage.

## Deployment

The backend is hosted on Render, and the frontend is deployed on Vercel.

## Running Locally

### Dockerized Setup
To run the entire application using Docker:
```sh
docker-compose up --build
```
This will start both the Go server and the Next.js frontend.

### Manual Setup
If you prefer to run the services separately:

1. **Backend (Go Server)**
   ```sh
   cd go-server
   go run main.go
   ```
2. **Frontend (Next.js Application)**
   ```sh
   cd nextwithgo
   npm install
   npm run dev
   ```

## Environment Variables

Make sure to set up the required environment variables, including `MONGODB_URI` with the appropriate credentials.

## Contributing

We welcome contributions! Please fork the repository and create a pull request with your changes. Ensure that your code adheres to the project's coding standards and includes relevant tests.


