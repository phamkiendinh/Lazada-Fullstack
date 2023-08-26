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

async function getAllTopCategory(req, res) {
    try {
        var db = client.db('lazada');
        var collection = db.collection('category');
        const data = await collection.find({}, {projection: {_id:0, sub_category: 0}}).toArray();
        // console.log(data);
        if (data.length == 0) {
            res.send(null);
        }
        res.send(data);
    } catch (error) {
        console.log(error);
    }
}

async function addTopCategory(req, res) {
    // console.log(req.body);
    let json = req.body;
    // console.log(json);
    try {
        var db = client.db('lazada');
        var collection = db.collection('category');
        const data = await collection.insertOne(json);
        console.log(json);
        res.send({status: 200});
    } catch (error) {
        console.log(error);
    }
}

async function deleteTopCategory(req, res) {
    // console.log(req.body);
    // let json = req.body;
    const categoryName = req.params.categoryName;
    // console.log(json);
    try {
        var db = client.db('lazada');
        var collection = db.collection('category');
        const data = await collection.deleteOne({name : categoryName});
        // console.log(json);
        res.send({status: 200});
    } catch (error) {
        console.log(error);
    }
}

async function updateTopCategory(req, res) {
    console.log("Function called");
    let json = req.body;
    console.log(req.body);
    const categoryName = req.params.categoryName;
    try {
        var db = client.db('lazada');
        var collection = db.collection('category');
        const data = await collection.updateOne({name : categoryName}, {$set : json});
        
        // console.log(json);
        res.send({status: 200});
    } catch (error) {
        console.log(error);
    }
}

async function getTopCategory(req,res) {
    const categoryName = req.params.categoryName;
    try {
        var db = client.db('lazada');
        var collection = db.collection('category');
        const data = await collection.findOne({name : categoryName}, {projection: {_id: 0}});
        // console.log(json);
        res.send(data);
    } catch (error) {
        console.log(error);
    }
}

async function getAllSubCategory(req, res) {
    // console.log(req.body);
    const category = req.body.category;
    try {
        var db = client.db('lazada');
        var collection = db.collection('category');
        const json = await collection.find({"name" : category}, {projection: {_id:0, sub_category: 1}}).toArray();
        // console.log(json);
        if (json.length > 0) {
            res.send(json[0].sub_category);
        }
        else {
            res.send(null);
        }
    } catch (error) {
        console.log(error);
    }
}

async function addSubCategory(req, res) {
    // console.log(req.body);
    let json = req.body;
    var category = json.category;
    delete json.category;
    // json = JSON.parse(json);
    // console.log("JSON: ");
    console.log(json);
    // console.log(category);
    try {
        var db = client.db('lazada');
        var collection = db.collection('category');
        const data = await collection.updateOne({name : category}, {$push: {"sub_category" : json}});
        res.send({status: 200});

    } catch (error) {
        console.log(error);
    }
}

async function deleteSubCategory(req, res) {
    // console.log(req.body);
    // let json = req.body;
    const categoryName = req.params.categoryName;
    const subCategoryName = req.params.subCategoryName;
    // console.log(json);
    console.log("Called");
    try {
        var db = client.db('lazada');
        var collection = db.collection('category');
        const data = await collection.updateOne({name : categoryName}, {$pull: {"sub_category" : {name : subCategoryName}}});
        // console.log(json);
        res.send({status: 200});
    } catch (error) {
        console.log(error);
    }
}

async function getSubCategory(req, res) {
    // console.log(req.body);
    // let json = req.body;
    const categoryName = req.params.categoryName;
    const subCategoryName = req.params.subCategoryName;
    // console.log(json);
    // console.log("Called");
    try {
        var db = client.db('lazada');
        var collection = db.collection('category');
        const data = await collection.findOne({name : categoryName, "sub_category.name" : subCategoryName}, {projection: {_id:0, sub_category: 1}});
        // console.log(json);
        // res.send({status: 200});
        res.send(data);
    } catch (error) {
        console.log(error);
    }
}

async function updateSubCategory(req, res) {
    let json = req.body;
    const categoryName = req.params.categoryName;
    const subCategoryName = req.params.subCategoryName;
    try {
        var db = client.db('lazada');
        var collection = db.collection('category');
        await collection.updateOne({name : categoryName}, {$pull: {"sub_category" : {name : subCategoryName}}});
        const data = await collection.updateOne({name : categoryName}, {$push: {"sub_category" : json}});

        
        // console.log(json);
        res.send({status: 200});
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getOneAdmin,
    getAllTopCategory,
    getTopCategory,
    addTopCategory,
    updateTopCategory,
    deleteTopCategory,
    getAllSubCategory,
    addSubCategory,
    deleteSubCategory,
    getSubCategory,
    updateSubCategory
}