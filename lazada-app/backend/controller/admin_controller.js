const client = require('../database/admin_database.js');

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
        var collection = db.collection('categories');
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
    console.log(json);
    try {
        var db = client.db('lazada');
        var collection = db.collection('categories');
        var object = {
            name: ""
        };
        var subject = "";
        json.map(data => { 
            var entries = Object.entries(data);
            var subObject = {}
            entries.map(entry => {
                var key = entry[0];
                var value = entry[1];
                if (key === "categoryName") {
                    object.name = value;
                    // console.log(object);
                }
                else if (key === "name") {
                    subject = value;
                }
                else {
                    subObject[key] = value;
                }
            });
            if (subject !== "") {
                object[subject] = subObject;
            }
        })
        console.log(object);
        const data = await collection.insertOne(object);
        var query = "";

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
        var collection = db.collection('categories');
        const data = await collection.deleteOne({name : categoryName});
        // console.log(json);
        res.send({status: 200});
    } catch (error) {
        console.log(error);
    }
}

async function updateTopCategory(req, res) {
    let json = req.body;
    // console.log(json);
    const categoryName = req.params.categoryName;
    try {
        var db = client.db('lazada');
        var collection = db.collection('categories');
        const data = {};
        json.map(item => {
            var entry = Object.entries(item);
            const entryData = entry[0];
            const key = entryData[0];
            const value = entryData[1];
            data[key] = value;
        })
        const subCategories = await collection.find({name : categoryName}, {projection: {_id: 0, sub_category : 1}}).toArray();

        if (subCategories.length !== 0) {
            data['sub_category'] = subCategories[0].sub_category;
        }
        console.log(data);

        await collection.deleteOne({name : categoryName});
        await collection.insertOne(data);
        res.send({status: 200});
    } catch (error) {
        console.log(error);
    }
}

async function getTopCategory(req,res) {
    const categoryName = req.params.categoryName;
    try {
        var db = client.db('lazada');
        var collection = db.collection('categories');
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
        var collection = db.collection('categories');
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

    console.log(json);
    try {
        var db = client.db('lazada');
        var collection = db.collection('categories');
        var topCategory = "";
        var object = {
            name: ""
        };
        var subject = "";
        json.map(data => { 
            var entries = Object.entries(data);
            var subObject = {}
            entries.map(entry => {
                var key = entry[0];
                var value = entry[1];
                if (key === "category") {
                    topCategory = value;
                }
                else if (key === "categoryName") {
                    object.name = value;
                    // console.log(object);
                }
                else if (key === "name") {
                    subject = value;
                }
                else {
                    subObject[key] = value;
                }
            });
            // console.log(subObject);
            if (subject !== "") {
                object[subject] = subObject;
                subject = "";
            }
            if (subObject !== null || subObject !== undefined) {
                var newEntry = Object.entries(subObject);
                newEntry.map(item => {
                    var k = item[0];
                    var v = item[1];
                    if (k !== "type" && k !== "required") {
                        object[k] = v;
                    }
                });
            }
        })
        console.log(object);
        // const data = await collection.insertOne(object);
        const data = await collection.updateOne({name : topCategory}, {$push: {"sub_category" : object}});

        var query = "";

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
        var collection = db.collection('categories');
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
        var collection = db.collection('categories');
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
        var collection = db.collection('categories');
        var topCategory = "";
        var object = {
            name: ""
        };
        var subject = "";
        json.map(data => { 
            var entries = Object.entries(data);
            var subObject = {}
            entries.map(entry => {
                var key = entry[0];
                var value = entry[1];
                if (key === "category") {
                    topCategory = value;
                }
                else if (key === "categoryName") {
                    object.name = value;
                    // console.log(object);
                }
                else if (key === "name") {
                    subject = value;
                }
                else {
                    subObject[key] = value;
                }
            });
            // console.log(subObject);
            if (subject !== "") {
                object[subject] = subObject;
                subject = "";
            }
            if (subObject !== null || subObject !== undefined) {
                var newEntry = Object.entries(subObject);
                newEntry.map(item => {
                    var k = item[0];
                    var v = item[1];
                    if (k !== "type" && k !== "required") {
                        object[k] = v;
                    }
                });
            }
        })
        await collection.updateOne({name : categoryName}, {$pull: {"sub_category" : {name : subCategoryName}}});
        const data = await collection.updateOne({name : categoryName}, {$push: {"sub_category" : object}});
        res.send({status: 200});
    } catch (error) {
        console.log(error);
    }
}

async function getAllSeller(req, res) {
    // console.log(req.body);
    // let json = req.body;
    // console.log(json);
    console.log("Called");
    try {
        var db = client.db('lazada');
        var collection = db.collection('seller');
        const data = await collection.find({}, {projection: {_id:0}}).toArray();
        // console.log(json);
        // res.send({status: 200});
        console.log(data);
        res.send(data);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getOneAdmin,
    getAllSeller,
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