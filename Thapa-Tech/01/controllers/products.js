const getAllProducts = async (req, res) => {
    res.status(200).json({msg: "I am getAllProducts"});
};

const getAllProductsTesting = async (req, res) => {
    res.status(200).json({msg: "I am getProductsTesting"})
};

module.exports = {getAllProducts, getAllProductsTesting};