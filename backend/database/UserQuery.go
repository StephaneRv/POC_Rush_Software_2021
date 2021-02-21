package database

import (
	"backend/database/ent"
	"backend/database/ent/user"
)

func CreateUser(client *ent.Client, username, password, profilePicture string) error {
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

func GetUserWithCredentials(client *ent.Client, username, password string) (*ent.User, error) {
	userQuery, err := client.User.Query().Where(user.And(user.UsernameEQ(username),
		user.PasswordEQ(password))).First(Ctx)
	if err != nil {
		return nil, err
	}
	return userQuery, nil
}
