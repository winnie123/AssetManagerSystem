import {Request,Response,NextFunction} from 'express';

function notFoundHandler(req: Request, res: Response, next: NextFunction) : void{
    var err = new Error('Not Found');
    // err.status = 404;
    next(err);
}

export {
    notFoundHandler
}