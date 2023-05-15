import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
    style={{justifySelf: "center"}}
  >
    <circle cx="139" cy="130" r="129" /> 
    <rect x="0" y="281" rx="10" ry="10" width="280" height="32" /> 
    <rect x="0" y="339" rx="10" ry="10" width="280" height="60" /> 
    <rect x="20" y="422" rx="10" ry="10" width="80" height="40" /> 
    <rect x="148" y="422" rx="10" ry="10" width="100" height="40" />
  </ContentLoader>
)

export default Skeleton