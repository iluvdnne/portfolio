const fs = require("fs");

// GET IMAGES
app.get("/uploads", (req, res) => {
    const files = fs.readdirSync("./public/uploads");
    const urls = files.map(file => "/uploads/" + file);
    res.json(urls);
});

// DELETE IMAGE
app.post("/delete", isAuth, (req, res) => {
    const { filename } = req.body;
    const filePath = "./public" + filename;

    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }
});
