type SubheaderType =
  | {
      content: string;
      child: string;
    }
  | string;

type ProgramFlowRow = {
  header: string;
  subheader: SubheaderType[];
  time: string;
};

const programFlow: ProgramFlowRow[] = [
  {
    header: "Registration",
    subheader: [],
    time: "7:30AM - 8:30AM",
  },
  {
    header: "Opening Program",
    subheader: ["Invocation", "Philippine National Anthem", "WVSU Hymn"],
    time: "8:30AM - 9:00AM",
  },
  {
    header: "Opening Remarks",
    subheader: ["Cedrick Angelo Rico, President"],
    time: "",
  },
  {
    header: "Message",
    subheader: ["Dr. Ma. Beth S. Concepcion, Dean @ CICT"],
    time: "",
  },
  {
    header: "Intermission Number",
    subheader: ["CICT Dance Group"],
    time: "",
  },

  {
    header: "Talks",
    subheader: [
      "Speaker 1",
      "Intermission Number",
      "Speaker 2",
      "Q&A",
      "Instructions",
    ],
    time: "9:00AM - 12:00PM",
  },
  {
    header: "Lunch",
    subheader: [],
    time: "12:00PM - 1:00PM",
  },
  {
    header: "Clash of Coders - Pitching",
    subheader: [],
    time: "1:00PM - 4:00PM",
  },
  {
    header: "CICT Pro Motion - CICT Promotional Video",
    subheader: [],
    time: "4:00PM - 5:00PM",
  },
  {
    header: "SineStorya - Film Showing",
    subheader: [],
    time: "5:00PM - 6:30PM",
  },
  {
    header: "Awarding and Closing Program",
    subheader: ["Emmanuel John Francisco, VP for Programs @ Link.exe"],
    time: "6:30PM - 8:00PM",
  },
];

export default programFlow;
