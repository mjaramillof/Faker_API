const express = require('express');
const app = express();
const { faker } = require('@faker-js/faker');

//CLASES

class User {
   constructor() {
      this._id = faker.database.mongodbObjectId();
      this.name = faker.name.firstName();
      this.lastname = faker.name.lastName();
      this.phone = faker.phone.phoneNumber();
      this.email = faker.internet.email();
      this.password = faker.internet.password();
   }
}

class Company {
   constructor() {
      this._id = faker.database.mongodbObjectId();
      this.company = faker.company.companyName();
      this.address = ["street : " + faker.address.streetName(), 
      "ciudad : " + faker.address.cityName(),
      "state :" + faker.address.state(), 
      "zip code : " + faker.address.zipCode(),
      "country : " + faker.address.country()
      ]
   }
}


//ROUTES

app.get('/api/users/new', (req, res)=>{
   res.send(new User); 
})

app.get('/api/companies/new', (req, res)=>{
   res.send(new Company); 
})

app.get('/api/user/company', (req, res)=>{
   const userCompany = [new User, new Company]
   res.send(userCompany);
})

//PORT LISTENING

app.listen(8090, () => {
   console.log('Server running on port 8090...')
});