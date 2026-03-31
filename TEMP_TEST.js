const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/test');
const schema = new mongoose.Schema({email: String});
const Model = mongoose.model('TestUser', schema);
Model.create({email: 'test@example.com'}).then(() => console.log('Write OK')).catch(e => console.error('Write ERROR', e.message));

