// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React, {ReactNode, ReactNodeArray} from 'react';
import {useSelector} from 'react-redux';

import {GlobalState} from '@service-exchange/types/store';
import {Team} from '@service-exchange/types/teams';
import {getChannelsNameMapInCurrentTeam} from 'service-exchange-redux/selectors/entities/channels';

import {ChannelNamesMap} from 'src/types/backstage';
import {UpdateBody} from 'src/components/rhs/rhs_shared';

interface Props {
    text: string;
    team: Team;
    children?: ReactNode | ReactNodeArray;
    className?: string;
}

const PostText = (props: Props) => {
    const channelNamesMap = useSelector<GlobalState, ChannelNamesMap>(getChannelsNameMapInCurrentTeam);

    // @ts-ignore
    const {formatText, messageHtmlToComponent} = window.PostUtils;

    const markdownOptions = {
        singleline: false,
        mentionHighlight: true,
        atMentions: true,
        team: props.team,
        channelNamesMap,
    };

    return (
        <UpdateBody className={props.className}>
            {messageHtmlToComponent(formatText(props.text, markdownOptions), true, {})}
            {props.children}
        </UpdateBody>
    );
};

export default PostText;
