FROM resin/rpi-raspbian
MAINTAINER "Amir Mofasser https://github.com/amimof/"
RUN apt-get update
RUN apt-get -y install nodejs npm
COPY . /src
RUN cd /src; npm install
EXPOSE 8080
CMD ["nodejs", "/src/server.js"]
