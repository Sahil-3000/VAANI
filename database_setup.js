const { MongoClient } = require('mongodb');
require('dotenv').config();

async function main() {
    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        const database = client.db('vaani');
        const usersCollection = database.collection('users');

        // Initialize the database
        await initializeDatabase(database);

        // Create a sample user
        const sampleUser = {
            username: 'sahil',
            password: 'Abhisahsanj895@', // In a real application, ensure passwords are hashed
            role: 'admin'
        };

        const result = await usersCollection.insertOne(sampleUser);
        console.log(`New user created with the following id: ${result.insertedId}`);
    } finally {
        await client.close();
    }
}

async function initializeDatabase(database) {
    const usersCollection = database.collection('users');
    await usersCollection.createIndex({ username: 1 }, { unique: true });
    // Add more collections and indexes as needed
}

main().catch(console.error);
