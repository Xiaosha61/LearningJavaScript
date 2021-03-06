// Generated by typings
// Source: https://raw.githubusercontent.com/typed-typings/npm-es6-promise/fb04188767acfec1defd054fc8024fafa5cd4de7/dist/es6-promise.d.ts
declare module '~koa~koa-compose~es6-promise' {
export interface Thenable <R> {
  then <U> (onFulfilled?: (value: R) => U | Thenable<U>, onRejected?: (error: any) => U | Thenable<U>): Thenable<U>;
  then <U> (onFulfilled?: (value: R) => U | Thenable<U>, onRejected?: (error: any) => void): Thenable<U>;
}

export class Promise <R> implements Thenable <R> {
  /**
   * If you call resolve in the body of the callback passed to the constructor,
   * your promise is fulfilled with result object passed to resolve.
   * If you call reject your promise is rejected with the object passed to resolve.
   * For consistency and debugging (eg stack traces), obj should be an instanceof Error.
   * Any errors thrown in the constructor callback will be implicitly passed to reject().
   */
  constructor (callback: (resolve : (value?: R | Thenable<R>) => void, reject: (error?: any) => void) => void);

  /**
   * onFulfilled is called when/if "promise" resolves. onRejected is called when/if "promise" rejects.
   * Both are optional, if either/both are omitted the next onFulfilled/onRejected in the chain is called.
   * Both callbacks have a single parameter , the fulfillment value or rejection reason.
   * "then" returns a new promise equivalent to the value you return from onFulfilled/onRejected after being passed through Promise.resolve.
   * If an error is thrown in the callback, the returned promise rejects with that error.
   *
   * @param onFulfilled called when/if "promise" resolves
   * @param onRejected called when/if "promise" rejects
   */
  then <U> (onFulfilled?: (value: R) => U | Thenable<U>, onRejected?: (error: any) => U | Thenable<U>): Promise<U>;
  then <U> (onFulfilled?: (value: R) => U | Thenable<U>, onRejected?: (error: any) => void): Promise<U>;

  /**
   * Sugar for promise.then(undefined, onRejected)
   *
   * @param onRejected called when/if "promise" rejects
   */
  catch <U> (onRejected?: (error: any) => U | Thenable<U>): Promise<U>;

  /**
   * Make a new promise from the thenable.
   * A thenable is promise-like in as far as it has a "then" method.
   */
  static resolve (): Promise<void>;
  static resolve <R> (value: R | Thenable<R>): Promise<R>;

  /**
   * Make a promise that rejects to obj. For consistency and debugging (eg stack traces), obj should be an instanceof Error
   */
  static reject <R> (error: any): Promise<R>;

  /**
   * Make a promise that fulfills when every item in the array fulfills, and rejects if (and when) any item rejects.
   * the array passed to all can be a mixture of promise-like objects and other objects.
   * The fulfillment value is an array (in order) of fulfillment values. The rejection value is the first rejection value.
   */
  static all<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable <T4>, T5 | Thenable<T5>, T6 | Thenable<T6>, T7 | Thenable<T7>, T8 | Thenable<T8>, T9 | Thenable<T9>, T10 | Thenable<T10>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]>;
  static all<T1, T2, T3, T4, T5, T6, T7, T8, T9>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable <T4>, T5 | Thenable<T5>, T6 | Thenable<T6>, T7 | Thenable<T7>, T8 | Thenable<T8>, T9 | Thenable<T9>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9]>;
  static all<T1, T2, T3, T4, T5, T6, T7, T8>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable <T4>, T5 | Thenable<T5>, T6 | Thenable<T6>, T7 | Thenable<T7>, T8 | Thenable<T8>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8]>;
  static all<T1, T2, T3, T4, T5, T6, T7>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable <T4>, T5 | Thenable<T5>, T6 | Thenable<T6>, T7 | Thenable<T7>]): Promise<[T1, T2, T3, T4, T5, T6, T7]>;
  static all<T1, T2, T3, T4, T5, T6>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable <T4>, T5 | Thenable<T5>, T6 | Thenable<T6>]): Promise<[T1, T2, T3, T4, T5, T6]>;
  static all<T1, T2, T3, T4, T5>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable <T4>, T5 | Thenable<T5>]): Promise<[T1, T2, T3, T4, T5]>;
  static all<T1, T2, T3, T4>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable <T4>]): Promise<[T1, T2, T3, T4]>;
  static all<T1, T2, T3>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>]): Promise<[T1, T2, T3]>;
  static all<T1, T2>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>]): Promise<[T1, T2]>;
  static all<T1>(values: [T1 | Thenable<T1>]): Promise<[T1]>;
  static all<TAll>(values: Array<TAll | Thenable<TAll>>): Promise<TAll[]>;

  /**
   * Make a Promise that fulfills when any item fulfills, and rejects if any item rejects.
   */
  static race <R> (promises: (R | Thenable<R>)[]): Promise<R>;
}

