import { baseUrlJson } from '../exports/jsonExports'

export class BaseService {
    getBaseUrl(): string{
        const environment = process.env.ENV;
        
        return baseUrlJson[environment].baseUrl;
    }
}