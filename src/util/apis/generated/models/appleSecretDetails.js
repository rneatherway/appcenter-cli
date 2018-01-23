/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Apple secret details
 *
 */
class AppleSecretDetails {
  /**
   * Create a AppleSecretDetails.
   * @member {string} username username to connect to apple store
   * @member {string} password password to connect to apple store
   */
  constructor() {
  }

  /**
   * Defines the metadata of AppleSecretDetails
   *
   * @returns {object} metadata of AppleSecretDetails
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AppleSecretDetails',
      type: {
        name: 'Composite',
        className: 'AppleSecretDetails',
        modelProperties: {
          username: {
            required: true,
            serializedName: 'username',
            type: {
              name: 'String'
            }
          },
          password: {
            required: true,
            serializedName: 'password',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AppleSecretDetails;
