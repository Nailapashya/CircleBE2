import { Box } from '@mui/material'
import { COLOR } from "../utils/constant/color"
import Sidebar from '../components/Sidebar'

const Rootlayout = () => {
  return (
    <Box
    sx={{
        display: "flex",
        height: "100vh",
        width: "100%",
        bgcolor: COLOR.BG_COLOR,
        color: "#fff"
    }}>
       <Box flex={1} >
        <Sidebar/>
       </Box>
       <Box flex={2.5} sx={{borderLeft: "1px solid #3f3f3f", borderRight: "1px solid #3f3f3f" }}></Box>
       <Box flex={1.5}></Box>
    </Box>

  )
}

export default Rootlayout