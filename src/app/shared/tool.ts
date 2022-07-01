import { Fact } from "./fact";
import { Service } from "./service";

export class Tool{
    name!: string;
    image!: string;
    overview!: string[];
    facts!: Fact[];
    services!: Service[];
    technologies!: string[];
}

// {
//     "tool-name": "Autosys",
//     "image": "",
//     "overview": [
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
//     ],
//     "facts": [
//       {
//         "bold-content": "3M+",
//         "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
//       }
//     ],
//     "services": [
//       {
//         "service-name": "Job Scheduling",
//         "service-description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
//         "service-image": ""
//       }
//     ],
//     "technologies": ["linux", "Windows10"]
//   }