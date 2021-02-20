package router

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func health(r *gin.Context) {
	r.Status(http.StatusOK)
}

func ApplyRoutes(r *gin.Engine) {
	r.GET("/health", health)
}
