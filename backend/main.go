package main

import (
	"backend/server"
	"fmt"
	"github.com/joho/godotenv"
)

func main() {
	r := server.NewServer()
	err := godotenv.Load()

	if err != nil {
		fmt.Printf("An error has occurred: %v\n", err)
	}
	err = r.Run()
	if err != nil {
		fmt.Printf("An error has occurred: %v\n", err)
	}
}
