export interface IGetUserAuthInfoRequest extends Request {
    user: {
        id: number;
        email: string;
        role: string;
    };
}