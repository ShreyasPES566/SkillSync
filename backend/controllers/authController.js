import bcrypt from 'bcrypt';
import User from '../models/User.js';
import Profiles from '../models/Profiles.js';
const register = async (req,res) => {
    const {firstName, lastName, email, username, password, confirmPassword} = req.body;
    if(!firstName||!lastName||!email||!username||!password||!confirmPassword){
        return res.status(400).json({message: 'All fields are required'});
    }
    if(password!==confirmPassword){
        return res.status(400).json({message: 'Passwords do not match'});
    }
    try{
        const existingUser = await User.findOne({where: {email}});
        if(existingUser){
            return res.status(409).json({message: 'Email already in use'});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({
            firstName,
            lastName,
            email,
            username,
            password: hashedPassword,
        });
        return res.status(201).json({message: 'User registered successfully'});
    } catch(error){
        console.error('Registration error: ',error);
        return res.status(500).json({message: 'Server error',error});
    }
};
const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Please provide email and password' });
    }

    try {
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const profile = await Profiles.findOne({ where: { userId: user.id } });
        const hasProfile = !!profile;

        const { password: _, ...userData } = user.toJSON();

        return res.status(200).json({
            message: 'Login successful',
            user: {
                ...userData, 
                hasProfile
            }
        });

    } catch (error) {
        console.error('Login error: ', error);
        return res.status(500).json({ message: 'Server error', error });
    }
};
export {register,login};