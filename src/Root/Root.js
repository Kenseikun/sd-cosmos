import React from 'react'

import RootContext from "../context";

const Root = () => {
  return (
    <RootContext.Provider value={{}}>
      <div>
        <p>Test</p>
      </div>
    </RootContext.Provider>
  )
}

export default Root

