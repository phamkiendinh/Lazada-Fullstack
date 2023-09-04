import { comparePassword, hashPassword } from '../helpers/authHelper.js'
import userModel from '../models/userModel.js'
import JWT from 'jsonwebtoken'

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, role } = req.body
    // validations
    if (!name) {
      return res.send({ message:'Name is required'});
    }
    if (!phone) {
      return res.send({ message:'Phone is required'});
    }
    if (!email) {
      return res.send({ message:'Email is required'});
    }
    if (!password) {
      return res.send({ message:'Password is required'});
    }

    // 1. Check user
    const existingUser = await userModel.findOne({ email })
    // 1b Existing users
    if (existingUser) {
      return res.status(200).send({
        success: true,
        message: 'Already register please login'
      })
    }

    // 2. Register user
    const hashedPassword = await hashPassword(password)
    // 2b. save user
    const user = await new userModel({
      name,
      email,
      phone,
      password: hashedPassword
    }).save()

    res.status(200).send({
      success: true,
      message: 'User Register Successfully',
      user
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({
      success: false,
      message: 'Error is Registration',
      error: ''
    })
  }
}

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body
    // validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: 'Invalid email or password'
      })
    }

    // check user
    const user = await userModel.findOne({ email })
    if (!user) {
      return res.status(404).send({
        success: false,
        message: 'Email is not registered'
      })
    }

    const matchAccount = await comparePassword(password, user.password)
    if (!matchAccount) {
      return res.status(200).send({
        success: false,
        message: 'Invalid password'
      })
    }
    // TOKEN
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "2d"
    })
    res.status(200).send({
      success: true,
      message: 'Login successfully',
      user: {
        _id: user._id,
        name:user.name,
        email:user.email,
        phone:user.phone,
        role: user.role,
      },
      token
    });
  } catch (error) {
    console.log(error)
    res.status(500).send({
      success: false,
      message: 'Error in login',
      error
    })
  }
}


export const testController = async (req, res) => {
      res.send('Protected Route');
}
