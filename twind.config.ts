import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      fontFamily: {
        "heebo": ["Heebo", "sans-serif"],
        "quicksand": ["Quicksand", "sans-serif"],
      }
    }
  }
} as Options;
