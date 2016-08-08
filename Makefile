deploy: build
	stout deploy --env production

build:
	hugo
