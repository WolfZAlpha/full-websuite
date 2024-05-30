import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import User from '../models/User';
export const register = async (req, res) => {
    const { email, username, password, arbitrumWallet } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            console.error('User already exists');
            return res.status(400).json({ message: 'User already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = await User.create({ email, username, password: hashedPassword, arbitrumWallet });
        const token = jwt.sign({ email: newUser.email, id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(201).json({ user: newUser, token });
    }
    catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ message: 'Something went wrong' });
    }
};
export const login = async (req, res) => {
    const { emailOrUsername, password } = req.body;
    try {
        const existingUser = await User.findOne({ $or: [{ email: emailOrUsername }, { username: emailOrUsername }] });
        if (!existingUser) {
            console.error('User doesn\'t exist');
            return res.status(404).json({ message: 'User doesn\'t exist' });
        }
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) {
            console.error('Invalid credentials');
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ user: existingUser, token });
    }
    catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Something went wrong' });
    }
};
