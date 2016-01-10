package hello

import (
	//	"appengine"
	"encoding/json"
	"fmt"
	//"io"
	"io/ioutil"
	"log"
	"net/http"
	"net/url"
	"text/template"
)

type AllList struct {
	Index            string
	Name             string
	ArticleDetailUrl string
	ImageUrl         []string
}

func init() {
	http.HandleFunc("/", handler)
	http.HandleFunc("/input", input)
}

func handler(w http.ResponseWriter, r *http.Request) {
	//	c := appengine.NewContext(r)

	var AllLists []AllList
	var SelectLists []AllList

	data, err := ioutil.ReadFile("./template/save_person_details.json")
	data_err := json.Unmarshal(data, &AllLists)
	if err != nil {
		log.Fatal(err)
		log.Fatal(data_err)
	}

	/*	fmt.Fprintln(w, AllLists)
		fmt.Fprintln(w, len(AllLists))
		fmt.Fprintln(w, AllLists[331].Name)
		fmt.Fprintln(w, AllLists[331].ImageUrl[0])
	*/
	for i := 0; i < 10; i++ {
		SelectLists := AllLists[i]
	}

	values := url.Values{}
	values.Add("0", "SelectLists")

	resp, err := http.PostForm("http://localhost:8080/template/test.js/post", values)
	if err != nil {
		fmt.Println(err)
	}

}

func input(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "this is API endpoint root.")
	/*t, err := template.ParseFiles("template/sample.html")
	if err == nil {
		contents := make(map[string]string, 1)
		t.Execute(w, contents)
	}*/
}
