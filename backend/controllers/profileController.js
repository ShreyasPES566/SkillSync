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
const getProfileByUserId = async (req,res) => {
    try{
        const {userId} = req.params;
        const profile = await Profiles.findOne({where: {userId}});
        if(!profile){
            return res.status(404).json({message:'Profile not found'});
        }
        return res.status(200).json(profile);
    }catch(error){
        console.error('Fetch error: ',error);
        return res.status(500).json({message:'Server error ',error});
    }
};
const updateProfile = async (req,res) => {
    try{
        const {userId} = req.params;
        const{
            companyName,
            phoneNumber,
            linkDN,
            skill,
            description,
            photo
        } = req.body;
        const profile = await Profiles.findOne({where:{userId}});
        if(!profile){
            return res.status(404).json({message:'Profile not found'});
        }
        await profile.update({
            companyName,
            phoneNumber,
            linkDN,
            skill,
            description,
            photo
        });
        return res.status(200).json({message:'Profile updated successfully'});
    }catch(error){
        console.error("Profile update error: ",error);
        return res.status(500).json({message:"Server error ",error});
    }
}
export {createProfile, getProfileByUserId, updateProfile};