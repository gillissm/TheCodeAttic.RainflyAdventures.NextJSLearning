import * as CreateMenu from '../../lib/services/createMenu'

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<CreateMenu.MenuItem[]| null>
) {

    const menuList = CreateMenu.topLevelPages('pages');
    if (menuList.length === 0 || menuList === undefined) {
        res.status(500).json(null);
    }

    res.status(200).json(menuList);
}
