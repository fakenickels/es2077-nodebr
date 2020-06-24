import React from 'react'
import '@hpcc-js/wasm'
import * as d3 from 'd3'
import 'd3-graphviz'

export const Graph = ({children}) => {
  const ref = React.createRef()
  console.log(children.props.children.props.children)

  React.useEffect(() => {
    d3.select(ref.current).graphviz()
      .renderDot('digraph  {a -> b}');
  }, [])

  return (
    <div ref={ref} style={{height: '400px', width: '400px'}}>
    </div>
  )
}