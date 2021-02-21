package database

import (
	"backend/database/ent"
)

func Register(client *ent.Client, username, password, profilePicture string) error {
	var err error
	if profilePicture == "" {
		_, err = client.User.Create().
			SetUsername(username).
			SetPassword(password).
			Save(Ctx)
	} else {
		_, err = client.User.Create().
			SetUsername(username).
			SetPassword(password).
			SetProfilePicture(profilePicture).
			Save(Ctx)
	}
	if err != nil {
		return err
	}
	return nil
}

func Login(client *ent.Client, username, password string) error {
	return nil
}
