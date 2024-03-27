const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:3000/cc2_cloudnative', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});
