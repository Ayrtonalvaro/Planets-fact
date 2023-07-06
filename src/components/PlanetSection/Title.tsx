import React from 'react'

interface titleProps {
  name: string | undefined
}

const Title: React.FC<titleProps> = ({ name }) => {
  return <h1 className="text-white text-6xl uppercase">{name}</h1>
}

export default Title
