import React from "react"
import styled from "styled-components"

let FooterGroup = styled.div`
  background: #f1f3f5;
  padding: 50px 0;
  display: grid;
  grid-gap: 20px;
`

const Text = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #486791;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
`

const Button = styled.button`
  font-size: 24px;
  color: white;
  border: none;
  padding: 16px 60px;
  font-weight: 600;
  background: linear-gradient(102.24deg, #9b51e0 0%, #3436e7 100%);
  box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
  border-radius: 30px;
  justify-self: center;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    transform: translateY(-3px);
  }
`

let LinkGroup = styled.div`
  width: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  a {
    color: #5334f5;
    font-size: 20px;
    font-weight: 500;
    margin: 10px;
    transition: 1s;
  }

  a:hover {
    color: black;
  }
`
const Copyright = styled.div`
    color: #486791
    max-width: 500px;
    margin: 0 auto;
    padding: 0 20px;
`

const Footer = ({ data, children }) => (
  <FooterGroup>
    <Text>
      Maxwell is our lord and savior, the true man warrior of the south west
    </Text>
    <Button>Tweet</Button>
    <LinkGroup>
      {" "}
      {data.allContentfulLink.edges.map(edge => (
        <a href={edge.node.url}>{edge.node.title}</a>
      ))}
    </LinkGroup>
    <Copyright> {children}</Copyright>
  </FooterGroup>
)

export default Footer
