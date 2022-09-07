import React, { ReactNode } from 'react'
import "./Skills.scss"
import { GithubFilled } from "@ant-design/icons";
const Skills = () => {
  const cards = [1,2,3,4,2]
  return (
    <div className='skills'>
      {
        cards.map((item : ReactNode) => {
          return <div className='skill-card'>
            <GithubFilled />
            <div className='card-title'>
              React
            </div>
          </div>
        })
      }
    </div>
  )
}

export default Skills