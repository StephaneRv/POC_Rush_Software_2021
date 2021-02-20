package server

import (
	"backend/router"
	"github.com/gin-gonic/gin"
)

func NewServer() *gin.Engine {
	r := gin.Default()
	router.ApplyRoutes(r)
	return r
}
