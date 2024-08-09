import React from 'react'
import { CenterPhrase } from './NavBar/Menu'
import { styled } from 'styled-components'

const Phrase=styled(CenterPhrase)`
  z-index:0;

`
function Page404() {
  return (
    <div><Phrase>
        ЭТОТ РАЗДЕЛ<br/>НАХОДИТСЯ В РАЗРАБОТКЕ.
        </Phrase></div>
  )
}

export default Page404