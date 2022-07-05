const fontFamily = `
	@font-face {
		font-family: dana;
		font-style: normal;
		font-weight: bold;
		src: url("/fonts/dana/bold/dana-fanum-bold.otf");
		src: url("/fonts/dana/bold/dana-fanum-bold.otf?#iefix") format("embedded-opentype"), url("/fonts/dana/bold/dana-fanum-bold.woff2") format("woff2"),
			url("/fonts/dana/bold/dana-fanum-bold.woff") format("woff");
		font-display: swap;
	}
	@font-face {
		font-family: dana;
		font-style: normal;
		font-weight: 500;
		src: url("/fonts/dana/medium/dana-fanum-medium.otf");
		src: url("/fonts/dana/medium/dana-fanum-medium.otf?#iefix") format("embedded-opentype"), url("/fonts/dana/medium/dana-fanum-medium.woff2") format("woff2"),
			url("/fonts/dana/medium/dana-fanum-medium.woff") format("woff");
		font-display: swap;
	}
	@font-face {
		font-family: dana;
		font-style: normal;
		font-weight: 300;
		src: url("/fonts/dana/light/dana-fanum-light.otf");
		src: url("/fonts/dana/light/dana-fanum-light.otf?#iefix") format("embedded-opentype"), url("/fonts/dana/light/dana-fanum-light.woff2") format("woff2"),
			url("/fonts/dana/light/dana-fanum-light.woff") format("woff");
		font-display: swap;
	}
	@font-face {
		font-family: dana;
		font-style: normal;
		font-weight: normal;
		src: url("/fonts/dana/regular/dana-fanum-regular.otf");
		src: url("/fonts/dana/regular/dana-fanum-regular.otf?#iefix") format("embedded-opentype"), url("/fonts/dana/regular/dana-fanum-regular.woff2") format("woff2"),
			url("/fonts/dana/regular/dana-fanum-regular.woff") format("woff");
		font-display: swap;
	}
`;

export const styles = (loc: string) => ({
  fontFamily,
  body: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    padding: 0,
    margin: 0,
    scrollBehavior: "smooth",
  },
  "#__next": {
    display: "inherit",
    flexDirection: "inherit",
    minHeight: "inherit",
  },
  ".fa": {
    fontFamily: "dana !important",
  },
  ".en": {
    fontFamily:
      ["Roboto", "Helvetica", "Arial", "sans-serif"].join(",") + "!important",
  },
  ".ltr": {
    direction: loc === "fa" ? "rtl !important" : "ltr !important",
  },
});
