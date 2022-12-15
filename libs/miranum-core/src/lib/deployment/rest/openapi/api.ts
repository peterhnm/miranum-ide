/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * Process artifact
 * @export
 * @interface ArtifactDto
 */
export interface ArtifactDto {
    /**
     * 
     * @type {string}
     * @memberof ArtifactDto
     */
    'type': string;
    /**
     * 
     * @type {string}
     * @memberof ArtifactDto
     */
    'project'?: string;
    /**
     * 
     * @type {FileDto}
     * @memberof ArtifactDto
     */
    'file'?: FileDto;
    /**
     * 
     * @type {string}
     * @memberof ArtifactDto
     */
    'artifactName'?: string;
}
/**
 * Deployment
 * @export
 * @interface DeploymentDto
 */
export interface DeploymentDto {
    /**
     * 
     * @type {string}
     * @memberof DeploymentDto
     */
    'target': string;
    /**
     * 
     * @type {ArtifactDto}
     * @memberof DeploymentDto
     */
    'artifact'?: ArtifactDto;
}
/**
 * Deployment success
 * @export
 * @interface DeploymentSuccessDto
 */
export interface DeploymentSuccessDto {
    /**
     * 
     * @type {boolean}
     * @memberof DeploymentSuccessDto
     */
    'success'?: boolean;
    /**
     * 
     * @type {DeploymentDto}
     * @memberof DeploymentSuccessDto
     */
    'deployment'?: DeploymentDto;
    /**
     * 
     * @type {string}
     * @memberof DeploymentSuccessDto
     */
    'message'?: string;
}
/**
 * File Details
 * @export
 * @interface FileDto
 */
export interface FileDto {
    /**
     * 
     * @type {string}
     * @memberof FileDto
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof FileDto
     */
    'content': string;
    /**
     * 
     * @type {string}
     * @memberof FileDto
     */
    'extension'?: string;
    /**
     * 
     * @type {number}
     * @memberof FileDto
     */
    'size'?: number;
}

/**
 * DeploymentAPIApi - axios parameter creator
 * @export
 */
export const DeploymentAPIApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Deploy artifact
         * @param {DeploymentDto} deploymentDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deployArtifact: async (deploymentDto: DeploymentDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'deploymentDto' is not null or undefined
            assertParamExists('deployArtifact', 'deploymentDto', deploymentDto)
            const localVarPath = `/api/deployment`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(deploymentDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DeploymentAPIApi - functional programming interface
 * @export
 */
export const DeploymentAPIApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DeploymentAPIApiAxiosParamCreator(configuration)
    return {
        /**
         * Deploy artifact
         * @param {DeploymentDto} deploymentDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deployArtifact(deploymentDto: DeploymentDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeploymentSuccessDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deployArtifact(deploymentDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DeploymentAPIApi - factory interface
 * @export
 */
export const DeploymentAPIApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DeploymentAPIApiFp(configuration)
    return {
        /**
         * Deploy artifact
         * @param {DeploymentDto} deploymentDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deployArtifact(deploymentDto: DeploymentDto, options?: any): AxiosPromise<DeploymentSuccessDto> {
            return localVarFp.deployArtifact(deploymentDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DeploymentAPIApi - interface
 * @export
 * @interface DeploymentAPIApi
 */
export interface DeploymentAPIApiInterface {
    /**
     * Deploy artifact
     * @param {DeploymentDto} deploymentDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DeploymentAPIApiInterface
     */
    deployArtifact(deploymentDto: DeploymentDto, options?: AxiosRequestConfig): AxiosPromise<DeploymentSuccessDto>;

}

/**
 * DeploymentAPIApi - object-oriented interface
 * @export
 * @class DeploymentAPIApi
 * @extends {BaseAPI}
 */
export class DeploymentAPIApi extends BaseAPI implements DeploymentAPIApiInterface {
    /**
     * Deploy artifact
     * @param {DeploymentDto} deploymentDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DeploymentAPIApi
     */
    public deployArtifact(deploymentDto: DeploymentDto, options?: AxiosRequestConfig) {
        return DeploymentAPIApiFp(this.configuration).deployArtifact(deploymentDto, options).then((request) => request(this.axios, this.basePath));
    }
}

