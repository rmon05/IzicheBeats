FROM node:10
WORKDIR usr/src/app

# Install Packages
COPY package*.json ./
RUN npm install

# Specify production environment
ENV NODE_ENV=production

# Copy files over
COPY . .

# Build it
RUN npm run build

# Serve it
CMD ["npm", "start"]