import { User } from './user';

export class CurrentUser {
    payload: User;
    accessToken: string;
    refreshToken: string;
}
