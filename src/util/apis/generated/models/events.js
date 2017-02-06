/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the Events class.
 * @constructor
 * @member {array} [eventsProperty]
 * 
 * @member {number} [total] the total count of events
 * 
 * @member {number} [totalDevices] the active device over this period
 * 
 */
function Events() {
}

/**
 * Defines the metadata of Events
 *
 * @returns {object} metadata of Events
 *
 */
Events.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'Events',
    type: {
      name: 'Composite',
      className: 'Events',
      modelProperties: {
        eventsProperty: {
          required: false,
          serializedName: 'events',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'EventElementType',
                type: {
                  name: 'Composite',
                  className: 'Event'
                }
            }
          }
        },
        total: {
          required: false,
          serializedName: 'total',
          type: {
            name: 'Number'
          }
        },
        totalDevices: {
          required: false,
          serializedName: 'total_devices',
          type: {
            name: 'Number'
          }
        }
      }
    }
  };
};

module.exports = Events;