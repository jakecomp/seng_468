FROM golang:alpine
RUN apk add --no-cache git
WORKDIR /go/src/app
COPY . .
EXPOSE 8003
RUN go get -d -v ./...
RUN go build -o /go/bin/app -v ./...
CMD ["go","run","/go/src/app/worker_service.go", "/go/src/app/commands.go", "/go/src/app/bus.go", "/go/src/app/logging.go", "/go/src/app/db.go"]
