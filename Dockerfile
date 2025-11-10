# Gunakan base image Node.js
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json dan install dependencies
COPY package*.json ./
RUN npm install --production

# Copy seluruh kode
COPY . .

# Expose port
EXPOSE 3000

# Jalankan server
CMD ["npm", "start"]
