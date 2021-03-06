/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * URL that can be used to check the status of the update devices operation and
 * the updated profiles.
 *
 */
class ResignAttemptResponse {
  /**
   * Create a ResignAttemptResponse.
   * @property {string} status The status of the resigning operation.
   * @property {string} userId ID of the user performing the resign operaiton.
   * @property {string} appId App ID that the resign operation is being
   * performed against.
   * @property {number} originalReleaseId ID of the release which is being
   * resigned.
   * @property {string} resignId ID of the resign operation.
   * @property {string} contextId Context ID for the resigning operation.
   * @property {number} startTime The time that the resign operation was
   * started.
   * @property {array} [destinations] List of destinations that the resign
   * operation is being performed against.
   * @property {string} [errorCode] Error code associated with the exception.
   * @property {string} [errorMessage] Error message associated with the
   * exception.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ResignAttemptResponse
   *
   * @returns {object} metadata of ResignAttemptResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ResignAttemptResponse',
      type: {
        name: 'Composite',
        className: 'ResignAttemptResponse',
        modelProperties: {
          status: {
            required: true,
            serializedName: 'status',
            type: {
              name: 'String'
            }
          },
          userId: {
            required: true,
            serializedName: 'userId',
            type: {
              name: 'String'
            }
          },
          appId: {
            required: true,
            serializedName: 'appId',
            type: {
              name: 'String'
            }
          },
          originalReleaseId: {
            required: true,
            serializedName: 'originalReleaseId',
            type: {
              name: 'Number'
            }
          },
          resignId: {
            required: true,
            serializedName: 'resignId',
            type: {
              name: 'String'
            }
          },
          contextId: {
            required: true,
            serializedName: 'contextId',
            type: {
              name: 'String'
            }
          },
          startTime: {
            required: true,
            serializedName: 'startTime',
            type: {
              name: 'Number'
            }
          },
          destinations: {
            required: false,
            serializedName: 'destinations',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ObjectElementType',
                  type: {
                    name: 'Object'
                  }
              }
            }
          },
          errorCode: {
            required: false,
            serializedName: 'errorCode',
            type: {
              name: 'String'
            }
          },
          errorMessage: {
            required: false,
            serializedName: 'errorMessage',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ResignAttemptResponse;
