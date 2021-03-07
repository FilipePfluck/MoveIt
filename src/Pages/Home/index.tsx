import { useEffect, useState } from 'react'
import { GetServerSideProps, NextPage } from 'next'

import WithAuthentication from '../../components/AuthHOC'

import Sidebar from '../../components/SideBar'
import Dashboard from '../../components/Dashboard'
import Leaderboard from '../../components/LeaderBoard'

import * as S from './styles'



const Home: NextPage/* <Props> */ = (props) => {
    const [selected, setSelected] = useState('dashboard')

    return(
        <S.Wrap>
            <Sidebar selected={selected} setSelected={setSelected}/>

            {selected === 'dashboard' && <Dashboard/>}
            {selected === 'leaderboard' && <Leaderboard/>}

        </S.Wrap>
    )
}

export default WithAuthentication({Component: Home})