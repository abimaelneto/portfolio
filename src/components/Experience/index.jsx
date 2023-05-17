import { Box, Card, Stack, Typography } from "@mui/material";
import { ExperienceCard } from "./components/ExperienceCard/index";
import { format } from "date-fns";

import { ChartHeader, Year, Month } from "./styles";
const projects = [
  {
    title: "U-Get",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mattis justo. Etiam vitae viverra sapien. In et urna id nulla scelerisque mattis et quis sem. Fusce aliquam, lorem sit amet rutrum ullamcorper, felis nibh placerat felis, in dignissim nisi risus vitae est. Mauris sed fringilla ex, at maximus dolor. Ut iaculis gravida nulla ac vehicula. Curabitur ultricies facilisis nibh, ut varius diam venenatis nec. Etiam feugiat non ante id ullamcorper. Phasellus sed tristique turpis. Mauris nec massa vestibulum, pulvinar orci vitae, ullamcorper ex. Donec laoreet felis vel nunc pellentesque lobortis. Fusce vitae elit euismod, malesuada magna id, dignissim urna. Integer pellentesque purus quam, quis scelerisque diam convallis nec. Pellentesque vitae arcu elit. Fusce viverra commodo lacus, sagittis accumsan augue scelerisque ut. Donec laoreet metus sed urna semper laoreet.",
    icon: "",
    year: 2020,
    start: 11,
    duration: 8,
    skills: ["Vue", "Vuex", "Vuetify"],
  },
  {
    title: "Bani",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mattis justo. Etiam vitae viverra sapien. In et urna id nulla scelerisque mattis et quis sem. Fusce aliquam, lorem sit amet rutrum ullamcorper, felis nibh placerat felis, in dignissim nisi risus vitae est. Mauris sed fringilla ex, at maximus dolor. Ut iaculis gravida nulla ac vehicula. Curabitur ultricies facilisis nibh, ut varius diam venenatis nec. Etiam feugiat non ante id ullamcorper. Phasellus sed tristique turpis. Mauris nec massa vestibulum, pulvinar orci vitae, ullamcorper ex. Donec laoreet felis vel nunc pellentesque lobortis. Fusce vitae elit euismod, malesuada magna id, dignissim urna. Integer pellentesque purus quam, quis scelerisque diam convallis nec. Pellentesque vitae arcu elit. Fusce viverra commodo lacus, sagittis accumsan augue scelerisque ut. Donec laoreet metus sed urna semper laoreet.",
    icon: "",
    year: 2021,
    start: 8,
    duration: 1,
    skills: ["Vue", "Vuex", "Vuetify"],
  },
  {
    title: "Kidos",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mattis justo. Etiam vitae viverra sapien. In et urna id nulla scelerisque mattis et quis sem. Fusce aliquam, lorem sit amet rutrum ullamcorper, felis nibh placerat felis, in dignissim nisi risus vitae est. Mauris sed fringilla ex, at maximus dolor. Ut iaculis gravida nulla ac vehicula. Curabitur ultricies facilisis nibh, ut varius diam venenatis nec. Etiam feugiat non ante id ullamcorper. Phasellus sed tristique turpis. Mauris nec massa vestibulum, pulvinar orci vitae, ullamcorper ex. Donec laoreet felis vel nunc pellentesque lobortis. Fusce vitae elit euismod, malesuada magna id, dignissim urna. Integer pellentesque purus quam, quis scelerisque diam convallis nec. Pellentesque vitae arcu elit. Fusce viverra commodo lacus, sagittis accumsan augue scelerisque ut. Donec laoreet metus sed urna semper laoreet.",
    icon: "",
    year: 2021,
    start: 9,
    duration: 2,
    skills: ["Vue", "Vuex", "Vuetify"],
  },
];

const baseSize = "5"; //rem

export const Experience = () => {
  const years = [2020, 2021, 2022, 2023];
  const months = years.map((el) => ({
    label: el,
    items: Array.from({ length: 12 }, (el, i) => i + 1),
  }));
  return (
    <Card
      sx={{
        width: "50vw",
        overflow: "scroll",
        height: "100%",
        position: "relative",
      }}
    >
      <ChartHeader direction="row">
        {months.map((y, index) => (
          <Stack>
            <Year>{format(new Date(y.label, 0), "yyyy")}</Year>
            <Stack direction="row">
              {y.items.map((i) => (
                <Month baseSize={baseSize}>
                  {format(new Date(0, i), "LLL")}
                </Month>
              ))}
            </Stack>
          </Stack>
        ))}
      </ChartHeader>

      {projects.map((p) => {
        const year = years.findIndex((y) => y === p.year);
        const month = year * 12 + p.start;
        return (
          <ExperienceCard
            key={p.title}
            {...p}
            baseSize={baseSize}
            startPosition={month}
          />
        );
      })}
    </Card>
  );
};
