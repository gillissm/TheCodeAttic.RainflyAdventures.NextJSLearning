import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
import { InterestCookieModel, INTEREST_COOKIE_KEY } from '../../lib/context/interest.cookie';

export function middleware(req: NextRequest, event: NextFetchEvent) {
    // 1. Get the requested path
    const pathToVisit = req.nextUrl.pathname;
    
    // 2. Even though the Camping page is not in the folder, it is associated to the directory and will trigger the middleware    
    if (pathToVisit === '/camping')
    {
        // 2a. Return the next step, this will allow the currently requested page to load.
        return NextResponse.next();
    }

    // 3. The current page is of interest for us to track
    // 3a. Variable to track the current cookie
    let interestCookieObj;
    // 3b. Check to see if the interest cookie already exist for the request
    if (req.cookies[INTEREST_COOKIE_KEY]) {
        // 3b-1. Parse the cookie from the request header
        interestCookieObj = JSON.parse(req.cookies[INTEREST_COOKIE_KEY]) as InterestCookieModel
        // 3b-2. Check to see if the currently requested page already exists
        if (interestCookieObj.pageVisits.findIndex(p => p === pathToVisit) === -1) {
            // 3b-3. Add the current page to the cookie
            interestCookieObj.pageVisits.push(pathToVisit);
        }
    }
    else {
        // 3c. Create a new cookie for the request
        interestCookieObj = {
            pageVisits: [pathToVisit],
            activities: [],
            userName: 'Guest'
        }
    }

    // 4. Create a NextResponse object, as setting a cookie can only be done against an object, see https://nextjs.org/docs/api-reference/next/server#setting-the-cookie-before-a-redirect
    const responseObj = NextResponse.next();
    
    // 5. Set the cookie on the response object
    responseObj.cookie(INTEREST_COOKIE_KEY, JSON.stringify(interestCookieObj));
    
    // 6. Return the response object for the next processing step
    return responseObj;
}