/**
 * The polyfill method will patch the global environment (in this case to the Promise name) when called.
 */
export function polyfill (): void;
}

// Generated by typings
// Source: https://raw.githubusercontent.com/types/npm-koa-compose/b3c3a1e7e41a0de8939f46efac1c8a4737bec699/index.d.ts
declare module '~koa~koa-compose' {
import { Promise } from '~koa~koa-compose~es6-promise'

function compose <T> (middleware: Array<compose.Middleware<T>>): (context: T, next?: () => any) => Promise<any>;

namespace compose {
  export type Middleware <T> = (context: T, next: () => any) => any
}

export = compose;
}

// Generated by typings
// Source: https://raw.githubusercontent.com/jstype/typed-npm-keygrip/1d5b66d22c3932a75f583c62a70b4e634144a0bd/index.d.ts
declare module '~koa~keygrip' {
class Keygrip {
    constructor(keys: string[]);
    constructor(keys: string[], algorithm: string);
    constructor(keys: string[], algorithm: string, encoding: string);

    /**
     * message signing
     */
    sign(data: any): string;

    verify(data: any, digest: string): boolean;

    index(data: any, digest: string): number;
}

export = Keygrip;
}

// Generated by typings
// Source: https://raw.githubusercontent.com/types/npm-koa/a8dd0ae91ff03ff133ae9a04f7432a42fa7c05e8/lib/request.d.ts
declare module '~koa/lib/request' {
import { IncomingHeaders, IncomingMessage, ServerResponse } from 'http';
import { Socket } from 'net';
import * as Application from '~koa/lib/application';
import { Context } from '~koa/lib/context';
import { Response } from '~koa/lib/response';

namespace req {
    export interface ContextDelegatedRequest {
        /**
         * Return request header.
         */
        header: IncomingHeaders;
        /**
         * Return request header, alias as request.header
         */
        headers: IncomingHeaders;

        /**
         * Get/Set request URL.
         */
        url: string;

        /**
         * Get origin of URL.
         */
        origin: string;

        /**
         * Get full request URL.
         */
        href: string;

        /**
         * Get/Set request method.
         */
        method: string;

        /**
         * Get request pathname.
         * Set pathname, retaining the query-string when present.
         */
        path: string;

        /**
         * Get parsed query-string.
         * Set query-string as an object.
         */
        query: any;

        /**
         * Get/Set query string.
         */
        querystring: string;

        /**
         * Get the search string. Same as the querystring
         * except it includes the leading ?.
         *
         * Set the search string. Same as
         * response.querystring= but included for ubiquity.
         */
        search: string;


        /**
         * Parse the "Host" header field host
         * and support X-Forwarded-Host when a
         * proxy is enabled.
         */
        host: string;

        /**
         * Parse the "Host" header field hostname
         * and support X-Forwarded-Host when a
         * proxy is enabled.
         */
        hostname: string;

