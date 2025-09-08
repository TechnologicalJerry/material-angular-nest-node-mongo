import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
    return next(req).pipe(
        catchError((error: HttpErrorResponse) => {
            // Handle different types of errors
            if (error.status === 401) {
                // Handle unauthorized access (e.g., redirect to login)
                console.error('Unauthorized access, please log in.');
            } else if (error.status === 404) {
                // Handle not found
                console.error('Resource not found.');
            }
            return throwError(() => error);
        })
    );
};