package router

import (
	"backend/database"
	"github.com/gin-gonic/gin"
	"net/http"
)

func health(c *gin.Context) {
	c.Status(http.StatusOK)
}

func register(c *gin.Context) {
	username := c.Query("username")
	password := c.Query("password")
	profilePicture := c.Query("profile_picture")
	if err := database.CreateUser(database.Client, username, password, profilePicture); err != nil {
		c.AbortWithError(http.StatusBadRequest, err)
		return
	}
	c.String(http.StatusOK, "Successfully registered")
}

func login(c *gin.Context) {
	username := c.Query("username")
	password := c.Query("password")
	userQuery, err := database.GetUserWithCredentials(database.Client, username, password)
	if err != nil {
		c.AbortWithError(http.StatusBadRequest, err)
		return
	}
	c.SetCookie("UUID", userQuery.ID.String(), 24*3600, "/", "localhost", false, false)
	c.String(http.StatusOK, "Successfully logged in")
}

func ApplyRoutes(r *gin.Engine) {
	r.GET("/health", health)
	r.POST("/register", register)
	r.POST("/login", login)
}
