const express = require('express');
// const mongoose = require('mongoose');
const path = require('path');
// const config = require('config');

const dbConnect = require('./config/db.js');

const authRoutes = require('./routes/authRoute');
const itemRoutes = require('./routes/itemRoute');
const cartRoutes = require('./routes/cartRoute');
const orderRoutes = require('./routes/orderRoute');

const app = express();
app.use(express.json());

dbConnect();

app.use('/api/e-commerce', authRoutes);
app.use('/api/e-commerce', itemRoutes);
app.use('/api/e-commerce', cartRoutes);
app.use('/api/e-commerce', orderRoutes);

// used in production to serve client files
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// connecting to mongoDB and then running server on port 4000
// const dbURI = config.get('dbURI');
const PORT = process.env.PORT || 4000;
// mongoose
//   .connect(dbURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//   })
//   .then((result) => app.listen(port))
//   .catch((err) => console.log(err));
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
