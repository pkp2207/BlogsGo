package main

import (
	"html/template"
	"net/http"
)

// PageData holds data to pass to the HTML template
type PageData struct {
	Title string
}

func main() {
	http.HandleFunc("/", homeHandler)
	// Serve static files from the "static" directory
	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("static"))))
	http.ListenAndServe(":8081", nil)
}

func homeHandler(w http.ResponseWriter, r *http.Request) {
	data := PageData{Title: "Daily Journal"}
	tmpl, err := template.ParseFiles("templates/template.html")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	tmpl.Execute(w, data)
}
