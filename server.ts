import express, { Request, Response } from 'express';
import connectDB from './config/db';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// Force HTTPS redirect in production
if (process.env.NODE_ENV === 'production') {
  app.get('*', function (req: Request, res: Response, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      res.redirect('https://counselinghr.com/' + req.url);
    } else {
      next();
    }
  });
}

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/resources', require('./routes/resources'));
app.use('/api/staff', require('./routes/staff'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req: Request, res: Response) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