        /**
         * Check if the request is fresh, aka
         * Last-Modified and/or the ETag
         * still match.
         */
        fresh: boolean;

        /**
         * Check if the request is stale, aka
         * "Last-Modified" and / or the "ETag" for the
         * resource has changed.
         */
        stale: boolean;

        /**
         * Check if the request is idempotent.
         */
        idempotent: boolean;

        /**
         * Return the request socket.
         */
        socket: Socket;

        /**
         * Return the protocol string "http" or "https"
         * when requested with TLS. When the proxy setting
         * is enabled the "X-Forwarded-Proto" header
         * field will be trusted. If you're running behind
         * a reverse proxy that supplies https for you this
         * may be enabled.
         */
        protocol: string;

        /**
         * Short-hand for:
         *
         *    this.protocol == 'https'
         */
        secure: boolean;

        /**
         * When `app.proxy` is `true`, parse
         * the "X-Forwarded-For" ip address list.
         *
         * For example if the value were "client, proxy1, proxy2"
         * you would receive the array `["client", "proxy1", "proxy2"]`
         * where "proxy2" is the furthest down-stream.
         */
        ips: string[];

        /**
         * Return subdomains as an array.
         *
         * Subdomains are the dot-separated parts of the host before the main domain
         * of the app. By default, the domain of the app is assumed to be the last two
         * parts of the host. This can be changed by setting `app.subdomainOffset`.
         *
         * For example, if the domain is "tobi.ferrets.example.com":
         * If `app.subdomainOffset` is not set, this.subdomains is
         * `["ferrets", "tobi"]`.
         * If `app.subdomainOffset` is 3, this.subdomains is `["tobi"]`.
         */
        subdomains: string[];

        /**
         * Check if the given `type(s)` is acceptable, returning
         * the best match when true, otherwise `undefined`, in which
         * case you should respond with 406 "Not Acceptable".
         *
         * The `type` value may be a single mime type string
         * such as "application/json", the extension name
         * such as "json" or an array `["json", "html", "text/plain"]`. When a list
         * or array is given the _best_ match, if any is returned.
         *
         * Examples:
         *
         *     // Accept: text/html
         *     this.accepts('html');
         *     // => "html"
         *
         *     // Accept: text/*, application/json
         *     this.accepts('html');
         *     // => "html"
         *     this.accepts('text/html');
         *     // => "text/html"
         *     this.accepts('json', 'text');
         *     // => "json"
         *     this.accepts('application/json');
         *     // => "application/json"
         *
         *     // Accept: text/*, application/json
         *     this.accepts('image/png');
         *     this.accepts('png');
         *     // => undefined
         *
         *     // Accept: text/*;q=.5, application/json
         *     this.accepts(['html', 'json']);
         *     this.accepts('html', 'json');
         *     // => "json"
         */
        accepts(): string[] | boolean;
        accepts(...types: string[]): string | boolean;
        accepts(types: string[]): string | boolean;

        /**
         * Return accepted encodings or best fit based on `encodings`.
         *
         * Given `Accept-Encoding: gzip, deflate`
         * an array sorted by quality is returned:
         *
         *     ['gzip', 'deflate']
         */
        acceptsEncodings(): string[] | boolean;
        acceptsEncodings(...encodings: string[]): string | boolean;
        acceptsEncodings(encodings: string[]): string | boolean;

        /**
         * Return accepted charsets or best fit based on `charsets`.
         *
         * Given `Accept-Charset: utf-8, iso-8859-1;q=0.2, utf-7;q=0.5`
         * an array sorted by quality is returned:
         *
         *     ['utf-8', 'utf-7', 'iso-8859-1']
         */
        acceptsCharsets(): string[] | boolean;
        acceptsCharsets(...charsets: string[]): string | boolean;
        acceptsCharsets(charsets: string[]): string | boolean;

