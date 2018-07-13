.PHONY: build watch install;

watch:
	while true; do make build -s; sleep 2; done;

build: index.js main.css

index.js: $(wildcard src/js/*.js)
	browserify -e src/js -o index.js

main.css: $(wildcard src/sass/*.scss)
	sass src/sass/main.scss main.css

install:
	npm install -g http-server &&
	npm install -g browserify &&
	npm install -g sass