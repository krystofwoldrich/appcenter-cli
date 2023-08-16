/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Stores } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AppCenterClient } from "../appCenterClient";
import {
  StoresGetOptionalParams,
  StoresGetResponse,
  StoresPatchOptionalParams,
  StoresDeleteOptionalParams,
  PathsPwsnpuV01AppsOwnerNameAppNameDistributionStoresPostRequestbodyContentApplicationJsonSchema,
  StoresCreateOptionalParams,
  StoresCreateResponse,
  StoresListOptionalParams,
  StoresListResponse
} from "../models";

/** Class containing Stores operations. */
export class StoresImpl implements Stores {
  private readonly client: AppCenterClient;

  /**
   * Initialize a new instance of the class Stores class.
   * @param client Reference to the service client
   */
  constructor(client: AppCenterClient) {
    this.client = client;
  }

  /**
   * Return the store details for specified store name.
   * @param storeName The name of the store
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  get(
    storeName: string,
    ownerName: string,
    appName: string,
    options?: StoresGetOptionalParams
  ): Promise<StoresGetResponse> {
    return this.client.sendOperationRequest(
      { storeName, ownerName, appName, options },
      getOperationSpec
    );
  }

  /**
   * Update the store.
   * @param storeName The name of the store
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param serviceConnectionId Service connection id to updated.
   * @param options The options parameters.
   */
  patch(
    storeName: string,
    ownerName: string,
    appName: string,
    serviceConnectionId: string,
    options?: StoresPatchOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { storeName, ownerName, appName, serviceConnectionId, options },
      patchOperationSpec
    );
  }

  /**
   * delete the store based on specific store name.
   * @param storeName The name of the store
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  delete(
    storeName: string,
    ownerName: string,
    appName: string,
    options?: StoresDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { storeName, ownerName, appName, options },
      deleteOperationSpec
    );
  }

  /**
   * Create a new external store for the specified application.
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param body The store request
   * @param options The options parameters.
   */
  create(
    ownerName: string,
    appName: string,
    body: PathsPwsnpuV01AppsOwnerNameAppNameDistributionStoresPostRequestbodyContentApplicationJsonSchema,
    options?: StoresCreateOptionalParams
  ): Promise<StoresCreateResponse> {
    return this.client.sendOperationRequest(
      { ownerName, appName, body, options },
      createOperationSpec
    );
  }

  /**
   * Get all the store details from Storage store table for a particular application.
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  list(
    ownerName: string,
    appName: string,
    options?: StoresListOptionalParams
  ): Promise<StoresListResponse> {
    return this.client.sendOperationRequest(
      { ownerName, appName, options },
      listOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path: "/v0.1/apps/{owner_name}/{app_name}/distribution_stores/{store_name}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.Paths17Ft4FaV01AppsOwnerNameAppNameDistributionStoresStoreNameGetResponses200ContentApplicationJsonSchema
    },
    default: {
      bodyMapper:
        Mappers.PathsTg2NhfV01AppsOwnerNameAppNameDistributionStoresStoreNameGetResponsesDefaultContentApplicationJsonSchema
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.ownerName,
    Parameters.appName,
    Parameters.storeName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const patchOperationSpec: coreClient.OperationSpec = {
  path: "/v0.1/apps/{owner_name}/{app_name}/distribution_stores/{store_name}",
  httpMethod: "PATCH",
  responses: {
    200: {},
    default: {
      bodyMapper:
        Mappers.PathsAqfpleV01AppsOwnerNameAppNameDistributionStoresStoreNamePatchResponsesDefaultContentApplicationJsonSchema
    }
  },
  requestBody: {
    parameterPath: { serviceConnectionId: ["serviceConnectionId"] },
    mapper: {
      ...Mappers.Paths1Yf5Jp5V01AppsOwnerNameAppNameDistributionStoresStoreNamePatchRequestbodyContentApplicationJsonSchema,
      required: true
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.ownerName,
    Parameters.appName,
    Parameters.storeName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/v0.1/apps/{owner_name}/{app_name}/distribution_stores/{store_name}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    default: {
      bodyMapper:
        Mappers.Paths14Io730V01AppsOwnerNameAppNameDistributionStoresStoreNameDeleteResponsesDefaultContentApplicationJsonSchema
    }
  },
  requestBody: Parameters.body8,
  urlParameters: [
    Parameters.$host,
    Parameters.ownerName,
    Parameters.appName,
    Parameters.storeName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path: "/v0.1/apps/{owner_name}/{app_name}/distribution_stores",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper:
        Mappers.PathsM4SyzbV01AppsOwnerNameAppNameDistributionStoresPostResponses201ContentApplicationJsonSchema
    },
    default: {
      bodyMapper:
        Mappers.PathsMlw3HcV01AppsOwnerNameAppNameDistributionStoresPostResponsesDefaultContentApplicationJsonSchema
    }
  },
  requestBody: Parameters.body10,
  urlParameters: [Parameters.$host, Parameters.ownerName, Parameters.appName],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/v0.1/apps/{owner_name}/{app_name}/distribution_stores",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className:
                "Paths1WzhejqV01AppsOwnerNameAppNameDistributionStoresGetResponses200ContentApplicationJsonSchemaItems"
            }
          }
        }
      }
    }
  },
  urlParameters: [Parameters.$host, Parameters.ownerName, Parameters.appName],
  headerParameters: [Parameters.accept],
  serializer
};