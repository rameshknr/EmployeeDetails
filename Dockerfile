FROM node
WORKDIR /employee
COPY . /employee
RUN npm install
CMD ["npm","start"]