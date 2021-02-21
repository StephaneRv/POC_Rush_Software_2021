package database

import (
	"backend/database/ent"
	"context"
	"fmt"
	_ "github.com/jackc/pgx/v4/stdlib"
	"log"
	"os"
	"time"
)

var Client *ent.Client
var Ctx context.Context

func Open(databaseUrl string) (db *ent.Client, err error) {
	for i := 0; i < 5; i++ {
		db, err = ent.Open("postgres", databaseUrl)
		if err == nil {
			return
		}
		time.Sleep(time.Second)
	}
	return
}

func Init() {
	var err error
	dbUrl := os.Getenv("DB_URL")

	if dbUrl == "" {
		fmt.Println("Missing DB_URL variable")
	}
	Client, err = Open(dbUrl)
	if err != nil {
		log.Fatal(err)
	}
	Ctx = context.Background()
	err = Client.Schema.Create(Ctx)
	if err != nil {
		fmt.Printf("An error has occurred: %v\n", err)
	}
	users, err := Client.User.Query().All(Ctx)
	if err != nil {
		fmt.Printf("An error has occurred: %v\n", err)
	}
	fmt.Println(users)
	defer Client.Close()
}
