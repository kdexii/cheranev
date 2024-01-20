FROM golang:latest
RUN mkdir /app
ADD . /app/
WORKDIR /app/src
RUN go build -o image-server . && cp image-server ../
WORKDIR /app
CMD ["/app/image-server"]