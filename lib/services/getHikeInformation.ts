import { HikeModel } from '../models/hike.model';


export function getHikeRankings():HikeModel[]{
    const listOfHikes: HikeModel[] = [];
    listOfHikes.push({
        trailname: 'Small Falls',
        distance: 4.25,
        ranking: 5,
        location: 'OH',
        description: 'Journey through hardwood forest, arriving at the base of a rushing falls.'
    });

    listOfHikes.push(
        {trailname: 'Valley of Leaves',
        distance: 3.1,
        ranking:3,        
        location: 'OH',
        description: 'Steep downhill starts this amazing journey through a deeply forested valley.'
    });

    listOfHikes.push(
        {trailname: 'Creek Run',
        distance: 6,
        ranking:4,        
        location: 'OH',
        description: 'Easy but long journey that follows an ambling creek.'
    });

    listOfHikes.push(
        {trailname: 'Rocks, Rocks, and Rocks',
        distance: 2,
        ranking:3.75,        
        location: 'OH',
        description: 'Glacier formed rock formations even a geologist will be impressed by.'
    });

    return listOfHikes;
}