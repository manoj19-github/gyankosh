import React, { FC } from 'react'
import Pagination from '../pagination'

interface CardListProps{}
const CardList:FC<CardListProps> = () => {
  return (
    <div>
        <Pagination/>
    </div>
  )
}


export default CardList