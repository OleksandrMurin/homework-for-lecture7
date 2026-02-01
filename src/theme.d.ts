import "@mui/material/styles";

type ChipTone = { bg: string; fg: string; border: string };

declare module "@mui/material/styles" {
  interface Theme {
    tokens: {
      chip: {
        gender: Record<"male" | "female", ChipTone>;
        status: Record<"alive" | "dead", ChipTone>;
        tag: ChipTone;
      };
    };
  }

  interface ThemeOptions {
    tokens?: {
      chip?: {
        gender?: Record<"male" | "female", ChipTone>;
        status?: Record<"alive" | "dead", ChipTone>;
        tag?: ChipTone;
      };
    };
  }
}
