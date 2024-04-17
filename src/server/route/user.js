import express from 'express';
import users from './User.json' assert { type: 'json' };
import jwt from 'jsonwebtoken';
const router = express.Router();

router.post('/login', (req, res) => {
    const { registerNumber, dob } = req.body;

    // Find the user in the JSON data
    const user = users.find(user => user.registerNumber === registerNumber && user.dob === dob);

    if (user) {
        const token =jwt.sign({id: user._id},"secret")
        res.json({ success: true, user ,token,userID:user._id});
       
        
    } else {
        // User not found, send error response
        res.status(401).json({ success: false,error: 'Invalid regirder number or date of birth' });
    }
});
// Route to check if a user with a specific registration number exists
router.get('/user/:registerNumber', (req, res) => {
  const registerNumber = req.params.registerNumber;

  try {
    const user = users.find(user => user.registerNumber === registerNumber);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ user }); // Return user object within response
  } catch (error) {
    console.error('Error checking user registration number:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

  
export  {router as user};
