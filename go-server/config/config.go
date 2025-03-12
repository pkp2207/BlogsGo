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

func ConnectDB() {
    if err := godotenv.Load(); err != nil {
        log.Fatalf("Error loading .env file: %v", err)
    }

    mongoURI := os.Getenv("MONGODB_URI")
    if mongoURI == "" {
        log.Fatal("MONGODB_URI not set in .env file")
    }

    clientOptions := options.Client().ApplyURI(mongoURI)

    var err error
    Client, err = mongo.Connect(context.Background(), clientOptions)
    if err != nil {
        log.Fatalf("Error connecting to MongoDB: %v", err)
    }

    ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
    defer cancel()
    
    if err = Client.Ping(ctx, nil); err != nil {
        log.Fatalf("Error pinging MongoDB: %v", err)
    }

    log.Println("Connected to MongoDB!")

    BlogCollection = Client.Database("blogDB").Collection("posts")
}
