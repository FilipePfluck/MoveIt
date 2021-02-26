import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'

import { useContext } from 'react'

import { ChallengeContext } from '../../contexts/ChallengesContext'

import * as S from './styles'

const LevelUpModal = () => {
    const { level, closeLevelUpModal } = useContext(ChallengeContext)

    const variants = {
        active: {
            scale: 1,
            opacity: 1,
            transition: {
                delay: 1
            }
        },
        inactive: {
          scale: 0,
          opacity: 0,
        }
    }

    const overlay = {
        visible: {
            opacity: 1,
            transition: {
                delay: 1
            }
        },
        hidden: {opcaity: 0},
        
    }

    return ( 
        <AnimatePresence exitBeforeEnter>
            <S.Overlay
                variants={overlay}
                initial="hidden"
                animate="visible"
            >
                <S.Container
                    variants={variants}
                    initial="inactive"
                    animate="active"
                    
                >
                    <header>{level}</header>

                    <strong>Parabéns</strong>
                    <p>Você alcançou um novo level</p>

                    <button type="button" onClick={closeLevelUpModal}>
                        <img src="/icons/close.svg" alt="Fechar modal"/>
                    </button>
                </S.Container>
            </S.Overlay>
        </AnimatePresence>
    )
}

export default LevelUpModal