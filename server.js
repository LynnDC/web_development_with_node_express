'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static('./public'));

// custom 404 page
app.use((req,res) => {res.type('text/plain'); res.status(404); res.send('404- Not Found');});

//custom 505 page
app.use((err, req, res, next) => {console.error(err.stack); res.type('text/plain'); res.status(500); res.semd('500-Server Error');});

app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`));
