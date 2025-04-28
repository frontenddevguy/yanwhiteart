const files = [
  "echoes-screenprint-1.jpg",
  "echoes-screenprint-2.jpg",
  "echoes-screenprint-3.jpg",
  "echoes-screenprint-4.jpg",
  "echoes-screenprint-5.jpg",
  "echoes-screenprint-6.jpg",
  "echoes-screenprint-7.jpg",
  "echoes-screenprint-8.jpg",
  "echoes-screenprint-9.jpg",
  "echoes-screenprint-10.jpg",
];

const jsonOutput = files.map(name => {
  // Extract number before .jpg
  const numberMatch = name.match(/-(\d+)\.jpg$/);
  const numberPart = numberMatch ? numberMatch[1] : '0';

  return {
    title: `echoes-${numberPart}`,
    filename: `echoes/${name.replace('/', '')}`,
    tags: ["echoes", "2024", "screenprint"],
    caption: [`Echo ${numberPart} - screenprint, 28.5 x 19.5cm (2025)`]
  };
});

console.log(JSON.stringify(jsonOutput, null, 2));