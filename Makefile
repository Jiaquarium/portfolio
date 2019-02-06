BIN := $(shell pwd)/node_modules/.bin
NODE_ENV ?= development
CLIENT_BUNDLE_FILE_NAME ?= client-bundle

clean:
	rm -rf build

build: clean
	GENERATE_SOURCEMAP=false \
	$(BIN)/react-scripts build
	echo 'Deleting extraneous index.html in /build that is needed for react scripts 🔪'
	rm build/index.html
	echo 'Transferring image assets over 📷'
	cp -R src/assets/ build/static/raw-media
	echo 'Renaming bundle to general name so page-markup can locate ✅'
	mv build/static/js/main.*.js build/static/js/$(CLIENT_BUNDLE_FILE_NAME).js

test:
	$(BIN)/react-scripts test --env=jsdom

dev:
	$(BIN)/react-scripts start

dev-prod: build
	NODE_ENV=$(NODE_ENV) \
	$(BIN)/nodemon server/bootstrap.js

docker-build:
	docker build -t jamesgu/art-portfolio:2019_02_06_1500 .

docker-run:
	docker run -d --name art-portfolio -p 80:8000 jamesgu/art-portfolio:2019_02_06_1500
