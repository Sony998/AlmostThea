# Usar la imagen base de Node.js
FROM node:latest

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos de paquete y el archivo de bloqueo de paquetes al contenedor
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el resto de los archivos del proyecto al contenedor
COPY . .

# Compilar el proyecto de Angular
RUN npm run build --prod

# Exponer el puerto que usará el servidor de Angular
EXPOSE 80

# Comando para iniciar el servidor de Angular cuando el contenedor se ejecute
CMD ["npm", "run", "start"]
