const languageData = [
    [
        'npm install --save-dev calenda', 'terminal'
    ],
    [
        `Import Calenda from 'calenda'

const calendar = new Calenda({
  month: 'January'
});`, 'javascript'
    ],
    [
        `calendar.getStructure().structure;`, 'javascript'
    ],
    [
        `{
  Sun: [ 0, 3, 10, 17, 24, 31 ],
  Mon: [ 0, 4, 11, 18, 25 ],
  Tue: [ 0, 5, 12, 19, 26 ],
  Wed: [ 0, 6, 13, 20, 27 ],
  Thu: [ 0, 7, 14, 21, 28 ],
  Fri: [ 1, 8, 15, 22, 29 ],
  Sat: [ 2, 9, 16, 23, 30 ]
}`, 'terminal'
    ],
    [
        `calendar.getStructure().getInfo(1, {
  dayNumber: true,
  dayOfWeek: true,
  monthOfYear: true,
  year: true,
  suffix: true
})`, 'javascript'
    ],
    [
        `{
  dayNumber: 1,
  dayOfWeek: 'Fri',
  monthOfYear: 'January',
  year: 2021,
  suffix: 'st'
}`, 'terminal'
    ],
    [
        `calendar.moveMonth('forward').getStructure().getInfo(1, {
  dayNumber: true,
  dayOfWeek: true,
  monthOfYear: true,
  year: true,
  suffix: true
})`, 'javascript'
    ],
    [
        `{
  dayNumber: 1,
  dayOfWeek: 'Mon',
  monthOfYear: 'February',
  year: 2021,
  suffix: 'st'
}`, 'terminal'
    ]
];
export default languageData;