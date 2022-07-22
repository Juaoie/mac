package controller

import (
	"io"
	"os"

	"github.com/gin-gonic/gin"
)

func SetQueueData() {
	// 记录到文件。
	f, _ := os.Create("mac.log")
	gin.DefaultWriter = io.MultiWriter(f)

	r := gin.Default()
	// r.POST("/queue", queue)
	r.Run(":9090")

}

// func queue(c *gin.Context) {
// 	q := data.QueueLogData{}
// 	c.BindJSON(&q)
// 	if q.Id == "" {
// 		c.JSON(http.StatusBadRequest, gin.H{"message": "fail"})
// 	} else {
// 		data.Q.Set(q)
// 		c.JSON(http.StatusOK, gin.H{"message": "ok!", "code": 200})
// 	}
// }
