# Create image based on the official Node 9 image from dockerhub
FROM node:9-alpine

# Install specific npm version
RUN npm install npm@6.0.0

# Set env variables
ENV NODE_ENV=production

# Remove global installation of npm
RUN rm -rf /usr/local/lib/node_modules/npm

# Move local installation of npm to global location
RUN mv node_modules/npm /usr/local/lib/node_modules/npm

# Make the working directory folder
WORKDIR /art-portfolio

# Install dependencies with npm
COPY *.npmrc package.json package-lock.json /tmp/
RUN cd /tmp && /usr/local/bin/npm ci
RUN mv /tmp/node_modules /art-portfolio

# Copy all files into working directory
COPY . /art-portfolio

# Expose the port the app runs in
EXPOSE 8000

# Serve the app
CMD ["node", "server/bootstrap.js"]
