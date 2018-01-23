/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * ExternalStoreResponse
 *
 */
class ExternalStoreResponse {
  /**
   * Create a ExternalStoreResponse.
   * @member {string} [id] Store id
   * @member {string} [name] Store Name
   * @member {string} [type] Store Type
   * @member {string} [track] Store track. Possible values include:
   * 'production', 'alpha', 'beta', 'testflight-internal',
   * 'testflight-external'
   * @member {object} [intuneDetails] store details for intune
   * @member {string} [serviceConnectionId] Id for the shared service
   * connection. In case of Apple AppStore, this connection will be used to
   * create and connect to the Apple AppStore in Mobile Center.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ExternalStoreResponse
   *
   * @returns {object} metadata of ExternalStoreResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ExternalStoreResponse',
      type: {
        name: 'Composite',
        className: 'ExternalStoreResponse',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          track: {
            required: false,
            serializedName: 'track',
            type: {
              name: 'String'
            }
          },
          intuneDetails: {
            required: false,
            serializedName: 'intune_details',
            type: {
              name: 'Object'
            }
          },
          serviceConnectionId: {
            required: false,
            serializedName: 'service_connection_id',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ExternalStoreResponse;
