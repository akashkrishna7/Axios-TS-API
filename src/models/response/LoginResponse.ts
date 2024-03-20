import { BaseResponse } from "../../exports/responseExports";

interface UserIdentity {
    identityId: string;
    id: string;
    userId: string;
    identityData: {
        email: string;
        emailVerified: boolean;
        phoneVerified: boolean;
        sub: string;
    };
    provider: string;
    lastSignInAt: string;
    createdAt: string;
    updatedAt: string;
    email: string;
}

interface UserData {
    id: string;
    aud: string;
    role: string;
    email: string;
    emailConfirmedAt: string;
    phone: string;
    confirmedAt: string;
    lastSignInAt: string;
    appMetadata: {
        provider: string;
        providers: string[];
    };
    userMetadata: Record<string, unknown>;
    identities: UserIdentity[];
    createdAt: string;
    updatedAt: string;
    isAnonymous: boolean;
}

interface SessionData {
    accessToken: string;
    tokenType: string;
    expiresIn: number;
    expireAat: number;
    refreshToken: string;
    user: UserData;
}

export interface LoginResponse extends BaseResponse{
    data: {
        user: UserData;
        session: SessionData;
    };
}