/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Jira connection secrets
 *
 * @extends models['SharedConnectionRequest']
 */
class JiraConnectionSecretRequest extends models['SharedConnectionRequest'] {
  /**
   * Create a JiraConnectionSecretRequest.
   * @member {object} data jira secret details
   * @member {string} [data.baseUrl] baseUrl to connect to jira instance
   * @member {string} [data.username] username to connect to jira instance
   * @member {string} [data.password] password to connect to jira instance
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of JiraConnectionSecretRequest
   *
   * @returns {object} metadata of JiraConnectionSecretRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'JiraConnectionSecretRequest',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'serviceType',
          clientName: 'serviceType'
        },
        uberParent: 'SharedConnectionRequest',
        className: 'JiraConnectionSecretRequest',
        modelProperties: {
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
            isPolymorphicDiscriminator: true,
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

module.exports = JiraConnectionSecretRequest;
