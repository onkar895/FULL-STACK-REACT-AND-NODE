const express = require('express')
const mongoose = require('mongoose')

const PORT = 3000

const app = express()

const main = async () => {
  await mongoose.connect('mongodb://127.0.0.1:27017/onkardb')
  .then(() => console.log('Connection Open'))
  .catch(() => console.log(err))
}

main()

// To perform any of the operations in mongoDB, we need the model which is just a class and represent a collection in mongoDB database.
// To create this model we need something called Schema.
// Schema: It maps the keys from mongoDB database to valid type in js.

// By default, Mongoose adds an _id property to your schemas.
const usersSchema = new mongoose.Schema({
  name: String,
  age: Number,
  year: Number,
  rating: Number,
  isWatched: Boolean,
}, {versionKey: false, timestamps: true})

// To use our schema definition, we need to convert our usersSchema into a Model we can work with. To do so, we pass it into mongoose.model(modelName, schema):

// Creating the model
const User = mongoose.model('User', usersSchema)
// Now we can create, read, update, and delete documents in our users collection.
// So whatever you write over modelName User will translate it like this:
// 1. It will convert it into lowercase
// 2. It will pluralize the name
// 3. It will create a collection in the database with the pluralized name.
// 4. For ex: if User -> users, if Movie -> movies etc.

// By default, Mongoose adds an _id property to your schemas.
const batman = new User({name: 'Batman', age: 30, year: 2021, rating: 4.5, isWatched: true})
console.log(batman)

batman.save()
.then(() => console.log("User Saved"))

app.get('/', (req,res) => {
  res.send("Hello from server")
})

app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`)
})