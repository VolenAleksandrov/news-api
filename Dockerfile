FROM node

ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PASSWORD=admin

# Create app directory
RUN mkdir /app
WORKDIR /app
COPY package.json /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)


# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . /app
RUN npm install

CMD [ "node", "/app/index.js" ]