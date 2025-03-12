# Use the official Go image to build the application
FROM golang:1.22 AS builder

# Set the working directory
WORKDIR /app

# Copy only go.mod (omit go.sum if it's missing)
COPY go.mod . 

# Download dependencies (skip checksum verification if needed)
RUN go mod tidy

# Copy the source code
COPY . .

# Build the Go application
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o main .

# Use a minimal base image to run the application
FROM alpine:latest
WORKDIR /app

# Copy the Go binary from the builder stage
COPY --from=builder /app/main .

# Ensure the binary has executable permissions
RUN chmod +x ./main

# Expose the port for the Go server
EXPOSE 3001

# Command to run the application
CMD ["./main"]
