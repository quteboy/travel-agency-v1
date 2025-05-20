import React from 'react'
import {Header} from "../../../components";

const dashboard = () => {
  const user = {name:'Adrian'}
  return (
    <div className='dashboard wrapper'>
      <Header
        title={`Welcome ${user.name}`}
        description={`Track activities, trends and popular destinations`}
      />
    </div>
  )
}

export default dashboard