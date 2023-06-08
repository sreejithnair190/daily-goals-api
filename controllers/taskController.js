exports.get_tasks = async(req, res) => {
    try {
        res.status(200).json({
            status:"success"
        });
    } catch (error) {
        res.status(400).json({
            status:"failed",
            error
        });
    }
}