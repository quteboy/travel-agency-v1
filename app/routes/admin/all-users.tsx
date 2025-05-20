import React from 'react'
import {Header} from "../../../components";

const AllUsers = () => {
  const user = {name:'Adrian'}
  return (
    <div>
      <Header
          title={`Welcome ${user.name}`}
          description={`Track activities, trends and popular destinations`}
      />
    </div>
  )
}

export default AllUsers