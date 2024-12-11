# Usar una imagen base de Node.js para construir la aplicación
FROM node:16 AS build

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar el archivo package.json y package-lock.json (o yarn.lock) al contenedor
COPY package*.json ./

# Instalar las dependencias de la aplicación
RUN npm install

# Copiar todo el código fuente al contenedor
COPY . .

# Construir la aplicación React
RUN npm run build

# Usar una imagen base más ligera para servir la aplicación
FROM nginx:alpine

# Copiar los archivos generados en la carpeta build al contenedor Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exponer el puerto en el que se servirá la aplicación
EXPOSE 80

# Comando para iniciar Nginx y servir la aplicación
CMD ["nginx", "-g", "daemon off;"]
