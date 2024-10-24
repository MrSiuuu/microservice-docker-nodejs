const { Router } = require('express');
const controller = require("../controller/user.controller");

const router = Router();

router.get("/", controller.getAll);
router.post("/create", controller.createUser);
router.put("/update/:id", controller.updateUser);
router.delete("/delete/:id", controller.deleteUser);

const crashServer = (req, res) => {
    throw new Error("Intentional crash to test error handling!");
};

router.get('/crash', crashServer);

module.exports = router;