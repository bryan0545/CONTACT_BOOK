const stateModel = require('./../models/states');
const statesCtl = {};

statesCtl.getStates = async (req, res) => {
    const states = await stateModel.find();    
    
    res.json({
        message: "stateModels found ",
        status: "OK",
        data: states,
        error: null
    });
}

statesCtl.createState = async (req, res) => {
    const { key, value } = req.body;

    const newState = new stateModel({
        key,
        value,
    })
    try {
        await newState.save();
        res.json({
            message: "State Saved",
            status: "OK",
            data: "State Saved, ",
            error: null
        })
    } catch (error) {
        res.json({ message: error.message })
    }
};

statesCtl.deleteState = async (req, res) => {
    await stateModel.findOneAndDelete(req.params.id);
    res.json({
        message: "State deleted",
        status: "OK",
        data: "State deleted",
        error: null
    })
};

module.exports = statesCtl;