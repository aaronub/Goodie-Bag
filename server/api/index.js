'use strict'

const router = require('express').Router()
const Candy = require('../db/models/Candy')

// Your routes go here!
// NOTE: Any routes that you put here are ALREADY mounted on `/api`
// You can put all routes in this file HOWEVER,
// this file should almost be like a table of contents for the routers you create!
// For example:
//
// For your `/api/puppies` routes:
// router.use('/puppies', require('./puppies'))
//
// And for your `/api/kittens` routes:
// router.use('/kittens', require('./kittens'))

// If someone makes a request that starts with `/api`,
// but you DON'T have a corresponding router, this piece of
// middleware will generate a 404, and send it to your
// error-handling endware!

// GET api/candies
router.get('/candies', async(req, res)=> {
  try {
    const candies = await Candy.findAll();
    res.send(candies)   
  } catch (error) {
    throw(error)
  }
})
// GET api/candies/:id
router.get('/candies/:id', async(req, res) => {
  try {
    const candy = await Candy.findByPk(req.params.id)
    res.send(candy)
  } catch (error) {
    throw error
  }
}) 

//PUT api/candies/:id/increase
//increase number needs a seperate API router!!!!!!!!!!!!!!!!
router.put('/candies/:id/increase', async(req, res) => {
  try {
    const candy = await Candy.findByPk(req.params.id);
    candy.quantity++
    //Before Router.put, we supposed to use candy.update(req.body) to update the database, but here just 
    //candy.quantity ++, I think thats why we need await candy.save(), its like .update!!!!
    await candy.save()
    res.send(candy) 
  } catch (error) {
    throw error
  }
})

router.use((req, res, next) => {
  const err = new Error('API route not found!')
  err.status = 404
  next(err)
})

module.exports = router
