# Stage 1: Build the application
FROM node:20-alpine 

# Install Git, as Husky requires it
RUN apk add --no-cache git

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock files
COPY package.json ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Make sure Husky is set up
RUN npx husky install || echo "Husky install skipped"

# Expose the desired port
EXPOSE 3000

# Start the project
CMD ["yarn", "run", "foss"]
