import { useRouter } from 'next/router'

import React from 'react'
export default function blog() {
  const router=useRouter()
  const slug=router.query.slug
  return (
    <>
    {console.log(router)}
    <div>{slug}</div>
    </>
  )
}

