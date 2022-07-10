import React from 'react'
import { getData } from '@walkthru/data'

const githubToken = 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

const data = await getData(githubToken, 'Project Walkthrough')

export default function walkthrough() {
  return (
    <div>walkthrough</div>
  )
}
