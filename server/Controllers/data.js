import data from "../Models/dataschema.js";

export const createData = async (req,res) => {
    const user = new data ({
        name : req.body.name,
        email : req.body.email,
        phone : req.body.phone,
        course : req.body.course,
    });
    console.log("Created");
    await user.save();
    res.status(200).json(user);
}

export const updateData = async (req, res) => {
    const update = await data.findByIdAndUpdate(
        {_id:req.body._id},
        {
            $set : {
                name : req.body.name,
                email : req.body.email,
                phone : req.body.phone,
                course : req.body.course,
            },
        },
        {new : true}
    )
    res.status(200).json(update);
};

export const getData = async (req, res) => {
    const getall = await data.find();
    res.status(200).json(getall);
};

export const deleteData = async (req, res) => {
    await data.findByIdAndDelete(req.params.id);
    console.log("Deleted Successfully");
}