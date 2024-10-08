const router = require('express').Router();
const Std = require('../model/student')

router.get('/students', async (req, res) => {
    try {
        const stds = await Std.find({});
        res.send(stds);
    } catch (error) {
        res.send(error)
    }
})

router.post('/students', async (req,  res) => {
    try {
        const std = new Std(req.body);
        const s = await std.save();
        res.send(s);
    } catch (error) {
        res.send(error)
    }

})



module.exports = router