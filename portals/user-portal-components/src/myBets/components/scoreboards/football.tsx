import * as React from 'react';
import rem from 'polished/lib/helpers/rem';
import styled from '@emotion/styled';
import { colors } from '@heathmont/sportsbet-tokens';
import { spacing } from '@heathmont/sportsbet-utils';
import { Market } from '../shared/market';
import { Selection } from '../shared/selections';
import { EventProps } from './scoreboard';
import { ScoreBoardHeader } from './header';

export type FootballProps = {
  event: EventProps;
  timer: string;
  badges?: React.FC[];
};

const FootballCard = styled.div({
  display: 'flex',
  backgroundColor: colors.neutral[90],
  maxWidth: rem(320),
  flexWrap: 'wrap',
  justifyContent: 'center',
});

const Score = styled.span({
  color: colors.neutral[10],
  textAlign: 'center',
  alignSelf: 'center',
  fontSize: rem(32),
  lineHeight: rem(30),
});

const ScoreSeparator = styled.span({
  color: colors.neutral[20],
  margin: `0 ${spacing('xsmall')}`,
});

const Logos = styled.div({
  paddingLeft: spacing('medium'),
  paddingRight: spacing('medium'),
  height: rem(80),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexGrow: 1,
});

const Logo = styled.div(onClick => [
  {
    height: '100%',
    width: rem(88),
    textAlign: 'center',
    padding: spacing('small'),
    img: {
      maxWidth: '100%',
      maxHeight: '100%',
    },
  },
  onClick && { cursor: 'pointer' },
]);

const Competitors = styled.div(() => [
  {
    height: rem(40),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexGrow: 1,
    paddingLeft: spacing('small'),
    paddingRight: spacing('small'),

    span: {
      width: rem(120),
      textAlign: 'center',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      maxHeight: '100%',
    },
  },
]);

export const FootballScoreboard = ({ event, timer, badges }: FootballProps) => {
  const { onClick } = event;

  return (
    <FootballCard>
      <ScoreBoardHeader
        title={event.name}
        timer={timer}
        onClick={onClick}
        badges={badges}
      />
      <Logos>
        <Logo onClick={onClick}>
          <img
            alt={event.competitors.home.name}
            src={event.competitors.home.image}
          />
        </Logo>
        <Score>
          <span>{event.information.homeScore}</span>
          <ScoreSeparator>:</ScoreSeparator>
          <span>{event.information.awayScore}</span>
        </Score>
        <Logo onClick={onClick}>
          <img
            alt={event.competitors.away.name}
            src={event.competitors.away.image}
          />
        </Logo>
      </Logos>
      <Competitors>
        <span>{event.competitors.home.name}</span>
        <span>{event.competitors.away.name}</span>
      </Competitors>
      <Selection selection={event.market.selection} />
      <Market
        onClick={onClick}
        market={event.market}
        marketCount={event.marketCount}
        videoStream={event.videoStream}
      />
    </FootballCard>
  );
};