        /**
         * Return accepted languages or best fit based on `langs`.
         *
         * Given `Accept-Language: en;q=0.8, es, pt`
         * an array sorted by quality is returned:
         *
         *     ['es', 'pt', 'en']
         */
        acceptsLanguages(): string[] | boolean;
        acceptsLanguages(...langs: string[]): string | boolean;
        acceptsLanguages(langs: string[]): string | boolean;

        /**
         * Check if the incoming request contains the "Content-Type"
         * header field, and it contains any of the give mime `type`s.
         * If there is no request body, `null` is returned.
         * If there is no content type, `false` is returned.
         * Otherwise, it returns the first `type` that matches.
         *
         * Examples:
         *
         *     // With Content-Type: text/html; charset=utf-8
         *     this.is('html'); // => 'html'
         *     this.is('text/html'); // => 'text/html'
         *     this.is('text/*', 'application/json'); // => 'text/html'
         *
         *     // When Content-Type is application/json
         *     this.is('json', 'urlencoded'); // => 'json'
         *     this.is('application/json'); // => 'application/json'
         *     this.is('html', 'application/*'); // => 'application/json'
         *
         *     this.is('html'); // => false
         */
        is(): string | boolean;
        is(...types: string[]): string | boolean;
        is(types: string[]): string | boolean;

        /**
         * Return request header.
         *
         * The `Referrer` header field is special-cased,
         * both `Referrer` and `Referer` are interchangeable.
         *
         * Examples:
         *
         *     this.get('Content-Type');
         *     // => "text/plain"
         *
         *     this.get('content-type');
         *     // => "text/plain"
         *
         *     this.get('Something');
         *     // => undefined
         */
        get(field: string): string;
    }

    export interface BaseRequest extends ContextDelegatedRequest {
        /**
         * Get the charset when present or undefined.
         */
        charset: string;

        /**
         * Return parsed Content-Length when present.
         */
        length: number;

        /**
         * Return the request mime type void of
         * parameters such as "charset".
         */
        type: string;

        /**
         * Inspect implementation.
         */
        inspect(): any;

        /**
         * Return JSON representation.
         */
        toJSON(): any;
    }

    export interface Request extends BaseRequest {
        app: Application;
        req: IncomingMessage;
        res: ServerResponse;
        ctx: Context;
        response: Response;
        originalUrl: string;
        accept: any;
    }
}

export = req;
}
declare module 'koa/lib/request' {
import main = require('~koa/lib/request');
export = main;
}

// Generated by typings
// Source: https://raw.githubusercontent.com/types/npm-koa/a8dd0ae91ff03ff133ae9a04f7432a42fa7c05e8/lib/response.d.ts
declare module '~koa/lib/response' {
import { Socket } from 'net';
import { IncomingMessage, ServerResponse } from 'http';
import * as Application from '~koa/lib/application';
import { Context } from '~koa/lib/context';
import { Request } from '~koa/lib/request';

namespace res {
    export interface ContextDelegatedResponse {
        /**
         * Get/Set response status code.
         */
        status: number;

        /**
         * Get response status message
         */
        message: string;

        /**
         * Get/Set response body.
         */
        body: any;

        /**
         * Return parsed response Content-Length when present.
         * Set Content-Length field to `n`.
         */
        length: number;

        /**
         * Check if a header has been written to the socket.
         */
        headerSent: boolean;

        /**
         * Vary on `field`.
         */
        vary(field: string): void;

        /**
         * Perform a 302 redirect to `url`.
         *
         * The string "back" is special-cased
         * to provide Referrer support, when Referrer
         * is not present `alt` or "/" is used.
         *
         * Examples:
         *
         *    this.redirect('back');
         *    this.redirect('back', '/index.html');
         *    this.redirect('/login');
         *    this.redirect('http://google.com');
         */
        redirect(url: string): void;
        redirect(url: string, alt: string): void;

      /**
       * Set Content-Disposition header to "attachment" with optional `filename`.
       */
        attachment(filename: string): void;

