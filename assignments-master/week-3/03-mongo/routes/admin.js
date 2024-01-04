const { Router, json } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup',async (req, res) => {

    let password=req.query.password;
    let username=req.query.username;
    // Implement admin signup logic

    await Admin.create({
        username: username,
        pssword: password
    })
   res.json({
    message: 'Admin created successfully'
})
   
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;