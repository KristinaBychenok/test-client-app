import { Client } from "./clients-page.types";

export const clients: Client[] = [
  {
    id: "1",
    name: "Client #1",
    reports: [
      {
        id: "1",
        name: "Report #1",
        data: [
          {
            id: "1",
            src: "data:image/png;base64,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",
            name: "Circle",
          },
          {
            id: "2",
            src: "https://www.pngmart.com/files/13/Square-PNG-Transparent-Picture.png",
            name: "Square",
          },
          {
            id: "3",
            src: "https://i.pinimg.com/1200x/86/82/26/868226ebd71b81071cd9696b3b5fca5e.jpg",
            name: "Rhombus ",
          },
          {
            id: "4",
            src: "https://globalsymbols.com/uploads/production/image/imagefile/16566/17_16567_3859a949-6aea-4be0-9c6c-4e2bcd1c95d4.png",
            name: "Crooked line",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "Client #2",
    reports: [
      { id: "1", name: "Report #1", data: [] },
      { id: "2", name: "Report #2", data: [] },
    ],
  },
];
