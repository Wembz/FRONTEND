package main

import(
	"fmt"
	"log"
	"net/http"
)
 
func formHandler(w http.ResponseWriter, r *http.Request){

	// "Parseform" User has to enter details into form 
	if err := r.ParseForm(); err !=nil{
		fmt.Fprintf(w,"ParseForm() err: %v", err)
		return
	}
	fmt.Fprintf(w, "POST request succesful!!! ")
	name := r.FormValue("name")
	address := r.FormValue("address")
	fmt.Fprintf(w, "Name = &s\n", name)
	fmt.Fprintf(w, "Address = &s\n", address)
}

func helloHandler(w http.ResponseWriter,r *http.Request){

//Type Error Message	
if r.URL.Path != "/hello"{
	http.Error(w, "404 not found", http.StatusNotFound)
	return
}
if r.Method != "GET"{
	http.Error(w, "method is not supported", http.StatusNotFound)
	return
}
fmt.Fprintf(w,"hello!")
}


func main(){

	//Creatting the Server and the Handles for the website 
	fileServer := http.FileServer(http.Dir("./static"))
	http.Handle("/", fileServer)
	http.HandleFunc("/form", formHandler)
	http.HandleFunc("/hello", helloHandler)
	
// Website message we want to display	
fmt.Printf("Starting server at port 8080\n")

//Type Error message
if err := http.ListenAndServe(":8080", nil); err !=nil{
	log.Fatal(err) 
}

}
