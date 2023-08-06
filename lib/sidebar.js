import { CiLaptop } from "react-icons/ci"
import { LiaBatteryQuarterSolid, LiaCompressSolid, LiaTruckSolid, LiaUserTieSolid, LiaChartPieSolid } from "react-icons/lia"

export const menu = [
  {
    icon: <CiLaptop />,
    name: "dashboard",
  },
  {
    icon: <LiaBatteryQuarterSolid />,
    name: "bottles",
    active: true
  },
  {
    icon: <LiaCompressSolid />,
    name: "packs",
  },
  {
    icon: <LiaTruckSolid />,
    name: "apparatus",
  },
  {
    icon: <LiaUserTieSolid />,
    name: "gear",
  },
  {
    icon: <LiaChartPieSolid />,
    name: "training",
  },
]