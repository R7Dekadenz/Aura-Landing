FROM node:latest

run mkdir /root/app
workdir /root/app
copy ./root/app/

run npm install -g serve 

expose 3000 

cmd serve -s build
