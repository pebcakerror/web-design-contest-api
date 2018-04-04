FROM google/nodejs

LABEL maintainer="James Anderton <janderton@burwood.com>"
LABEL description="API Serving container for Web Professionals Design Contest"

ENV NPM_CONFIG_LOGLEVEL warn

COPY . /app/

# Compile Front-end
WORKDIR /app/
RUN npm install

# Bundle app source
COPY . .

# Expose port
EXPOSE 60606 

# Boom!
CMD [ "npm", "run", "start" ]