        /**
         * Return the response mime type void of
         * parameters such as "charset".
         *
         * Set Content-Type response header with `type` through `mime.lookup()`
         * when it does not contain a charset.
         *
         * Examples:
         *
         *     this.type = '.html';
         *     this.type = 'html';
         *     this.type = 'json';
         *     this.type = 'application/json';
         *     this.type = 'png';
         */
        type: string;

        /**
         * Get the Last-Modified date in Date form, if it exists.
         * Set the Last-Modified date using a string or a Date.
         *
         *     this.response.lastModified = new Date();
         *     this.response.lastModified = '2013-09-13';
         */
        lastModified: Date;

        /**
         * Get/Set the ETag of a response.
         * This will normalize the quotes if necessary.
         *
         *     this.response.etag = 'md5hashsum';
         *     this.response.etag = '"md5hashsum"';
         *     this.response.etag = 'W/"123456789"';
         *
         * @param {String} etag
         * @api public
         */
        etag: string;

        /**
         * Set header `field` to `val`, or pass
         * an object of header fields.
         *
         * Examples:
         *
         *    this.set('Foo', ['bar', 'baz']);
         *    this.set('Accept', 'application/json');
         *    this.set({ Accept: 'text/plain', 'X-API-Key': 'tobi' });
         */
        set(field: any): void;
        set(field: string, val: string): void;
        set(field: string, val: string[]): void;

        /**
         * Append additional header `field` with value `val`.
         *
         * Examples:
         *
         * ```
         * this.append('Link', ['<http://localhost/>', '<http://localhost:3000/>']);
         * this.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
         * this.append('Warning', '199 Miscellaneous warning');
         * ```
         */
        append(field: string, val: string): void;
        append(field: string, val: string[]): void;

        /**
         * Remove header `field`.
         */
        remove(field: string): void;

        /**
         * Checks if the request is writable.
         * Tests for the existence of the socket
         * as node sometimes does not set it.
         */
        writable: boolean;

        /**
         * Flush any set headers, and begin the body
         */
        flushHeaders(): void;
    }

    export interface BaseResponse extends ContextDelegatedResponse {
        /**
         * Return the request socket.
         *
         * @return {Connection}
         * @api public
         */
        socket: Socket;

        /**
         * Return response header.
         */
        header: any;

        /**
         * Return response header, alias as response.header
         */
        headers: any;

        /**
         * Check whether the response is one of the listed types.
         * Pretty much the same as `this.request.is()`.
         *
         * @param {String|Array} types...
         * @return {String|false}
         * @api public
         */
        is(): string;
        is(...types: string[]): string;
        is(types: string[]): string;

        /**
         * Return response header.
         *
         * Examples:
         *
         *     this.get('Content-Type');
         *     // => "text/plain"
         *
         *     this.get('content-type');
         *     // => "text/plain"
         */
        get(field: string): string;

        /**
         * Inspect implementation.
         */
        inspect(): any;

        /**
         * Return JSON representation.
         */
        toJSON(): any;
    }

    export interface Response extends BaseResponse {
        app: Application;
        req: IncomingMessage;
        res: ServerResponse;
        ctx: Context;
        request: Request;
    }
}

export = res;
}
declare module 'koa/lib/response' {
import main = require('~koa/lib/response');
export = main;
}

// Generated by typings
// Source: https://raw.githubusercontent.com/jstype/typed-npm-http-assert/2bc21f22d4f0de78a2ad19ac5980cf22c6463732/index.d.ts
declare module '~koa~http-assert' {
interface createAssert {
    (value: any, status: number, msg: string, opts?: any): void;
    equal(a: any, b: any, status: number, msg: string, opts?: any): void;
    notEqual(a: any, b: any, status: number, msg: string, opts?: any): void;
    strictEqual(a: any, b: any, status: number, msg: string, opts?: any): void;
    notStrictEqual(a: any, b: any, status: number, msg: string, opts?: any): void;
    deepEqual(a: any, b: any, status: number, msg: string, opts?: any): void;
    notDeepEqual(a: any, b: any, status: number, msg: string, opts?: any): void;
}

const assert: createAssert;

export = assert;
}

