# Stage 1: Build the application
FROM node:20-alpine 

# Install Git, as Husky requires it

# Set the working directory inside the container
WORKDIR /app

RUN yarn cache clean
# Copy package.json and yarn.lock files
COPY package.json yarn.lock ./


# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Make sure Husky is set up
RUN npx husky install || echo "Husky install skipped"

# Expose the desired port
EXPOSE 3000

# Start the project
CMD ["yarn", "run", "foss"]
