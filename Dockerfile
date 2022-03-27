FROM nginx:latest

COPY ./default.conf.template /etc/nginx/templates/default.conf.template
COPY ./dist/psychotest-app/ /usr/share/nginx/html/