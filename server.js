const express = require('express');
const path = require('path');
const app = express();
port = 3080;

app.use(express.static(path.join(__dirname, '/public/')));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(port, () => {
	console.log(`Server listening on the port::${port}`);
});
