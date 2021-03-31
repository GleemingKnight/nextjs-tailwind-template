import { NextApiRequest, NextApiResponse } from 'next'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    req.cookies
    res.status(200).json({"API": "Next.js API"})
}

export default handler