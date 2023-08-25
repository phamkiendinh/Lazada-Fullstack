const client = require('../database/connection.js');

async function getOneAdmin(req, res) {
    try {
        var db = client.db('lazada');
        var collection = db.collection('admin');
        var query = {"username" : "admin"};
        const data = await collection.findOne(query, {projection: {_id: 0}});
        res.send(data);
    } catch (error) {
        console.log(error);
    }
}

async function getAllCategory(req, res) {
    try {
        var db = client.db('lazada');
        var collection = db.collection('category');
        const data = await collection.find({}, {projection: {_id:0, sub_category: 0}}).toArray();
        console.log(data);
        res.send(data);
    } catch (error) {
        console.log(error);
    }
}

async function getAllSubCategory(req, res) {
    // console.log(req.body);
    const category = req.body.category;
    console.log(category);
    try {
        var db = client.db('lazada');
        var collection = db.collection('category');
        const json = await collection.find({"name" : category}, {projection: {_id:0, sub_category: 1}}).toArray();
        var data = json[0].sub_category;
        // console.log(data);
        res.send(data);
    } catch (error) {
        console.log(error);
    }
}


async function addTopCategory(req, res) {
    console.log(req.body);
    let json = req.body;
    // console.log(json);
    try {
        var db = client.db('lazada');
        var collection = db.collection('category');
        const data = await collection.insertOne(json);
        res.send({status: 200});
    } catch (error) {
        console.log(error);
    }
}

async function addSubCategory(req, res) {
    console.log(req.body);
    let json = req.body;
    // console.log(json);
    try {
        var db = client.db('lazada');
        var collection = db.collection('category');
        // const data = await collection.insertOne(json);
        res.send({status: 200});
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getOneAdmin,
    getAllCategory,
    getAllSubCategory,
    addTopCategory,
    addSubCategory
}