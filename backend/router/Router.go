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
	if err := database.Register(database.Client, username, password, profilePicture); err != nil {
		c.AbortWithError(http.StatusBadRequest, err)
		return
	}
	c.String(http.StatusOK, "Successfully registered")
}

func login(c *gin.Context) {
	username := c.Query("username")
	password := c.Query("password")
	if err := database.Login(database.Client, username, password); err != nil {
		c.AbortWithError(http.StatusBadRequest, err)
		return
	}
	c.String(http.StatusOK, "Successfully logged in")
}

func ApplyRoutes(r *gin.Engine) {
	r.GET("/health", health)
	r.POST("/register", register)
	r.POST("/login", login)
}
