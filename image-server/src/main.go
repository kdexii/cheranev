package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
)

func getRoot(w http.ResponseWriter, r *http.Request) {
}
func getHello(w http.ResponseWriter, r *http.Request) {
	warnLog := log.New(os.Stdout, "WARN\t", log.Ldate|log.Ltime)
	imageName := r.URL.Query().Get("name")
	stringPathTemplateToImage := "./media/" + imageName + ".png"
	stringPathTemplateErrorImage := "./media/not_found.png"

	fileBytes, err := ioutil.ReadFile(stringPathTemplateToImage)
	if err != nil {
		warnLog.Printf("File with name \"%s\" not found in directory media", imageName)
		fileBytes, err := ioutil.ReadFile(stringPathTemplateErrorImage)
		if err != nil {
			warnLog.Printf("Error image not found!")
		}
		w.WriteHeader(http.StatusOK)
		w.Header().Set("Content-Type", "application/octet-stream")
		w.Write(fileBytes)
		return
	}
	w.WriteHeader(http.StatusOK)
	w.Header().Set("Content-Type", "application/octet-stream")
	w.Write(fileBytes)
	return
}

func main() {
	http.HandleFunc("/", getRoot)
	http.HandleFunc("/image", getHello)

	err := http.ListenAndServe(":3333", nil)
	fmt.Println(err)
}
