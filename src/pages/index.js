import React from "react"
import Layout from "../components/layout"
import NavBar from "../components/navbar"

const IndexPage = () => (

  <div>
    <Layout>
      <NavBar />
      <h1>Welcome!</h1>
      <p>This is the Pokédex-viewing site you've always wanted...</p>
      <div>
        <p>
          ...ever since you've heard that there was a
          {` `}
          <a href="https://pokeapi.co/">PokéAPI</a>
        </p>
      </div>
      <div>
        {/* <img src="https://nerdist.com/wp-content/uploads/2019/05/Bulba-1200x676.png" alt="" /> */}
      </div>
    </Layout>
  </div>
)

export default IndexPage
