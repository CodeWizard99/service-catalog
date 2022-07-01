import { Component, OnInit } from '@angular/core';
import { Tool } from '../shared/tool';

@Component({
  selector: 'app-tool-page',
  templateUrl: './tool-page.component.html',
  styleUrls: ['./tool-page.component.css']
})
export class ToolPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tool: Tool = {
    name: "Autosys",
    image: "data:image/jpeg;base64,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",
    overview: [
      "Workload Automation AE(Autosys Edition) is a stratergic scheduler used in the Bank to proviedd a secure and stable platform for critical business application",
      "Workload Automation AE(Autosys Edition) is a stratergic scheduler used in the Bank to proviedd a secure and stable platform for critical business application",
      "Workload Automation AE(Autosys Edition) is a stratergic scheduler used in the Bank to proviedd a secure and stable platform for critical business application",
      "Workload Automation AE(Autosys Edition) is a stratergic scheduler used in the Bank to proviedd a secure and stable platform for critical business application",
      "Workload Automation AE(Autosys Edition) is a stratergic scheduler used in the Bank to proviedd a secure and stable platform for critical business application"
    ],
    facts: [
      {
        bold: "3M+",
        content: "Jobs Scheduled Daily"
      },
      {
        bold: "3M+",
        content: "Jobs Scheduled Daily"
      },
      {
        bold: "3M+",
        content: "Jobs Scheduled Daily"
      }
    ],
    services: [
      {
        serviceName: "Job Scheduling",
        serviceDescription: "It is mainly concerned with job scheduling and job management",
        serviceImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD-qAF5XdA_Fs5s47LKTHtH3iOf1lEfbUmRQ&usqp=CAU"
      },
      {
        serviceName: "Job Scheduling",
        serviceDescription: "It is mainly concerned with job scheduling and job management",
        serviceImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD-qAF5XdA_Fs5s47LKTHtH3iOf1lEfbUmRQ&usqp=CAU"
      },
      {
        serviceName: "Job Scheduling",
        serviceDescription: "It is mainly concerned with job scheduling and job management",
        serviceImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD-qAF5XdA_Fs5s47LKTHtH3iOf1lEfbUmRQ&usqp=CAU"
      },
      {
        serviceName: "Job Scheduling",
        serviceDescription: "It is mainly concerned with job scheduling and job management",
        serviceImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD-qAF5XdA_Fs5s47LKTHtH3iOf1lEfbUmRQ&usqp=CAU"
      }
    ],
    technologies!: [
      "Linux",
      "Windows10"
    ]
  }
}