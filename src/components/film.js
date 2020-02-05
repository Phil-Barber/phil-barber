import React from 'react'
import Layout from './layout'

export default ({ children, filmTitle, filmPoster }) => (
  <Layout>
    <h1>{filmTitle}</h1>
    {children}
    <img src={filmPoster} alt={`${filmTitle} Poster`} />
  </Layout>
)

