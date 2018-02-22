import React from 'react'

function LandingOutcome({ success, land_success, landing_type }) {
  if (!success) {
    return <span className='fail' style={{ fontWeight: 600 }}>{`// Failure \\\\`}</span>
  }
  if (landing_type != null) {
    let className
    let text
    if (landing_type === 'Ocean') {
      text = 'Water landing'
      className = 'neutral'
    } else if (land_success) {
      text = 'Landed'
      className = 'success'
    } else {
      text = 'Landing fail'
      className = 'fail'
    }
    return <span className={`landing ${className}`}>{text}</span>
  }
  return null
}

export default function ({ success, rocket }) {
  return (
    <div className='caption'>
      <span className='name'>{rocket.second_stage.payloads[0].payload_id}</span>
      <span className='outcome'>
        <LandingOutcome success={success} {...rocket.first_stage.cores[0]} />
      </span>
    </div>
  )
}
