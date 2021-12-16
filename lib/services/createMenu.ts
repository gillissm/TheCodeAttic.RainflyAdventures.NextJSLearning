import fs from 'fs'
import path from 'path'
import Camping from '../../pages/camping';

interface MenuItem{
    link: string;
    name: string;
}


function topLevelPages(directoryName: string): MenuItem[] {
    // const pageDirectory = path.join(process.cwd(), directoryName)
    // const fileNames = fs.readdirSync(pageDirectory)
    // return fileNames.map(fileName => {
    //     let lName = fileName.replace(/\.tsx$/, '');
    //     let mItem: MenuItem = { link: lName, name: lName };
    //     return mItem;
    // });

    return [
        { link: '/camping', name: 'Camping' },
        { link: '/boat', name: 'Boating' },
        { link: '/hike', name: 'Hike' },
        { link: '/maps', name: 'Orienteering' },
        { link: '/adventure-planning', name: 'Plan an Adventure'}
    ];
}

export type { MenuItem };
export { topLevelPages };