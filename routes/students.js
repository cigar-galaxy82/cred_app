const express = require('express')
const router = express.Router()
const Student = require('../models/student')

router.get('/', async(req, res) => {
    try {
        const students = await Student.find()
        res.json(students)
    } catch (err){
        res.send('error' + err)
    }
})

router.get('/:id', async(req, res) => {
    try {
        const student = await Student.findById(req.params.id)
        res.json(student)
    } catch (err){
        res.send('error' + err)
    }
})

router.patch('/:id', async(req, res) =>{
    try {
        const student = await Student.findById(req.params.id)
        student.branch = req.body.branch
        const s1 = await student.save()
        res.json(s1)
    } catch (err){
        res.send('error')
    }
})

router.delete('/:id', async(req, res) =>{
    try {
        const student = await Student.findById(req.params.id)
        const s1 = await student.remove()
        res.json(s1)
    } catch (err){
        res.send('error')
    }
})

router.post('/', async(req,res) =>{
    const student = new Student({
        name: req.body.name,
        regNo: req.body.regNo,
        branch: req.body.branch
    })
    try {
        const s1 = await student.save()
        res.json(s1)
    } catch (err){
        res.send('error')
    }
})

module.exports = router