FROM node:18-alpine

WORKDIR /app

# Copie des fichiers de dépendances
COPY package*.json ./

# Installation des dépendances
RUN npm ci --only=production

# Copie du reste du code source
COPY . .

# Exposition du port sur lequel l'app s'exécute
EXPOSE 3000

# Commande de démarrage
CMD ["npm", "start"]
