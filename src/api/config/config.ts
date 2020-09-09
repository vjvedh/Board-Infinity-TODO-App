require('dotenv').config();

export const db: string = `mongodb+srv://${process.env.dbUsername}:${process.env.dbUsername}@cluster.phm4v.gcp.mongodb.net/${process.env.dbPassword}?retryWrites=true&w=majority`;