const express = require('express');
const cors = require('cors');
const profileRoutes = require('./routes/profile.route');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/profile', profileRoutes);

app.get('/',(req,res)=>{
    res.send(
        `<h1>🚀 Server is running!</h1>
        <p>Backend is live on port ${PORT}</p>
        `
    )
})
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
