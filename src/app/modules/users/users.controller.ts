import { Request, Response } from 'express'
import usersServices from './users.services'

const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    console.log(user)
    const result = await usersServices.createUser(user)
    res.status(200).json({
      success: true,
      message: 'User Created Successfully',
      data: result,
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'failed to create user',
    })
  }
}

export default {
  createUser,
}
