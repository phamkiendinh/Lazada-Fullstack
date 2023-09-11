# Mysql-Mongo Group 14 README.file

**Instruction On Using The App**

# ! Server Set-up

## ~ mongoDB

Even though the set-up is already done in the application by allowing connection from all IP sources and the client already has a connection string, however, we will provide specific set-up for easy trouble-shooting.

We have created a dummy mongoDB account that is ready to use and access our database. The account is used to host our database on cloud so it's accessible everywhere.

##### *Instruction

Please go to [MongoDB](https://www.mongodb.com/) and click Sign-in. Please enter the following account using **Email Address** login method.

    Email Address: mongodbdemoo@gmail.com

* [ ] 
      Password: mongodbdemo@@

Upon login successfully, please follow these steps:

* Find **Deployment** in **Overview**, click **Database**
* Choose **Cluster 0** and click **Connect**
* A window should pop-ups, choose **Driver**
* Choose Driver **Node.js** and **Version 5.5** or later
* Copy the connection string and save it for connecting to **MongoDB** from the backend

Your connection string should look like this:

**mongodb+srv://mongodbdemo:`<password>`@cluster0.sg3y69c.mongodb.net/?retryWrites=true&w=majority**

Replace the `<password>` in the connection string with your actual password.

For direct browsing, on the same **Cluster 0**, click on **Browse Collection** to view the lazada database and all collections inside.

## ~ Node JS

Node JS will be used to run server on backend, as well as creating react app for frontend

Please go to [Node JS](https://nodejs.org/en/download) to install Node JS on your local machine. Please choose correct OS files and latest version.

Follow installing instructions from the vendor.

After installation, verify installation status by checking node version using this command in terminal:

    node --version

---

# ! Backend Set-up

Our back-end needs to set-up first so the front-end can retrieve data easily.

##### ~ mongoDB

In the same directory "backend\database", find mongoDB.js, copy and paste your connection string into the url.

Our application is already set up so this step may be optional.

##### ~ Node JS

In the directory "backend", since everything is already set up, the server can be up and running using these following commands:

* npm install node-modules
* npx nodemon

However, to start everything from scratch, please follow these commands to install dependencies, and then run the server:

* npm init - please follow through the init settings by click **Enter** until it prompts for a yes
* npm i body-parser - parse body from request from browsers
* npm i cors - allow all origins to call server's API
* npm i express - using express app to host local server
* npm i fs - read files
* npm i mongodb - mongoDB client
* npm i multer - handle image submission from front-end
* npm i  nodemon - auto restart server on small changes to server files
* npm i mysqk2 - mySQL client
* npm i path - Pathing

Finally, run "npx nodemon" to start the server. The server file is "index.js" and the server will be listening on port 3001, reserving port 3000 for React-JS app (default port).

---

# ! Front-end Set-up

In our application, we use React-JS to build verything. 

##### ~ React JS

Since the ReactJS is already done by us, please navigate to frontend directory and run the following commands:

    npm install node-modules

    npm start

---

# ! Team Contribution

Our team is group 18 and we have four members:

* Dinh Pham : S3878568
* Khiem Min: S3878280
* Huy Pham: S3926681
* Khang Nguyen: S3929994 


The contribution scores have been agreed by all members and they are:

* Dinh Pham: 5
* Khiem Min: 5
* Huy Pham: 5
* Khang Nguyen: 5

The following works are what were done by each member:

* Dinh Pham: Completed admin requirements, write 2/3 report, and video demonstration for presentation and admin management demo
* 

---

# ! Video Link


---

# ! Github Link is private so N/A

---

# ! Disclaimer

In this project, since I (Dinh) was working on admin requirements for this project and Further Web Programming, I have reused codes in front-end design for category management, as well as some of the back-end API to handle mongoDB collections.

These components and API was developed at the beginning of week 7 this semester, which is semester 2 of 2023 when both project requirements released by Mr. Tri (both courses' instructor).

Anything that is related to mySQl was developed independently without reuse because in Further Web Programming project, we don't use mySQL server.

Aside from this, everything in the project was developed 100% from scratch, including all seller requirements, warehouse requirements of admin, and customer requirements.
