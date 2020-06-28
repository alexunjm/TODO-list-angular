import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { StorageProvider/* , ApiProvider */ } from '../services';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private lsProvider: StorageProvider,
        // private apiProvider: ApiProvider
    ) { }

    async canActivate() {
        try {

            const localUser = this.lsProvider.get('user') || {};
            if (localUser.token && localUser.token.length > 1) {
                // const resp = await this.apiProvider.get('user', {});
                const resp = {status: true, user: {_id: 'sampleid'}};
                const user = resp['status'] ? resp['user'] : {};
                return localUser['_id']
                  && localUser['_id'].length > 0
                  && user['_id'] === localUser['_id'];
            }

            this.router.navigate(['/home']);
            return;
        } catch (error) {

        }
        this.lsProvider.clear();
        return false;
    }
}
