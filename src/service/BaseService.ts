import { baseUrlJson } from '../exports/jsonExports'

export class BaseService {
    getBaseUrl(): string{
        return baseUrlJson.dev.baseUrl;
    }
}