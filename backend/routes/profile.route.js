const express = require('express');
const router = express.Router();
const multer = require('multer');
const { fetchProfile, uploadResume } = require('../controller/profile.controller');

const upload = multer({ dest: 'uploads/' });
router.post('/fetch-profile', fetchProfile)
router.post('/upload-resume', upload.single('resume'), uploadResume);

module.exports = router;
