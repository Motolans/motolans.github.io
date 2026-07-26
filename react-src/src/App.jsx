import { useEffect, useState, useRef } from 'react'
import Navbar from './components/Navbar'
import LineChart from './components/LineChart'
import './App.css'

function App() {
  const[activeStep, setActiveStep] = useState(0)
  const stepRefs = useRef([])
  const colors = ["#f0f0f0", "#d4e8ff", "#d4ffd8"]
  console.log('activeStep', activeStep)

  useEffect(() => {
    // Create an Intersection Observer to track which step is currently in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          //entry.target.dataset.step gives us the index of the step that is currently in view. entry.target is the DOM element that is currently in view. We can use the data-step attribute to get the index of the step.
          const index = Number(entry.target.dataset.step)
          setActiveStep(index)
        }
      })
      //options object with threshold of 0.5 means that the observer will consider an element to be in view if at least 50% of it is visible in the viewport.
    }, { threshold: 0.5 })
  
    stepRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [stepRefs.current])


  return (
    <>
      <Navbar />
      <div style = {{display: "flex", paddingTop: "60px"}}>
        <div style={{
          position: "sticky",
          top: "60px",
          width: "50%",
          height: "calc(100vh - 60px)",
          background: colors[activeStep],
          transition: "background 0.6s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          
        }}>
         {/* <p>Active step: {activeStep}</p> */}
          <LineChart activeStep={activeStep} />
        </div>

        <div style={{width: "50%"}}>
          {[0,1,2].map((i)=>(
            <div
              key={i}
              ref={(el) => stepRefs.current[i] = el}
              data-step={i}
              style={{height: "100vh", padding: "2rem", border: "1px solid #ccc"}}
            >
              Step {i + 1} 
            </div>
          ))}
        </div>
      </div>
  </>
  )
}

export default App
