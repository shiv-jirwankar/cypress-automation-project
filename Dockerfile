# this is from dockerhub. 22.11.0 refers to the node version image pre-installed with Cypress
FROM cypress/base:22.11.0

# Install Cypress
RUN npm install -g cypress@13.6.4

# Set working directory inside the container
WORKDIR /app

# Copy everything from the current host directory to the /app directory in the container
# This assumes your Cypress tests and configuration files are in the current directory
COPY . .

# Run tests automatically when container starts
ENTRYPOINT [ "npx", "cypress", "run"]