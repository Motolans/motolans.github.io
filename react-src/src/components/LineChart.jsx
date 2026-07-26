import { useEffect, useRef } from 'react'
import * as d3 from 'd3'

const datasets = [[10, 40, 15, 60, 30, 80, 55], [50,20,70,35,90,25,65]] 

// margin object to define the margins around the chart. This is a common practice in D3 to create space for axes and labels. The width and height of the chart are calculated by subtracting the left and right margins from the total width, and the top and bottom margins from the total height, respectively.
const margin = { top: 20, right: 30, bottom: 40, left: 40 }
const width = 400 - margin.left - margin.right
const height = 300 - margin.top - margin.bottom

export default function LineChart({ activeStep}) {
    const svgRef = useRef(null)

    useEffect(() => {
        //moved data inside useEffect to ensure it is available when the chart is rendered. The activeStep prop is used to determine which dataset to display. If activeStep is out of bounds (e.g., negative or greater than the number of datasets), it falls back to the first dataset to prevent errors.
        const data = datasets[activeStep] ?? datasets[0] // Fallback to first dataset if activeStep is out of bounds
        console.log("Rendering chart with data:", data)
        if(!svgRef.current) {
            console.error("SVG ref is null, cannot render chart")
            return
        }

        d3.select(svgRef.current).selectAll("*").remove() // Clear previous chart before rendering new one

        const svg = d3.select(svgRef.current)

        // Scales: xScale maps the index of the data points to the width of the chart, while yScale maps the data values to the height of the chart. The yScale is inverted (height to 0) because in SVG, the y-axis increases downwards.
        const xScale = d3.scaleLinear()
        // The xScale is defined with a domain from 0 to the length of the data array minus one (since array indices start at 0), and a range from 0 to the width of the chart. This means that the first data point will be at x=0, and the last data point will be at x=width.
            .domain([0, data.length - 1])
            .range([0, width])

        const yScale = d3.scaleLinear()
            .domain([0, 100])
            .range([height, 0])

        // Line generator: The line generator is a function that takes the data and returns a path string that can be used in an SVG path element. It uses the xScale and yScale to convert data points into pixel coordinates.
        const line = d3.line()
            .x((d, i) => xScale(i))
            .y(d => yScale(d))
        
        // Append a group element to the SVG and apply a transform to account for the margins. This group will contain the line path and the axes.
        const g = svg.append('g')
        // The transform attribute is used to move the group element to the right and down by the left and top margins, respectively. This ensures that there is space for the axes and labels on the left and top sides of the chart.
            .attr('transform', `translate(${margin.left},${margin.top})`)

        g.append('path')
            .datum(data)
            .attr('fill', 'none')
            .attr('stroke', 'steelblue')
            .attr('stroke-width', 2)
            .attr('d', line)

        g.append('g')
            .attr('transform', `translate(0,${height})`)
            .call(d3.axisBottom(xScale).ticks(data.length - 1))

        g.append('g')
            .call(d3.axisLeft(yScale))
    }, [activeStep])

    return (
        <svg ref={svgRef} width={width + margin.left + margin.right} height={height + margin.top + margin.bottom}></svg>
    )
    
}