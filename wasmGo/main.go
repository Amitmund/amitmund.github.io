package main

import (
	"fmt"
)

func main() {
	fmt.Println("Go Web Assembly")
	// Window.Alert("hello world!")
}

// GOOS=js GOARCH=wasm go build -o goAlert.wasm main.go
