package main

import (
    "context"
    "net/http"
    "time"

    "github.com/gin-gonic/gin"
    "go.mongodb.org/mongo-driver/bson"
    "practicego/config" // Use your actual module name here
)

type Blog struct {
    ID      int    `json:"id" bson:"id"`
    Title   string `json:"title" bson:"title"`
    Content string `json:"content" bson:"content"`
}

func main() {
    config.ConnectDB() // Initialize MongoDB connection

    r := gin.Default()
    r.GET("/blogs", getBlogs)
    r.Run(":8080") // Start the server on port 8080
}

func getBlogs(c *gin.Context) {
    var blogs []Blog
    ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
    defer cancel()

    cursor, err := config.BlogCollection.Find(ctx, bson.M{})
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
        return
    }
    defer cursor.Close(ctx)

    for cursor.Next(ctx) {
        var blog Blog
        cursor.Decode(&blog)
        blogs = append(blogs, blog)
    }

    if err := cursor.Err(); err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
        return
    }

    c.JSON(http.StatusOK, blogs)
}
