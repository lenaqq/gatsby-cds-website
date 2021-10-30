import * as React from "react";
import Layout from "../../Components/layout"
import { graphql, Link } from 'gatsby'

const Blog = ({ data }) => {
    console.log(data);

    return (
        <div>
            <Layout pageTitle='Blog' pageHeading='Blog'>
                    { data.allMdx.nodes.map(node => {
                        return <article key={node.id}>
                                <Link to={node.slug}>
                                <h2>{ node.frontmatter.title } </h2>
                                </Link>
                                <p>{ node.frontmatter.date } </p>
                            </article>
                    })}
            </Layout>
        </div>
    )
}

export const data = graphql`
query  {
    allMdx(sort: {fields: frontmatter___date}) {
      nodes {
        frontmatter {
          date(formatString: "dddd, MMMM Do YYYY")
          title
        }
        id
        slug
      }
    }
  }
`

export default Blog;