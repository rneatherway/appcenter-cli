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
 * Returns a list of all issues associated with a repo
 *
 */
class BugTrackerIssuesResult {
  /**
   * Create a BugTrackerIssuesResult.
   * @property {array} [issues]
   */
  constructor() {
  }

  /**
   * Defines the metadata of BugTrackerIssuesResult
   *
   * @returns {object} metadata of BugTrackerIssuesResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BugTrackerIssuesResult',
      type: {
        name: 'Composite',
        className: 'BugTrackerIssuesResult',
        modelProperties: {
          issues: {
            required: false,
            serializedName: 'issues',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'BugTrackerIssuesResultIssuesItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'BugTrackerIssuesResultIssuesItem'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = BugTrackerIssuesResult;
