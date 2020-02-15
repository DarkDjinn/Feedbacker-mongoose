const express = require('express');

const app = express();

app.get('/', async (req, res) => {
	res.send({ hi: 'there' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`[+] Server is up on port ${PORT}`);
});
