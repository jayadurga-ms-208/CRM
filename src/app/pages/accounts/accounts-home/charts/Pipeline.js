import React from 'react'

import { FunnelChart } from 'react-funnel-pipeline'
import 'react-funnel-pipeline/dist/index.css'



const Pipeline = () => {
  return (<>
    <FunnelChart  showValues={false} pallette={["#32CD32","#9ACD32","#FFDE2E","#FFBC1D","#FF9636","#FF5C4D","transparent","transparent"]}
    chartWidth={350} chartHeight={250} heightRelativeToValue={true}
        data={[
          { name: 'Enquiry', value: 40 },
          { name: 'Qualifying', value: 40 },
          { name: 'Proposal', value:40 },
          { name: 'Demo', value: 40 },
          { name: 'Negotiation', value: 40 },
          { name: 'Won Lost', value: 40 },
          { name: '', value: 0 },
          { name: '', value: 0 },


        ]}
      />
  </>
  )
}

export default Pipeline




