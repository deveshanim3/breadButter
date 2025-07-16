const fs = require('fs');
const path = require('path');

exports.fetchProfile = (req, res) => {
    const { link } = req.body;

    if (!link) {
        return res.status(400).json({ error: 'No link provided' });
    }

    try {
        if (link.includes('instagram') || link.includes('linkedin')) {
            const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/instagram_mock.json')));
            return res.json(data);
        } else {
            return res.status(400).json({ error: 'Unsupported or invalid link' });
        }
    } catch (error) {
        console.error('Error fetching profile from link:', error);
        return res.status(500).json({ error: 'Server error' });
    }
};

exports.uploadResume = (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }

    try {
        const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/resume_mock.json')));
        return res.json(data);
    } catch (error) {
        console.error('Error fetching profile from resume:', error);
        return res.status(500).json({ error: 'Server error' });
    }
};
