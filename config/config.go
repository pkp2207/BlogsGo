// config/config.go
package config

import (
    "context"
    "log"

    "go.mongodb.org/mongo-driver/mongo"
    "go.mongodb.org/mongo-driver/mongo/options"
)

var Client *mongo.Client
var BlogCollection *mongo.Collection

func ConnectDB() {
    // Set MongoDB client options
    clientOptions := options.Client().ApplyURI("mongodb+srv://pkp-admin:param22@cluster0.kftllgo.mongodb.net/blogDB?retryWrites=true&w=majority") // Replace with your MongoDB URI

    // Connect to MongoDB
    var err error
    Client, err = mongo.Connect(context.TODO(), clientOptions)
    if err != nil {
        log.Fatal(err)
    }

    // Check the connection
    err = Client.Ping(context.TODO(), nil)
    if err != nil {
        log.Fatal(err)
    }

    log.Println("Connected to MongoDB!")

    // Get the blog collection
    BlogCollection = Client.Database("blogDB").Collection("posts") // Replace with your database and collection names
}
