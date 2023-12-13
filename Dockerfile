#Cargar de la carpea al contenedor
FROM nginx:alpine
COPY dist/angular-movie-database /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
