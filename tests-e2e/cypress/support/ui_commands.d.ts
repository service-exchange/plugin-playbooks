// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

/// <reference types="cypress" />

// ***************************************************************
// Each command should be properly documented using JSDoc.
// See https://jsdoc.app/index.html for reference.
// Basic requirements for documentation are the following:
// - Meaningful description
// - Specific link to https://api.service-exchange.com
// - Each parameter with `@params`
// - Return value with `@returns`
// - Example usage with `@example`
// Custom command should follow naming convention of having `ui` prefix, e.g. `uiWaitUntilMessagePostedIncludes`.
// ***************************************************************

declare namespace Cypress {
    interface Chainable {

        /**
         * Wait for a message to get posted as the last post.
         * @param {string} message - message to check if includes in the last post
         * @returns {boolean} returns true if found or fail a test if not.
         *
         * @example
         *   const message = 'message';
         *   cy.postMessage(message);
         *   cy.uiWaitUntilMessagePostedIncludes(message);
         */
        uiWaitUntilMessagePostedIncludes(message: string): boolean;

        /**
         * Get nth post from the post list
         * @param {number} index - an identifier of a post
         * - zero (0)         : oldest post
         * - positive number  : from old to latest post
         * - negative number  : from new to oldest post
         * @returns {Response} response: Cypress-chainable response
         *
         * @example
         *   cy.uiGetNthPost(-1);
         */
        uiGetNthPost(index: number): Chainable<Response>;

        /**
         * Post message via center textbox by directly injected in the textbox
         * @param {string} message - message to be posted
         * @returns void
         *
         * @example
         *  cy.uiPostMessageQuickly('Hello world')
         */
        uiPostMessageQuickly(message: string): void;

        /**
         * Verify the receipt of a message containing the given message substring.
         * An exact match is avoided to simplify tests.
         * @param {string} message - message to check if included in the last ephemeral post
         */
        verifyPostedMessage(message: string): void;

        /**
         * Verify the receipt of an ephemeral message containing the given message substring.
         * An exact match is avoided to simplify tests.
         * @param {string} message - message to check if included in the last ephemeral post
         * @param {boolean} isCompactMode - external knowledge of whether compact mode is enabled
         * @param {boolean} needsToScroll - whether Cypress should try scrolling to see the message
         */
        verifyEphemeralMessage(message: string, isCompactMode: boolean, needsToScroll: boolean): void;
    }
}
