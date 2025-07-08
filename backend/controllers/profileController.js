import Profiles from "../models/Profiles.js";
import User from "../models/User.js";
const createProfile = async (req,res) => {
    try{
        const{
            companyName,
            phoneNumber,
            linkDN,
            skill,
            description,
            photo,
            userId
        } = req.body;
        const user = await User.findByPk(userId);
        if(!user) return res.status(404).json({message:'User not found'});
        const existingProfile = await Profiles.findOne({where: {userId}});
        if(existingProfile){
            return res.status(400).json({message: 'Profile already exists for this user'});
        }
        const profile = await Profiles.create({
            companyName,
            phoneNumber,
            linkDN,
            skill,
            description,
            photo,
            userId
        });
        return res.status(201).json({message: 'Profile created successfully'});
    }catch(error){
        console.error("Profile creation error: ",error);
        return res.status(500).json({message:"Server error",error});
    }
};
export {createProfile};