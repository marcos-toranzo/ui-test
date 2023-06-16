import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface IChartProps {
  data: number[];
}

export function Chart({ data }: IChartProps) {
  return (
    <Bar
      height={100}
      options={{
        // maintainAspectRatio: false,
        responsive: true,
        scales: {
          y: {
            title: {
              display: true,
              text: "Ventas",
            },
          },
          x: {
            title: {
              display: true,
              text: "Meses",
            },
          },
        },
        plugins: {
          legend: {
            position: "bottom" as const,
          },
          title: {
            display: true,
            text: "Sales by Month For:",
          },
        },
      }}
      data={{
        labels: ["January", "February", "March", "April"],

        datasets: [
          {
            label: "Ventas",
            data: data,
            backgroundColor: "rgba(53, 162, 235, 0.5)",
          },
        ],
      }}
    />
  );
}
