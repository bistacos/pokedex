import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import NavBar from "../components/navbar"


const SearchPage = () => (
  <Layout>
    <NavBar />
    <h1>Hi from the Search page</h1>
    <p></p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SearchPage
