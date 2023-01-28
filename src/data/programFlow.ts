type ProgramFlowRow = {
  header: string;
  subheader: string[];
  time: string;
};

const programFlow: ProgramFlowRow[] = [
  {
    header: "Opening Hymn",
    subheader: ["National Anthem", "Prayer", "National Anthem"],
    time: "9:00",
  },
  {
    header: "Opening Remarks",
    subheader: ["Dr. Ma. Beth S. Conception, Dean"],
    time: "9:10",
  },
  {
    header: "Event Proper",
    subheader: [],
    time: "9:15",
  },
  {
    header: "Presentation of Groups",
    subheader: [
      "Video Presentation of Each group",
      "Presentation of Activities",
    ],
    time: "9:25",
  },
];

export default programFlow;
