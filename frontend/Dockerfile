# Use Node.js image for building the frontend
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend source code
COPY . .

# Build the Next.js app
RUN npm run build

# Use a minimal base image to serve the app
FROM node:18-alpine

# Set the working directory for the final image
WORKDIR /app

# Copy only the necessary files for production from the builder stage
COPY --from=builder /app ./

# Install only production dependencies
RUN npm ci --omit=dev

# Expose the port the app runs on
EXPOSE 3000

# Start Next.js in production mode
CMD ["npm", "run", "start"]
