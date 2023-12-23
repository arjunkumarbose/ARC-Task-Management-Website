const express = require('express')
require('dotenv').config()
const cors = require('cors')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express()
const port = process.env.PORT || 5001

app.use(cors())
app.use(express.json())

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.merbl3v.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {

    const userColluction = client.db("Task-Management").collection("user");
    const taskColluction = client.db("Task-Management").collection("task");

    app.post('/users',async(req,res)=>{
        const user = req.body;
        const result = await userColluction.insertOne(user);
        res.send(result)
    })

    app.get('/users',async(req,res)=>{
        const result = await userColluction.find().toArray()
        res.send(result)
    })

    app.post('/alltask',async(req,res)=>{
      const task = req.body;
      const result = await taskColluction.insertOne(task)
      res.send(result)
    })

    app.get('/alltask',async(req,res)=>{
      const email = req.query?.email
      const result = await taskColluction.find({email:email}).toArray()
      res.send(result)
    })


    app.put('/alltask/:id', async (req, res) => {
      const id = req.params.id;
      console.log('Task ID:', id); // Check if the ID is correctly received
    
      const filter = { _id: new ObjectId(id) };
      const updatedTask = req.body; // Contains updated task details
      console.log('Updated Task:', updatedTask); // Check if the updated task data is received
    
      try {
        const result = await taskColluction.updateOne(filter, { $set: updatedTask });
        console.log('Update Result:', result); // Check the result from the update operation
        res.send(result);
      } catch (err) {
        console.error('Update Error:', err); // Log any error that occurs during the update
        res.status(500).send(err);
      }
    });
    

    app.delete('/alltask/:id',async(req,res)=>{
      const id = req.params.id;
      const filter = {_id : new ObjectId(id)}
      const result = await taskColluction.deleteOne(filter)
      res.send(result)
    })

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})