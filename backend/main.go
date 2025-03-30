package main

import (
	"context"
	"log"
	"net/http"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/pkp2207/BlogsGo/backend/config"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

// Blog model
type Blog struct {
	ID      primitive.ObjectID `json:"id" bson:"_id"`
	Title   string             `json:"title" bson:"title"`
	Content string             `json:"content" bson:"content"`
}

// Subscriber model
type Subscriber struct {
	ID    primitive.ObjectID `json:"id" bson:"_id,omitempty"`
	Email string             `json:"email" bson:"email"`
}

// Add a new collection for newsletter subscribers
var SubscriberCollection *mongo.Collection

func main() {
	config.ConnectDB()

	SubscriberCollection = config.Client.Database("blogDB").Collection("subscribers") // Create a new collection for subscribers

	r := gin.Default()

	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"*"}, // Adjust based on your frontend's domain
		AllowMethods:     []string{"GET", "POST", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
	}))

	// API Routes
	r.GET("/blogs", getBlogs)
	r.GET("/blogs/:id", getBlogByID)
	r.POST("/blogs", createBlog)
	r.POST("/subscribe", subscribeToNewsletter) // Add newsletter subscription endpoint

	if err := r.Run("0.0.0.0:3001"); err != nil {
		log.Fatalf("Error starting server: %v", err)
	}
}

// Newsletter subscription handler
func subscribeToNewsletter(c *gin.Context) {
	var subscriber Subscriber

	if err := c.ShouldBindJSON(&subscriber); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request payload"})
		return
	}

	// Check if the email already exists
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	var existing Subscriber
	err := SubscriberCollection.FindOne(ctx, bson.M{"email": subscriber.Email}).Decode(&existing)
	if err == nil {
		c.JSON(http.StatusConflict, gin.H{"error": "Email already subscribed"})
		return
	} else if err != mongo.ErrNoDocuments {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Database error"})
		return
	}

	// Insert new subscriber
	subscriber.ID = primitive.NewObjectID()
	_, err = SubscriberCollection.InsertOne(ctx, subscriber)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error subscribing"})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"message": "Successfully subscribed!"})
}

func getBlogs(c *gin.Context) {
	var blogs []Blog
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	cursor, err := config.BlogCollection.Find(ctx, bson.M{})
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error fetching blogs: " + err.Error()})
		return
	}
	defer cursor.Close(ctx)

	for cursor.Next(ctx) {
		var blog Blog
		if err := cursor.Decode(&blog); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Error decoding blog: " + err.Error()})
			return
		}
		blogs = append(blogs, blog)
	}

	if err := cursor.Err(); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Cursor error: " + err.Error()})
		return
	}

	c.JSON(http.StatusOK, blogs)
}

func getBlogByID(c *gin.Context) {
	id := c.Param("id")
	objID, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid ID format"})
		return
	}

	var blog Blog
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	err = config.BlogCollection.FindOne(ctx, bson.M{"_id": objID}).Decode(&blog)
	if err != nil {
		if err == mongo.ErrNoDocuments {
			c.JSON(http.StatusNotFound, gin.H{"error": "Blog not found"})
		} else {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Error fetching blog: " + err.Error()})
		}
		return
	}

	c.JSON(http.StatusOK, blog)
}

func createBlog(c *gin.Context) {
	var blog Blog
	if err := c.ShouldBindJSON(&blog); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request payload"})
		return
	}

	blog.ID = primitive.NewObjectID()
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	_, err := config.BlogCollection.InsertOne(ctx, blog)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error inserting blog: " + err.Error()})
		return
	}

	c.JSON(http.StatusCreated, blog)
}
