/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * PrivateSharedConnectionResponse
 *
 */
class PrivateSharedConnectionResponse {
  /**
   * Create a PrivateSharedConnectionResponse.
   * @member {string} id id of the shared connection
   * @member {string} [displayName] display name of shared connection
   * @member {string} serviceType service type of shared connection can be
   * apple|googleplay|jira. Possible values include: 'apple', 'jira',
   * 'googleplay'
   */
  constructor() {
  }

  /**
   * Defines the metadata of PrivateSharedConnectionResponse
   *
   * @returns {object} metadata of PrivateSharedConnectionResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PrivateSharedConnectionResponse',
      type: {
        name: 'Composite',
        className: 'PrivateSharedConnectionResponse',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          displayName: {
            required: false,
            serializedName: 'displayName',
            type: {
              name: 'String'
            }
          },
          serviceType: {
            required: true,
            serializedName: 'serviceType',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = PrivateSharedConnectionResponse;
