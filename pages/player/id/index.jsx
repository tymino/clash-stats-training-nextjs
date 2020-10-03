import React from 'react';
import Head from 'next/head';
import s from '../../../styles/PlayerID.module.sass';
import { useRouter } from 'next/router';

import MainInfo from '../../../components/MainInfo/MainInfo';
import Clan from '../../../components/Clan/Clan';
import League from '../../../components/League/League';
import TownTemplate from '../../../components/TownTemplate/TownTemplate';
import Achievements from '../../../components/Achievements/Achievements';
import Troops from '../../../components/Troops/Troops';


export default function PlayerID(props) {
  const router = useRouter();

  if (props.reason == 'notFound') {
    router.push({
      pathname: '/player',
      query: { error: 'Player not found!' }
    });
    return null;
  }

  return (
    <div className={s.PlayerID}>
      <Head>
        <title>{`${props.name} | Clash stats`}</title>
      </Head>

      <div className={s.wrapper}>
        <div className={s.mainContent}>
          <MainInfo
            tag={props.tag}
            name={props.name}
            expLevel={props.expLevel}
          />
          <League prop={props} />
        </div>
        <Clan prop={props} />
      </div>
      <div className={s.townWrap}>
        <TownTemplate
          title='Town hall'
          townLvl={props.townHallLevel}
          townHallWeaponLevel={props.townHallWeaponLevel}
          attackWins={props.attackWins}
          defenseWins={props.defenseWins}
          versusTrophies=''
          bestVersusTrophies=''
          versusBattleWins=''
        />
        <TownTemplate
          title='Builder hall'
          townLvl={props.builderHallLevel}
          townHallWeaponLevel=''
          attackWins=''
          defenseWins=''
          versusTrophies={props.versusTrophies}
          bestVersusTrophies={props.bestVersusTrophies}
          versusBattleWins={props.versusBattleWins}
        />
      </div>
      <div className={s.TroopsWrap}>
        <Troops
          troops={props.troops}
          heroes={props.heroes}
          spells={props.spells}
        />
      </div>
      <div>
        <Achievements
          data={props.achievements}
        />
      </div>
    </div>
  )
}

export async function getServerSideProps({ query: { id } }) {
  const ID = id.replace('#', '%23');

  const response = await fetch(`${process.env.CLASH_PLAYER_URL}${ID}`, {
    headers: {
      "Accept": "application/json",
      "authorization": `Bearer ${process.env.TOKEN}`,
    },
  });
  
  const data = await response.json();

  return {
    props: data
  }
}