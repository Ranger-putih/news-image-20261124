# The World in One Day — Tuesday, 24 November 2026

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/Ranger-putih/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/Ranger-putih/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

Entry for the [make.fun bounty "Sum up 24 November's world news in one image"](https://make.fun/bounty/news-image-20261124).

## The paper

A one-page newspaper front page, composed with Python PIL — every word
is rendered by PIL, sharp and exact, and no image model was allowed to
draw text. It sums up Tuesday 24 November 2026 — seven stories from
across the world:

- **Huang is back** — Nvidia reinstates Jensen Huang as chief executive,
  11 days after he resigned. Shares soar 31% — the best day since 2003 —
  adding about $950 billion in market value. Nasdaq +6.5%, S&P 500 +4.7%.
- **COP31 ends without a deal** — the UN chief is "deeply disappointed";
  the EU objects to the weak text. Focus shifts to COP32.
- **Sparta II docks in St Petersburg** — a ship hit by drones in the Gulf
  of Finland reaches St Petersburg; 16 crew evacuated, one hurt.
- **Banten fire: 24 dead, ~30 missing** — a candy factory fire in Cikande,
  Indonesia; the toll is confirmed Monday. About 300 were on shift.
- **Gaza's toxic legacy** — bombardment poisoned Gaza's air, soil and
  water with heavy metals and dioxins, a report says.
- **Singer lashed 74 times** — Parastoo Ahmadi and four of her team each
  get 74 lashes for performing without a hijab.
- **Manchester: 12,000 flee gas alert** — police evacuate 12,000 people
  from a concert venue after an "unknown substance" is released.

## Running it

`main.ts` (Node 22) copies the finished `entry.png` to `/output/entry.png`.
The copy is deterministic — run it twice and the bytes are identical.
It uses no network.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
