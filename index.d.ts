import { Request, RequestHandler } from 'express';

declare function noClid(filter?: string[]): RequestHandler;
declare function queryFilter(query: Request['query'], filter: object): null | object;
declare function uriFilter(path: Request['path'], query: Request['query'], filter: object): null | string;

export = noClid;
export { queryFilter, uriFilter };
