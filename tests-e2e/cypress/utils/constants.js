// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

export const FEEDBACK_EMAIL = 'test@example.com';
export const ABOUT_LINK = 'https://about.service-exchange.com/default-about/';
export const HELP_LINK = 'https://about.service-exchange.com/default-help/';
export const PRIVACY_POLICY_LINK = 'https://about.service-exchange.com/default-privacy-policy/';
export const REPORT_A_PROBLEM_LINK = 'https://about.service-exchange.com/default-report-a-problem/';
export const TERMS_OF_SERVICE_LINK = 'https://about.service-exchange.com/default-terms/';

export const CLOUD = 'Cloud';
export const E20 = 'E20';
export const TEAM = 'Team';

export const FixedCloudConfig = {
    EmailSettings: {
        FEEDBACK_EMAIL,
    },
    SupportSettings: {
        ABOUT_LINK,
        HELP_LINK,
        PRIVACY_POLICY_LINK,
        REPORT_A_PROBLEM_LINK,
        TERMS_OF_SERVICE_LINK,
    },
};

export const ServerEdition = {
    CLOUD,
    E20,
    TEAM,
};

export const Constants = {
    FixedCloudConfig,
    ServerEdition,
};

export const CustomStatusDuration = {
    DONT_CLEAR: '',
    THIRTY_MINUTES: 'thirty_minutes',
    ONE_HOUR: 'one_hour',
    FOUR_HOURS: 'four_hours',
    TODAY: 'today',
    THIS_WEEK: 'this_week',
    DATE_AND_TIME: 'date_and_time',
};

export default Constants;