// Generated by typings
// Source: https://raw.githubusercontent.com/jstype/typed-npm-keygrip/1d5b66d22c3932a75f583c62a70b4e634144a0bd/index.d.ts
declare module '~koa~cookies~keygrip' {
class Keygrip {
    constructor(keys: string[]);
    constructor(keys: string[], algorithm: string);
    constructor(keys: string[], algorithm: string, encoding: string);

    /**
     * message signing
     */
    sign(data: any): string;

    verify(data: any, digest: string): boolean;

    index(data: any, digest: string): number;
}

export = Keygrip;
}

// Generated by typings
// Source: https://raw.githubusercontent.com/jstype/typed-npm-cookies/d7a6a9ca89a62960caaf53aa890594afa1829a3c/lib/cookies.d.ts
declare module '~koa~cookies' {
import { IncomingMessage, ServerResponse } from 'http';
import Keygrip = require('~koa~cookies~keygrip');

interface Cookies {
    secure: boolean;
    request: IncomingMessage;
    response: ServerResponse;

    get(name: string): string;
    get(name: string, opts: Cookies.GetOption): string;

    set(name: string): this;
    set(name: string, value: string): this;
    set(name: string, value: string, opts: Cookies.SetOption): this;
}

namespace Cookies {
    export interface Option {
        keys: string[] | Keygrip;
        secure?: boolean;
    }

    export interface GetOption {
        signed: boolean;
    }

    export interface SetOption {
        maxAge?: number;
        expires?: Date;
        path?: string;
        domain?: string;
        secure?: boolean;
        httpOnly?: boolean;
        signed?: boolean;
        overwrite?: boolean;
    }

    export type CookieAttr = SetOption;

    export interface Cookie {
        name: string;
        value: string;
        /**
         * back-compat so maxage mirrors maxAge
         */
        maxage: number;
        maxAge: number;
        expires: Date;
        path: string;
        domain: string;
        secure: boolean;
        httpOnly: boolean;
        overwrite: boolean;

        toString(): string;
        toHeader(): string;
    }
}

interface createCookies {
    (request: IncomingMessage, response: ServerResponse): Cookies;
    (request: IncomingMessage, response: ServerResponse, options: string[]): Cookies;
    (request: IncomingMessage, response: ServerResponse, options: Keygrip): Cookies;
    (request: IncomingMessage, response: ServerResponse, options: Cookies.Option): Cookies;

    new (request: IncomingMessage, response: ServerResponse): Cookies;
    new (request: IncomingMessage, response: ServerResponse, options: string[]): Cookies;
    new (request: IncomingMessage, response: ServerResponse, options: Keygrip): Cookies;
    new (request: IncomingMessage, response: ServerResponse, options: Cookies.Option): Cookies;

    Cookie: {
        new (name: string): Cookies.Cookie;
        new (name: string, value: string): Cookies.Cookie;
        new (name: string, value: string, attrs: Cookies.CookieAttr): Cookies.Cookie;
    };
}

const Cookies: createCookies;

export = Cookies;
}

// Generated by typings
// Source: https://raw.githubusercontent.com/types/npm-koa/a8dd0ae91ff03ff133ae9a04f7432a42fa7c05e8/lib/context.d.ts
declare module '~koa/lib/context' {
import { IncomingMessage, ServerResponse } from 'http';
import * as httpAssert from '~koa~http-assert';
import * as Cookies from '~koa~cookies';
import * as Application from '~koa/lib/application';
import { ContextDelegatedRequest, Request } from '~koa/lib/request';
import { ContextDelegatedResponse, Response } from '~koa/lib/response';

namespace ctx {
    export interface BaseContext extends ContextDelegatedRequest, ContextDelegatedResponse {
        /**
         * util.inspect() implementation, which
         * just returns the JSON output.
         */
        inspect(): any;

