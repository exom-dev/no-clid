import { Request, RequestHandler } from 'express';

declare function fuckClid(): RequestHandler;
declare function queryFilter(query: Request['query'], filter: object): null | object;
declare function uriFilter(path: Request['path'], query: Request['query'], filter: object): null | string;

export = fuckClid;
export { queryFilter, uriFilter };
