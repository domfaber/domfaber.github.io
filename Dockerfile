# Use nginx to serve static files
FROM nginx:alpine

# Copy HTML, CSS, and static assets to nginx web directory
COPY index.html /usr/share/nginx/html/
COPY articles.html /usr/share/nginx/html/
COPY articles/ /usr/share/nginx/html/articles/
COPY styles.css /usr/share/nginx/html/
COPY noise.svg /usr/share/nginx/html/
COPY public/ /usr/share/nginx/html/public/

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"] 