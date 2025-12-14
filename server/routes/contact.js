const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST route to handle contact form submissions
router.post('/submit', async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        // Validate required fields
        if (!name || !email || !phone) {
            return res.status(400).json({ 
                success: false, 
                message: 'Name, email, and phone are required fields' 
            });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ 
                success: false, 
                message: 'Invalid email format' 
            });
        }

        // Create new contact entry
        const newContact = new Contact({
            name,
            email,
            phone,
            message: message || ''
        });

        // Save to database
        await newContact.save();

        res.status(200).json({ 
            success: true, 
            message: 'Contact form submitted successfully!',
            data: newContact
        });
    } catch (error) {
        console.error('Error saving contact:', error);
        res.status(500).json({ 
            success: false, 
            message: 'An error occurred while submitting the form. Please try again later.' 
        });
    }
});

// GET route to retrieve all contacts (optional - for admin purposes)
router.get('/all', async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.status(200).json({ 
            success: true, 
            data: contacts 
        });
    } catch (error) {
        console.error('Error fetching contacts:', error);
        res.status(500).json({ 
            success: false, 
            message: 'An error occurred while fetching contacts.' 
        });
    }
});

module.exports = router;

