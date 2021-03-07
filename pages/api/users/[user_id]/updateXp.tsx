import { PrismaClient } from '@prisma/client'

import { NextApiRequest, NextApiResponse } from 'next'

export default async function updateXp(req: NextApiRequest, res: NextApiResponse){
    const { xp } = req.body
    const { user_id } = req.query 

    const prisma = new PrismaClient()

    const id = Number(user_id)
    
    if(isNaN(id)){
        return res.status(400).json({error: 'the id must be a number'})
    }

    const user = await prisma.user.update({
        where: { id },
        data: { xp }
    })

    return res.json(user)
}