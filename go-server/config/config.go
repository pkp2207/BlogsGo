package config

import (
    "context"
    "log"
    "os"
    "time"

    "github.com/joho/godotenv"
    "go.mongodb.org/mongo-driver/mongo"
    "go.mongodb.org/mongo-driver/mongo/options"
)

var (
    Client          *mongo.Client
    BlogCollection  *mongo.Collection
)

// ConnectDB initializes the MongoDB client and connects to the database.
func ConnectDB() {
    // Load environment variables from .env file
    if err := godotenv.Load(); err != nil {
        log.Fatalf("Error loading .env file: %v", err)
    }

    mongoURI := os.Getenv("MONGODB_URI")
    if mongoURI == "" {
        log.Fatal("MONGODB_URI not set in .env file")
    }

    // Set client options
    clientOptions := options.Client().ApplyURI(mongoURI)

    // Connect to MongoDB
    var err error
    Client, err = mongo.Connect(context.Background(), clientOptions)
    if err != nil {
        log.Fatalf("Error connecting to MongoDB: %v", err)
    }

    // Ping the MongoDB server to verify connection
    ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
    defer cancel()
    
    if err = Client.Ping(ctx, nil); err != nil {
        log.Fatalf("Error pinging MongoDB: %v", err)
    }

    log.Println("Connected to MongoDB!")

    // Initialize the BlogCollection
    BlogCollection = Client.Database("blogDB").Collection("posts")
}
