import { createTheme, PaletteOptions } from "@mui/material/styles";

const commonTypography = {
  fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
};

interface UpdatedPaletteOptions extends PaletteOptions {
  gender: {
    male: { bg: string; fg: string; border: string };
    female: { bg: string; fg: string; border: string };
    unknown: { bg: string; fg: string; border: string };
  };
}

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#1976d2" },
    secondary: { main: "#7c3aed" },
    background: {
      default: "#f6f7fb",
      paper: "#ffffff",
    },
    text: {
      primary: "#111827",
      secondary: "#6b7280",
    },

    divider: "rgba(0,0,0,0.12)",
  },
  tokens: {
    chip: {
      gender: {
        male: { bg: "#dbeafe", fg: "#1e40af", border: "rgba(30,64,175,0.35)" },
        female: {
          bg: "#fce7f3",
          fg: "#9d174d",
          border: "rgba(157,23,77,0.35)",
        },
      },
      status: {
        alive: { bg: "#dcfce7", fg: "#166534", border: "rgba(22,101,52,0.35)" },
        dead: { bg: "#fee2e2", fg: "#991b1b", border: "rgba(153,27,27,0.35)" },
      },
      tag: {
        bg: "#eef2ff",
        fg: "#3730a3",
        border: "rgba(55,48,163,0.30)",
      },
    },
  },
  typography: commonTypography,
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#90caf9" },
    secondary: { main: "#c4b5fd" },
    background: {
      default: "#0b1020",
      paper: "#111827",
    },
    text: {
      primary: "#e5e7eb",
      secondary: "#9ca3af",
    },

    divider: "rgba(255,255,255,0.12)",
  },
  tokens: {
    chip: {
      gender: {
        male: {
          bg: "rgba(96,165,250,0.18)",
          fg: "#93c5fd",
          border: "rgba(147,197,253,0.35)",
        },
        female: {
          bg: "rgba(244,114,182,0.18)",
          fg: "#f9a8d4",
          border: "rgba(249,168,212,0.35)",
        },
      },

      status: {
        alive: {
          bg: "rgba(34,197,94,0.18)",
          fg: "#86efac",
          border: "rgba(134,239,172,0.35)",
        },
        dead: {
          bg: "rgba(239,68,68,0.18)",
          fg: "#fca5a5",
          border: "rgba(252,165,165,0.35)",
        },
      },

      tag: {
        bg: "rgba(129,140,248,0.18)",
        fg: "#c7d2fe",
        border: "rgba(199,210,254,0.30)",
      },
    },
  },

  typography: commonTypography,
});
