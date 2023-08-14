import { LiaBatteryQuarterSolid, LiaCompressSolid, LiaTruckSolid, LiaUserTieSolid, LiaChartPieSolid, LiaArrowCircleRightSolid, LiaFilePdfSolid } from "react-icons/lia"
import { MdOutlineHomeRepairService } from "react-icons/md" 

export const menuItems = [
  {
    icon: <LiaBatteryQuarterSolid />,
    name: "bottles",
    active: true,
    data: {
      title: "bottle menu",
      body: [
        {
          ico: <LiaArrowCircleRightSolid />,
          text: "bottle fill"
        },
        {
          ico: <MdOutlineHomeRepairService />,
          text: "repairs"
        },
      ],
      footer: {
        ico: <LiaFilePdfSolid />,
        text: "reports"
      }
    }
  },
  {
    icon: <LiaCompressSolid />,
    name: "packs",
    data: {
      title: "pack menu",
      body: [
        {
        ico: <LiaArrowCircleRightSolid />,
        text: "bottle fill"
        },
        {
          ico: <MdOutlineHomeRepairService />,
          text: "repairs"
        },
      ],
      footer: {
        ico: <LiaFilePdfSolid />,
        text: "reports"
      }
    }
  },
  {
    icon: <LiaTruckSolid />,
    name: "apparatus",
    data: {
      title: "apparatus menu",
      body: [
        {
        ico: <LiaArrowCircleRightSolid />,
        text: "apparatus fill"
        },
        {
          ico: <MdOutlineHomeRepairService />,
          text: "repairs"
        },
      ],
      footer: {
        ico: <LiaFilePdfSolid />,
        text: "reports"
      }
    }
  },
  {
    icon: <LiaUserTieSolid />,
    name: "gear",
    data: {
      title: "gear menu",
      body: [
        {
        ico: <LiaArrowCircleRightSolid />,
        text: "gear fill"
        },
        {
          ico: <MdOutlineHomeRepairService />,
          text: "repairs"
        },
      ],
      footer: {
        ico: <LiaFilePdfSolid />,
        text: "reports"
      }
    }
  },
  {
    icon: <LiaChartPieSolid />,
    name: "training",
    data: {
      title: "training menu",
      body: [
        {
        ico: <LiaArrowCircleRightSolid />,
        text: "training fill"
        },
        {
          ico: <MdOutlineHomeRepairService />,
          text: "repairs"
        },
      ],
      footer: {
        ico: <LiaFilePdfSolid />,
        text: "reports"
      }
    }
  },
]