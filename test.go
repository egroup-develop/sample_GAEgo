package hello

import (
	"fmt"
	"net/http"
	"text/template"
)

func init() {
	http.HandleFunc("/", handler)
	http.HandleFunc("/input", input)
}

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "this is API endpoint root.")
}

func input(w http.ResponseWriter, r *http.Request) {
	t, err := template.ParseFiles("template/sample.html")
	if err == nil {
		contents := make(map[string]string, 1)
		t.Execute(w, contents)
	}
}
