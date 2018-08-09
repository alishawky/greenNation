import { Observable } from 'rxjs';

export abstract class UserAPI {
    signIn: (username: string, password: string, rememberMe: boolean) => Observable<any>;
    signOut: () => Observable<any>;
    // changePassword :
}
