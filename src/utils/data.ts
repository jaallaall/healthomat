export const data = [
  {
    id: 1,
    name: "دکتر احسان",
    specialty: "گوش و حلق",
    code: "634234",
    address: ["1 آدرس", "2 آدرس"],
    view: 10,
    visit: 4,
    rate: 4,
  },
  {
    id: 2,
    name: "دکتر احسان",
    specialty: "گوش و حلق",
    code: "12435",
    address: ["1 آدرس", "2 آدرس"],
    view: 4,
    visit: 4,
    rate: 3.4,
  },
  {
    id: 3,
    name: "دکتر احسان",
    specialty: "گوش و حلق",
    code: "12435",
    address: ["1 آدرس", "2 آدرس"],
    view: 7,
    visit: 4,
    rate: 4.4,
  },
] as const;

export const list = [
  {
    id: 1,
    title: "شیوه ویزیت",
    sub: [
      { id: 1, title: "حضوری", value: "value1" },
      { id: 2, title: "تماس ویدویی", value: "value2" },
      { id: 3, title: "تماس تلفنی", value: "value3" },
    ],
  },
  {
    id: 2,
    title: "جنسیت",
    sub: [
      { id: 1, title: "زن", value: "male" },
      { id: 2, title: "مرد", value: "female" },
    ],
  },
  {
    id: 3,
    title: "دارای امکان پرسش و پاسخ؟",
    value: "value1",
  },
  {
    id: 4,
    title: "شیفت کاری",
    sub: [
      { id: 1, title: "6 صبح تا 12 ظهر", value: "value6" },
      { id: 2, title: "12 ظهر تا 6 بعد از ظهر", value: "value7" },
      { id: 3, title: "6 بعد از ظهر تا آخر شب", value: "value8" },
    ],
  },
];
