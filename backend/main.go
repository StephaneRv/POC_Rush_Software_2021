package main

import (
	"backend/server"
	"fmt"
	_ "github.com/jackc/pgx/v4/stdlib"
)

func main() {
	r := server.NewServer()

	err := r.Run()
	if err != nil {
		fmt.Printf("An error has occurred: %v\n", err)
	}
}
