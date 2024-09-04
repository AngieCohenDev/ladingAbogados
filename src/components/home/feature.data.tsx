import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Experiencia Comprobada',
    description: 'Contamos con un equipo de abogados altamente capacitados y con años de experiencia en diversas áreas del derecho',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'Atención Personalizada',
    description: 'Cada cliente es único, por eso ofrecemos un enfoque individualizado para entender y resolver sus necesidades legales específicas',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Compromiso y Transparencia',
    description: 'Nos comprometemos a mantener una comunicación clara y honesta durante todo el proceso',
    icon: <LocalLibraryIcon />,
  },
  {
    title: 'Resultados Sólidos',
    description: 'Nos enfocamos en obtener los mejores resultados posibles para nuestros clientes, ya sea a través de una resolución amistosa, una negociación exitosa, o una defensa vigorosa en tribunales.',
    icon: <ContactSupportIcon />,
  },
]
