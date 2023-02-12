import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 511,
  site: "vtex-piloto",
  domains: ["vtex-piloto.deco.site"],
});