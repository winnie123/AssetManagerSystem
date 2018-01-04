import {Request,Response,NextFunction} from 'express';

function exceptionHandler(err : any , req: Request, res: Response, next: NextFunction) : void{
    // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
}

export {
    exceptionHandler
}