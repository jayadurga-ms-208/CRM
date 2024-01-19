import React from 'react'

import { FunnelChart } from 'react-funnel-pipeline'
import 'react-funnel-pipeline/dist/index.css'
import Bar from 'recharts';



const Pipeline = () => {
  return (<>
    <FunnelChart showValues={false} pallette={["#32CD32","#9ACD32","#FFDE2E","#FFBC1D","#FF9636","#FF5C4D","transparent","transparent"]}
    chartWidth={200} chartHeight={200} heightRelativeToValue={true}
        data={[
          { name: '$48,872', value: 40 },
          { name: '$32,724', value: 40 },
          { name: '$78,934', value:40 },
          { name: '$30,458', value: 40 },
          { name: '$37,480', value: 40 },
          { name: '', value: 0 },
          { name: '', value: 0 },
        ]}
      />
  </>
  )
}

export default Pipeline;