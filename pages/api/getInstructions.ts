// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export type InstructionSet = {
    title: string,
    stepOne: string,
    stepTwo: string,
    message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<InstructionSet>
) {
    res.status(200).json({
        title: process.env.INSTRUCTION_1_TITLE ?? '',
        stepOne: process.env.INSTRUCTION_1_STEP1 ?? '',
        stepTwo: process.env.INSTRUCTION_1_STEP2 ?? '',
        message: process.env.INSTRUCTION_1_MSG ?? '',
    });
}
