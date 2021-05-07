import { User } from './user';

export class CurrentUser {
    data: User;
    accessToken: string;
    refreshToken: string;
}
