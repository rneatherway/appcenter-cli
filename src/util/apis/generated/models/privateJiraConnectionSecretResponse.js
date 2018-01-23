/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * private Jira connection secrets response
 *
 * @extends models['PrivateSharedConnectionResponse']
 */
class PrivateJiraConnectionSecretResponse extends models['PrivateSharedConnectionResponse'] {
  /**
   * Create a PrivateJiraConnectionSecretResponse.
   * @member {object} data jira secret details
   * @member {string} [data.baseUrl] baseUrl to connect to jira instance
   * @member {string} [data.username] username to connect to jira instance
   * @member {string} [data.password] password to connect to jira instance
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of PrivateJiraConnectionSecretResponse
   *
   * @returns {object} metadata of PrivateJiraConnectionSecretResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PrivateJiraConnectionSecretResponse',
      type: {
        name: 'Composite',
        className: 'PrivateJiraConnectionSecretResponse',
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
          },
          data: {
            required: true,
            serializedName: 'data',
            type: {
              name: 'Composite',
              className: 'JiraSecretDetails'
            }
          }
        }
      }
    };
  }
}

module.exports = PrivateJiraConnectionSecretResponse;
