import { useState } from 'react'

import Sidebar from '../../components/SideBar'
import Dashboard from '../../components/Dashboard'
import Leaderboard from '../../components/LeaderBoard'

import * as S from './styles'


const Home = () => {
    const [selected, setSelected] = useState('dashboard')

    return(
        <S.Wrap>
            <Sidebar selected={selected} setSelected={setSelected}/>

            {selected === 'dashboard' && <Dashboard/>}
            {selected === 'leaderboard' && <Leaderboard/>}

        </S.Wrap>
    )
}

export default Home