import React from 'react'
import { useParams } from 'react-router-dom'

const Job = () => {
    const { id } = useParams()
  return (
    <div>Job {id}</div>
  )
}

export default Job