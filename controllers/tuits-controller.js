import * as tuitsDao from './tuits/tuits-dao.js'
import mongoose from "mongoose"

const createTuit = async (req, res) => {
    const newTuit = req.body;
    newTuit.topic = "Space";
    newTuit.userName = "NASA";
    newTuit.handleName = "nasa";
    newTuit.time = "1h";
    newTuit.image = "nasa.jpg";
    newTuit.title = "NASA's Mission";
    newTuit.liked = true;
    newTuit.disliked = false;
    newTuit.likes = 1212;
    newTuit.dislikes = 1212;
    newTuit.comments = 1212;
    newTuit.retuits = 1212;
    console.log(newTuit);
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    console.log(insertedTuit);
    res.json(insertedTuit);
}
const findTuits  = async (req, res) => {
  const tuits = await tuitsDao.findTuits()
  res.json(tuits);
}
const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = mongoose.Types.ObjectId(req.params.tid);
    const updates = req.body;
    const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updates);
    res.json(status);
}
const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = mongoose.Types.ObjectId(req.params.tid);
    const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
    res.json(status);
}

export default (app) => {
 app.post('/api/tuits', createTuit);
 app.get('/api/tuits', findTuits);
 app.put('/api/tuits/:tid', updateTuit);
 app.delete('/api/tuits/:tid', deleteTuit);
}