        /**
         * Return JSON representation.
         *
         * Here we explicitly invoke .toJSON() on each
         * object, as iteration will otherwise fail due
         * to the getters and cause utilities such as
         * clone() to fail.
         */
        toJSON(): any;

        /**
         * Similar to .throw(), adds assertion.
         *
         *    this.assert(this.user, 401, 'Please login!');
         *
         * See: https://github.com/jshttp/http-assert
         */
        assert: typeof httpAssert;

        /**
         * Throw an error with `msg` and optional `status`
         * defaulting to 500. Note that these are user-level
         * errors, and the message may be exposed to the client.
         *
         *    this.throw(403)
         *    this.throw('name required', 400)
         *    this.throw(400, 'name required')
         *    this.throw('something exploded')
         *    this.throw(new Error('invalid'), 400);
         *    this.throw(400, new Error('invalid'));
         *
         * See: https://github.com/jshttp/http-errors
         */
        throw(code: number): void;
        throw(message: string): void;
        throw(properties: any): void;
        throw(code: number, message: string, properties?: any): void;

        /**
         * Default error handling.
         */
        onerror(err: Error): void;
    }

    export interface Context extends BaseContext {
        app: Application;
        request: Request;
        response: Response;
        req: IncomingMessage;
        res: ServerResponse;
        originalUrl: string;
        cookies: Cookies;
        accept: any;
        state: any;
    }
}

export = ctx;
}
declare module 'koa/lib/context' {
import main = require('~koa/lib/context');
export = main;
}

// Generated by typings
// Source: https://raw.githubusercontent.com/types/npm-koa/a8dd0ae91ff03ff133ae9a04f7432a42fa7c05e8/lib/application.d.ts
declare module '~koa/lib/application' {
import { EventEmitter } from 'events';
import * as http from 'http';
import * as compose from '~koa~koa-compose';
import Keygrip = require('~koa~keygrip');
import { BaseRequest, Request as _Request } from '~koa/lib/request';
import { BaseResponse, Response as _Response } from '~koa/lib/response';
import { BaseContext, Context as _Context } from '~koa/lib/context';

class Application extends EventEmitter {
    proxy: boolean;
    middleware: compose.Middleware<Application.Context>[];
    subdomainOffset: number;
    env: string;
    context: BaseContext;
    request: BaseRequest;
    response: BaseResponse;
    silent: boolean;
    keys: Keygrip | string[];

    constructor();

    /**
     * Shorthand for:
     *
     *    http.createServer(app.callback()).listen(...)
     */
    listen(port: number, hostname?: string, backlog?: number, callback?: Function): http.Server;
    listen(port: number, hostname?: string, callback?: Function): http.Server;
    listen(path: string, callback?: Function): http.Server;
    listen(handle: any, listeningListener?: Function): http.Server;
    listen(): http.Server;

    /**
     * Return JSON representation.
     * We only bother showing settings.
     */
    inspect(): any;

    /**
     * Return JSON representation.
     * We only bother showing settings.
     */
    toJSON(): any;

    /**
     * Use the given middleware `fn`.
     *
     * Old-style middleware will be converted.
     */
    use(middleware: compose.Middleware<Application.Context>): this;

    /**
     * Return a request handler callback
     * for node's native http server.
     */
    callback(): (req: http.IncomingMessage, res: http.ServerResponse) => void;

    /**
     * Default error handler.
     */
    onerror(err: Error): void;
}

namespace Application {
    export type Request = _Request;
    export type Response = _Response;
    export type Context = _Context;
}

export = Application;
}
declare module 'koa/lib/application' {
import main = require('~koa/lib/application');
export = main;
}
declare module 'koa' {
import main = require('~koa/lib/application');
export = main;
}
