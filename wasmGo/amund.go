package main

import (
	"fmt"
)

func main() {
	amund()
	// Window.Alert("hello world!")
}

func amund() {
	fmt.Println("amund_go_wasm")
}

// GOOS=js GOARCH=wasm go build -o amund.wasm main.go
