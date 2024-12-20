/**
 * Manager API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 24.11.6.1925
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ManagerIoClient from './ApiClient';
import DefaultApi from './api/DefaultApi';


/**
* JS API client generated by OpenAPI Generator.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var ManagerApi = require('index'); // See note below*.
* var xxxSvc = new ManagerApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new ManagerApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new ManagerApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new ManagerApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 24.11.6.1925
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ManagerIoClient}
     */
    ManagerIoClient,

    /**
    * The DefaultApi service constructor.
    * @property {module:api/DefaultApi}
    */
    DefaultApi
};
