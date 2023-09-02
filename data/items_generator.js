const fs = require("fs");
const items = [
  {
    id: 1,
    img: {
      source: [
        "img/inv-wood-out.png",
        "img/inv-wood-in.png",
        "img/inv-wood-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Wood",
      description: "Found in trees, or on the ground.",
      nww: -1,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 255,
    loot: 2,
    mW: 10,
  },
  {
    id: 2,
    img: {
      source: [
        "img/inv-stone-out.png",
        "img/inv-stone-in.png",
        "img/inv-stone-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Stone",
      description: "Find it on the ground or on the rock.",
      WVn: [],
      stack: 0,
      stwindowid: [10],
      NMMmV: [80000],
      nww: 8,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    wwnWm: 50,
    MwMvv: 200,
    stack: 255,
    loot: 5,
    mW: 14,
  },
  {
    id: 3,
    img: {
      source: [
        "img/inv-steel-out.png",
        "img/inv-steel-in.png",
        "img/inv-steel-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Iron",
      description: "Melt it on a Firepit or a Smelter",
      WVn: [],
      stack: 0,
      stwindowid: [10],
      NMMmV: [120000],
      nww: 8,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    wwnWm: 4,
    MwMvv: 8,
    stack: 255,
    loot: 6,
    mW: 28,
  },
  {
    id: 4,
    img: {
      source: [
        "img/inv-animal-fat-out.png",
        "img/inv-animal-fat-in.png",
        "img/inv-animal-fat-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Animal Fat",
      description: "Useful to craft bullet and clothes",
      nww: -1,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 255,
    loot: 7,
    mW: 32,
  },
  {
    id: 5,
    img: {
      source: [
        "img/inv-animal-tendon-out.png",
        "img/inv-animal-tendon-in.png",
        "img/inv-animal-tendon-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Animal Tendon",
      description: "Useful to make string",
      nww: -1,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 255,
    loot: 8,
    mW: 100,
  },
  {
    id: 6,
    img: {
      source: [
        "img/inv-string-out.png",
        "img/inv-string-in.png",
        "img/inv-string-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "String",
      description: "Useful to craft many items.",
      WVn: [[5, 2]],
      stack: 1,
      stwindowid: [2],
      NMMmV: [20000],
      nww: 1,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 255,
    loot: 9,
  },
  {
    id: 7,
    img: {
      source: [
        "img/inv-leather-boar-out.png",
        "img/inv-leather-boar-in.png",
        "img/inv-leather-boar-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Leather",
      description: "Useful to make clothes",
      nww: -1,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 255,
    loot: 10,
    mW: 32,
  },
  {
    id: 8,
    img: {
      source: [
        "img/inv-shaped-metal-out.png",
        "img/inv-shaped-metal-in.png",
        "img/inv-shaped-metal-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Shaped Metal",
      description: "To craft improved items.",
      WVn: [[3, 2]],
      stack: 1,
      stwindowid: [6, 3],
      NMMmV: [3000, 30000],
      nww: 8,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 255,
    loot: 11,
  },
  {
    id: 9,
    img: {
      source: [
        "img/inv-raw-steak-out.png",
        "img/inv-raw-steak-in.png",
        "img/inv-raw-steak-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Raw Steak",
      description: "#Vegan",
      nww: -1,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 10,
    loot: 12,
    vWVMV: 15,
    nNmmM: 11,
    mnw: 12,
    wait: 5,
    mW: 28,
  },
  {
    id: 10,
    img: {
      source: [
        "img/inv-cooked-steak-out.png",
        "img/inv-cooked-steak-in.png",
        "img/inv-cooked-steak-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Cooked Steak",
      description: "Rare or medium?",
      WVn: [[9, 1]],
      stack: 1,
      stwindowid: [1, 3],
      NMMmV: [20000, 10000],
      nww: 1,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 10,
    loot: 13,
    wait: 5,
    vWVMV: 3,
    nNmmM: 11,
    mnw: 13,
  },
  {
    id: 11,
    img: {
      source: [
        "img/inv-rotten-steak-out.png",
        "img/inv-rotten-steak-in.png",
        "img/inv-rotten-steak-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    stack: 10,
    loot: 14,
    wait: 5,
    mnw: 14,
    detail: {
      name: "Rotten Steak",
      description: "Don't eat that.",
      nww: -1,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    mW: 20,
  },
  {
    id: 12,
    img: {
      source: [
        "img/inv-orange-out.png",
        "img/inv-orange-in.png",
        "img/inv-orange-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Orange",
      description: "A little hungry?",
      nww: -1,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 20,
    loot: 15,
    wait: 5,
    vWVMV: 10,
    nNmmM: 13,
    mnw: 15,
    mW: 24,
  },
  {
    id: 13,
    img: {
      source: [
        "img/inv-rotten-orange-out.png",
        "img/inv-rotten-orange-in.png",
        "img/inv-rotten-orange-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Rotten Orange",
      description: "Go on, have a bite!",
      WVn: [[12, 4]],
      stack: 8,
      stwindowid: [8],
      NMMmV: [40000],
      nww: 6,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 20,
    loot: 16,
    wait: 5,
    mnw: 16,
    mW: 20,
  },
  {
    id: 14,
    img: {
      source: [
        "img/inv-orange-seed-out.png",
        "img/inv-orange-seed-in.png",
        "img/inv-orange-seed-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Orange Seed",
      description: "Fill up on Vitame C?",
      WVn: [[12, 4]],
      stack: 1,
      stwindowid: [1, 3],
      NMMmV: [20000, 15000],
      nww: 6,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 40,
    loot: 17,
    MmwnN: 15,
    wait: 10,
    mnw: 21,
    fuelleft: -1,
    WvV: -1,
    cantShootThrough: 0,
    mN: 1000,
    width: [30, 30, 30, 30],
    height: [30, 30, 30, 30],
    Wwv: [0, 0, 0, 0],
    nWn: [0, 0, 0, 0],
    inmapx: [35, 35, 35, 35],
    inmapy: [35, 35, 35, 35],
    putableimg: {
      source: "img/day-clear-blue-plant2-orange.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/day-redprint-plant2-orange.png",
      W: {
        m: 0,
      },
    },
    isDoor: 0,
    mwM: 0,
    behavior: 1,
    MWv: 0,
    nvN: 0,
    MMN: 0,
    WnW: 0,
    impactaudio: 0,
    destroyaudio: 0,
    instation: [
      {
        source: "img/day-plant0-orange.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-plant1-orange.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-plant2-orange.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-plant3-orange.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-plant4-orange.png",
        W: {
          m: 0,
        },
      },
    ],
    NWm: 8,
    Mwm: 68,
    WmW: 2400000,
    health: 250,
    mW: 0,
  },
  {
    id: 15,
    img: {
      source: [
        "img/inv-hachet-out.png",
        "img/inv-hachet-in.png",
        "img/inv-hachet-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Hatchet",
      description: "Harvest Wood and Stone.",
      WVn: [
        [1, 10],
        [2, 2],
      ],
      stack: 1,
      stwindowid: [0, 2],
      NMMmV: [5000, 10000],
      nww: 4,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    mnw: 3,
    stack: 1,
    loot: 18,
    wait: 10,
  },
  {
    id: 16,
    img: {
      source: [
        "img/inv-stone-pickaxe-out.png",
        "img/inv-stone-pickaxe-in.png",
        "img/inv-stone-pickaxe-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Stone Pickaxe",
      description: "Mine Stone and Iron.",
      WVn: [
        [1, 100],
        [2, 30],
      ],
      stack: 1,
      stwindowid: [2],
      NMMmV: [30000],
      nww: 4,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    mnw: 1,
    stack: 1,
    loot: 19,
    wait: 10,
  },
  {
    id: 17,
    img: {
      source: [
        "img/inv-steel-pickaxe-out.png",
        "img/inv-steel-pickaxe-in.png",
        "img/inv-steel-pickaxe-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Metal Pickaxe",
      description: "Mine also Sulfur",
      WVn: [
        [2, 150],
        [8, 6],
      ],
      stack: 1,
      stwindowid: [5],
      NMMmV: [60000],
      nww: 4,
      level: 6,
      WnNmW: -1,
      pointreq: 1,
    },
    mnw: 2,
    stack: 1,
    loot: 20,
    wait: 10,
  },
  {
    id: 18,
    img: {
      source: [
        "img/inv-stone-axe-out.png",
        "img/inv-stone-axe-in.png",
        "img/inv-stone-axe-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Metal Axe",
      description: "Harvest a lot of Wood",
      WVn: [
        [1, 150],
        [8, 7],
      ],
      stack: 1,
      stwindowid: [5],
      NMMmV: [80000],
      nww: 4,
      level: 5,
      WnNmW: -1,
      pointreq: 1,
    },
    mnw: 4,
    stack: 1,
    loot: 21,
    wait: 10,
  },
  {
    id: 19,
    img: {
      source: [
        "img/inv-workbench-out.png",
        "img/inv-workbench-in.png",
        "img/inv-workbench-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Workbench",
      description: "Allow you to make new items.",
      WVn: [
        [1, 40],
        [2, 20],
      ],
      stack: 1,
      stwindowid: [0, 2],
      NMMmV: [15000, 15000],
      nww: 1,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    mnw: 21,
    fuelleft: -1,
    WvV: 0,
    cantShootThrough: 1,
    stwindowid: 2,
    stack: 255,
    loot: 22,
    wait: 10,
    mN: 1000,
    width_collision_rect: [100, 100, 100, 100],
    height_collision_rec: [100, 100, 100, 100],
    Wwv: [0, 0, 0, 0],
    nWn: [0, 0, 0, 0],
    inmapx: [0, 0, 0, 0],
    inmapy: [0, 0, 0, 0],
    putableimg: {
      source: "img/day-clear-blue-workbench.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/day-redprint-workbench.png",
      W: {
        m: 0,
      },
    },
    Mvw: 0,
    VWN: 0,
    isDoor: 0,
    Vvm: 0,
    mwM: 0,
    behavior: 0,
    MWv: 0,
    nvN: 0,
    MMN: 1,
    WnW: 0,
    NnN: 16,
    wwN: {
      source: "img/e-workbench.png",
      W: {
        m: 0,
      },
    },
    impactaudio: 1,
    destroyaudio: 5,
    instation: {
      source: "img/day-workbench.png",
      W: {
        m: 1,
        Wvw: 100,
        mNm: 144.5,
      },
    },
    NWm: 1,
    Mwm: 80,
    WmW: 315360000000,
    health: 250,
    mW: 0,
  },
  {
    id: 20,
    img: {
      source: [
        "img/inv-wood-spear-out.png",
        "img/inv-wood-spear-in.png",
        "img/inv-wood-spear-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Wood Spear",
      description: "Don't forget to pick it up.",
      WVn: [[1, 70]],
      stack: 1,
      stwindowid: [0, 2],
      NMMmV: [15000, 20000],
      nww: 5,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    mnw: 5,
    stack: 1,
    loot: 23,
    wait: 10,
  },
  {
    id: 21,
    img: {
      source: [
        "img/inv-wood-bow-out.png",
        "img/inv-wood-bow-in.png",
        "img/inv-wood-bow-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Wood Bow",
      description: "Where are the cowboys?",
      WVn: [
        [1, 60],
        [5, 2],
      ],
      stack: 1,
      stwindowid: [0, 2],
      NMMmV: [35000, 50000],
      nww: 5,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    vMv: 47,
    mMVwm: 1,
    mnw: 6,
    stack: 1,
    loot: 24,
    wait: 10,
  },
  {
    id: 22,
    img: {
      source: [
        "img/inv-9mm-out.png",
        "img/inv-9mm-in.png",
        "img/inv-9mm-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "9MM",
      description: "I hope you know how to aim.",
      WVn: [
        [90, 6],
        [8, 9],
      ],
      stack: 1,
      stwindowid: [5],
      NMMmV: [160000],
      nww: 5,
      level: 7,
      WnNmW: -1,
      pointreq: 1,
    },
    mnw: 8,
    vMv: 34,
    stack: 1,
    loot: 25,
    wait: 10,
  },
  {
    id: 23,
    img: {
      source: [
        "img/inv-desert-eagle-out.png",
        "img/inv-desert-eagle-in.png",
        "img/inv-desert-eagle-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Desert Eagle",
      description: "Pretty useful for self-defense.",
      WVn: [
        [95, 4],
        [8, 2],
      ],
      stack: 1,
      stwindowid: [5],
      NMMmV: [180000],
      nww: 5,
      level: 9,
      WnNmW: 22,
      pointreq: 1,
    },
    mnw: 9,
    vMv: 34,
    stack: 1,
    loot: 26,
    wait: 10,
  },
  {
    id: 24,
    img: {
      source: [
        "img/inv-shotgun-out.png",
        "img/inv-shotgun-in.png",
        "img/inv-shotgun-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Shotgun",
      description: "He's dead now, don't you think?",
      WVn: [
        [95, 6],
        [8, 6],
      ],
      stack: 1,
      stwindowid: [5],
      NMMmV: [200000],
      nww: 5,
      level: 11,
      WnNmW: -1,
      pointreq: 1,
    },
    mnw: 7,
    vMv: 35,
    stack: 1,
    loot: 27,
    wait: 10,
  },
  {
    id: 25,
    img: {
      source: [
        "img/inv-ak47-out.png",
        "img/inv-ak47-in.png",
        "img/inv-ak47-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "AK47",
      description: "Revolution time",
      WVn: [
        [95, 14],
        [8, 8],
      ],
      stack: 1,
      stwindowid: [5],
      NMMmV: [180000],
      nww: 5,
      level: 12,
      WnNmW: 40,
      pointreq: 1,
    },
    mnw: 10,
    vMv: 36,
    stack: 1,
    loot: 28,
    wait: 10,
  },
  {
    id: 26,
    img: {
      source: [
        "img/inv-sniper-out.png",
        "img/inv-sniper-in.png",
        "img/inv-sniper-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Sniper",
      description: "For the very angry shy",
      WVn: [
        [95, 10],
        [8, 8],
      ],
      stack: 1,
      stwindowid: [5],
      NMMmV: [180000],
      nww: 5,
      level: 13,
      WnNmW: -1,
      pointreq: 1,
    },
    mnw: 11,
    vMv: 36,
    stack: 1,
    loot: 29,
    wait: 10,
  },
  {
    id: 27,
    img: {
      source: [
        "img/inv-wood-wall-out.png",
        "img/inv-wood-wall-in.png",
        "img/inv-wood-wall-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Wooden Wall",
      description: "Protected from the wind.",
      WVn: [[1, 20]],
      stack: 1,
      stwindowid: [2],
      NMMmV: [10000],
      nww: 3,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    blockMeshes: {
      inward: "cube_block_inward",
      outward: "cube_block_outward",
      side: "cube_block_side",
      enclosed: "cube_block_enclosed",
      building: "cube_block_building",
    },
    mnw: 21,
    fuelleft: -1,
    WvV: 1,
    cantShootThrough: 1,
    stack: 255,
    loot: 30,
    wait: 10,
    mN: 1000,
    width: [100, 100, 100, 100],
    height: [100, 100, 100, 100],
    Wwv: [0, 0, 0, 0],
    nWn: [0, 0, 0, 0],
    inmapx: [0, 0, 0, 0],
    inmapy: [0, 0, 0, 0],
    putableimg: {
      source: "img/day-clear-blue-wood-wall.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/day-redprint-wood-wall.png",
      W: {
        m: 0,
      },
    },
    Mvw: 1,
    vVwVM: 27,
    VWN: 0,
    isDoor: 0,
    Vvm: 1,
    mwM: 0,
    behavior: 0,
    MWv: 0,
    nvN: 0,
    MMN: 1,
    WnW: 0,
    MmvNw: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    broken: [
      {
        source: "img/day-wood-wall-broken0.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-wall-broken1.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-wall-broken2.png",
        W: {
          m: 0,
        },
      },
    ],
    impactaudio: 1,
    destroyaudio: 5,
    instation: [
      {
        source: "img/day-wood-wall0.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-wall1.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-wall2.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-wall3.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-wall4.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-wall5.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-wall6.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-wall7.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-wall8.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-wall9.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-wall10.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-wall11.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-wall12.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-wall13.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-wall14.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-wall15.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-wall16.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-wall17.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-wall18.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-wall19.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-wall20.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-wall21.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-wall22.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-wall23.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-wall24.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-wall25.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-wall26.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-wall27.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-wall28.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-wall29.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-wall30.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-wall31.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-wall32.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-wall33.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-wall34.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-wall35.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-wall36.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-wall37.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-wall38.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-wall39.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-wall40.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-wall41.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-wall42.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-wall43.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-wall44.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-wall45.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-wall46.png",
        W: {
          m: 0,
        },
      },
    ],
    NWm: 1,
    Mwm: 80,
    WmW: 315360000000,
    health: 3000,
    mW: 0,
  },
  {
    id: 28,
    img: {
      source: [
        "img/inv-stone-wall-out.png",
        "img/inv-stone-wall-in.png",
        "img/inv-stone-wall-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Stone Wall",
      description: "Saved the 3 little pigs.",
      WVn: [[2, 20]],
      stack: 1,
      stwindowid: [2],
      NMMmV: [15000],
      nww: 3,
      level: 3,
      WnNmW: -1,
      pointreq: 1,
    },
    blockMeshes: {
      inward: "cube_block_inward",
      outward: "cube_block_outward",
      side: "cube_block_side",
      enclosed: "cube_block_enclosed",
      building: "cube_block_building",
    },
    mnw: 21,
    fuelleft: -1,
    WvV: 1,
    cantShootThrough: 1,
    stack: 255,
    loot: 31,
    wait: 10,
    mN: 1000,
    width: [100, 100, 100, 100],
    height: [100, 100, 100, 100],
    Wwv: [0, 0, 0, 0],
    nWn: [0, 0, 0, 0],
    inmapx: [0, 0, 0, 0],
    inmapy: [0, 0, 0, 0],
    putableimg: {
      source: "img/day-clear-blue-stone-wall.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/day-redprint-stone-wall.png",
      W: {
        m: 0,
      },
    },
    Mvw: 1,
    vVwVM: 28,
    VWN: 0,
    isDoor: 0,
    Vvm: 1,
    mwM: 0,
    behavior: 0,
    MWv: 0,
    nvN: 0,
    MMN: 1,
    WnW: 0,
    MmvNw: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    broken: [
      {
        source: "img/day-stone-wall-broken0.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-wall-broken1.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-wall-broken2.png",
        W: {
          m: 0,
        },
      },
    ],
    impactaudio: 2,
    destroyaudio: 6,
    instation: [
      {
        source: "img/day-stone-wall0.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-wall1.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-wall2.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-wall3.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-wall4.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-wall5.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-wall6.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-wall7.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-wall8.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-wall9.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-wall10.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-wall11.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-wall12.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-wall13.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-wall14.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-wall15.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-wall16.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-wall17.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-wall18.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-wall19.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-wall20.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-wall21.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-wall22.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-wall23.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-wall24.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-wall25.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-wall26.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-wall27.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-wall28.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-wall29.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-wall30.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-wall31.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-wall32.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-wall33.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-wall34.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-wall35.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-wall36.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-wall37.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-wall38.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-wall39.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-wall40.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-wall41.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-wall42.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-wall43.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-wall44.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-wall45.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-wall46.png",
        W: {
          m: 0,
        },
      },
    ],
    NWm: 2,
    Mwm: 80,
    WmW: 315360000000,
    health: 7000,
    mW: 0,
  },
  {
    id: 29,
    img: {
      source: [
        "img/inv-steel-wall-out.png",
        "img/inv-steel-wall-in.png",
        "img/inv-steel-wall-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Metal Wall",
      description: "Afraid we'll find you?",
      WVn: [[8, 3]],
      stack: 1,
      stwindowid: [5],
      NMMmV: [20000],
      nww: 3,
      level: 6,
      WnNmW: 28,
      pointreq: 1,
    },
    blockMeshes: {
      inward: "cube_block_inward",
      outward: "cube_block_outward",
      side: "cube_block_side",
      enclosed: "cube_block_enclosed",
      building: "cube_block_building",
    },
    mnw: 21,
    fuelleft: -1,
    WvV: 1,
    cantShootThrough: 1,
    stack: 255,
    loot: 32,
    wait: 10,
    mN: 1000,
    width: [100, 100, 100, 100],
    height: [100, 100, 100, 100],
    Wwv: [0, 0, 0, 0],
    nWn: [0, 0, 0, 0],
    inmapx: [0, 0, 0, 0],
    inmapy: [0, 0, 0, 0],
    putableimg: {
      source: "img/day-clear-blue-stone-wall.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/day-redprint-stone-wall.png",
      W: {
        m: 0,
      },
    },
    Mvw: 1,
    vVwVM: 29,
    VWN: 0,
    isDoor: 0,
    Vvm: 1,
    mwM: 0,
    behavior: 0,
    MWv: 0,
    nvN: 0,
    MMN: 1,
    WnW: 0,
    MmvNw: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    broken: [
      {
        source: "img/day-steel-wall-broken0.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-wall-broken1.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-wall-broken2.png",
        W: {
          m: 0,
        },
      },
    ],
    impactaudio: 4,
    destroyaudio: 7,
    instation: [
      {
        source: "img/day-steel-wall0.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-wall1.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-wall2.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-wall3.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-wall4.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-wall5.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-wall6.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-wall7.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-wall8.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-wall9.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-wall10.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-wall11.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-wall12.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-wall13.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-wall14.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-wall15.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-wall16.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-wall17.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-wall18.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-wall19.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-wall20.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-wall21.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-wall22.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-wall23.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-wall24.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-wall25.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-wall26.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-wall27.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-wall28.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-wall29.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-wall30.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-wall31.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-wall32.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-wall33.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-wall34.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-wall35.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-wall36.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-wall37.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-wall38.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-wall39.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-wall40.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-wall41.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-wall42.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-wall43.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-wall44.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-wall45.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-wall46.png",
        W: {
          m: 0,
        },
      },
    ],
    NWm: 3,
    Mwm: 80,
    WmW: 315360000000,
    health: 15000,
    mW: 0,
  },
  {
    id: 30,
    img: {
      source: [
        "img/inv-wood-door-out.png",
        "img/inv-wood-door-in.png",
        "img/inv-wood-door-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Wooden Low Door",
      description: "You can shoot through it.",
      WVn: [[1, 40]],
      stack: 1,
      stwindowid: [2],
      NMMmV: [15000],
      nww: 3,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    mnw: 21,
    fuelleft: -1,
    WvV: 0,
    cantShootThrough: 0,
    stack: 255,
    loot: 33,
    wait: 10,
    mN: 600,
    width: [100, 35, 100, 35],
    height: [35, 100, 35, 100],
    Wwv: [0, -30, 0, 30],
    nWn: [30, 0, -30, 0],
    inmapx: [0, 0, 0, 65],
    inmapy: [65, 0, 0, 0],
    putableimg: {
      source: "img/day-clear-blue-wood-door.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/day-redprint-wood-door.png",
      W: {
        m: 0,
      },
    },
    Mvw: 0,
    VWN: 0,
    isDoor: 1,
    Vvm: 1,
    mwM: 0,
    behavior: 0,
    MWv: 0,
    nvN: 0,
    MMN: 1,
    angle: 1.5707963267948966,
    NVvMw: [1, 0, -1, 0],
    wmvvV: [0, -1, 0, 1],
    vVNvM: [0, 0, 65, 0],
    NnmvM: [0, 0, 0, 65],
    wnwMW: [35, 100, 35, 100],
    VvvNw: [100, 35, 100, 35],
    VvMvv: 6,
    MmVVV: 46,
    NnN: 15,
    wwN: {
      source: "img/e-opendoor.png",
      W: {
        m: 0,
      },
    },
    mMnmM: {
      source: "img/e-closedoor.png",
      W: {
        m: 0,
      },
    },
    broken: [
      {
        source: "img/day-wood-door-broken0.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-door-broken1.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-door-broken2.png",
        W: {
          m: 0,
        },
      },
    ],
    impactaudio: 1,
    destroyaudio: 5,
    instation: {
      source: "img/day-wood-door.png",
      W: {
        m: 0,
      },
    },
    NWm: 1,
    Mwm: 55,
    WmW: 315360000000,
    health: 2000,
    mW: 0,
  },
  {
    id: 31,
    img: {
      source: [
        "img/inv-stone-door-out.png",
        "img/inv-stone-door-in.png",
        "img/inv-stone-door-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Stone Low Door",
      description: "You can shoot through it.",
      WVn: [[2, 40]],
      stack: 1,
      stwindowid: [2],
      NMMmV: [15000],
      nww: 3,
      level: 3,
      WnNmW: -1,
      pointreq: 1,
    },
    mnw: 21,
    fuelleft: -1,
    WvV: 0,
    cantShootThrough: 0,
    stack: 255,
    loot: 34,
    wait: 10,
    mN: 600,
    width: [100, 35, 100, 35],
    height: [35, 100, 35, 100],
    Wwv: [0, -30, 0, 30],
    nWn: [30, 0, -30, 0],
    inmapx: [0, 0, 0, 65],
    inmapy: [65, 0, 0, 0],
    putableimg: {
      source: "img/day-clear-blue-stone-door.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/day-redprint-stone-door.png",
      W: {
        m: 0,
      },
    },
    Mvw: 0,
    VWN: 0,
    isDoor: 1,
    Vvm: 1,
    mwM: 0,
    behavior: 0,
    MWv: 0,
    nvN: 0,
    MMN: 1,
    angle: 1.5707963267948966,
    NVvMw: [1, 0, -1, 0],
    wmvvV: [0, -1, 0, 1],
    vVNvM: [0, 0, 65, 0],
    NnmvM: [0, 0, 0, 65],
    wnwMW: [35, 100, 35, 100],
    VvvNw: [100, 35, 100, 35],
    VvMvv: 6,
    MmVVV: 46,
    NnN: 15,
    wwN: {
      source: "img/e-opendoor.png",
      W: {
        m: 0,
      },
    },
    mMnmM: {
      source: "img/e-closedoor.png",
      W: {
        m: 0,
      },
    },
    broken: [
      {
        source: "img/day-stone-door-broken0.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-door-broken1.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-door-broken2.png",
        W: {
          m: 0,
        },
      },
    ],
    impactaudio: 2,
    destroyaudio: 6,
    instation: {
      source: "img/day-stone-door.png",
      W: {
        m: 0,
      },
    },
    NWm: 2,
    Mwm: 55,
    WmW: 315360000000,
    health: 5000,
    mW: 0,
  },
  {
    id: 32,
    img: {
      source: [
        "img/inv-steel-door-out.png",
        "img/inv-steel-door-in.png",
        "img/inv-steel-door-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Metal Low Door",
      description: "Killing at home, for more comfort.",
      WVn: [[8, 6]],
      stack: 1,
      stwindowid: [5],
      NMMmV: [30000],
      nww: 3,
      level: 6,
      WnNmW: 31,
      pointreq: 1,
    },
    mnw: 21,
    fuelleft: -1,
    WvV: 0,
    cantShootThrough: 0,
    stack: 255,
    loot: 35,
    wait: 10,
    mN: 600,
    width: [100, 35, 100, 35],
    height: [35, 100, 35, 100],
    Wwv: [0, -30, 0, 30],
    nWn: [30, 0, -30, 0],
    inmapx: [0, 0, 0, 65],
    inmapy: [65, 0, 0, 0],
    putableimg: {
      source: "img/day-clear-blue-stone-door.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/day-redprint-stone-door.png",
      W: {
        m: 0,
      },
    },
    Mvw: 0,
    VWN: 0,
    isDoor: 1,
    Vvm: 1,
    mwM: 0,
    behavior: 0,
    MWv: 0,
    nvN: 0,
    MMN: 1,
    angle: 1.5707963267948966,
    NVvMw: [1, 0, -1, 0],
    wmvvV: [0, -1, 0, 1],
    vVNvM: [0, 0, 65, 0],
    NnmvM: [0, 0, 0, 65],
    wnwMW: [35, 100, 35, 100],
    VvvNw: [100, 35, 100, 35],
    VvMvv: 6,
    MmVVV: 46,
    NnN: 15,
    wwN: {
      source: "img/e-opendoor.png",
      W: {
        m: 0,
      },
    },
    mMnmM: {
      source: "img/e-closedoor.png",
      W: {
        m: 0,
      },
    },
    broken: [
      {
        source: "img/day-steel-door-broken0.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-door-broken1.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-door-broken2.png",
        W: {
          m: 0,
        },
      },
    ],
    impactaudio: 4,
    destroyaudio: 7,
    instation: {
      source: "img/day-steel-door.png",
      W: {
        m: 0,
      },
    },
    NWm: 3,
    Mwm: 55,
    WmW: 315360000000,
    health: 10000,
    mW: 0,
  },
  {
    id: 33,
    img: {
      source: [
        "img/inv-campfire-out.png",
        "img/inv-campfire-in.png",
        "img/inv-campfire-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Campfire",
      description: "Warm you when you're cold.",
      WVn: [
        [1, 30],
        [2, 5],
      ],
      stack: 1,
      stwindowid: [0, 2],
      NMMmV: [8000, 15000],
      nww: 1,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    mnw: 21,
    fuelleft: 15000,
    WvV: -1,
    cantShootThrough: 0,
    stwindowid: 1,
    stack: 255,
    loot: 36,
    wait: 10,
    mN: 1000,
    width: [100, 100, 100, 100],
    height: [100, 100, 100, 100],
    Wwv: [0, 0, 0, 0],
    nWn: [0, 0, 0, 0],
    inmapx: [0, 0, 0, 0],
    inmapy: [0, 0, 0, 0],
    putableimg: {
      source: "img/day-clear-blue-campfire.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/day-redprint-campfire.png",
      W: {
        m: 0,
      },
    },
    Mvw: 0,
    VWN: 0,
    isDoor: 0,
    Vvm: 0,
    mwM: 0,
    behavior: 0,
    MWv: 0,
    nvN: 0,
    MMN: 1,
    WnW: 1,
    NnN: 16,
    wwN: {
      source: "img/e-campfire.png",
      W: {
        m: 0,
      },
    },
    impactaudio: 1,
    destroyaudio: 5,
    instation: {
      source: "img/day-campfire.png",
      W: {
        m: 0,
      },
    },
    NWm: 1,
    Mwm: 80,
    WmW: 600000,
    health: 150,
    mW: 0,
  },
  {
    id: 34,
    img: {
      source: [
        "img/inv-bullet-9mm-out.png",
        "img/inv-bullet-9mm-in.png",
        "img/inv-bullet-9mm-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Bullet",
      description: "For 9MM, Desert Eagle, and MP5 ",
      WVn: [
        [53, 3],
        [8, 3],
        [4, 3],
      ],
      stack: 30,
      stwindowid: [5],
      NMMmV: [10000],
      nww: 5,
      level: 6,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 255,
    loot: 37,
  },
  {
    id: 35,
    img: {
      source: [
        "img/inv-bullet-shotgun-out.png",
        "img/inv-bullet-shotgun-in.png",
        "img/inv-bullet-shotgun-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Cartridge",
      description: "For Shotgun",
      WVn: [
        [95, 1],
        [8, 4],
        [4, 4],
      ],
      stack: 15,
      stwindowid: [5],
      NMMmV: [10000],
      nww: 5,
      level: 10,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 255,
    loot: 38,
  },
  {
    id: 36,
    img: {
      source: [
        "img/inv-bullet-sniper-out.png",
        "img/inv-bullet-sniper-in.png",
        "img/inv-bullet-sniper-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Heavy Bullet",
      description: "For Sniper, and AK47",
      WVn: [
        [95, 1],
        [8, 4],
        [4, 4],
      ],
      stack: 30,
      stwindowid: [5],
      NMMmV: [10000],
      nww: 5,
      level: 11,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 255,
    loot: 39,
  },
  {
    id: 37,
    img: {
      source: [
        "img/inv-medikit-out.png",
        "img/inv-medikit-in.png",
        "img/inv-medikit-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Medkit",
      description: "Regenerate your life.",
      WVn: [
        [6, 2],
        [38, 1],
        [7, 2],
        [8, 2],
      ],
      stack: 1,
      stwindowid: [5],
      NMMmV: [80000],
      nww: 7,
      level: 10,
      WnNmW: -1,
      pointreq: 1,
    },
    mnw: 17,
    stack: 2,
    loot: 40,
    wait: 10,
  },
  {
    id: 38,
    img: {
      source: [
        "img/inv-bandage-out.png",
        "img/inv-bandage-in.png",
        "img/inv-bandage-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Bandage",
      description: "To heal the boo-boos.",
      WVn: [
        [6, 1],
        [7, 2],
      ],
      stack: 1,
      stwindowid: [4],
      NMMmV: [20000],
      nww: 7,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    mnw: 18,
    stack: 5,
    loot: 41,
    wait: 10,
  },
  {
    id: 39,
    img: {
      source: [
        "img/inv-soda-out.png",
        "img/inv-soda-in.png",
        "img/inv-soda-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Soda",
      description: "Give energy.",
      WVn: [
        [115, 1],
        [74, 1],
        [79, 1],
      ],
      stack: 1,
      stwindowid: [1, 3],
      NMMmV: [40000, 40000],
      nww: 1,
      level: 5,
      WnNmW: -1,
      pointreq: 1,
    },
    mnw: 19,
    stack: 5,
    loot: 42,
    vWVMV: 2,
    nNmmM: 79,
    wait: 10,
  },
  {
    id: 40,
    img: {
      source: [
        "img/inv-MP5-out.png",
        "img/inv-MP5-in.png",
        "img/inv-MP5-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "MP5",
      description: "Not bad.",
      WVn: [
        [95, 6],
        [8, 6],
      ],
      stack: 1,
      stwindowid: [5],
      NMMmV: [200000],
      nww: 5,
      level: 10,
      WnNmW: -1,
      pointreq: 1,
    },
    mnw: 20,
    vMv: 34,
    stack: 1,
    loot: 43,
    wait: 10,
  },
  {
    id: 41,
    img: {
      source: [
        "img/inv-headscarf-out.png",
        "img/inv-headscarf-in.png",
        "img/inv-headscarf-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Headscarf",
      description: "Warm you up.",
      WVn: [
        [6, 1],
        [7, 1],
      ],
      stack: 1,
      stwindowid: [4],
      NMMmV: [60000],
      nww: 2,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    nwm: 1,
    stack: 1,
    loot: 44,
    wait: 10,
    wNV: 0.00085,
    NVw: 0,
    MvM: 0,
    mnm: 0,
    Vww: 0,
    radiation: 0,
    speed: 0,
  },
  {
    id: 42,
    img: {
      source: [
        "img/inv-chapka-out.png",
        "img/inv-chapka-in.png",
        "img/inv-chapka-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Chapka",
      description: "You look like a real woodcutter.",
      WVn: [
        [6, 6],
        [7, 8],
        [41, 1],
      ],
      stack: 1,
      stwindowid: [4],
      NMMmV: [120000],
      nww: 2,
      level: 7,
      WnNmW: -1,
      pointreq: 1,
    },
    nwm: 2,
    stack: 1,
    loot: 45,
    wait: 10,
    wNV: 0.0017,
    NVw: 0,
    MvM: 0,
    mnm: 0,
    Vww: 0,
    radiation: 0,
    speed: 0,
  },
  {
    id: 43,
    img: {
      source: [
        "img/inv-coat-out.png",
        "img/inv-coat-in.png",
        "img/inv-coat-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Winter Coat",
      description: "Is the weather really that cold?",
      WVn: [
        [6, 15],
        [7, 20],
        [42, 1],
      ],
      stack: 1,
      stwindowid: [4],
      NMMmV: [180000],
      nww: 2,
      level: 9,
      WnNmW: 42,
      pointreq: 1,
    },
    nwm: 3,
    stack: 1,
    loot: 46,
    wait: 10,
    wNV: 0.0026,
    NVw: 0,
    MvM: 0,
    mnm: 0,
    Vww: 0,
    radiation: 0,
    speed: 0,
  },
  {
    id: 44,
    img: {
      source: [
        "img/inv-gaz-mask-out.png",
        "img/inv-gaz-mask-in.png",
        "img/inv-gaz-mask-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Radiation Mask",
      description: "Protect you from Radioactivity.",
      WVn: [
        [8, 1],
        [6, 1],
        [7, 2],
      ],
      stack: 1,
      stwindowid: [4],
      NMMmV: [60000],
      nww: 2,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    nwm: 4,
    stack: 1,
    loot: 47,
    wait: 10,
    wNV: 0,
    NVw: 0,
    MvM: 0,
    mnm: 0,
    Vww: 0,
    radiation: 0.009,
    speed: 0,
  },
  {
    id: 45,
    img: {
      source: [
        "img/inv-gaz-protection-out.png",
        "img/inv-gaz-protection-in.png",
        "img/inv-gaz-protection-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Min. Radiation Suit",
      description: "Previously, on Breaking Bad.",
      WVn: [
        [95, 2],
        [8, 2],
        [6, 4],
        [7, 4],
        [44, 1],
      ],
      stack: 1,
      stwindowid: [4],
      NMMmV: [90000],
      nww: 2,
      level: 8,
      WnNmW: -1,
      pointreq: 1,
    },
    nwm: 5,
    stack: 1,
    loot: 48,
    wait: 10,
    wNV: 0.0006,
    NVw: 0,
    MvM: 0,
    mnm: 0,
    Vww: 0,
    radiation: 0.016,
    speed: 0,
  },
  {
    id: 46,
    img: {
      source: [
        "img/inv-radiation-suit-out.png",
        "img/inv-radiation-suit-in.png",
        "img/inv-radiation-suit-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Radiation Suit",
      description: "Let's not grow a second head.",
      WVn: [
        [95, 6],
        [8, 4],
        [6, 8],
        [7, 20],
        [45, 1],
      ],
      stack: 1,
      stwindowid: [4],
      NMMmV: [180000],
      nww: 2,
      level: 10,
      WnNmW: 45,
      pointreq: 1,
    },
    nwm: 6,
    stack: 1,
    loot: 49,
    wait: 10,
    wNV: 0,
    NVw: 0,
    MvM: 0,
    mnm: 0,
    Vww: 0,
    radiation: 0.022,
    speed: -0.01,
  },
  {
    id: 47,
    img: {
      source: [
        "img/inv-wood-arrow-out.png",
        "img/inv-wood-arrow-in.png",
        "img/inv-wood-arrow-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Wood Arrow",
      description: "Needed to use bow.",
      WVn: [[1, 40]],
      stack: 5,
      stwindowid: [0, 2],
      NMMmV: [15000, 10000],
      nww: 5,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 255,
    loot: 50,
  },
  {
    id: 48,
    img: {
      source: [
        "img/inv-campfire-bbq-out.png",
        "img/inv-campfire-bbq-in.png",
        "img/inv-campfire-bbq-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Firepit",
      description: "Warm up and melt iron slowly.",
      WVn: [
        [1, 120],
        [2, 20],
        [3, 4],
      ],
      stack: 1,
      stwindowid: [2],
      NMMmV: [20000],
      nww: 1,
      level: 3,
      WnNmW: -1,
      pointreq: 1,
    },
    mnw: 21,
    fuelleft: 20000,
    WvV: -1,
    cantShootThrough: 0,
    stwindowid: 3,
    stack: 255,
    loot: 51,
    wait: 10,
    mN: 1000,
    width: [100, 100, 100, 100],
    height: [100, 100, 100, 100],
    Wwv: [0, 0, 0, 0],
    nWn: [0, 0, 0, 0],
    inmapx: [0, 0, 0, 0],
    inmapy: [0, 0, 0, 0],
    putableimg: {
      source: "img/day-clear-blue-campfire-bbq.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/day-redprint-campfire-bbq.png",
      W: {
        m: 0,
      },
    },
    Mvw: 0,
    VWN: 0,
    isDoor: 0,
    Vvm: 0,
    mwM: 0,
    behavior: 0,
    MWv: 0,
    nvN: 0,
    MMN: 1,
    WnW: 1,
    NnN: 16,
    wwN: {
      source: "img/e-campfire-bbq.png",
      W: {
        m: 0,
      },
    },
    impactaudio: 1,
    destroyaudio: 5,
    instation: {
      source: "img/day-campfire-bbq.png",
      W: {
        m: 0,
      },
    },
    NWm: 1,
    Mwm: 80,
    WmW: 315360000000,
    health: 250,
    mW: 0,
  },
  {
    id: 49,
    img: {
      source: [
        "img/inv-smelter-out.png",
        "img/inv-smelter-in.png",
        "img/inv-smelter-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Smelter",
      description: "Melt iron, uranium and alloys",
      WVn: [
        [8, 6],
        [89, 1],
      ],
      stack: 1,
      stwindowid: [5],
      NMMmV: [100000],
      nww: 1,
      level: 10,
      WnNmW: -1,
      pointreq: 1,
    },
    mnw: 21,
    fuelleft: 42000,
    WvV: 1,
    cantShootThrough: 1,
    stwindowid: 6,
    stack: 255,
    loot: 52,
    wait: 10,
    mN: 1000,
    width: [100, 260, 100, 260],
    height: [260, 100, 260, 100],
    Wwv: [0, 0, 0, 0],
    nWn: [0, 0, 0, 0],
    inmapx: [0, -80, 0, -80],
    inmapy: [-80, 0, -80, 0],
    MMnVm: [-1, 0, -1, 0],
    nmMVw: [0, -1, 0, -1],
    putableimg: {
      source: "img/day-clear-blue-smelter.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/day-redprint-smelter.png",
      W: {
        m: 0,
      },
    },
    MvWnM: [-20.5, -101.5, 20.5, 101.5],
    VmNMm: [101.5, -20.5, -101, 20.5],
    Mvw: 0,
    VWN: 0,
    isDoor: 0,
    Vvm: 0,
    mwM: 0,
    behavior: 0,
    MWv: 0,
    nvN: 0,
    MMN: 1,
    WnW: 0,
    NnN: 16,
    wwN: {
      source: "img/e-smelter.png",
      W: {
        m: 0,
      },
    },
    impactaudio: 4,
    destroyaudio: 7,
    instation: [
      {
        source: "img/day-smelter-off.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-smelter-on.png",
        W: {
          m: 1,
          Wvw: 106,
          mNm: 306.5,
        },
      },
      {
        source: "img/day-smelter-light-up.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-smelter-light-down.png",
        W: {
          m: 0,
        },
      },
    ],
    NWm: 25,
    Mwm: 80,
    WmW: 315360000000,
    health: 3000,
    mW: 0,
  },
  {
    id: 50,
    img: {
      source: [
        "img/inv-wood-door1-out.png",
        "img/inv-wood-door1-in.png",
        "img/inv-wood-door1-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Wooden Door",
      description: "Let's hope it holds.",
      WVn: [[1, 60]],
      stack: 1,
      stwindowid: [2],
      NMMmV: [20000],
      nww: 3,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    mnw: 21,
    fuelleft: -1,
    WvV: 1,
    cantShootThrough: 1,
    stack: 255,
    loot: 53,
    wait: 10,
    mN: 600,
    width: [100, 100, 100, 100],
    height: [100, 100, 100, 100],
    Wwv: [0, 0, 0, 0],
    nWn: [0, 0, 0, 0],
    inmapx: [0, 0, 0, 0],
    inmapy: [0, 0, 0, 0],
    putableimg: {
      source: "img/day-clear-blue-wood-door1.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/day-redprint-wood-door1.png",
      W: {
        m: 0,
      },
    },
    Mvw: 0,
    VWN: 0,
    isDoor: 1,
    Vvm: 1,
    mwM: 0,
    behavior: 0,
    MWv: 0,
    nvN: 0,
    MMN: 1,
    angle: 3.141592653589793,
    NVvMw: [1, -1, -1, 1],
    wmvvV: [-1, -1, 1, 1],
    vVNvM: [0, 0, 0, 0],
    NnmvM: [0, 0, 0, 0],
    wnwMW: [100, 100, 100, 100],
    VvvNw: [100, 100, 100, 100],
    VvMvv: 17,
    MmVVV: 113,
    NnN: 15,
    wwN: {
      source: "img/e-opendoor.png",
      W: {
        m: 0,
      },
    },
    mMnmM: {
      source: "img/e-closedoor.png",
      W: {
        m: 0,
      },
    },
    broken: [
      {
        source: "img/day-wood-door1-broken0.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-door1-broken1.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-door1-broken2.png",
        W: {
          m: 0,
        },
      },
    ],
    impactaudio: 1,
    destroyaudio: 5,
    instation: {
      source: "img/day-wood-door1.png",
      W: {
        m: 0,
      },
    },
    NWm: 1,
    Mwm: 80,
    WmW: 315360000000,
    health: 2500,
    mW: 0,
  },
  {
    id: 51,
    img: {
      source: [
        "img/inv-stone-door1-out.png",
        "img/inv-stone-door1-in.png",
        "img/inv-stone-door1-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Stone Door",
      description: "Not too heavy to open, I hope.",
      WVn: [[2, 60]],
      stack: 1,
      stwindowid: [2],
      NMMmV: [20000],
      nww: 3,
      level: 3,
      WnNmW: -1,
      pointreq: 1,
    },
    mnw: 21,
    fuelleft: -1,
    WvV: 1,
    cantShootThrough: 1,
    stack: 255,
    loot: 54,
    wait: 10,
    mN: 600,
    width: [100, 100, 100, 100],
    height: [100, 100, 100, 100],
    Wwv: [0, 0, 0, 0],
    nWn: [0, 0, 0, 0],
    inmapx: [0, 0, 0, 0],
    inmapy: [0, 0, 0, 0],
    putableimg: {
      source: "img/day-clear-blue-stone-door1.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/day-redprint-stone-door1.png",
      W: {
        m: 0,
      },
    },
    Mvw: 0,
    VWN: 0,
    isDoor: 1,
    Vvm: 1,
    mwM: 0,
    behavior: 0,
    MWv: 0,
    nvN: 0,
    MMN: 1,
    angle: 3.141592653589793,
    NVvMw: [1, -1, -1, 1],
    wmvvV: [-1, -1, 1, 1],
    vVNvM: [0, 0, 0, 0],
    NnmvM: [0, 0, 0, 0],
    wnwMW: [100, 100, 100, 100],
    VvvNw: [100, 100, 100, 100],
    VvMvv: 17,
    MmVVV: 113,
    NnN: 15,
    wwN: {
      source: "img/e-opendoor.png",
      W: {
        m: 0,
      },
    },
    mMnmM: {
      source: "img/e-closedoor.png",
      W: {
        m: 0,
      },
    },
    broken: [
      {
        source: "img/day-stone-door1-broken0.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-door1-broken1.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-door1-broken2.png",
        W: {
          m: 0,
        },
      },
    ],
    impactaudio: 2,
    destroyaudio: 6,
    instation: {
      source: "img/day-stone-door1.png",
      W: {
        m: 0,
      },
    },
    NWm: 2,
    Mwm: 80,
    WmW: 315360000000,
    health: 6000,
    mW: 0,
  },
  {
    id: 52,
    img: {
      source: [
        "img/inv-steel-door1-out.png",
        "img/inv-steel-door1-in.png",
        "img/inv-steel-door1-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Metal Door",
      description: "I guess you're safe.",
      WVn: [[8, 9]],
      stack: 1,
      stwindowid: [5],
      NMMmV: [40000],
      nww: 3,
      level: 6,
      WnNmW: 51,
      pointreq: 1,
    },
    mnw: 21,
    fuelleft: -1,
    WvV: 1,
    cantShootThrough: 1,
    stack: 255,
    loot: 55,
    wait: 10,
    mN: 600,
    width: [100, 100, 100, 100],
    height: [100, 100, 100, 100],
    Wwv: [0, 0, 0, 0],
    nWn: [0, 0, 0, 0],
    inmapx: [0, 0, 0, 0],
    inmapy: [0, 0, 0, 0],
    putableimg: {
      source: "img/day-clear-blue-stone-door1.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/day-redprint-stone-door1.png",
      W: {
        m: 0,
      },
    },
    Mvw: 0,
    VWN: 0,
    isDoor: 1,
    Vvm: 1,
    mwM: 0,
    behavior: 0,
    MWv: 0,
    nvN: 0,
    MMN: 1,
    angle: 3.141592653589793,
    NVvMw: [1, -1, -1, 1],
    wmvvV: [-1, -1, 1, 1],
    vVNvM: [0, 0, 0, 0],
    NnmvM: [0, 0, 0, 0],
    wnwMW: [100, 100, 100, 100],
    VvvNw: [100, 100, 100, 100],
    VvMvv: 17,
    MmVVV: 113,
    NnN: 15,
    wwN: {
      source: "img/e-opendoor.png",
      W: {
        m: 0,
      },
    },
    mMnmM: {
      source: "img/e-closedoor.png",
      W: {
        m: 0,
      },
    },
    broken: [
      {
        source: "img/day-steel-door1-broken0.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-door1-broken1.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-door1-broken2.png",
        W: {
          m: 0,
        },
      },
    ],
    impactaudio: 4,
    destroyaudio: 7,
    instation: {
      source: "img/day-steel-door1.png",
      W: {
        m: 0,
      },
    },
    NWm: 3,
    Mwm: 80,
    WmW: 315360000000,
    health: 12500,
    mW: 0,
  },
  {
    id: 53,
    img: {
      source: [
        "img/inv-sulfur-out.png",
        "img/inv-sulfur-in.png",
        "img/inv-sulfur-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Sulfur",
      description: "Sulfur in such a cold landscape?",
      WVn: [],
      stack: 0,
      stwindowid: [10],
      NMMmV: [240000],
      nww: 8,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    wwnWm: 4,
    MwMvv: 8,
    stack: 255,
    loot: 56,
    mW: 32,
  },
  {
    id: 54,
    img: {
      source: [
        "img/inv-shaped-uranium-out.png",
        "img/inv-shaped-uranium-in.png",
        "img/inv-shaped-uranium-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Shaped Uranium",
      description: "Are you out of your mind?",
      WVn: [[56, 1]],
      stack: 1,
      stwindowid: [6],
      NMMmV: [20000],
      nww: 8,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 255,
    loot: 57,
    mW: 0,
  },
  {
    id: 55,
    img: {
      source: [
        "img/inv-workbench2-out.png",
        "img/inv-workbench2-in.png",
        "img/inv-workbench2-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Research Bench",
      description: "Allow you to make new items",
      WVn: [
        [8, 6],
        [89, 1],
      ],
      stack: 1,
      stwindowid: [2],
      NMMmV: [50000],
      nww: 1,
      level: 6,
      WnNmW: -1,
      pointreq: 1,
    },
    mnw: 21,
    fuelleft: -1,
    WvV: 0,
    cantShootThrough: 1,
    stwindowid: 5,
    stack: 255,
    loot: 58,
    wait: 10,
    mN: 1000,
    width: [100, 280, 100, 280],
    height: [280, 100, 280, 100],
    Wwv: [0, 0, 0, 0],
    nWn: [0, 0, 0, 0],
    inmapx: [0, -90, 0, -90],
    inmapy: [-90, 0, -90, 0],
    MMnVm: [-1, 0, -1, 0],
    nmMVw: [0, -1, 0, -1],
    putableimg: {
      source: "img/day-clear-blue-workbench2.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/day-redprint-workbench2.png",
      W: {
        m: 0,
      },
    },
    Mvw: 0,
    VWN: 0,
    isDoor: 0,
    Vvm: 0,
    mwM: 0,
    behavior: 0,
    MWv: 0,
    nvN: 0,
    MMN: 1,
    WnW: 0,
    NnN: 16,
    wwN: {
      source: "img/e-workbench2.png",
      W: {
        m: 0,
      },
    },
    impactaudio: 4,
    destroyaudio: 7,
    instation: {
      source: "img/day-workbench2.png",
      W: {
        m: 0,
      },
    },
    NWm: 25,
    Mwm: 80,
    WmW: 315360000000,
    health: 400,
    mW: 0,
  },
  {
    id: 56,
    img: {
      source: [
        "img/inv-uranium-out.png",
        "img/inv-uranium-in.png",
        "img/inv-uranium-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Uranium",
      description: "Do you want to end up as Marie Curie?",
      WVn: [],
      stack: 0,
      stwindowid: [10],
      NMMmV: [240000],
      nww: 8,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    wwnWm: 2,
    MwMvv: 4,
    stack: 255,
    loot: 59,
    mW: 45,
  },
  {
    id: 57,
    img: {
      source: [
        "img/inv-weaving-machine-out.png",
        "img/inv-weaving-machine-in.png",
        "img/inv-weaving-machine-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Weaving Machine",
      description: "Allow you to sew clothes",
      WVn: [
        [1, 80],
        [2, 20],
        [6, 2],
      ],
      stack: 1,
      stwindowid: [2],
      NMMmV: [60000],
      nww: 1,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    mnw: 21,
    fuelleft: -1,
    WvV: 0,
    cantShootThrough: 1,
    stwindowid: 4,
    stack: 255,
    loot: 60,
    wait: 10,
    mN: 1000,
    width: [100, 100, 100, 100],
    height: [100, 100, 100, 100],
    Wwv: [0, 0, 0, 0],
    nWn: [0, 0, 0, 0],
    inmapx: [0, 0, 0, 0],
    inmapy: [0, 0, 0, 0],
    putableimg: {
      source: "img/day-clear-blue-weaving-machine.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/day-redprint-weaving-machine.png",
      W: {
        m: 0,
      },
    },
    Mvw: 0,
    VWN: 0,
    isDoor: 0,
    Vvm: 0,
    mwM: 0,
    behavior: 0,
    MWv: 0,
    nvN: 0,
    MMN: 1,
    WnW: 0,
    NnN: 16,
    wwN: {
      source: "img/e-weaving-machine.png",
      W: {
        m: 0,
      },
    },
    impactaudio: 1,
    destroyaudio: 5,
    instation: {
      source: "img/day-weaving-machine.png",
      W: {
        m: 0,
      },
    },
    NWm: 1,
    Mwm: 80,
    WmW: 315360000000,
    health: 250,
    mW: 0,
  },
  {
    id: 58,
    img: {
      source: [
        "img/inv-gasoline-out.png",
        "img/inv-gasoline-in.png",
        "img/inv-gasoline-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Gasoline",
      description: "Fuel for Smelter",
      WVn: [
        [13, 4],
        [53, 1],
      ],
      stack: 1,
      stwindowid: [5],
      NMMmV: [20000],
      nww: 1,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 255,
    loot: 61,
  },
  {
    id: 59,
    img: {
      source: [
        "img/inv-sulfur-pickaxe-out.png",
        "img/inv-sulfur-pickaxe-in.png",
        "img/inv-sulfur-pickaxe-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Sulfur Pickaxe",
      description: "Mine also Uranium",
      WVn: [
        [95, 2],
        [8, 6],
        [53, 6],
      ],
      stack: 1,
      stwindowid: [5],
      NMMmV: [90000],
      nww: 4,
      level: 9,
      WnNmW: 17,
      pointreq: 1,
    },
    mnw: 22,
    stack: 1,
    loot: 62,
    wait: 10,
  },
  {
    id: 60,
    img: {
      source: [
        "img/inv-chest-out.png",
        "img/inv-chest-in.png",
        "img/inv-chest-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Wood chest",
      description: "You can't store food in.",
      WVn: [
        [1, 50],
        [2, 20],
      ],
      stack: 1,
      stwindowid: [2],
      NMMmV: [30000],
      nww: 3,
      level: 8,
      WnNmW: -1,
      pointreq: 1,
    },
    mnw: 21,
    fuelleft: -1,
    WvV: 0,
    cantShootThrough: 0,
    stack: 255,
    loot: 63,
    wait: 10,
    incontainers: 1,
    mN: 600,
    width: [100, 100, 100, 100],
    height: [100, 100, 100, 100],
    Wwv: [0, 0, 0, 0],
    nWn: [0, 0, 0, 0],
    inmapx: [0, 0, 0, 0],
    inmapy: [0, 0, 0, 0],
    putableimg: {
      source: "img/day-clear-blue-chest.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/day-redprint-chest.png",
      W: {
        m: 0,
      },
    },
    Mvw: 0,
    VWN: 0,
    isDoor: 0,
    Vvm: 0,
    mwM: 0,
    behavior: 0,
    MWv: 0,
    nvN: 0,
    MMN: 1,
    angle: 1.5707963267948966,
    NnN: 25,
    wwN: {
      source: "img/e-chest.png",
      W: {
        m: 0,
      },
    },
    impactaudio: 1,
    destroyaudio: 5,
    instation: {
      source: "img/day-chest.png",
      W: {
        m: 0,
      },
    },
    NWm: 1,
    Mwm: 55,
    WmW: 315360000000,
    health: 300,
    mW: 0,
  },
  {
    id: 61,
    img: {
      source: [
        "img/inv-fridge-out.png",
        "img/inv-fridge-in.png",
        "img/inv-fridge-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Fridge",
      description: "Save your food.",
      WVn: [
        [8, 5],
        [92, 4],
      ],
      stack: 1,
      stwindowid: [5],
      NMMmV: [90000],
      nww: 3,
      level: 9,
      WnNmW: -1,
      pointreq: 1,
    },
    mnw: 21,
    fuelleft: -1,
    WvV: 0,
    cantShootThrough: 0,
    stack: 255,
    loot: 64,
    wait: 10,
    incontainers: 1,
    VVmmM: 1,
    mN: 600,
    width: [50, 100, 50, 100],
    height: [100, 50, 100, 50],
    Wwv: [0, 0, 0, 0],
    nWn: [0, 0, 0, 0],
    inmapx: [0, 0, 50, 0],
    inmapy: [0, 0, 0, 50],
    putableimg: {
      source: "img/day-clear-blue-fridge.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/day-redprint-fridge.png",
      W: {
        m: 0,
      },
    },
    Mvw: 0,
    VWN: 0,
    isDoor: 0,
    Vvm: 0,
    mwM: 0,
    behavior: 0,
    MWv: 0,
    nvN: 0,
    MMN: 1,
    angle: 1.5707963267948966,
    NnN: 25,
    wwN: {
      source: "img/e-fridge.png",
      W: {
        m: 0,
      },
    },
    impactaudio: 4,
    destroyaudio: 7,
    instation: {
      source: "img/day-fridge.png",
      W: {
        m: 0,
      },
    },
    NWm: 25,
    Mwm: 55,
    WmW: 315360000000,
    health: 300,
    mW: 0,
  },
  {
    id: 62,
    img: {
      source: [
        "img/inv-wood-floor-out.png",
        "img/inv-wood-floor-in.png",
        "img/inv-wood-floor-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Wood floor",
      description: "Players can't spawn on it",
      WVn: [[1, 15]],
      stack: 2,
      stwindowid: [2],
      NMMmV: [15000],
      nww: 3,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 255,
    loot: 65,
    wait: 10,
    mnw: 21,
    fuelleft: -1,
    WvV: 2,
    cantShootThrough: 0,
    mN: 1000,
    width: [100, 100, 100, 100],
    height: [100, 100, 100, 100],
    Wwv: [0, 0, 0, 0],
    nWn: [0, 0, 0, 0],
    inmapx: [0, 0, 0, 0],
    inmapy: [0, 0, 0, 0],
    putableimg: {
      source: "img/day-clear-blue-wood-floor.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/day-redprint-wood-floor.png",
      W: {
        m: 0,
      },
    },
    Mvw: 1,
    vVwVM: 62,
    VWN: 0,
    isDoor: 0,
    Vvm: 1,
    mwM: 0,
    behavior: 0,
    MWv: 0,
    nvN: 0,
    MMN: 0,
    WnW: 0,
    broken: [
      {
        source: "img/day-wood-floor-broken0.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-broken1.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-broken2.png",
        W: {
          m: 0,
        },
      },
    ],
    impactaudio: 0,
    destroyaudio: 5,
    instation: [
      {
        source: "img/day-wood-floor-0.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-1.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-2.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-3.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-4.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-5.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-6.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-7.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-8.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-9.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-10.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-11.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-12.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-13.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-14.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-15.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-16.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-17.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-18.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-19.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-20.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-21.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-22.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-23.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-24.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-25.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-26.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-27.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-28.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-29.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-30.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-31.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-32.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-33.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-34.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-35.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-36.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-37.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-38.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-39.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-40.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-41.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-42.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-43.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-44.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-45.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-46.png",
        W: {
          m: 0,
        },
      },
    ],
    NWm: 1,
    Mwm: 80,
    WmW: 315360000000,
    health: 4000,
    mW: 0,
  },
  {
    id: 63,
    img: {
      source: [
        "img/inv-hammer-out.png",
        "img/inv-hammer-in.png",
        "img/inv-hammer-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Hammer",
      description: "Destroy walls quickly.",
      WVn: [
        [1, 100],
        [8, 10],
      ],
      stack: 1,
      stwindowid: [5],
      NMMmV: [30000],
      nww: 4,
      level: 7,
      WnNmW: -1,
      pointreq: 1,
    },
    mnw: 23,
    stack: 1,
    loot: 66,
    wait: 10,
  },
  {
    id: 64,
    img: {
      source: [
        "img/inv-sleeping-bag-out.png",
        "img/inv-sleeping-bag-in.png",
        "img/inv-sleeping-bag-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Sleeping Bag",
      description: "Once dead, you keep your base",
      WVn: [
        [7, 7],
        [4, 7],
        [6, 7],
      ],
      stack: 1,
      stwindowid: [4],
      NMMmV: [20000],
      nww: 1,
      level: 9,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 255,
    loot: 67,
    wait: 10,
    mnw: 21,
    fuelleft: -1,
    WvV: -1,
    cantShootThrough: 0,
    mN: 1000,
    width: [100, 100, 100, 100],
    height: [100, 100, 100, 100],
    Wwv: [0, 0, 0, 0],
    nWn: [0, 0, 0, 0],
    inmapx: [0, 0, 0, 0],
    inmapy: [0, 0, 0, 0],
    putableimg: {
      source: "img/day-clear-blue-sleeping-bag.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/day-redprint-sleeping-bag.png",
      W: {
        m: 0,
      },
    },
    isDoor: 0,
    mwM: 0,
    behavior: 0,
    MWv: 0,
    nvN: 0,
    MMN: 0,
    WnW: 0,
    impactaudio: 8,
    destroyaudio: 9,
    instation: {
      source: "img/day-sleeping-bag.png",
      W: {
        m: 0,
      },
    },
    NWm: 11,
    Mwm: 80,
    WmW: 315360000000,
    health: 500,
    mW: 0,
  },
  {
    id: 65,
    img: {
      source: [
        "img/inv-repair-hammer-out.png",
        "img/inv-repair-hammer-in.png",
        "img/inv-repair-hammer-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Repair Hammer",
      description: "Repair walls but require nails.",
      WVn: [
        [1, 120],
        [8, 2],
      ],
      stack: 1,
      stwindowid: [2],
      NMMmV: [30000],
      nww: 4,
      level: 5,
      WnNmW: -1,
      pointreq: 1,
    },
    mnw: 24,
    stack: 1,
    loot: 68,
    wait: 10,
  },
  {
    id: 66,
    img: {
      source: [
        "img/inv-nails-out.png",
        "img/inv-nails-in.png",
        "img/inv-nails-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Nails",
      description: "Needed to repair walls.",
      WVn: [[8, 2]],
      stack: 85,
      stwindowid: [2],
      NMMmV: [20000],
      nww: 1,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 255,
    loot: 69,
  },
  {
    id: 67,
    img: {
      source: [
        "img/inv-wood-floor-light-out.png",
        "img/inv-wood-floor-light-in.png",
        "img/inv-wood-floor-light-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Light Wood Floor",
      description: "Players can't spawn on it",
      WVn: [[1, 15]],
      stack: 2,
      stwindowid: [2],
      NMMmV: [15000],
      nww: 3,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 255,
    loot: 70,
    wait: 10,
    mnw: 21,
    fuelleft: -1,
    WvV: 2,
    cantShootThrough: 0,
    mN: 1000,
    width: [100, 100, 100, 100],
    height: [100, 100, 100, 100],
    Wwv: [0, 0, 0, 0],
    nWn: [0, 0, 0, 0],
    inmapx: [0, 0, 0, 0],
    inmapy: [0, 0, 0, 0],
    putableimg: {
      source: "img/day-clear-blue-woodlight-floor.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/day-redprint-woodlight-floor.png",
      W: {
        m: 0,
      },
    },
    Mvw: 1,
    vVwVM: 67,
    VWN: 0,
    isDoor: 0,
    Vvm: 1,
    mwM: 0,
    behavior: 0,
    MWv: 0,
    nvN: 0,
    MMN: 0,
    WnW: 0,
    broken: [
      {
        source: "img/day-wood-floor-light-broken0.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-light-broken1.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-light-broken2.png",
        W: {
          m: 0,
        },
      },
    ],
    impactaudio: 0,
    destroyaudio: 5,
    instation: [
      {
        source: "img/day-wood-floor-light-0.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-light-1.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-light-2.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-light-3.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-light-4.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-light-5.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-light-6.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-light-7.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-light-8.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-light-9.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-light-10.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-light-11.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-light-12.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-light-13.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-light-14.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-light-15.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-light-16.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-light-17.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-light-18.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-light-19.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-light-20.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-light-21.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-light-22.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-light-23.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-light-24.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-light-25.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-light-26.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-light-27.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-light-28.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-light-29.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-light-30.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-light-31.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-light-32.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-light-33.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-light-34.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-light-35.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-light-36.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-light-37.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-light-38.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-light-39.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-light-40.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-light-41.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-light-42.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-light-43.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-light-44.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-light-45.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-floor-light-46.png",
        W: {
          m: 0,
        },
      },
    ],
    NWm: 18,
    Mwm: 80,
    WmW: 315360000000,
    health: 4000,
    mW: 0,
  },
  {
    id: 68,
    img: {
      source: [
        "img/inv-wood-smallwall-out.png",
        "img/inv-wood-smallwall-in.png",
        "img/inv-wood-smallwall-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Wooden Low Wall",
      description: "You can shoot through it.",
      WVn: [[1, 10]],
      stack: 1,
      stwindowid: [2],
      NMMmV: [10000],
      nww: 3,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    mnw: 21,
    fuelleft: -1,
    WvV: 0,
    cantShootThrough: 0,
    stack: 255,
    loot: 71,
    wait: 10,
    mN: 1000,
    width: [100, 35, 100, 35],
    height: [35, 100, 35, 100],
    Wwv: [0, -30, 0, 30],
    nWn: [30, 0, -30, 0],
    inmapx: [0, 0, 0, 65],
    inmapy: [65, 0, 0, 0],
    putableimg: {
      source: "img/day-clear-blue-wood-smallwall.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/day-redprint-wood-smallwall.png",
      W: {
        m: 0,
      },
    },
    Mvw: 0,
    VWN: 1,
    isDoor: 0,
    Vvm: 1,
    mwM: 0,
    behavior: 0,
    MWv: 0,
    nvN: 0,
    MMN: 1,
    angle: 1.5707963267948966,
    NVvMw: [1, 0, -1, 0],
    wmvvV: [0, -1, 0, 1],
    vVNvM: [0, 0, 65, 0],
    NnmvM: [0, 0, 0, 65],
    wnwMW: [35, 100, 35, 100],
    VvvNw: [100, 35, 100, 35],
    VvMvv: 6,
    MmVVV: 46,
    WnW: 0,
    broken: [
      {
        source: "img/day-wood-smallwalls-broken0.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-smallwalls-broken1.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-smallwalls-broken2.png",
        W: {
          m: 0,
        },
      },
    ],
    impactaudio: 1,
    destroyaudio: 5,
    instation: [
      {
        source: "img/day-wood-smallwalls-0.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-smallwalls-1.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-smallwalls-2.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-smallwalls-3.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-smallwalls-4.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-smallwalls-5.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-smallwalls-6.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-smallwalls-7.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-smallwalls-8.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-smallwalls-9.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-smallwalls-10.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-smallwalls-11.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-smallwalls-12.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-smallwalls-13.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-smallwalls-14.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-smallwalls-15.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-smallwalls-16.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-smallwalls-17.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-smallwalls-18.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-smallwalls-19.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-smallwalls-20.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-smallwalls-21.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-smallwalls-22.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-smallwalls-23.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-smallwalls-24.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-smallwalls-25.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-smallwalls-26.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-smallwalls-27.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-smallwalls-28.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-smallwalls-29.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-smallwalls-30.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-smallwalls-31.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-smallwalls-32.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-smallwalls-33.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-smallwalls-34.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-smallwalls-35.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-smallwalls-36.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-smallwalls-37.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-smallwalls-38.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-smallwalls-39.png",
        W: {
          m: 0,
        },
      },
    ],
    NWm: 1,
    Mwm: 80,
    WmW: 315360000000,
    health: 3000,
    mW: 0,
  },
  {
    id: 69,
    img: {
      source: [
        "img/inv-stone-smallwall-out.png",
        "img/inv-stone-smallwall-in.png",
        "img/inv-stone-smallwall-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Stone Low Wall",
      description: "You can shoot through it.",
      WVn: [[2, 10]],
      stack: 1,
      stwindowid: [2],
      NMMmV: [15000],
      nww: 3,
      level: 3,
      WnNmW: -1,
      pointreq: 1,
    },
    mnw: 21,
    fuelleft: -1,
    WvV: 0,
    cantShootThrough: 0,
    stack: 255,
    loot: 72,
    wait: 10,
    mN: 1000,
    width: [100, 35, 100, 35],
    height: [35, 100, 35, 100],
    Wwv: [0, -30, 0, 30],
    nWn: [30, 0, -30, 0],
    inmapx: [0, 0, 0, 65],
    inmapy: [65, 0, 0, 0],
    putableimg: {
      source: "img/day-clear-blue-stone-smallwalls.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/day-redprint-stone-smallwalls.png",
      W: {
        m: 0,
      },
    },
    Mvw: 0,
    VWN: 1,
    isDoor: 0,
    Vvm: 1,
    mwM: 0,
    behavior: 0,
    MWv: 0,
    nvN: 0,
    MMN: 1,
    angle: 1.5707963267948966,
    NVvMw: [1, 0, -1, 0],
    wmvvV: [0, -1, 0, 1],
    vVNvM: [0, 0, 65, 0],
    NnmvM: [0, 0, 0, 65],
    wnwMW: [35, 100, 35, 100],
    VvvNw: [100, 35, 100, 35],
    VvMvv: 6,
    MmVVV: 46,
    WnW: 0,
    broken: [
      {
        source: "img/day-stone-smallwalls-broken0.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-smallwalls-broken1.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-smallwalls-broken2.png",
        W: {
          m: 0,
        },
      },
    ],
    impactaudio: 2,
    destroyaudio: 6,
    instation: [
      {
        source: "img/day-stone-smallwalls-0.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-smallwalls-1.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-smallwalls-2.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-smallwalls-3.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-smallwalls-4.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-smallwalls-5.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-smallwalls-6.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-smallwalls-7.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-smallwalls-8.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-smallwalls-9.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-smallwalls-10.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-smallwalls-11.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-smallwalls-12.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-smallwalls-13.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-smallwalls-14.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-smallwalls-15.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-smallwalls-16.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-smallwalls-17.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-smallwalls-18.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-smallwalls-19.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-smallwalls-20.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-smallwalls-21.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-smallwalls-22.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-smallwalls-23.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-smallwalls-24.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-smallwalls-25.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-smallwalls-26.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-smallwalls-27.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-smallwalls-28.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-smallwalls-29.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-smallwalls-30.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-smallwalls-31.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-smallwalls-32.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-smallwalls-33.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-smallwalls-34.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-smallwalls-35.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-smallwalls-36.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-smallwalls-37.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-smallwalls-38.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-smallwalls-39.png",
        W: {
          m: 0,
        },
      },
    ],
    NWm: 2,
    Mwm: 80,
    WmW: 315360000000,
    health: 7000,
    mW: 0,
  },
  {
    id: 70,
    img: {
      source: [
        "img/inv-steel-smallwall-out.png",
        "img/inv-steel-smallwall-in.png",
        "img/inv-steel-smallwall-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Metal Low Wall",
      description: "You can shoot through it.",
      WVn: [[8, 2]],
      stack: 1,
      stwindowid: [5],
      NMMmV: [20000],
      nww: 3,
      level: 6,
      WnNmW: 69,
      pointreq: 1,
    },
    mnw: 21,
    fuelleft: -1,
    WvV: 0,
    cantShootThrough: 0,
    stack: 255,
    loot: 73,
    wait: 10,
    mN: 1000,
    width: [100, 35, 100, 35],
    height: [35, 100, 35, 100],
    Wwv: [0, -30, 0, 30],
    nWn: [30, 0, -30, 0],
    inmapx: [0, 0, 0, 65],
    inmapy: [65, 0, 0, 0],
    putableimg: {
      source: "img/day-clear-blue-stone-smallwalls.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/day-redprint-stone-smallwalls.png",
      W: {
        m: 0,
      },
    },
    Mvw: 0,
    VWN: 1,
    isDoor: 0,
    Vvm: 1,
    mwM: 0,
    behavior: 0,
    MWv: 0,
    nvN: 0,
    MMN: 1,
    angle: 1.5707963267948966,
    NVvMw: [1, 0, -1, 0],
    wmvvV: [0, -1, 0, 1],
    vVNvM: [0, 0, 65, 0],
    NnmvM: [0, 0, 0, 65],
    wnwMW: [35, 100, 35, 100],
    VvvNw: [100, 35, 100, 35],
    VvMvv: 6,
    MmVVV: 46,
    WnW: 0,
    broken: [
      {
        source: "img/day-steel-smallwalls-broken0.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-smallwalls-broken1.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-smallwalls-broken2.png",
        W: {
          m: 0,
        },
      },
    ],
    impactaudio: 4,
    destroyaudio: 7,
    instation: [
      {
        source: "img/day-steel-smallwalls-0.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-smallwalls-1.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-smallwalls-2.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-smallwalls-3.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-smallwalls-4.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-smallwalls-5.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-smallwalls-6.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-smallwalls-7.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-smallwalls-8.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-smallwalls-9.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-smallwalls-10.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-smallwalls-11.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-smallwalls-12.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-smallwalls-13.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-smallwalls-14.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-smallwalls-15.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-smallwalls-16.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-smallwalls-17.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-smallwalls-18.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-smallwalls-19.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-smallwalls-20.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-smallwalls-21.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-smallwalls-22.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-smallwalls-23.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-smallwalls-24.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-smallwalls-25.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-smallwalls-26.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-smallwalls-27.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-smallwalls-28.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-smallwalls-29.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-smallwalls-30.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-smallwalls-31.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-smallwalls-32.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-smallwalls-33.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-smallwalls-34.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-smallwalls-35.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-smallwalls-36.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-smallwalls-37.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-smallwalls-38.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-steel-smallwalls-39.png",
        W: {
          m: 0,
        },
      },
    ],
    NWm: 3,
    Mwm: 55,
    WmW: 315360000000,
    health: 15000,
    mW: 0,
  },
  {
    id: 71,
    WvV: 0,
    Wwv: [0, 0, 0, 0],
    nWn: [0, 0, 0, 0],
    Mvw: 0,
    VWN: 0,
    isDoor: 0,
    Vvm: 0,
    mwM: 0,
    behavior: 0,
    MWv: 0,
    nvN: [
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 8,
        destroyaudio: 9,
        instation: {
          source: "img/day-sofa0.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [
            [1, 99],
            [7, 9],
            [6, 6],
          ],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 450,
        mW: 0,
        NWm: 14,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 1,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 0,
        NnN: 25,
        mwM: 0,
        damage: 0,
        WWv: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-sofa0.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 8,
        destroyaudio: 9,
        instation: {
          source: "img/day-sofa1.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [
            [1, 99],
            [7, 9],
            [6, 6],
          ],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 450,
        mW: 0,
        NWm: 15,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 1,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 0,
        NnN: 25,
        mwM: 0,
        damage: 0,
        WWv: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-sofa1.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 8,
        destroyaudio: 9,
        instation: {
          source: "img/day-sofa2.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [
            [1, 99],
            [7, 9],
            [6, 6],
          ],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 450,
        mW: 0,
        NWm: 15,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 1,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 0,
        NnN: 25,
        mwM: 0,
        damage: 0,
        WWv: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-sofa2.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 8,
        destroyaudio: 9,
        instation: {
          source: "img/day-sofa3.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [
            [1, 99],
            [7, 9],
            [6, 6],
          ],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 450,
        mW: 0,
        NWm: 16,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 1,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 0,
        NnN: 25,
        mwM: 0,
        damage: 0,
        WWv: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-sofa3.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 8,
        destroyaudio: 9,
        instation: {
          source: "img/day-sofa4.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [
            [1, 99],
            [7, 9],
            [6, 6],
          ],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 450,
        mW: 0,
        NWm: 16,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 1,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 0,
        NnN: 25,
        mwM: 0,
        damage: 0,
        WWv: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-sofa4.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 8,
        destroyaudio: 9,
        instation: {
          source: "img/day-bed0.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [
            [1, 200],
            [7, 20],
          ],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 450,
        mW: 0,
        NWm: 12,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 1,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 0,
        NnN: 25,
        mwM: 0,
        damage: 0,
        WWv: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-bed0.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 8,
        destroyaudio: 9,
        instation: {
          source: "img/day-bed1.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [
            [1, 200],
            [7, 20],
          ],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 450,
        mW: 0,
        NWm: 13,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 1,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 0,
        NnN: 25,
        mwM: 0,
        damage: 0,
        WWv: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-bed1.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 1,
        destroyaudio: 5,
        instation: {
          source: "img/day-table0.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[1, 200]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 450,
        mW: 0,
        NWm: 1,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 1,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 0,
        NnN: 25,
        mwM: 0,
        damage: 0,
        WWv: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-table0.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 4,
        destroyaudio: 7,
        instation: {
          source: "img/day-tv0.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [
            [89, 4],
            [8, 16],
            [127, 4],
            [90, 12],
          ],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 450,
        mW: 0,
        NWm: 19,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 1,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 0,
        NnN: 25,
        mwM: 0,
        damage: 0,
        WWv: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-tv0.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 4,
        destroyaudio: 7,
        instation: {
          source: "img/day-computer0.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [
            [127, 4],
            [8, 16],
            [90, 12],
            [89, 4],
          ],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 450,
        mW: 0,
        NWm: 25,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 1,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 0,
        NnN: 25,
        mwM: 0,
        damage: 0,
        WWv: 0,
        WmW: 315360000000,
        img: {
          source: [
            "img/day-computer0.png",
            "img/useless.png",
            "img/useless.png",
          ],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 4,
        destroyaudio: 7,
        instation: {
          source: "img/day-chair0.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [
            [7, 8],
            [8, 8],
          ],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 450,
        mW: 0,
        NWm: 25,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 1,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 0,
        NnN: 25,
        mwM: 0,
        damage: 0,
        WWv: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-chair0.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 1,
        destroyaudio: 5,
        instation: {
          source: "img/day-washbasin0.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [
            [1, 150],
            [8, 8],
          ],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 450,
        mW: 0,
        NWm: 18,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 1,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 0,
        NnN: 25,
        mwM: 0,
        damage: 0,
        WWv: 0,
        WmW: 315360000000,
        img: {
          source: [
            "img/day-washbasin0.png",
            "img/useless.png",
            "img/useless.png",
          ],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [50, 100, 50, 100],
        height: [100, 50, 100, 50],
        inmapx: [0, 0, 50, 0],
        inmapy: [0, 0, 0, 50],
        impactaudio: 1,
        destroyaudio: 5,
        instation: {
          source: "img/day-furniture0.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[1, 200]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 450,
        mW: 0,
        NWm: 18,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 1,
        VVmmM: 0,
        loot: [
          [41, 1, 0.004],
          [44, 1, 0.004],
          [22, 1, 0.005],
          [34, 30, 0.02],
          [38, 1, 0.05],
          [76, 1, 0.08],
          [66, 40, 0.1],
          [14, 2, 0.1],
          [64, 1, 0.01],
          [92, 4, 0.05],
          [90, 1, 0.2],
          [6, 2, 0.1],
        ],
        MMN: 1,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 0,
        NnN: 25,
        mwM: 0,
        damage: 0,
        WWv: 0,
        WmW: 315360000000,
        img: {
          source: [
            "img/day-furniture0.png",
            "img/useless.png",
            "img/useless.png",
          ],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [70, 100, 70, 100],
        height: [100, 70, 100, 70],
        inmapx: [0, 0, 30, 0],
        inmapy: [0, 0, 0, 30],
        impactaudio: 1,
        destroyaudio: 5,
        instation: {
          source: "img/day-furniture1.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[1, 200]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 450,
        mW: 0,
        NWm: 18,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 1,
        VVmmM: 0,
        loot: [
          [41, 1, 0.004],
          [44, 1, 0.004],
          [22, 1, 0.005],
          [34, 30, 0.02],
          [38, 1, 0.05],
          [76, 1, 0.08],
          [66, 40, 0.1],
          [14, 2, 0.1],
          [64, 1, 0.01],
          [92, 4, 0.05],
          [90, 1, 0.2],
          [6, 2, 0.1],
        ],
        MMN: 1,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 0,
        NnN: 25,
        mwM: 0,
        damage: 0,
        WWv: 0,
        WmW: 315360000000,
        img: {
          source: [
            "img/day-furniture1.png",
            "img/useless.png",
            "img/useless.png",
          ],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [70, 70, 70, 70],
        height: [70, 70, 70, 70],
        inmapx: [15, 15, 15, 15],
        inmapy: [15, 15, 15, 15],
        impactaudio: 1,
        destroyaudio: 5,
        instation: {
          source: "img/day-furniture2.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[1, 100]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 450,
        mW: 0,
        NWm: 18,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 1,
        VVmmM: 0,
        loot: [
          [41, 1, 0.004],
          [44, 1, 0.004],
          [22, 1, 0.005],
          [34, 30, 0.02],
          [38, 1, 0.05],
          [76, 1, 0.08],
          [66, 40, 0.1],
          [14, 2, 0.1],
          [64, 1, 0.01],
          [92, 4, 0.05],
          [90, 1, 0.2],
          [6, 2, 0.1],
        ],
        MMN: 1,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 0,
        NnN: 25,
        mwM: 0,
        damage: 0,
        WWv: 0,
        WmW: 315360000000,
        img: {
          source: [
            "img/day-furniture2.png",
            "img/useless.png",
            "img/useless.png",
          ],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [70, 70, 70, 70],
        height: [70, 70, 70, 70],
        inmapx: [15, 15, 15, 15],
        inmapy: [15, 15, 15, 15],
        impactaudio: 1,
        destroyaudio: 5,
        instation: {
          source: "img/day-furniture3.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[1, 100]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 450,
        mW: 0,
        NWm: 18,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 1,
        VVmmM: 0,
        loot: [
          [41, 1, 0.004],
          [44, 1, 0.004],
          [22, 1, 0.005],
          [34, 30, 0.02],
          [38, 1, 0.05],
          [76, 1, 0.08],
          [66, 40, 0.1],
          [14, 2, 0.1],
          [64, 1, 0.01],
          [92, 4, 0.05],
          [90, 1, 0.2],
          [6, 2, 0.1],
        ],
        MMN: 1,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 0,
        NnN: 25,
        mwM: 0,
        damage: 0,
        WWv: 0,
        WmW: 315360000000,
        img: {
          source: [
            "img/day-furniture3.png",
            "img/useless.png",
            "img/useless.png",
          ],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [70, 70, 70, 70],
        height: [70, 70, 70, 70],
        inmapx: [15, 15, 15, 15],
        inmapy: [15, 15, 15, 15],
        impactaudio: 8,
        destroyaudio: 9,
        instation: {
          source: "img/day-carton-box0.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 450,
        mW: 0,
        NWm: 18,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 1,
        VVmmM: 0,
        loot: [
          [79, 1, 0.1],
          [90, 2, 0.2],
          [41, 1, 0.003],
          [44, 1, 0.003],
          [82, 1, 0.01],
          [22, 1, 0.005],
          [34, 30, 0.02],
          [38, 1, 0.08],
          [76, 1, 0.1],
          [66, 40, 0.02],
          [14, 2, 0.1],
          [92, 4, 0.08],
          [89, 1, 0.1],
        ],
        MMN: 1,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 0,
        NnN: 25,
        mwM: 0,
        damage: 0,
        WWv: 0,
        WmW: 315360000000,
        img: {
          source: [
            "img/day-carton-box0.png",
            "img/useless.png",
            "img/useless.png",
          ],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [70, 70, 70, 70],
        height: [70, 70, 70, 70],
        inmapx: [15, 15, 15, 15],
        inmapy: [15, 15, 15, 15],
        impactaudio: 8,
        destroyaudio: 9,
        instation: {
          source: "img/day-carton-box1.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 450,
        mW: 0,
        NWm: 18,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 1,
        VVmmM: 0,
        loot: [
          [79, 1, 0.1],
          [90, 2, 0.2],
          [41, 1, 0.003],
          [44, 1, 0.003],
          [82, 1, 0.01],
          [22, 1, 0.005],
          [34, 30, 0.02],
          [38, 1, 0.08],
          [76, 1, 0.1],
          [66, 40, 0.02],
          [14, 2, 0.1],
          [92, 4, 0.08],
          [89, 1, 0.1],
        ],
        MMN: 1,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 0,
        NnN: 25,
        mwM: 0,
        damage: 0,
        WWv: 0,
        WmW: 315360000000,
        img: {
          source: [
            "img/day-carton-box1.png",
            "img/useless.png",
            "img/useless.png",
          ],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [50, 100, 50, 100],
        height: [100, 50, 100, 50],
        inmapx: [0, 0, 50, 0],
        inmapy: [0, 0, 0, 50],
        impactaudio: 4,
        destroyaudio: 7,
        instation: {
          source: "img/day-safe0.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [
            [8, 32],
            [53, 32],
          ],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 450,
        mW: 0,
        NWm: 19,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 1,
        VVmmM: 0,
        loot: [
          [42, 1, 0.008],
          [43, 1, 0.002],
          [46, 1, 0.002],
          [45, 1, 0.02],
          [83, 1, 0.002],
          [40, 1, 0.002],
          [25, 1, 0.002],
          [24, 1, 0.002],
          [23, 1, 0.002],
          [26, 1, 0.002],
          [36, 50, 0.02],
          [35, 30, 0.02],
          [98, 1, 0.01],
          [97, 1, 0.01],
          [22, 1, 0.04],
          [34, 40, 0.06],
          [80, 1, 0.05],
          [81, 50, 0.05],
        ],
        MMN: 1,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 0,
        NnN: 25,
        mwM: 0,
        damage: 0,
        WWv: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-safe0.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [50, 100, 50, 100],
        height: [100, 50, 100, 50],
        inmapx: [0, 0, 50, 0],
        inmapy: [0, 0, 0, 50],
        impactaudio: 4,
        destroyaudio: 7,
        instation: {
          source: "img/day-fridge0.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [
            [8, 16],
            [53, 16],
          ],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 450,
        mW: 0,
        NWm: 25,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 1,
        VVmmM: 1,
        loot: [
          [39, 1, 0.1],
          [72, 1, 0.1],
          [87, 1, 0.01],
          [78, 1, 0.15],
          [13, 1, 0.15],
          [11, 1, 0.15],
          [88, 1, 0.01],
        ],
        MMN: 1,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 0,
        NnN: 25,
        mwM: 0,
        damage: 0,
        WWv: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-fridge0.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [50, 100, 50, 100],
        height: [100, 50, 100, 50],
        inmapx: [0, 0, 50, 0],
        inmapy: [0, 0, 0, 50],
        impactaudio: 4,
        destroyaudio: 7,
        instation: {
          source: "img/day-fridge1.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [
            [8, 16],
            [53, 16],
          ],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 450,
        mW: 0,
        NWm: 21,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 1,
        VVmmM: 1,
        loot: [
          [39, 1, 0.1],
          [72, 1, 0.1],
          [87, 1, 0.01],
          [78, 1, 0.15],
          [13, 1, 0.15],
          [11, 1, 0.15],
          [88, 1, 0.01],
        ],
        MMN: 1,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 0,
        NnN: 25,
        mwM: 0,
        damage: 0,
        WWv: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-fridge1.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [50, 70, 50, 70],
        height: [70, 50, 70, 50],
        inmapx: [25, 30, 25, 0],
        inmapy: [0, 25, 30, 25],
        impactaudio: 2,
        destroyaudio: 6,
        instation: {
          source: "img/day-toilet0.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [
            [8, 4],
            [2, 100],
          ],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 450,
        mW: 0,
        NWm: 17,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 1,
        VVmmM: 1,
        loot: [
          [73, 1, 0.2],
          [74, 1, 0.02],
          [115, 1, 0.005],
          [125, 1, 0.002],
        ],
        MMN: 1,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 0,
        NnN: 25,
        mwM: 0,
        damage: 0,
        WWv: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-toilet0.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [50, 50, 50, 50],
        height: [50, 50, 50, 50],
        inmapx: [25, 25, 25, 25],
        inmapy: [25, 25, 25, 25],
        impactaudio: 4,
        destroyaudio: 7,
        instation: {
          source: "img/day-little-table0.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[8, 8]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 450,
        mW: 0,
        NWm: 25,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 1,
        loot: [
          [39, 1, 0.1],
          [72, 1, 0.1],
          [87, 1, 0.01],
          [78, 1, 0.15],
          [13, 1, 0.15],
          [11, 1, 0.15],
          [88, 1, 0.01],
        ],
        MMN: 1,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 0,
        NnN: 25,
        mwM: 0,
        damage: 0,
        WWv: 0,
        WmW: 315360000000,
        img: {
          source: [
            "img/day-little-table0.png",
            "img/useless.png",
            "img/useless.png",
          ],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [70, 70, 70, 70],
        height: [70, 70, 70, 70],
        inmapx: [15, 15, 15, 15],
        inmapy: [15, 15, 15, 15],
        impactaudio: 1,
        destroyaudio: 5,
        instation: {
          source: "img/day-plot0.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [
            [2, 40],
            [1, 40],
          ],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 450,
        mW: 0,
        NWm: 22,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: [
          [41, 1, 0.004],
          [44, 1, 0.004],
          [22, 1, 0.005],
          [34, 30, 0.02],
          [38, 1, 0.05],
          [76, 1, 0.08],
          [66, 40, 0.1],
          [14, 2, 0.1],
          [64, 1, 0.01],
          [92, 4, 0.05],
          [90, 1, 0.2],
          [6, 2, 0.1],
        ],
        MMN: 2,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 0,
        NnN: 25,
        mwM: 0,
        damage: 0,
        WWv: 0,
        WmW: 315360000000,
        wwW: 30,
        img: {
          source: ["img/day-plot0.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [70, 70, 70, 70],
        height: [70, 70, 70, 70],
        inmapx: [15, 15, 15, 15],
        inmapy: [15, 15, 15, 15],
        impactaudio: 4,
        destroyaudio: 0,
        instation: {
          source: "img/day-barel0.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[8, 8]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 100,
        mW: 0,
        NWm: 23,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 1,
        VVmmM: 0,
        loot: [[58, 1, 0.2]],
        MMN: 2,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 0,
        NnN: 25,
        mwM: 1,
        damage: 250,
        WWv: 5000,
        WmW: 315360000000,
        wwW: 30,
        img: {
          source: ["img/day-barel0.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [70, 70, 70, 70],
        height: [70, 70, 70, 70],
        inmapx: [15, 15, 15, 15],
        inmapy: [15, 15, 15, 15],
        impactaudio: 4,
        destroyaudio: 0,
        instation: {
          source: "img/day-barel1.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [
            [56, 8],
            [8, 8],
          ],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 300,
        mW: 0,
        NWm: 24,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: [
          [41, 1, 0.004],
          [44, 1, 0.004],
          [22, 1, 0.005],
          [34, 30, 0.02],
          [38, 1, 0.05],
          [76, 1, 0.08],
          [66, 40, 0.1],
          [14, 2, 0.1],
          [64, 1, 0.01],
          [92, 4, 0.05],
          [90, 1, 0.2],
          [6, 2, 0.1],
        ],
        MMN: 2,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 2,
        NnN: 25,
        mwM: 1,
        damage: 300,
        WWv: 10000,
        WmW: 315360000000,
        wwW: 30,
        img: {
          source: ["img/day-barel1.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [70, 70, 70, 70],
        height: [70, 70, 70, 70],
        inmapx: [15, 15, 15, 15],
        inmapy: [15, 15, 15, 15],
        impactaudio: 8,
        destroyaudio: 9,
        instation: {
          source: "img/day-garbage-bag0.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 450,
        mW: 0,
        NWm: 20,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 1,
        VVmmM: 0,
        loot: [
          [79, 1, 0.08],
          [73, 1, 0.05],
          [44, 1, 0.02],
          [22, 1, 0.01],
          [34, 30, 0.02],
          [66, 40, 0.1],
          [14, 2, 0.1],
          [76, 1, 0.1],
          [78, 1, 0.15],
          [13, 1, 0.15],
          [11, 1, 0.15],
          [90, 3, 0.4],
        ],
        MMN: 2,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 0,
        NnN: 25,
        mwM: 0,
        damage: 0,
        WWv: 0,
        WmW: 315360000000,
        wwW: 30,
        img: {
          source: [
            "img/day-garbage-bag0.png",
            "img/useless.png",
            "img/useless.png",
          ],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [50, 100, 50, 100],
        height: [100, 50, 100, 50],
        inmapx: [0, 0, 50, 0],
        inmapy: [0, 0, 0, 50],
        impactaudio: 1,
        destroyaudio: 5,
        instation: {
          source: "img/day-cupboard0.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[1, 200]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 450,
        mW: 0,
        NWm: 1,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 1,
        VVmmM: 0,
        loot: [
          [41, 1, 0.004],
          [44, 1, 0.004],
          [22, 1, 0.005],
          [34, 30, 0.02],
          [38, 1, 0.05],
          [76, 1, 0.08],
          [66, 40, 0.1],
          [14, 2, 0.1],
          [64, 1, 0.01],
          [92, 4, 0.05],
          [90, 1, 0.2],
          [6, 2, 0.1],
        ],
        MMN: 1,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 0,
        NnN: 25,
        mwM: 0,
        damage: 0,
        WWv: 0,
        WmW: 315360000000,
        img: {
          source: [
            "img/day-cupboard0.png",
            "img/useless.png",
            "img/useless.png",
          ],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 2,
        destroyaudio: 6,
        instation: {
          source: "img/day-pharma0.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [
            [8, 8],
            [2, 60],
          ],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 450,
        mW: 0,
        NWm: 17,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 1,
        VVmmM: 0,
        loot: [
          [38, 1, 0.1],
          [37, 1, 0.03],
          [75, 1, 0.05],
          [74, 2, 0.2],
          [73, 1, 0.1],
        ],
        MMN: 1,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 0,
        NnN: 25,
        mwM: 0,
        damage: 0,
        WWv: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-pharma0.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [50, 100, 50, 100],
        height: [100, 50, 100, 50],
        inmapx: [0, 0, 50, 0],
        inmapy: [0, 0, 0, 50],
        impactaudio: 1,
        destroyaudio: 5,
        instation: {
          source: "img/day-ammo-box.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[1, 200]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 450,
        mW: 0,
        NWm: 18,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 1,
        VVmmM: 0,
        loot: [
          [40, 1, 0.001],
          [25, 1, 0.001],
          [24, 1, 0.001],
          [83, 1, 0.001],
          [23, 1, 0.001],
          [26, 1, 0.001],
          [36, 50, 0.01],
          [92, 20, 0.01],
          [93, 1, 0.0008],
          [98, 2, 0.005],
          [99, 1, 0.001],
          [100, 1, 0.001],
          [97, 3, 0.005],
          [35, 30, 0.01],
          [22, 1, 0.003],
          [34, 50, 0.01],
          [80, 1, 0.003],
          [81, 50, 0.01],
          [18, 1, 0.005],
          [102, 1, 0.005],
          [103, 1, 0.002],
          [104, 1, 0.001],
          [105, 1, 0.005],
          [106, 1, 0.002],
          [107, 1, 0.001],
          [109, 1, 0.002],
          [110, 1, 0.001],
          [125, 1, 0.0005],
          [112, 1, 0.0005],
        ],
        MMN: 1,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 0,
        NnN: 25,
        mwM: 0,
        damage: 0,
        WWv: 0,
        WmW: 315360000000,
        img: {
          source: [
            "img/day-ammo-box.png",
            "img/useless.png",
            "img/useless.png",
          ],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [70, 50, 70, 50],
        height: [50, 70, 50, 70],
        inmapx: [0, 25, 30, 25],
        inmapy: [25, 0, 25, 30],
        impactaudio: 4,
        destroyaudio: 7,
        instation: {
          source: "img/day-ammo-locker0.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [
            [8, 32],
            [53, 12],
          ],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 450,
        mW: 0,
        NWm: 28,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 1,
        VVmmM: 0,
        loot: [
          [40, 1, 0.001],
          [25, 1, 0.001],
          [24, 1, 0.001],
          [83, 1, 0.001],
          [23, 1, 0.001],
          [26, 1, 0.001],
          [36, 50, 0.01],
          [92, 20, 0.01],
          [93, 1, 0.0008],
          [98, 2, 0.005],
          [99, 1, 0.001],
          [100, 1, 0.001],
          [97, 3, 0.005],
          [35, 30, 0.01],
          [22, 1, 0.003],
          [34, 50, 0.01],
          [80, 1, 0.003],
          [81, 50, 0.01],
          [18, 1, 0.005],
          [102, 1, 0.005],
          [103, 1, 0.002],
          [104, 1, 0.001],
          [105, 1, 0.005],
          [106, 1, 0.002],
          [107, 1, 0.001],
          [109, 1, 0.002],
          [110, 1, 0.001],
          [125, 1, 0.0005],
          [112, 1, 0.0005],
        ],
        MMN: 1,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 0,
        NnN: 25,
        mwM: 0,
        damage: 0,
        WWv: 0,
        WmW: 315360000000,
        img: {
          source: [
            "img/day-ammo-locker0.png",
            "img/useless.png",
            "img/useless.png",
          ],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [50, 100, 50, 100],
        height: [100, 50, 100, 50],
        inmapx: [0, 0, 50, 0],
        inmapy: [0, 0, 0, 50],
        impactaudio: 4,
        destroyaudio: 7,
        instation: {
          source: "img/day-ammo-locker1.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [
            [8, 32],
            [53, 12],
          ],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 450,
        mW: 0,
        NWm: 27,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 1,
        VVmmM: 0,
        loot: [
          [40, 1, 0.001],
          [25, 1, 0.001],
          [24, 1, 0.001],
          [83, 1, 0.001],
          [23, 1, 0.001],
          [26, 1, 0.001],
          [36, 50, 0.01],
          [92, 20, 0.01],
          [93, 1, 0.0008],
          [98, 2, 0.005],
          [99, 1, 0.001],
          [100, 1, 0.001],
          [97, 3, 0.005],
          [35, 30, 0.01],
          [22, 1, 0.003],
          [34, 50, 0.01],
          [80, 1, 0.003],
          [81, 50, 0.01],
          [18, 1, 0.005],
          [102, 1, 0.005],
          [103, 1, 0.002],
          [104, 1, 0.001],
          [105, 1, 0.005],
          [106, 1, 0.002],
          [107, 1, 0.001],
          [109, 1, 0.002],
          [110, 1, 0.001],
          [125, 1, 0.0005],
          [112, 1, 0.0005],
        ],
        MMN: 1,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 0,
        NnN: 25,
        mwM: 0,
        damage: 0,
        WWv: 0,
        WmW: 315360000000,
        img: {
          source: [
            "img/day-ammo-locker1.png",
            "img/useless.png",
            "img/useless.png",
          ],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [50, 100, 50, 100],
        height: [100, 50, 100, 50],
        inmapx: [0, 0, 50, 0],
        inmapy: [0, 0, 0, 50],
        impactaudio: 4,
        destroyaudio: 7,
        instation: {
          source: "img/day-ammo-locker2.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [
            [8, 32],
            [53, 12],
          ],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 450,
        mW: 0,
        NWm: 27,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 1,
        VVmmM: 0,
        loot: [
          [40, 1, 0.001],
          [25, 1, 0.001],
          [24, 1, 0.001],
          [83, 1, 0.001],
          [23, 1, 0.001],
          [26, 1, 0.001],
          [36, 50, 0.01],
          [92, 20, 0.01],
          [93, 1, 0.0008],
          [98, 2, 0.005],
          [99, 1, 0.001],
          [100, 1, 0.001],
          [97, 3, 0.005],
          [35, 30, 0.01],
          [22, 1, 0.003],
          [34, 50, 0.01],
          [80, 1, 0.003],
          [81, 50, 0.01],
          [18, 1, 0.005],
          [102, 1, 0.005],
          [103, 1, 0.002],
          [104, 1, 0.001],
          [105, 1, 0.005],
          [106, 1, 0.002],
          [107, 1, 0.001],
          [109, 1, 0.002],
          [110, 1, 0.001],
          [125, 1, 0.0005],
          [112, 1, 0.0005],
        ],
        MMN: 1,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 0,
        NnN: 25,
        mwM: 0,
        damage: 0,
        WWv: 0,
        WmW: 315360000000,
        img: {
          source: [
            "img/day-ammo-locker2.png",
            "img/useless.png",
            "img/useless.png",
          ],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 4,
        destroyaudio: 7,
        instation: {
          source: "img/day-electronic-box0.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [
            [92, 8],
            [89, 4],
            [8, 4],
            [90, 12],
          ],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 800,
        mW: 0,
        NWm: 3,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 1,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 0,
        NnN: 25,
        mwM: 0,
        damage: 0,
        WWv: 0,
        WmW: 315360000000,
        img: {
          source: [
            "img/day-electronic-box0.png",
            "img/useless.png",
            "img/useless.png",
          ],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [120, 120, 120, 120],
        height: [120, 120, 120, 120],
        inmapx: [-10, -10, -10, -10],
        inmapy: [-10, -10, -10, -10],
        impactaudio: 4,
        destroyaudio: 7,
        instation: {
          source: "img/day-electronic-box1.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [
            [92, 16],
            [89, 16],
            [91, 8],
            [8, 16],
          ],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 1400,
        mW: 0,
        NWm: 3,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 1,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 0,
        NnN: 25,
        mwM: 0,
        damage: 0,
        WWv: 0,
        WmW: 315360000000,
        img: {
          source: [
            "img/day-electronic-box1.png",
            "img/useless.png",
            "img/useless.png",
          ],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [70, 70, 70, 70],
        height: [70, 70, 70, 70],
        inmapx: [15, 15, 15, 15],
        inmapy: [15, 15, 15, 15],
        impactaudio: 4,
        destroyaudio: 7,
        instation: {
          source: "img/day-electronic-box2.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[8, 16]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 450,
        mW: 0,
        NWm: 3,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 1,
        VVmmM: 0,
        loot: [
          [89, 2, 0.1],
          [90, 2, 0.1],
          [92, 20, 0.05],
          [73, 2, 0.1],
          [74, 4, 0.1],
          [75, 1, 0.03],
          [95, 1, 0.01],
        ],
        MMN: 1,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 0,
        NnN: 25,
        mwM: 0,
        damage: 0,
        WWv: 0,
        WmW: 315360000000,
        img: {
          source: [
            "img/day-electronic-box2.png",
            "img/useless.png",
            "img/useless.png",
          ],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [70, 70, 70, 70],
        height: [70, 70, 70, 70],
        inmapx: [15, 15, 15, 15],
        inmapy: [15, 15, 15, 15],
        impactaudio: 4,
        destroyaudio: 7,
        instation: {
          source: "img/day-electronic-box3.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [
            [8, 16],
            [89, 4],
          ],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 450,
        mW: 0,
        NWm: 3,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 1,
        VVmmM: 0,
        loot: [
          [89, 2, 0.1],
          [90, 4, 0.1],
          [92, 20, 0.05],
          [91, 1, 0.03],
          [54, 5, 0.01],
          [75, 2, 0.1],
          [73, 3, 0.1],
          [74, 5, 0.1],
          [93, 1, 0.005],
          [95, 2, 0.05],
        ],
        MMN: 1,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 0,
        NnN: 25,
        mwM: 0,
        damage: 0,
        WWv: 0,
        WmW: 315360000000,
        img: {
          source: [
            "img/day-electronic-box3.png",
            "img/useless.png",
            "img/useless.png",
          ],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [70, 70, 70, 70],
        height: [70, 70, 70, 70],
        inmapx: [15, 15, 15, 15],
        inmapy: [15, 15, 15, 15],
        impactaudio: 4,
        destroyaudio: 7,
        instation: {
          source: "img/day-electronic-box4.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[8, 16]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 450,
        mW: 0,
        NWm: 3,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 1,
        VVmmM: 0,
        loot: [
          [89, 2, 0.1],
          [90, 4, 0.1],
          [92, 20, 0.05],
          [91, 1, 0.03],
          [54, 2, 0.01],
          [75, 1, 0.1],
          [73, 3, 0.1],
          [74, 5, 0.1],
          [95, 1, 0.01],
          [98, 1, 0.008],
        ],
        MMN: 1,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 0,
        NnN: 25,
        mwM: 0,
        damage: 0,
        WWv: 0,
        WmW: 315360000000,
        img: {
          source: [
            "img/day-electronic-box4.png",
            "img/useless.png",
            "img/useless.png",
          ],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [70, 70, 70, 70],
        height: [70, 70, 70, 70],
        inmapx: [15, 15, 15, 15],
        inmapy: [15, 15, 15, 15],
        impactaudio: 4,
        destroyaudio: 7,
        instation: {
          source: "img/day-electronic-box5.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[8, 16]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 450,
        mW: 0,
        NWm: 3,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 1,
        VVmmM: 0,
        loot: [
          [89, 2, 0.1],
          [90, 2, 0.1],
          [92, 20, 0.05],
          [73, 2, 0.1],
          [74, 4, 0.1],
          [75, 1, 0.03],
          [95, 1, 0.01],
        ],
        MMN: 1,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 0,
        NnN: 25,
        mwM: 0,
        damage: 0,
        WWv: 0,
        WmW: 315360000000,
        img: {
          source: [
            "img/day-electronic-box5.png",
            "img/useless.png",
            "img/useless.png",
          ],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [50, 100, 50, 100],
        height: [100, 50, 100, 50],
        inmapx: [0, 0, 50, 0],
        inmapy: [0, 0, 0, 50],
        impactaudio: 4,
        destroyaudio: 7,
        instation: {
          source: "img/day-vending-machine0.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [
            [8, 16],
            [53, 16],
          ],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 450,
        mW: 0,
        NWm: 29,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 1,
        VVmmM: 1,
        loot: [
          [39, 1, 0.04],
          [87, 1, 0.04],
        ],
        MMN: 1,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 0,
        NnN: 25,
        mwM: 0,
        damage: 0,
        WWv: 0,
        WmW: 315360000000,
        img: {
          source: [
            "img/day-vending-machine0.png",
            "img/useless.png",
            "img/useless.png",
          ],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [70, 100, 70, 100],
        height: [100, 70, 100, 70],
        inmapx: [0, 0, 30, 0],
        inmapy: [0, 0, 0, 30],
        impactaudio: 4,
        destroyaudio: 7,
        instation: {
          source: "img/day-cash-machine0.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [
            [8, 16],
            [89, 4],
          ],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 450,
        mW: 0,
        NWm: 27,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 1,
        VVmmM: 0,
        loot: [[90, 1, 0.05]],
        MMN: 1,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 0,
        NnN: 25,
        mwM: 0,
        damage: 0,
        WWv: 0,
        WmW: 315360000000,
        img: {
          source: [
            "img/day-cash-machine0.png",
            "img/useless.png",
            "img/useless.png",
          ],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 8,
        destroyaudio: 9,
        instation: {
          source: "img/day-renforced-door.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[8, 40]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 7000,
        mW: 0,
        NWm: 3,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 1,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 0,
        NnN: 25,
        mwM: 0,
        damage: 0,
        WWv: 0,
        WmW: 315360000000,
        img: {
          source: [
            "img/day-renforced-door.png",
            "img/useless.png",
            "img/useless.png",
          ],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 8,
        destroyaudio: 9,
        instation: {
          source: "img/day-sofa6.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [
            [1, 99],
            [7, 9],
            [6, 6],
          ],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 450,
        mW: 0,
        NWm: 16,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 1,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 0,
        NnN: 25,
        mwM: 0,
        damage: 0,
        WWv: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-sofa6.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [70, 70, 70, 70],
        height: [70, 70, 70, 70],
        inmapx: [15, 15, 15, 15],
        inmapy: [15, 15, 15, 15],
        impactaudio: 8,
        destroyaudio: 9,
        instation: {
          source: "img/day-gold-chair0.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[1, 40]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 450,
        mW: 0,
        NWm: 34,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: [
          [79, 1, 0.1],
          [90, 2, 0.2],
          [41, 1, 0.003],
          [44, 1, 0.003],
          [82, 1, 0.01],
          [22, 1, 0.005],
          [34, 30, 0.02],
          [38, 1, 0.08],
          [76, 1, 0.1],
          [66, 40, 0.02],
          [14, 2, 0.1],
          [92, 4, 0.08],
          [89, 1, 0.1],
        ],
        MMN: 1,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 0,
        NnN: 25,
        mwM: 0,
        damage: 0,
        WWv: 0,
        WmW: 315360000000,
        img: {
          source: [
            "img/day-gold-chair0.png",
            "img/useless.png",
            "img/useless.png",
          ],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [70, 70, 70, 70],
        height: [70, 70, 70, 70],
        inmapx: [15, 15, 15, 15],
        inmapy: [15, 15, 15, 15],
        impactaudio: 8,
        destroyaudio: 9,
        instation: {
          source: "img/day-green-chair0.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[1, 40]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 450,
        mW: 0,
        NWm: 30,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: [
          [79, 1, 0.1],
          [90, 2, 0.2],
          [41, 1, 0.003],
          [44, 1, 0.003],
          [82, 1, 0.01],
          [22, 1, 0.005],
          [34, 30, 0.02],
          [38, 1, 0.08],
          [76, 1, 0.1],
          [66, 40, 0.02],
          [14, 2, 0.1],
          [92, 4, 0.08],
          [89, 1, 0.1],
        ],
        MMN: 1,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 0,
        NnN: 25,
        mwM: 0,
        damage: 0,
        WWv: 0,
        WmW: 315360000000,
        img: {
          source: [
            "img/day-green-chair0.png",
            "img/useless.png",
            "img/useless.png",
          ],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [70, 70, 70, 70],
        height: [70, 70, 70, 70],
        inmapx: [15, 15, 15, 15],
        inmapy: [15, 15, 15, 15],
        impactaudio: 1,
        destroyaudio: 5,
        instation: {
          source: "img/day-wood-chair0.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[1, 40]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 450,
        mW: 0,
        NWm: 18,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: [
          [79, 1, 0.1],
          [90, 2, 0.2],
          [41, 1, 0.003],
          [44, 1, 0.003],
          [82, 1, 0.01],
          [22, 1, 0.005],
          [34, 30, 0.02],
          [38, 1, 0.08],
          [76, 1, 0.1],
          [66, 40, 0.02],
          [14, 2, 0.1],
          [92, 4, 0.08],
          [89, 1, 0.1],
        ],
        MMN: 1,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 0,
        NnN: 25,
        mwM: 0,
        damage: 0,
        WWv: 0,
        WmW: 315360000000,
        img: {
          source: [
            "img/day-wood-chair0.png",
            "img/useless.png",
            "img/useless.png",
          ],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 290, 100, 280],
        height: [280, 100, 280, 100],
        inmapx: [0, -90, 0, -90],
        inmapy: [-90, 0, -90, 0],
        impactaudio: 1,
        destroyaudio: 5,
        instation: {
          source: "img/day-table1.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[1, 200]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 450,
        mW: 0,
        NWm: 1,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 1,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 0,
        NnN: 25,
        mwM: 0,
        damage: 0,
        WWv: 0,
        WmW: 315360000000,
        MMnVm: [-1, 0, -1, 0],
        nmMVw: [0, -1, 0, -1],
        img: {
          source: ["img/day-table1.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [70, 70, 70, 70],
        height: [70, 70, 70, 70],
        inmapx: [15, 15, 15, 15],
        inmapy: [15, 15, 15, 15],
        impactaudio: 1,
        destroyaudio: 5,
        instation: {
          source: "img/day-small-light-off.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[1, 100]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 450,
        mW: 0,
        NWm: 27,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 1,
        VVmmM: 0,
        loot: [
          [41, 1, 0.004],
          [44, 1, 0.004],
          [22, 1, 0.005],
          [34, 30, 0.02],
          [38, 1, 0.05],
          [76, 1, 0.08],
          [66, 40, 0.1],
          [14, 2, 0.1],
          [64, 1, 0.01],
          [92, 4, 0.05],
          [90, 1, 0.2],
          [6, 2, 0.1],
        ],
        MMN: 1,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 0,
        NnN: 25,
        mwM: 0,
        damage: 0,
        WWv: 0,
        WmW: 315360000000,
        img: {
          source: [
            "img/day-small-light-off.png",
            "img/useless.png",
            "img/useless.png",
          ],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 8,
        destroyaudio: 9,
        instation: {
          source: "img/day-bed2.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [
            [8, 12],
            [7, 20],
            [4, 12],
          ],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 450,
        mW: 0,
        NWm: 27,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 1,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 0,
        NnN: 25,
        mwM: 0,
        damage: 0,
        WWv: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-bed2.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [70, 100, 70, 100],
        height: [100, 70, 100, 70],
        inmapx: [0, 0, 30, 0],
        inmapy: [0, 0, 0, 30],
        impactaudio: 4,
        destroyaudio: 7,
        instation: {
          source: "img/day-furniture4.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[1, 200]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 450,
        mW: 0,
        NWm: 27,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 1,
        VVmmM: 0,
        loot: [
          [41, 1, 0.004],
          [44, 1, 0.004],
          [22, 1, 0.005],
          [34, 30, 0.02],
          [38, 1, 0.05],
          [127, 4, 0.1],
          [148, 1, 0.08],
          [151, 1, 0.08],
          [64, 1, 0.01],
          [92, 8, 0.05],
          [90, 2, 0.2],
          [6, 2, 0.1],
        ],
        MMN: 1,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 0,
        NnN: 25,
        mwM: 0,
        damage: 0,
        WWv: 0,
        WmW: 315360000000,
        img: {
          source: [
            "img/day-furniture4.png",
            "img/useless.png",
            "img/useless.png",
          ],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [70, 70, 70, 70],
        height: [70, 70, 70, 70],
        inmapx: [15, 15, 15, 15],
        inmapy: [15, 15, 15, 15],
        impactaudio: 4,
        destroyaudio: 7,
        instation: {
          source: "img/day-furniture5.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[1, 100]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 450,
        mW: 0,
        NWm: 27,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 1,
        VVmmM: 0,
        loot: [
          [41, 1, 0.004],
          [44, 1, 0.004],
          [22, 1, 0.005],
          [34, 30, 0.02],
          [38, 1, 0.05],
          [127, 4, 0.1],
          [148, 1, 0.08],
          [151, 1, 0.08],
          [64, 1, 0.01],
          [92, 8, 0.05],
          [90, 2, 0.2],
          [6, 2, 0.1],
        ],
        MMN: 1,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 0,
        NnN: 25,
        mwM: 0,
        damage: 0,
        WWv: 0,
        WmW: 315360000000,
        img: {
          source: [
            "img/day-furniture5.png",
            "img/useless.png",
            "img/useless.png",
          ],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [70, 70, 70, 70],
        height: [70, 70, 70, 70],
        inmapx: [15, 15, 15, 15],
        inmapy: [15, 15, 15, 15],
        impactaudio: 4,
        destroyaudio: 7,
        instation: {
          source: "img/day-furniture6.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[1, 100]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 450,
        mW: 0,
        NWm: 27,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 1,
        VVmmM: 0,
        loot: [
          [41, 1, 0.004],
          [44, 1, 0.004],
          [22, 1, 0.005],
          [34, 30, 0.02],
          [38, 1, 0.05],
          [127, 4, 0.1],
          [148, 1, 0.08],
          [151, 1, 0.08],
          [64, 1, 0.01],
          [92, 8, 0.05],
          [90, 2, 0.2],
          [6, 2, 0.1],
        ],
        MMN: 1,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 0,
        NnN: 25,
        mwM: 0,
        damage: 0,
        WWv: 0,
        WmW: 315360000000,
        img: {
          source: [
            "img/day-furniture6.png",
            "img/useless.png",
            "img/useless.png",
          ],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 4,
        destroyaudio: 7,
        instation: {
          source: "img/day-chair1.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [
            [7, 8],
            [8, 8],
          ],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 450,
        mW: 0,
        NWm: 25,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 1,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 0,
        NnN: 25,
        mwM: 0,
        damage: 0,
        WWv: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-chair1.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 4,
        destroyaudio: 7,
        instation: {
          source: "img/day-chair2.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [
            [7, 8],
            [8, 8],
          ],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 450,
        mW: 0,
        NWm: 25,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 1,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 0,
        NnN: 25,
        mwM: 0,
        damage: 0,
        WWv: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-chair2.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [50, 100, 50, 100],
        height: [100, 50, 100, 50],
        inmapx: [0, 0, 50, 0],
        inmapy: [0, 0, 0, 50],
        impactaudio: 4,
        destroyaudio: 7,
        instation: {
          source: "img/day-distributor0.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [
            [8, 16],
            [53, 16],
          ],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 450,
        mW: 0,
        NWm: 27,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 1,
        VVmmM: 1,
        loot: [
          [39, 1, 0.04],
          [87, 1, 0.04],
          [72, 1, 0.04],
        ],
        MMN: 1,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 0,
        NnN: 25,
        mwM: 0,
        damage: 0,
        WWv: 0,
        WmW: 315360000000,
        img: {
          source: [
            "img/day-distributor0.png",
            "img/useless.png",
            "img/useless.png",
          ],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [70, 100, 70, 100],
        height: [100, 70, 100, 70],
        inmapx: [0, 0, 30, 0],
        inmapy: [0, 0, 0, 30],
        impactaudio: 2,
        destroyaudio: 6,
        instation: {
          source: "img/day-shower0.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [
            [8, 8],
            [2, 60],
          ],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 450,
        mW: 0,
        NWm: 17,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 1,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 0,
        NnN: 25,
        mwM: 0,
        damage: 0,
        WWv: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-shower0.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 4,
        destroyaudio: 7,
        instation: {
          source: "img/day-table2.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[8, 8]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 450,
        mW: 0,
        NWm: 3,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 1,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 0,
        NnN: 25,
        mwM: 0,
        damage: 0,
        WWv: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-table2.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [70, 70, 70, 70],
        height: [70, 70, 70, 70],
        inmapx: [15, 15, 15, 15],
        inmapy: [15, 15, 15, 15],
        impactaudio: 4,
        destroyaudio: 7,
        instation: {
          source: "img/day-blood-transfusion.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [
            [90, 2],
            [8, 1],
            [73, 1],
          ],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 450,
        mW: 0,
        NWm: 27,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: [
          [41, 1, 0.004],
          [44, 1, 0.004],
          [22, 1, 0.005],
          [34, 30, 0.02],
          [38, 1, 0.05],
          [76, 1, 0.08],
          [66, 40, 0.1],
          [14, 2, 0.1],
          [64, 1, 0.01],
          [92, 4, 0.05],
          [90, 1, 0.2],
          [6, 2, 0.1],
        ],
        MMN: 2,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 0,
        NnN: 25,
        mwM: 0,
        damage: 0,
        WWv: 0,
        WmW: 315360000000,
        wwW: 30,
        img: {
          source: [
            "img/day-blood-transfusion.png",
            "img/useless.png",
            "img/useless.png",
          ],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [70, 70, 70, 70],
        height: [70, 70, 70, 70],
        inmapx: [15, 15, 15, 15],
        inmapy: [15, 15, 15, 15],
        impactaudio: 4,
        destroyaudio: 7,
        instation: {
          source: "img/day-energy-box0.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [
            [8, 16],
            [89, 4],
          ],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 450,
        mW: 0,
        NWm: 30,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 1,
        VVmmM: 0,
        loot: [
          [89, 2, 0.1],
          [90, 4, 0.1],
          [92, 20, 0.05],
          [127, 8, 0.03],
          [54, 5, 0.01],
          [75, 2, 0.1],
          [73, 3, 0.1],
          [74, 5, 0.1],
          [93, 1, 0.005],
          [95, 2, 0.05],
        ],
        MMN: 1,
        cantShootThrough: 1,
        WvV: 0,
        WnW: 0,
        NnN: 25,
        mwM: 0,
        damage: 0,
        WWv: 0,
        WmW: 315360000000,
        img: {
          source: [
            "img/day-energy-box0.png",
            "img/useless.png",
            "img/useless.png",
          ],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
    ],
    detail: {},
    NWm: -1,
  },
  {
    id: 72,
    img: {
      source: [
        "img/inv-tomato-soup-out.png",
        "img/inv-tomato-soup-in.png",
        "img/inv-tomato-soup-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Tomato Soup",
      description: "Has not yet been opened.",
      WVn: [
        [79, 1],
        [77, 2],
      ],
      stack: 1,
      stwindowid: [1, 3],
      NMMmV: [15000, 7000],
      nww: 1,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    mnw: 25,
    stack: 5,
    loot: 74,
    vWVMV: 2,
    nNmmM: 79,
    wait: 10,
  },
  {
    id: 73,
    img: {
      source: [
        "img/inv-syringe-out.png",
        "img/inv-syringe-in.png",
        "img/inv-syringe-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Syringe",
      description: "Useful to make drugs.",
      WVn: [[90, 1]],
      stack: 1,
      stwindowid: [5],
      NMMmV: [30000],
      nww: 7,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 20,
    loot: 75,
    mW: 50,
  },
  {
    id: 74,
    img: {
      source: [
        "img/inv-chemical-component-out.png",
        "img/inv-chemical-component-in.png",
        "img/inv-chemical-component-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Chemical Component",
      description: "Useful to make a drugs.",
      nww: -1,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 20,
    loot: 76,
    mW: 50,
  },
  {
    id: 75,
    img: {
      source: [
        "img/inv-radaway-out.png",
        "img/inv-radaway-in.png",
        "img/inv-radaway-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "RadAway",
      description: "Reduce your radioactivity a lot.",
      WVn: [
        [73, 1],
        [74, 1],
        [120, 1],
      ],
      stack: 1,
      stwindowid: [9],
      NMMmV: [45000],
      nww: 7,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    mnw: 26,
    stack: 5,
    loot: 77,
    wait: 10,
  },
  {
    id: 76,
    img: {
      source: [
        "img/inv-tomato-seed-out.png",
        "img/inv-tomato-seed-in.png",
        "img/inv-tomato-seed-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Tomato Seed",
      description: "A fruit or vegetable?",
      WVn: [[77, 4]],
      stack: 1,
      stwindowid: [1, 3],
      NMMmV: [30000, 20000],
      nww: 6,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 40,
    loot: 78,
    MmwnN: 79,
    wait: 10,
    mnw: 21,
    fuelleft: -1,
    WvV: -1,
    cantShootThrough: 0,
    mN: 1000,
    width: [30, 30, 30, 30],
    height: [30, 30, 30, 30],
    Wwv: [0, 0, 0, 0],
    nWn: [0, 0, 0, 0],
    inmapx: [35, 35, 35, 35],
    inmapy: [35, 35, 35, 35],
    putableimg: {
      source: "img/day-clear-blue-tomato.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/day-redprint-tomato.png",
      W: {
        m: 0,
      },
    },
    isDoor: 0,
    mwM: 0,
    behavior: 1,
    MWv: 0,
    nvN: 0,
    MMN: 0,
    WnW: 0,
    impactaudio: 0,
    destroyaudio: 0,
    instation: [
      {
        source: "img/day-plant0-tomato.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-plant1-tomato.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-plant2-tomato.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-plant3-tomato.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-plant4-tomato.png",
        W: {
          m: 0,
        },
      },
    ],
    NWm: 26,
    Mwm: 68,
    WmW: 2400000,
    health: 250,
    mW: 0,
  },
  {
    id: 77,
    img: {
      source: [
        "img/inv-tomato-out.png",
        "img/inv-tomato-in.png",
        "img/inv-tomato-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Tomato",
      description: "Why did the tomato blush?",
      nww: -1,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 20,
    loot: 79,
    wait: 5,
    vWVMV: 10,
    nNmmM: 78,
    mnw: 27,
    mW: 24,
  },
  {
    id: 78,
    img: {
      source: [
        "img/inv-rotten-tomato-out.png",
        "img/inv-rotten-tomato-in.png",
        "img/inv-rotten-tomato-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Rotten Tomato",
      description: "Go on, have a bite!",
      nww: -1,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 20,
    loot: 80,
    wait: 5,
    mnw: 28,
    mW: 20,
  },
  {
    id: 79,
    img: {
      source: [
        "img/inv-can-out.png",
        "img/inv-can-in.png",
        "img/inv-can-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Can",
      description: "Useful to craft food can.",
      WVn: [[8, 1]],
      stack: 1,
      stwindowid: [2],
      NMMmV: [20000],
      nww: 1,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    mnw: 0,
    stack: 255,
    loot: 81,
  },
  {
    id: 80,
    img: {
      source: [
        "img/inv-wood-crossbow-out.png",
        "img/inv-wood-crossbow-in.png",
        "img/inv-wood-crossbow-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Wood Crossbow",
      description: "Shoot faster, reload slower",
      WVn: [
        [1, 200],
        [6, 2],
        [8, 1],
      ],
      stack: 1,
      stwindowid: [2],
      NMMmV: [50000],
      nww: 5,
      level: 6,
      WnNmW: -1,
      pointreq: 1,
    },
    mnw: 29,
    vMv: 81,
    stack: 1,
    loot: 82,
    wait: 10,
  },
  {
    id: 81,
    img: {
      source: [
        "img/inv-wood-crossarrow-out.png",
        "img/inv-wood-crossarrow-in.png",
        "img/inv-wood-crossarrow-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Crossbow Arrows",
      description: "Needed to use crossbow.",
      WVn: [
        [1, 40],
        [8, 1],
      ],
      stack: 10,
      stwindowid: [2],
      NMMmV: [30000],
      nww: 5,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 255,
    loot: 83,
  },
  {
    id: 82,
    img: {
      source: [
        "img/inv-nail-gun-out.png",
        "img/inv-nail-gun-in.png",
        "img/inv-nail-gun-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Nail Gun",
      description: "Repair walls from a distance",
      WVn: [
        [8, 3],
        [127, 1],
        [90, 1],
        [92, 4],
      ],
      stack: 1,
      stwindowid: [5],
      NMMmV: [30000],
      nww: 4,
      level: 7,
      WnNmW: -1,
      pointreq: 1,
    },
    mnw: 30,
    vMv: 66,
    stack: 1,
    loot: 84,
    wait: 10,
  },
  {
    id: 83,
    img: {
      source: [
        "img/inv-sawed-off-shotgun-out.png",
        "img/inv-sawed-off-shotgun-in.png",
        "img/inv-sawed-off-shotgun-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Sawed Off",
      description: "Shoot less far, do more damages",
      WVn: [
        [24, 1],
        [95, 6],
        [8, 6],
      ],
      stack: 1,
      stwindowid: [5],
      NMMmV: [200000],
      nww: 5,
      level: 13,
      WnNmW: 24,
      pointreq: 1,
    },
    mnw: 31,
    vMv: 35,
    stack: 1,
    loot: 85,
    wait: 10,
  },
  {
    id: 84,
    img: {
      source: [
        "img/inv-stone-floor-out.png",
        "img/inv-stone-floor-in.png",
        "img/inv-stone-floor-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Stone floor",
      description: "Players can't spawn on it",
      WVn: [[2, 15]],
      stack: 2,
      stwindowid: [2],
      NMMmV: [15000],
      nww: 3,
      level: 4,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 255,
    loot: 86,
    wait: 10,
    mnw: 21,
    fuelleft: -1,
    WvV: 2,
    cantShootThrough: 0,
    mN: 1000,
    width: [100, 100, 100, 100],
    height: [100, 100, 100, 100],
    Wwv: [0, 0, 0, 0],
    nWn: [0, 0, 0, 0],
    inmapx: [0, 0, 0, 0],
    inmapy: [0, 0, 0, 0],
    putableimg: {
      source: "img/day-clear-blue-stone-floor.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/day-redprint-stone-floor.png",
      W: {
        m: 0,
      },
    },
    Mvw: 1,
    vVwVM: 84,
    VWN: 0,
    isDoor: 0,
    Vvm: 1,
    mwM: 0,
    behavior: 0,
    MWv: 0,
    nvN: 0,
    MMN: 0,
    WnW: 0,
    broken: [
      {
        source: "img/day-stone-floor-broken0.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-floor-broken1.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-floor-broken2.png",
        W: {
          m: 0,
        },
      },
    ],
    impactaudio: 0,
    destroyaudio: 6,
    instation: [
      {
        source: "img/day-stone-floor-0.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-floor-1.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-floor-2.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-floor-3.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-floor-4.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-floor-5.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-floor-6.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-floor-7.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-floor-8.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-floor-9.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-floor-10.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-floor-11.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-floor-12.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-floor-13.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-floor-14.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-floor-15.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-floor-16.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-floor-17.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-floor-18.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-floor-19.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-floor-20.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-floor-21.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-floor-22.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-floor-23.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-floor-24.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-floor-25.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-floor-26.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-floor-27.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-floor-28.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-floor-29.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-floor-30.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-floor-31.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-floor-32.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-floor-33.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-floor-34.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-floor-35.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-floor-36.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-floor-37.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-floor-38.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-floor-39.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-floor-40.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-floor-41.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-floor-42.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-floor-43.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-floor-44.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-floor-45.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-floor-46.png",
        W: {
          m: 0,
        },
      },
    ],
    NWm: 2,
    Mwm: 80,
    WmW: 315360000000,
    health: 8000,
    mW: 0,
  },
  {
    id: 85,
    img: {
      source: [
        "img/inv-tiling-floor-out.png",
        "img/inv-tiling-floor-in.png",
        "img/inv-tiling-floor-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Tiling floor",
      description: "Players can't spawn on it",
      WVn: [[2, 15]],
      stack: 2,
      stwindowid: [2],
      NMMmV: [15000],
      nww: 3,
      level: 4,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 255,
    loot: 87,
    wait: 10,
    mnw: 21,
    fuelleft: -1,
    WvV: 2,
    cantShootThrough: 0,
    mN: 1000,
    width: [100, 100, 100, 100],
    height: [100, 100, 100, 100],
    Wwv: [0, 0, 0, 0],
    nWn: [0, 0, 0, 0],
    inmapx: [0, 0, 0, 0],
    inmapy: [0, 0, 0, 0],
    putableimg: {
      source: "img/day-clear-blue-tiling-floor.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/day-redprint-tiling-floor.png",
      W: {
        m: 0,
      },
    },
    Mvw: 1,
    vVwVM: 85,
    VWN: 0,
    isDoor: 0,
    Vvm: 1,
    mwM: 0,
    behavior: 0,
    MWv: 0,
    nvN: 0,
    MMN: 0,
    WnW: 0,
    broken: [
      {
        source: "img/day-tiling-floor-broken0.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-tiling-floor-broken1.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-tiling-floor-broken2.png",
        W: {
          m: 0,
        },
      },
    ],
    impactaudio: 0,
    destroyaudio: 6,
    instation: [
      {
        source: "img/day-tiling-floor-0.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-tiling-floor-1.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-tiling-floor-2.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-tiling-floor-3.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-tiling-floor-4.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-tiling-floor-5.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-tiling-floor-6.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-tiling-floor-7.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-tiling-floor-8.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-tiling-floor-9.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-tiling-floor-10.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-tiling-floor-11.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-tiling-floor-12.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-tiling-floor-13.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-tiling-floor-14.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-tiling-floor-15.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-tiling-floor-16.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-tiling-floor-17.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-tiling-floor-18.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-tiling-floor-19.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-tiling-floor-20.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-tiling-floor-21.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-tiling-floor-22.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-tiling-floor-23.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-tiling-floor-24.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-tiling-floor-25.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-tiling-floor-26.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-tiling-floor-27.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-tiling-floor-28.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-tiling-floor-29.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-tiling-floor-30.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-tiling-floor-31.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-tiling-floor-32.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-tiling-floor-33.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-tiling-floor-34.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-tiling-floor-35.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-tiling-floor-36.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-tiling-floor-37.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-tiling-floor-38.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-tiling-floor-39.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-tiling-floor-40.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-tiling-floor-41.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-tiling-floor-42.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-tiling-floor-43.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-tiling-floor-44.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-tiling-floor-45.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-tiling-floor-46.png",
        W: {
          m: 0,
        },
      },
    ],
    NWm: 2,
    Mwm: 80,
    WmW: 315360000000,
    health: 8000,
    mW: 0,
  },
  {
    id: 86,
    WvV: 0,
    Wwv: [0, 0, 0, 0],
    nWn: [0, 0, 0, 0],
    Mvw: 0,
    VWN: 0,
    isDoor: 0,
    Vvm: 0,
    mwM: 0,
    behavior: 0,
    MWv: 0,
    nvN: [
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 0,
        destroyaudio: 0,
        instation: {
          source: "img/day-road0.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[2, 100]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 100000000,
        mW: 0,
        NWm: 0,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 0,
        cantShootThrough: 0,
        WvV: 2,
        WnW: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-road0.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 0,
        destroyaudio: 0,
        instation: {
          source: "img/day-road1.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[2, 100]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 100000000,
        mW: 0,
        NWm: 0,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 0,
        cantShootThrough: 0,
        WvV: 2,
        WnW: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-road1.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 0,
        destroyaudio: 0,
        instation: {
          source: "img/day-road2.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[2, 100]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 100000000,
        mW: 0,
        NWm: 0,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 0,
        cantShootThrough: 0,
        WvV: 2,
        WnW: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-road2.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 0,
        destroyaudio: 0,
        instation: {
          source: "img/day-road3.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[2, 100]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 100000000,
        mW: 0,
        NWm: 0,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 0,
        cantShootThrough: 0,
        WvV: 2,
        WnW: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-road3.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 0,
        destroyaudio: 0,
        instation: {
          source: "img/day-road4.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[2, 100]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 100000000,
        mW: 0,
        NWm: 0,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 0,
        cantShootThrough: 0,
        WvV: 2,
        WnW: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-road4.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 0,
        destroyaudio: 0,
        instation: {
          source: "img/day-road5.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[2, 100]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 100000000,
        mW: 0,
        NWm: 0,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 0,
        cantShootThrough: 0,
        WvV: 2,
        WnW: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-road5.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 0,
        destroyaudio: 0,
        instation: {
          source: "img/day-road6.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[2, 100]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 100000000,
        mW: 0,
        NWm: 0,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 0,
        cantShootThrough: 0,
        WvV: 2,
        WnW: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-road6.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 0,
        destroyaudio: 0,
        instation: {
          source: "img/day-road7.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[2, 100]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 100000000,
        mW: 0,
        NWm: 0,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 0,
        cantShootThrough: 0,
        WvV: 2,
        WnW: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-road7.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 0,
        destroyaudio: 0,
        instation: {
          source: "img/day-road8.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[2, 100]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 100000000,
        mW: 0,
        NWm: 0,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 0,
        cantShootThrough: 0,
        WvV: 2,
        WnW: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-road8.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 0,
        destroyaudio: 0,
        instation: {
          source: "img/day-road9.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[2, 100]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 100000000,
        mW: 0,
        NWm: 0,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 0,
        cantShootThrough: 0,
        WvV: 2,
        WnW: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-road9.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 0,
        destroyaudio: 0,
        instation: {
          source: "img/day-road10.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[2, 100]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 100000000,
        mW: 0,
        NWm: 0,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 0,
        cantShootThrough: 0,
        WvV: 2,
        WnW: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-road10.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 0,
        destroyaudio: 0,
        instation: {
          source: "img/day-road11.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[2, 100]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 100000000,
        mW: 0,
        NWm: 0,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 0,
        cantShootThrough: 0,
        WvV: 2,
        WnW: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-road11.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 0,
        destroyaudio: 0,
        instation: {
          source: "img/day-road12.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[2, 100]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 100000000,
        mW: 0,
        NWm: 0,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 0,
        cantShootThrough: 0,
        WvV: 2,
        WnW: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-road12.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 0,
        destroyaudio: 0,
        instation: {
          source: "img/day-road13.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[2, 100]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 100000000,
        mW: 0,
        NWm: 0,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 0,
        cantShootThrough: 0,
        WvV: 2,
        WnW: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-road13.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 0,
        destroyaudio: 0,
        instation: {
          source: "img/day-road14.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[2, 100]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 100000000,
        mW: 0,
        NWm: 0,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 0,
        cantShootThrough: 0,
        WvV: 2,
        WnW: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-road14.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 0,
        destroyaudio: 0,
        instation: {
          source: "img/day-road15.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[2, 100]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 100000000,
        mW: 0,
        NWm: 0,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 0,
        cantShootThrough: 0,
        WvV: 2,
        WnW: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-road15.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 0,
        destroyaudio: 0,
        instation: {
          source: "img/day-road16.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[2, 100]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 100000000,
        mW: 0,
        NWm: 0,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 0,
        cantShootThrough: 0,
        WvV: 2,
        WnW: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-road16.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 0,
        destroyaudio: 0,
        instation: {
          source: "img/day-road17.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[2, 100]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 100000000,
        mW: 0,
        NWm: 0,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 0,
        cantShootThrough: 0,
        WvV: 2,
        WnW: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-road17.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 0,
        destroyaudio: 0,
        instation: {
          source: "img/day-road18.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[2, 100]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 100000000,
        mW: 0,
        NWm: 0,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 0,
        cantShootThrough: 0,
        WvV: 2,
        WnW: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-road18.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 0,
        destroyaudio: 0,
        instation: {
          source: "img/day-road19.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[2, 100]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 100000000,
        mW: 0,
        NWm: 0,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 0,
        cantShootThrough: 0,
        WvV: 2,
        WnW: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-road19.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 0,
        destroyaudio: 0,
        instation: {
          source: "img/day-road20.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[2, 100]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 100000000,
        mW: 0,
        NWm: 0,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 0,
        cantShootThrough: 0,
        WvV: 2,
        WnW: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-road20.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 0,
        destroyaudio: 0,
        instation: {
          source: "img/day-road21.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[2, 100]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 100000000,
        mW: 0,
        NWm: 0,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 0,
        cantShootThrough: 0,
        WvV: 2,
        WnW: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-road21.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 0,
        destroyaudio: 0,
        instation: {
          source: "img/day-road22.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[2, 100]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 100000000,
        mW: 0,
        NWm: 0,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 0,
        cantShootThrough: 0,
        WvV: 2,
        WnW: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-road22.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 0,
        destroyaudio: 0,
        instation: {
          source: "img/day-road23.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[2, 100]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 100000000,
        mW: 0,
        NWm: 0,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 0,
        cantShootThrough: 0,
        WvV: 2,
        WnW: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-road23.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 0,
        destroyaudio: 0,
        instation: {
          source: "img/day-road24.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[2, 100]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 100000000,
        mW: 0,
        NWm: 0,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 0,
        cantShootThrough: 0,
        WvV: 2,
        WnW: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-road24.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 0,
        destroyaudio: 0,
        instation: {
          source: "img/day-road25.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[2, 100]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 100000000,
        mW: 0,
        NWm: 0,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 0,
        cantShootThrough: 0,
        WvV: 2,
        WnW: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-road25.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 0,
        destroyaudio: 0,
        instation: {
          source: "img/day-road26.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[2, 100]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 100000000,
        mW: 0,
        NWm: 0,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 0,
        cantShootThrough: 0,
        WvV: 2,
        WnW: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-road26.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 0,
        destroyaudio: 0,
        instation: {
          source: "img/day-road27.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[2, 100]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 100000000,
        mW: 0,
        NWm: 0,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 0,
        cantShootThrough: 0,
        WvV: 2,
        WnW: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-road27.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 0,
        destroyaudio: 0,
        instation: {
          source: "img/day-road28.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[2, 100]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 100000000,
        mW: 0,
        NWm: 0,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 0,
        cantShootThrough: 0,
        WvV: 2,
        WnW: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-road28.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 0,
        destroyaudio: 0,
        instation: {
          source: "img/day-road29.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[2, 100]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 100000000,
        mW: 0,
        NWm: 0,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 0,
        cantShootThrough: 0,
        WvV: 2,
        WnW: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-road29.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 0,
        destroyaudio: 0,
        instation: {
          source: "img/day-road30.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[2, 100]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 100000000,
        mW: 0,
        NWm: 0,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 0,
        cantShootThrough: 0,
        WvV: 2,
        WnW: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-road30.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 0,
        destroyaudio: 0,
        instation: {
          source: "img/day-road31.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[2, 100]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 100000000,
        mW: 0,
        NWm: 0,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 0,
        cantShootThrough: 0,
        WvV: 2,
        WnW: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-road31.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 0,
        destroyaudio: 0,
        instation: {
          source: "img/day-road32.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[2, 100]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 100000000,
        mW: 0,
        NWm: 0,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 0,
        cantShootThrough: 0,
        WvV: 2,
        WnW: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-road32.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 0,
        destroyaudio: 0,
        instation: {
          source: "img/day-road33.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[2, 100]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 100000000,
        mW: 0,
        NWm: 0,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 0,
        cantShootThrough: 0,
        WvV: 2,
        WnW: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-road33.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 0,
        destroyaudio: 0,
        instation: {
          source: "img/day-road34.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[2, 100]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 100000000,
        mW: 0,
        NWm: 0,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 0,
        cantShootThrough: 0,
        WvV: 2,
        WnW: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-road34.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 0,
        destroyaudio: 0,
        instation: {
          source: "img/day-road35.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[2, 100]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 100000000,
        mW: 0,
        NWm: 0,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 0,
        cantShootThrough: 0,
        WvV: 2,
        WnW: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-road35.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 0,
        destroyaudio: 0,
        instation: {
          source: "img/day-road36.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[2, 100]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 100000000,
        mW: 0,
        NWm: 0,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 0,
        cantShootThrough: 0,
        WvV: 2,
        WnW: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-road36.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 0,
        destroyaudio: 0,
        instation: {
          source: "img/day-road37.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[2, 100]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 100000000,
        mW: 0,
        NWm: 0,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 0,
        cantShootThrough: 0,
        WvV: 2,
        WnW: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-road37.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 0,
        destroyaudio: 0,
        instation: {
          source: "img/day-road38.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[2, 100]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 100000000,
        mW: 0,
        NWm: 0,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 0,
        cantShootThrough: 0,
        WvV: 2,
        WnW: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-road38.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 0,
        destroyaudio: 0,
        instation: {
          source: "img/day-road39.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[2, 100]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 100000000,
        mW: 0,
        NWm: 0,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 0,
        cantShootThrough: 0,
        WvV: 2,
        WnW: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-road39.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 0,
        destroyaudio: 0,
        instation: {
          source: "img/day-road40.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[2, 100]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 100000000,
        mW: 0,
        NWm: 0,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 0,
        cantShootThrough: 0,
        WvV: 2,
        WnW: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-road40.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 0,
        destroyaudio: 0,
        instation: {
          source: "img/day-road41.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[2, 100]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 100000000,
        mW: 0,
        NWm: 0,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 0,
        cantShootThrough: 0,
        WvV: 2,
        WnW: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-road41.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 0,
        destroyaudio: 0,
        instation: {
          source: "img/day-road42.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[2, 100]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 100000000,
        mW: 0,
        NWm: 0,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 0,
        cantShootThrough: 0,
        WvV: 2,
        WnW: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-road42.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 0,
        destroyaudio: 0,
        instation: {
          source: "img/day-road43.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[2, 100]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 100000000,
        mW: 0,
        NWm: 0,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 0,
        cantShootThrough: 0,
        WvV: 2,
        WnW: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-road43.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 0,
        destroyaudio: 0,
        instation: {
          source: "img/day-road44.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[2, 100]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 100000000,
        mW: 0,
        NWm: 0,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 0,
        cantShootThrough: 0,
        WvV: 2,
        WnW: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-road44.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
      {
        width: [100, 100, 100, 100],
        height: [100, 100, 100, 100],
        inmapx: [0, 0, 0, 0],
        inmapy: [0, 0, 0, 0],
        impactaudio: 0,
        destroyaudio: 0,
        instation: {
          source: "img/day-road45.png",
          W: {
            m: 0,
          },
        },
        detail: {
          name: "",
          description: "",
          WVn: [[2, 100]],
          nww: -1,
          level: -1,
          WnNmW: -1,
          pointreq: 1,
        },
        health: 100000000,
        mW: 0,
        NWm: 0,
        Mwm: 70,
        angle: 3.141592653589793,
        WvwVM: 0,
        VVmmM: 0,
        loot: null,
        MMN: 0,
        cantShootThrough: 0,
        WvV: 2,
        WnW: 0,
        WmW: 315360000000,
        img: {
          source: ["img/day-road45.png", "img/useless.png", "img/useless.png"],
          W: [
            {
              m: 0,
            },
            {
              m: 0,
            },
            {
              m: 0,
            },
          ],
        },
      },
    ],
    Nvw: [],
    detail: {},
    NWm: -1,
  },
  {
    id: 87,
    img: {
      source: [
        "img/inv-chips-out.png",
        "img/inv-chips-in.png",
        "img/inv-chips-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Crisps",
      description: "You salty?",
      nww: -1,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    mnw: 32,
    stack: 5,
    loot: 88,
    vWVMV: 2,
    nNmmM: 88,
    wait: 10,
  },
  {
    id: 88,
    img: {
      source: [
        "img/inv-rotten-chips-out.png",
        "img/inv-rotten-chips-in.png",
        "img/inv-rotten-chips-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Expired Crisps",
      description: "Go on, have a bite!",
      nww: -1,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 5,
    loot: 89,
    wait: 5,
    mnw: 33,
    mW: 20,
  },
  {
    id: 89,
    img: {
      source: [
        "img/inv-electronic-part-out.png",
        "img/inv-electronic-part-in.png",
        "img/inv-electronic-part-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Electronic Parts",
      description: "Break TV's and Computers to find it",
      nww: -1,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 255,
    loot: 90,
    mW: 100,
  },
  {
    id: 90,
    img: {
      source: [
        "img/inv-junk-out.png",
        "img/inv-junk-in.png",
        "img/inv-junk-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Junk",
      description: "Find it in houses",
      nww: -1,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 255,
    loot: 91,
    mW: 40,
  },
  {
    id: 91,
    img: {
      source: [
        "img/inv-wires-out.png",
        "img/inv-wires-in.png",
        "img/inv-wires-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Big Wire",
      description: "Break big computers in power station (in the city)",
      nww: -1,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 255,
    loot: 92,
    mW: 40,
  },
  {
    id: 92,
    img: {
      source: [
        "img/inv-small-energy-cells-out.png",
        "img/inv-small-energy-cells-in.png",
        "img/inv-small-energy-cells-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Energy Cells",
      description: "Used for energy weapons/buildings",
      WVn: [
        [95, 1],
        [54, 1],
      ],
      stack: 30,
      stwindowid: [7],
      NMMmV: [28000],
      nww: 1,
      level: 6,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 255,
    loot: 93,
  },
  {
    id: 93,
    img: {
      source: [
        "img/inv-laser-pistol-out.png",
        "img/inv-laser-pistol-in.png",
        "img/inv-laser-pistol-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Laser Pistol",
      description: "Bullets are faster.",
      WVn: [
        [54, 2],
        [91, 1],
        [89, 2],
        [95, 1],
        [8, 4],
      ],
      stack: 1,
      stwindowid: [7],
      NMMmV: [180000],
      nww: 5,
      level: 14,
      WnNmW: -1,
      pointreq: 1,
    },
    mnw: 34,
    vMv: 92,
    stack: 1,
    loot: 94,
    wait: 10,
  },
  {
    id: 94,
    img: {
      source: [
        "img/inv-workbench3-out.png",
        "img/inv-workbench3-in.png",
        "img/inv-workbench3-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Tesla Bench",
      description: "Allow you to make powerful items",
      WVn: [
        [95, 4],
        [8, 6],
        [89, 3],
        [91, 4],
        [54, 2],
      ],
      stack: 1,
      stwindowid: [5],
      NMMmV: [120000],
      nww: 1,
      level: 10,
      WnNmW: 55,
      pointreq: 1,
    },
    mnw: 21,
    fuelleft: 60000,
    WvV: 0,
    cantShootThrough: 1,
    stwindowid: 7,
    stack: 255,
    loot: 95,
    wait: 10,
    mN: 1000,
    width: [100, 260, 100, 260],
    height: [260, 100, 260, 100],
    Wwv: [0, 0, 0, 0],
    nWn: [0, 0, 0, 0],
    inmapx: [0, -80, 0, -80],
    inmapy: [-80, 0, -80, 0],
    MMnVm: [-1, 0, -1, 0],
    nmMVw: [0, -1, 0, -1],
    putableimg: {
      source: "img/day-clear-blue-workbench3.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/day-redprint-workbench3.png",
      W: {
        m: 0,
      },
    },
    MvWnM: [-20.5, -101.5, 20.5, 101.5],
    VmNMm: [101.5, -20.5, -101, 20.5],
    Mvw: 0,
    VWN: 0,
    isDoor: 0,
    Vvm: 0,
    mwM: 0,
    behavior: 4,
    MWv: 0,
    nvN: 0,
    MMN: 1,
    WnW: 0,
    NnN: 16,
    wwN: {
      source: "img/e-workbench3.png",
      W: {
        m: 0,
      },
    },
    impactaudio: 4,
    destroyaudio: 7,
    instation: [
      {
        source: "img/day-workbench3.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-workbench3-1.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-workbench3-2.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-workbench3-3.png",
        W: {
          m: 0,
        },
      },
    ],
    mMW: [
      {
        source: "img/day-tesla-light0.png",
        W: {
          m: 0,
        },
      },
      0,
      {
        source: "img/day-tesla-light1.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-tesla-light2.png",
        W: {
          m: 0,
        },
      },
      0,
      {
        source: "img/day-tesla-light3.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-tesla-light4.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-tesla-light5.png",
        W: {
          m: 0,
        },
      },
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
    ],
    NWm: 25,
    Mwm: 80,
    WmW: 315360000000,
    health: 3000,
    mW: 0,
  },
  {
    id: 95,
    img: {
      source: [
        "img/inv-alloys-out.png",
        "img/inv-alloys-in.png",
        "img/inv-alloys-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Alloys",
      description: "To craft powerful items",
      WVn: [
        [3, 1],
        [90, 1],
        [53, 1],
      ],
      stack: 1,
      stwindowid: [6],
      NMMmV: [10000],
      nww: 8,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 255,
    loot: 96,
  },
  {
    id: 96,
    img: {
      source: [
        "img/inv-sulfur-axe-out.png",
        "img/inv-sulfur-axe-in.png",
        "img/inv-sulfur-axe-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Sulfur Axe",
      description: "You look cool with it.",
      WVn: [
        [18, 1],
        [95, 8],
        [8, 10],
        [53, 20],
      ],
      stack: 1,
      stwindowid: [5],
      NMMmV: [200000],
      nww: 4,
      level: 10,
      WnNmW: 18,
      pointreq: 1,
    },
    mnw: 35,
    stack: 1,
    loot: 97,
    wait: 10,
  },
  {
    id: 97,
    img: {
      source: [
        "img/inv-landmine-out.png",
        "img/inv-landmine-in.png",
        "img/inv-landmine-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Landmine",
      description: "When you feel it, it's too late",
      WVn: [
        [8, 4],
        [90, 1],
        [53, 2],
        [4, 2],
      ],
      stack: 1,
      stwindowid: [5],
      NMMmV: [40000],
      nww: 5,
      level: 9,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 20,
    loot: 98,
    wait: 10,
    mnw: 21,
    fuelleft: -1,
    WvV: -1,
    cantShootThrough: 0,
    mN: 1000,
    width: [50, 50, 50, 50],
    height: [50, 50, 50, 50],
    inmapx: [25, 25, 25, 25],
    inmapy: [25, 25, 25, 25],
    Wwv: [0, 0, 0, 0],
    nWn: [0, 0, 0, 0],
    putableimg: {
      source: "img/clear-blue-landmine.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/redprint-landmine.png",
      W: {
        m: 0,
      },
    },
    isDoor: 0,
    mwM: 1,
    behavior: 0,
    MWv: 0,
    nvN: 0,
    MMN: 0,
    damage: 200,
    WWv: 400,
    WnW: 0,
    impactaudio: 4,
    destroyaudio: 7,
    instation: [
      {
        source: "img/day-landmine-0.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-landmine-1.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-landmine-2.png",
        W: {
          m: 0,
        },
      },
    ],
    NWm: 30,
    Mwm: 80,
    WmW: 315360000000,
    health: 5,
    mW: 0,
  },
  {
    id: 98,
    img: {
      source: [
        "img/inv-dynamite-out.png",
        "img/inv-dynamite-in.png",
        "img/inv-dynamite-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Dynamite",
      description: "Get out of here, it gonna blow!",
      WVn: [
        [6, 1],
        [4, 2],
        [53, 2],
        [90, 1],
      ],
      stack: 1,
      stwindowid: [5],
      NMMmV: [40000],
      nww: 5,
      level: 9,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 10,
    loot: 99,
    wait: 10,
    mnw: 21,
    fuelleft: -1,
    WvV: -1,
    cantShootThrough: 0,
    mN: 1000,
    width: [100, 100, 100, 100],
    height: [100, 100, 100, 100],
    Wwv: [0, 0, 0, 0],
    nWn: [0, 0, 0, 0],
    inmapx: [0, 0, 0, 0],
    inmapy: [0, 0, 0, 0],
    putableimg: {
      source: "img/clear-blue-dynamite.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/redprint-dynamite.png",
      W: {
        m: 0,
      },
    },
    isDoor: 0,
    mwM: 1,
    behavior: 0,
    MWv: 0,
    nvN: 0,
    MMN: 0,
    damage: 180,
    WWv: 1400,
    WnW: 0,
    impactaudio: 8,
    destroyaudio: 0,
    instation: [
      {
        source: "img/day-dynamite.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/dynamite-yellow.png",
        W: {
          m: 0,
        },
      },
    ],
    NWm: 29,
    Mwm: 80,
    WmW: 5000,
    health: 100,
    mW: 0,
  },
  {
    id: 99,
    img: {
      source: [
        "img/inv-C4-out.png",
        "img/inv-C4-in.png",
        "img/inv-C4-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "C4",
      description: "Explode when you hit the trigger!",
      WVn: [
        [98, 2],
        [127, 1],
        [95, 2],
        [89, 1],
      ],
      stack: 1,
      stwindowid: [5],
      NMMmV: [60000],
      nww: 5,
      level: 16,
      WnNmW: 98,
      pointreq: 1,
    },
    stack: 5,
    loot: 100,
    wait: 10,
    mnw: 21,
    fuelleft: -1,
    WvV: -1,
    cantShootThrough: 0,
    mN: 1000,
    width: [100, 100, 100, 100],
    height: [100, 100, 100, 100],
    Wwv: [0, 0, 0, 0],
    nWn: [0, 0, 0, 0],
    inmapx: [0, 0, 0, 0],
    inmapy: [0, 0, 0, 0],
    putableimg: {
      source: "img/clear-blue-C4.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/redprint-C4.png",
      W: {
        m: 0,
      },
    },
    isDoor: 0,
    mwM: 1,
    behavior: 0,
    MWv: 0,
    nvN: 0,
    damage: 255,
    WWv: 6000,
    MMN: 0,
    WnW: 0,
    impactaudio: 8,
    destroyaudio: 0,
    instation: [
      {
        source: "img/day-C4.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/C4-red.png",
        W: {
          m: 0,
        },
      },
    ],
    NWm: 30,
    Mwm: 80,
    WmW: 315360000000,
    health: 100,
    mW: 0,
  },
  {
    id: 100,
    img: {
      source: [
        "img/inv-joystick-out.png",
        "img/inv-joystick-in.png",
        "img/inv-joystick-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "C4 Trigger",
      description: "Don't press the button or else...",
      WVn: [
        [8, 5],
        [89, 1],
        [92, 8],
        [127, 1],
      ],
      stack: 1,
      stwindowid: [5],
      NMMmV: [100000],
      nww: 5,
      level: 16,
      WnNmW: 99,
      pointreq: 1,
    },
    stack: 1,
    loot: 101,
    wait: 10,
    mnw: 36,
    mW: 0,
  },
  {
    id: 101,
    img: {
      source: [
        "img/inv-composter-out.png",
        "img/inv-composter-in.png",
        "img/inv-composter-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Compost",
      description: "Allows to accelerate rotting",
      WVn: [
        [8, 4],
        [89, 1],
      ],
      stack: 1,
      stwindowid: [5],
      NMMmV: [100000],
      nww: 1,
      level: 8,
      WnNmW: -1,
      pointreq: 1,
    },
    mnw: 21,
    fuelleft: 10000,
    WvV: 0,
    cantShootThrough: 1,
    stwindowid: 8,
    stack: 255,
    loot: 102,
    wait: 10,
    mN: 1000,
    width: [100, 100, 100, 100],
    height: [100, 100, 100, 100],
    Wwv: [0, 0, 0, 0],
    nWn: [0, 0, 0, 0],
    inmapx: [0, 0, 0, 0],
    inmapy: [0, 0, 0, 0],
    putableimg: {
      source: "img/clear-blue-composter.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/redprint-composter.png",
      W: {
        m: 0,
      },
    },
    Mvw: 0,
    VWN: 0,
    isDoor: 0,
    Vvm: 0,
    mwM: 0,
    behavior: 0,
    MWv: 0,
    nvN: 0,
    MMN: 1,
    WnW: 0,
    NnN: 16,
    wwN: {
      source: "img/e-composter.png",
      W: {
        m: 0,
      },
    },
    impactaudio: 4,
    destroyaudio: 7,
    instation: [
      {
        source: "img/day-composter-off.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-composter.png",
        W: {
          m: 0,
        },
      },
    ],
    NWm: 25,
    Mwm: 80,
    WmW: 315360000000,
    health: 500,
    mW: 0,
  },
  {
    id: 102,
    img: {
      source: [
        "img/inv-metal-helmet-out.png",
        "img/inv-metal-helmet-in.png",
        "img/inv-metal-helmet-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Metal Helmet",
      description: "Protects you from melee weapons",
      WVn: [
        [8, 3],
        [5, 3],
        [7, 3],
        [66, 80],
      ],
      stack: 1,
      stwindowid: [2],
      NMMmV: [70000],
      nww: 2,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    nwm: 7,
    stack: 1,
    loot: 103,
    wait: 10,
    wNV: 0,
    NVw: 0.15,
    MvM: 0,
    mnm: 0,
    Vww: 0,
    radiation: 0,
    speed: -0.01,
  },
  {
    id: 103,
    img: {
      source: [
        "img/inv-welding-helmet-out.png",
        "img/inv-welding-helmet-in.png",
        "img/inv-welding-helmet-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Welding Helmet",
      description: "Protects you from melee weapons",
      WVn: [
        [8, 10],
        [95, 2],
        [7, 3],
        [66, 160],
        [102, 1],
      ],
      stack: 1,
      stwindowid: [5],
      NMMmV: [140000],
      nww: 2,
      level: 7,
      WnNmW: -1,
      pointreq: 1,
    },
    nwm: 8,
    stack: 1,
    loot: 104,
    wait: 10,
    wNV: 0,
    NVw: 0.4,
    MvM: 0,
    mnm: 0,
    Vww: 0.05,
    radiation: 0,
    speed: -0.02,
  },
  {
    id: 104,
    img: {
      source: [
        "img/inv-gladiator-helmet-out.png",
        "img/inv-gladiator-helmet-in.png",
        "img/inv-gladiator-helmet-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Gladiator Helmet",
      description: "Strength and honor.",
      WVn: [
        [8, 12],
        [95, 6],
        [7, 4],
        [66, 255],
        [103, 1],
      ],
      stack: 1,
      stwindowid: [5],
      NMMmV: [300000],
      nww: 2,
      level: 17,
      WnNmW: 103,
      pointreq: 1,
    },
    nwm: 9,
    stack: 1,
    loot: 105,
    wait: 10,
    wNV: 0,
    NVw: 0.6,
    MvM: 0.1,
    mnm: 0,
    Vww: 0.2,
    radiation: 0,
    speed: -0.03,
  },
  {
    id: 105,
    img: {
      source: [
        "img/inv-leather-jacket-out.png",
        "img/inv-leather-jacket-in.png",
        "img/inv-leather-jacket-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Leather Jacket",
      description: "Protects you from guns",
      WVn: [
        [6, 2],
        [7, 4],
      ],
      stack: 1,
      stwindowid: [4],
      NMMmV: [70000],
      nww: 2,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    nwm: 10,
    stack: 1,
    loot: 106,
    wait: 10,
    wNV: 0.0006,
    NVw: 0,
    MvM: 0.2,
    mnm: 0,
    Vww: 0,
    radiation: 0,
    speed: 0,
  },
  {
    id: 106,
    img: {
      source: [
        "img/inv-kevlar-suit-out.png",
        "img/inv-kevlar-suit-in.png",
        "img/inv-kevlar-suit-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Kevlar Suit",
      description: "Protects you from guns",
      WVn: [
        [8, 6],
        [6, 4],
        [7, 6],
        [95, 2],
        [105, 1],
      ],
      stack: 1,
      stwindowid: [4],
      NMMmV: [100000],
      nww: 2,
      level: 12,
      WnNmW: -1,
      pointreq: 1,
    },
    nwm: 11,
    stack: 1,
    loot: 107,
    wait: 10,
    wNV: 0,
    NVw: 0,
    MvM: 0.4,
    mnm: 0,
    Vww: 0,
    radiation: 0,
    speed: 0,
  },
  {
    id: 107,
    img: {
      source: [
        "img/inv-SWAT-suit-out.png",
        "img/inv-SWAT-suit-in.png",
        "img/inv-SWAT-suit-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "SWAT Suit",
      description: "Protects you from guns",
      WVn: [
        [8, 10],
        [6, 10],
        [7, 10],
        [95, 4],
        [106, 1],
      ],
      stack: 1,
      stwindowid: [4],
      NMMmV: [200000],
      nww: 2,
      level: 18,
      WnNmW: 106,
      pointreq: 1,
    },
    nwm: 12,
    stack: 1,
    loot: 108,
    wait: 10,
    wNV: 0,
    NVw: 0.1,
    MvM: 0.7,
    mnm: 0,
    Vww: 0.1,
    radiation: 0,
    speed: -0.01,
  },
  {
    id: 108,
    img: {
      source: [
        "img/inv-protective-suit-out.png",
        "img/inv-protective-suit-in.png",
        "img/inv-protective-suit-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Protective Suit",
      description: "Protects you from explosives",
      WVn: [
        [8, 6],
        [6, 6],
        [7, 6],
        [95, 2],
      ],
      stack: 1,
      stwindowid: [4],
      NMMmV: [200000],
      nww: 2,
      level: 12,
      WnNmW: 170,
      pointreq: 1,
    },
    nwm: 13,
    stack: 1,
    loot: 109,
    wait: 10,
    wNV: 0.00085,
    NVw: 0,
    MvM: 0,
    mnm: 0,
    Vww: 0.9,
    radiation: 0,
    speed: -0.03,
  },
  {
    id: 109,
    img: {
      source: [
        "img/inv-tesla-0-out.png",
        "img/inv-tesla-0-in.png",
        "img/inv-tesla-0-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Power Armor",
      description: "Protects you from energy weapons",
      WVn: [
        [8, 20],
        [54, 2],
        [89, 1],
        [91, 2],
        [95, 2],
      ],
      stack: 1,
      stwindowid: [7],
      NMMmV: [150000],
      nww: 2,
      level: 10,
      WnNmW: -1,
      pointreq: 1,
    },
    nwm: 14,
    stack: 1,
    loot: 110,
    wait: 10,
    wNV: 0,
    NVw: 0,
    MvM: 0,
    mnm: 0.3,
    Vww: 0,
    radiation: 0,
    speed: 0,
  },
  {
    id: 110,
    img: {
      source: [
        "img/inv-tesla-armor-out.png",
        "img/inv-tesla-armor-in.png",
        "img/inv-tesla-armor-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Tesla Armor",
      description: "Protects you from energy weapons",
      WVn: [
        [109, 1],
        [54, 10],
        [89, 5],
        [91, 5],
        [95, 10],
      ],
      stack: 1,
      stwindowid: [7],
      NMMmV: [300000],
      nww: 2,
      level: 18,
      WnNmW: 109,
      pointreq: 3,
    },
    nwm: 15,
    stack: 1,
    loot: 111,
    wait: 10,
    wNV: 0.00085,
    NVw: 0.2,
    MvM: 0.2,
    mnm: 0.75,
    Vww: 0.2,
    radiation: 0.01,
    speed: -0.02,
  },
  {
    id: 111,
    img: {
      source: [
        "img/inv-wood-spike-out.png",
        "img/inv-wood-spike-in.png",
        "img/inv-wood-spike-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Wooden Spike",
      description: "Hurt and slow down",
      WVn: [[1, 80]],
      stack: 1,
      stwindowid: [2],
      NMMmV: [25000],
      nww: 3,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    mnw: 21,
    fuelleft: -1,
    WvV: -1,
    cantShootThrough: 0,
    stack: 40,
    loot: 112,
    wait: 10,
    mN: 1000,
    width: [50, 50, 50, 50],
    height: [50, 50, 50, 50],
    inmapx: [25, 25, 25, 25],
    inmapy: [25, 25, 25, 25],
    Wwv: [0, 0, 0, 0],
    nWn: [0, 0, 0, 0],
    putableimg: {
      source: "img/clear-blue-wood-spike.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/redprint-wood-spike.png",
      W: {
        m: 0,
      },
    },
    isDoor: 0,
    mwM: 0,
    behavior: 0,
    MWv: 0,
    nvN: 0,
    MMN: 0,
    WnW: 0,
    hidden: [
      {
        source: "img/day-wood-spike-cover1.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-spike-cover2.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-spike-cover3.png",
        W: {
          m: 0,
        },
      },
    ],
    vWwvw: [
      {
        source: "img/day-wood-spike-1.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-spike-2.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-wood-spike-3.png",
        W: {
          m: 0,
        },
      },
    ],
    NWm: 1,
    Mwm: 80,
    WmW: 315360000000,
    health: 200,
    mW: 0,
  },
  {
    id: 112,
    img: {
      source: [
        "img/inv-laser-submachine-out.png",
        "img/inv-laser-submachine-in.png",
        "img/inv-laser-submachine-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Laser Submachine",
      description: "It's the best weapon",
      WVn: [
        [95, 10],
        [8, 6],
        [54, 6],
        [91, 2],
        [89, 3],
      ],
      stack: 1,
      stwindowid: [7],
      NMMmV: [180000],
      nww: 5,
      level: 14,
      WnNmW: 93,
      pointreq: 2,
    },
    mnw: 37,
    vMv: 92,
    stack: 1,
    loot: 113,
    wait: 10,
  },
  {
    id: 113,
    img: {
      source: [
        "img/inv-grenade-out.png",
        "img/inv-grenade-in.png",
        "img/inv-grenade-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Grenade",
      description: "Explodes when you throw it away.",
      WVn: [
        [8, 2],
        [90, 2],
        [53, 2],
        [4, 2],
      ],
      stack: 2,
      stwindowid: [5],
      NMMmV: [30000],
      nww: 5,
      level: 10,
      WnNmW: -1,
      pointreq: 1,
    },
    mnw: 38,
    damage: 130,
    WWv: 400,
    stack: 10,
    loot: 114,
    wait: 10,
  },
  {
    id: 114,
    img: {
      source: [
        "img/inv-super-hammer-out.png",
        "img/inv-super-hammer-in.png",
        "img/inv-super-hammer-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Super Hammer",
      description: "Destroy indestructible walls.",
      nww: -1,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    mnw: 39,
    stack: 1,
    loot: 115,
    wait: 10,
  },
  {
    id: 115,
    img: {
      source: [
        "img/inv-ghoul-blood-out.png",
        "img/inv-ghoul-blood-in.png",
        "img/inv-ghoul-blood-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Ghoul Blood",
      description: "Find it on speedy ghouls",
      nww: -1,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 255,
    loot: 116,
    mW: 100,
  },
  {
    id: 116,
    img: {
      source: [
        "img/inv-camouflage-gear-out.png",
        "img/inv-camouflage-gear-in.png",
        "img/inv-camouflage-gear-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Camouflage Gear",
      description: "Hide you in the forest",
      WVn: [
        [1, 90],
        [6, 2],
        [7, 2],
      ],
      stack: 1,
      stwindowid: [4],
      NMMmV: [40000],
      nww: 2,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    nwm: 16,
    stack: 1,
    loot: 117,
    wait: 10,
    wNV: 0,
    NVw: 0,
    MvM: 0,
    mnm: 0,
    Vww: 0,
    radiation: 0,
    speed: 0,
  },
  {
    id: 117,
    img: {
      source: [
        "img/inv-agitator-out.png",
        "img/inv-agitator-in.png",
        "img/inv-agitator-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Agitator",
      description: "Allows to craft drugs",
      WVn: [
        [8, 6],
        [89, 1],
      ],
      stack: 1,
      stwindowid: [5],
      NMMmV: [100000],
      nww: 1,
      level: 8,
      WnNmW: -1,
      pointreq: 1,
    },
    mnw: 21,
    fuelleft: 100000,
    WvV: 0,
    cantShootThrough: 1,
    stwindowid: 9,
    stack: 255,
    loot: 118,
    wait: 10,
    mN: 1000,
    width: [100, 100, 100, 100],
    height: [100, 100, 100, 100],
    Wwv: [0, 0, 0, 0],
    nWn: [0, 0, 0, 0],
    inmapx: [0, 0, 0, 0],
    inmapy: [0, 0, 0, 0],
    putableimg: {
      source: "img/clear-blue-agitator.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/redprint-agitator.png",
      W: {
        m: 0,
      },
    },
    Mvw: 0,
    VWN: 0,
    isDoor: 0,
    Vvm: 0,
    mwM: 0,
    behavior: 0,
    MWv: 0,
    nvN: 0,
    MMN: 1,
    WnW: 0,
    NnN: 16,
    wwN: {
      source: "img/e-agitator.png",
      W: {
        m: 0,
      },
    },
    impactaudio: 4,
    destroyaudio: 7,
    instation: [
      {
        source: "img/day-agitator1-off.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-agitator1-on.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-agitator-1.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-agitator-2.png",
        W: {
          m: 0,
        },
      },
    ],
    NmVwM: [
      [-25.5, 21],
      [-21, -25.5],
      [25.5, -21],
      [21, 25.5],
    ],
    NWm: 25,
    Mwm: 80,
    WmW: 315360000000,
    health: 500,
    mW: 0,
  },
  {
    id: 118,
    img: {
      source: [
        "img/inv-ghoul-drug-out.png",
        "img/inv-ghoul-drug-in.png",
        "img/inv-ghoul-drug-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Ghoul Drug",
      description: "Ghouls does not attack you.",
      WVn: [
        [73, 1],
        [74, 1],
        [120, 1],
        [121, 1],
        [115, 1],
      ],
      stack: 1,
      stwindowid: [9],
      NMMmV: [30000],
      nww: 7,
      level: 10,
      WnNmW: -1,
      pointreq: 1,
    },
    mnw: 40,
    stack: 5,
    loot: 119,
    wait: 10,
  },
  {
    id: 119,
    img: {
      source: [
        "img/inv-mushroom1-out.png",
        "img/inv-mushroom1-in.png",
        "img/inv-mushroom1-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Amanita",
      description: "Poisoned, really dangerous",
      nww: -1,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 20,
    loot: 120,
    wait: 5,
    vWVMV: 10,
    nNmmM: 122,
    mnw: 41,
    mW: 24,
  },
  {
    id: 120,
    img: {
      source: [
        "img/inv-mushroom2-out.png",
        "img/inv-mushroom2-in.png",
        "img/inv-mushroom2-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Boletus",
      description: "Can be eaten.",
      nww: -1,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 20,
    loot: 121,
    wait: 5,
    vWVMV: 10,
    nNmmM: 123,
    mnw: 42,
    mW: 24,
  },
  {
    id: 121,
    img: {
      source: [
        "img/inv-mushroom3-out.png",
        "img/inv-mushroom3-in.png",
        "img/inv-mushroom3-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Russula",
      description: "Can be eaten.",
      nww: -1,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 20,
    loot: 122,
    wait: 5,
    vWVMV: 10,
    nNmmM: 124,
    mnw: 43,
    mW: 24,
  },
  {
    id: 122,
    img: {
      source: [
        "img/inv-rotten-mushroom1-out.png",
        "img/inv-rotten-mushroom1-in.png",
        "img/inv-rotten-mushroom1-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Rotten Mushroom",
      description: "Go on, have a bite!",
      nww: -1,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 20,
    loot: 123,
    wait: 5,
    mnw: 44,
    mW: 20,
  },
  {
    id: 123,
    img: {
      source: [
        "img/inv-rotten-mushroom2-out.png",
        "img/inv-rotten-mushroom2-in.png",
        "img/inv-rotten-mushroom2-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Rotten Mushroom",
      description: "Go on, have a bite!",
      nww: -1,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 20,
    loot: 124,
    wait: 5,
    mnw: 45,
    mW: 20,
  },
  {
    id: 124,
    img: {
      source: [
        "img/inv-rotten-mushroom3-out.png",
        "img/inv-rotten-mushroom3-in.png",
        "img/inv-rotten-mushroom3-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Rotten Mushroom",
      description: "Go on, have a bite!",
      nww: -1,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 20,
    loot: 125,
    wait: 5,
    mnw: 46,
    mW: 20,
  },
  {
    id: 125,
    img: {
      source: [
        "img/inv-lapadoine-out.png",
        "img/inv-lapadoine-in.png",
        "img/inv-lapadoine-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Lapadone",
      description: "You are faster a certain time.",
      WVn: [
        [73, 1],
        [74, 1],
        [119, 1],
        [115, 1],
      ],
      stack: 1,
      stwindowid: [9],
      NMMmV: [45000],
      nww: 7,
      level: 14,
      WnNmW: -1,
      pointreq: 1,
    },
    mnw: 47,
    stack: 5,
    loot: 126,
    wait: 10,
  },
  {
    id: 126,
    img: {
      source: [
        "img/inv-lapabot-out.png",
        "img/inv-lapabot-in.png",
        "img/inv-lapabot-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "LapaBot",
      description: "Repair your base for you",
      WVn: [
        [8, 6],
        [89, 1],
        [127, 1],
        [95, 1],
      ],
      stack: 1,
      stwindowid: [5],
      NMMmV: [100000],
      nww: 1,
      level: 8,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 5,
    loot: 127,
    MmwnN: 79,
    wait: 10,
    mnw: 21,
    fuelleft: -1,
    WvV: -1,
    cantShootThrough: 0,
    mN: 1000,
    width: [30, 30, 30, 30],
    height: [30, 30, 30, 30],
    Wwv: [0, 0, 0, 0],
    nWn: [0, 0, 0, 0],
    inmapx: [35, 35, 35, 35],
    inmapy: [35, 35, 35, 35],
    putableimg: {
      source: "img/clear-blue-lapabot.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/redprint-lapabot.png",
      W: {
        m: 0,
      },
    },
    isDoor: 0,
    mwM: 0,
    behavior: 4,
    MWv: 0,
    nvN: 0,
    MMN: 0,
    WnW: 0,
    impactaudio: 4,
    destroyaudio: 7,
    instation: [
      {
        source: "img/lapabot0.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/lapabot1.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/lapabot2.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/lapabot3.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/lapabot4.png",
        W: {
          m: 0,
        },
      },
    ],
    WnVMV: {
      source: "img/day-lapabot-builder.png",
      W: {
        m: 0,
      },
    },
    NWm: 25,
    Mwm: 68,
    WmW: 2400000,
    health: 250,
    mW: 0,
    nMnVw: 315360000000,
    vvMMW: 6,
    vMvvV: 20000,
    mmNMn: 4,
    VVvmM: 1,
  },
  {
    id: 127,
    img: {
      source: [
        "img/inv-small-wire-out.png",
        "img/inv-small-wire-in.png",
        "img/inv-small-wire-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Small Wire",
      description: "Find it on TV's and computers in abandonned houses",
      nww: -1,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 255,
    loot: 128,
    mW: 40,
  },
  {
    id: 128,
    img: {
      source: [
        "img/inv-pumpkin-out.png",
        "img/inv-pumpkin-in.png",
        "img/inv-pumpkin-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Pumpkin",
      description: "Eat it or craft a pumpkin ghoul",
      nww: -1,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 20,
    loot: 129,
    wait: 5,
    vWVMV: 10,
    nNmmM: 129,
    mnw: 48,
    mW: 24,
  },
  {
    id: 129,
    img: {
      source: [
        "img/inv-rotten-pumpkin-out.png",
        "img/inv-rotten-pumpkin-in.png",
        "img/inv-rotten-pumpkin-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Rotten Pumpkin",
      description: "You should not click",
      nww: -1,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 20,
    loot: 130,
    wait: 5,
    mnw: 49,
    mW: 20,
  },
  {
    id: 130,
    img: {
      source: [
        "img/inv-ghoul5-out.png",
        "img/inv-ghoul5-in.png",
        "img/inv-ghoul5-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Ghoul Seed",
      description: "Plant your pumpkin pet",
      WVn: [
        [128, 1],
        [115, 1],
      ],
      stack: 1,
      stwindowid: [1, 3],
      NMMmV: [30000, 20000],
      nww: -1,
      level: 99,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 40,
    loot: 131,
    MmwnN: 79,
    wait: 10,
    mnw: 21,
    fuelleft: -1,
    WvV: -1,
    cantShootThrough: 0,
    mN: 1000,
    width: [30, 30, 30, 30],
    height: [30, 30, 30, 30],
    Wwv: [0, 0, 0, 0],
    nWn: [0, 0, 0, 0],
    inmapx: [35, 35, 35, 35],
    inmapy: [35, 35, 35, 35],
    putableimg: {
      source: "img/clear-blue-root.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/redprint-root.png",
      W: {
        m: 0,
      },
    },
    isDoor: 0,
    mwM: 0,
    behavior: 4,
    MWv: 0,
    nvN: 0,
    MMN: 0,
    WnW: 0,
    impactaudio: 8,
    destroyaudio: 9,
    instation: [
      {
        source: "img/day-root0-ghoul.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-root1-ghoul.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-root2-ghoul.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-root3-ghoul.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-root4-ghoul.png",
        W: {
          m: 0,
        },
      },
    ],
    NWm: 8,
    Mwm: 68,
    WmW: 2400000,
    health: 250,
    mW: 0,
    nMnVw: 120000,
    vvMMW: 5,
    vMvvV: 15000,
    mmNMn: 3,
    VVvmM: 0,
  },
  {
    id: 131,
    img: {
      source: [
        "img/inv-extractor-out.png",
        "img/inv-extractor-in.png",
        "img/inv-extractor-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Extractor",
      description: "Allows you to extract minerals from the ground",
      WVn: [
        [95, 2],
        [8, 10],
        [54, 2],
        [127, 2],
        [89, 1],
      ],
      stack: 1,
      stwindowid: [5],
      NMMmV: [100000],
      nww: 1,
      level: 12,
      WnNmW: -1,
      pointreq: 1,
    },
    mnw: 21,
    fuelleft: 740000,
    WvV: 0,
    cantShootThrough: 1,
    stwindowid: 10,
    stack: 255,
    loot: 132,
    wait: 10,
    mN: 1000,
    width: [100, 100, 100, 100],
    height: [100, 100, 100, 100],
    Wwv: [0, 0, 0, 0],
    nWn: [0, 0, 0, 0],
    inmapx: [0, 0, 0, 0],
    inmapy: [0, 0, 0, 0],
    putableimg: {
      source: "img/clear-blue-extractor.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/redprint-extractor.png",
      W: {
        m: 0,
      },
    },
    Mvw: 0,
    VWN: 0,
    isDoor: 0,
    Vvm: 0,
    mwM: 0,
    behavior: 0,
    MWv: 0,
    nvN: 0,
    MMN: 1,
    WnW: 0,
    NnN: 16,
    wwN: {
      source: "img/e-extractor.png",
      W: {
        m: 0,
      },
    },
    impactaudio: 4,
    destroyaudio: 7,
    instation: [
      {
        source: "img/day-extractor.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-extractor-rotate.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-extractor-off.png",
        W: {
          m: 0,
        },
      },
    ],
    NmVwM: [
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
    ],
    NWm: 25,
    Mwm: 80,
    WmW: 315360000000,
    health: 500,
    mW: 0,
  },
  {
    id: 132,
    img: {
      source: [
        "img/inv-antidote-out.png",
        "img/inv-antidote-in.png",
        "img/inv-antidote-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Antidote",
      description: "Remove the withdrawal effects (pink skin)",
      WVn: [
        [73, 1],
        [74, 1],
        [119, 1],
        [133, 1],
      ],
      stack: 1,
      stwindowid: [9],
      NMMmV: [45000],
      nww: 7,
      level: 14,
      WnNmW: -1,
      pointreq: 1,
    },
    mnw: 50,
    stack: 5,
    loot: 133,
    wait: 10,
  },
  {
    id: 133,
    img: {
      source: [
        "img/inv-antidote-flower-out.png",
        "img/inv-antidote-flower-in.png",
        "img/inv-antidote-flower-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Rare Flower",
      description: "Use it to make an antidote",
      nww: -1,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 5,
    loot: 134,
    mW: 400,
  },
  {
    id: 134,
    img: {
      source: [
        "img/inv-seed-tree-out.png",
        "img/inv-seed-tree-in.png",
        "img/inv-seed-tree-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Tree Seed",
      description: "Plant your forest",
      WVn: [[135, 1]],
      stack: 5,
      stwindowid: [1, 3],
      NMMmV: [60000, 40000],
      nww: 6,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 100,
    loot: 135,
    MmwnN: 15,
    wait: 10,
    mnw: 21,
    fuelleft: -1,
    WvV: -1,
    cantShootThrough: 0,
    mN: 1000,
    width: [30, 30, 30, 30],
    height: [30, 30, 30, 30],
    Wwv: [0, 0, 0, 0],
    nWn: [0, 0, 0, 0],
    inmapx: [35, 35, 35, 35],
    inmapy: [35, 35, 35, 35],
    putableimg: {
      source: "img/clear-blue-plant-tree.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/redprint-plant-tree.png",
      W: {
        m: 0,
      },
    },
    isDoor: 0,
    mwM: 0,
    behavior: 2,
    MWv: 0,
    nvN: 0,
    MMN: 1,
    WnW: 0,
    impactaudio: 1,
    destroyaudio: 5,
    instation: [
      {
        source: "img/day-plant-tree0.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-plant-tree1.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-plant-tree2.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-plant-tree3.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-plant4-orange.png",
        W: {
          m: 0,
        },
      },
    ],
    NWm: 1,
    Mwm: 68,
    WmW: 2400000,
    health: 150,
    mW: 0,
  },
  {
    id: 135,
    img: {
      source: [
        "img/inv-acorn-out.png",
        "img/inv-acorn-in.png",
        "img/inv-acorn-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Acorn",
      description: "Eat it or plant a tree",
      nww: -1,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 20,
    loot: 136,
    wait: 5,
    vWVMV: 3,
    nNmmM: 136,
    mnw: 51,
    mW: 24,
  },
  {
    id: 136,
    img: {
      source: [
        "img/inv-rotten-acorn-out.png",
        "img/inv-rotten-acorn-in.png",
        "img/inv-rotten-acorn-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Rotten Acorn",
      description: "Not really good",
      nww: -1,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 20,
    loot: 137,
    wait: 5,
    mnw: 52,
    mW: 20,
  },
  {
    id: 137,
    img: {
      source: [
        "img/inv-laser-sniper-out.png",
        "img/inv-laser-sniper-in.png",
        "img/inv-laser-sniper-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Laser Sniper",
      description: "Faster than a sniper",
      WVn: [
        [95, 8],
        [8, 6],
        [54, 5],
        [91, 3],
        [89, 3],
      ],
      stack: 1,
      stwindowid: [7],
      NMMmV: [180000],
      nww: 5,
      level: 14,
      WnNmW: 93,
      pointreq: 2,
    },
    mnw: 53,
    vMv: 92,
    stack: 1,
    loot: 138,
    wait: 10,
  },
  {
    id: 138,
    img: {
      source: [
        "img/inv-hal-bot-out.png",
        "img/inv-hal-bot-in.png",
        "img/inv-hal-bot-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "HAL Bot",
      description: "Protect you",
      WVn: [
        [8, 6],
        [89, 1],
        [127, 1],
        [95, 1],
      ],
      stack: 1,
      stwindowid: [5],
      NMMmV: [100000],
      nww: 1,
      level: 8,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 5,
    loot: 139,
    MmwnN: 79,
    wait: 10,
    mnw: 21,
    fuelleft: -1,
    WvV: -1,
    cantShootThrough: 0,
    mN: 1000,
    width: [30, 30, 30, 30],
    height: [30, 30, 30, 30],
    Wwv: [0, 0, 0, 0],
    nWn: [0, 0, 0, 0],
    inmapx: [35, 35, 35, 35],
    inmapy: [35, 35, 35, 35],
    putableimg: {
      source: "img/clear-blue-hal-bot.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/redprint-hal-bot.png",
      W: {
        m: 0,
      },
    },
    isDoor: 0,
    mwM: 0,
    behavior: 4,
    MWv: 0,
    nvN: 0,
    MMN: 0,
    WnW: 0,
    impactaudio: 4,
    destroyaudio: 7,
    instation: [
      {
        source: "img/hal-bot0.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/hal-bot1.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/hal-bot2.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/hal-bot3.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/hal-bot4.png",
        W: {
          m: 0,
        },
      },
    ],
    WnVMV: {
      source: "img/day-hal-bot-builder.png",
      W: {
        m: 0,
      },
    },
    NWm: 25,
    Mwm: 68,
    WmW: 2400000,
    health: 400,
    mW: 0,
    nMnVw: 315360000000,
    vvMMW: 7,
    vMvvV: 8000,
    mmNMn: 4,
    VVvmM: 1,
  },
  {
    id: 139,
    img: {
      source: [
        "img/inv-tesla-bot-out.png",
        "img/inv-tesla-bot-in.png",
        "img/inv-tesla-bot-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Tesla Bot",
      description: "Protect you",
      WVn: [
        [54, 3],
        [89, 1],
        [127, 3],
        [91, 3],
        [95, 3],
      ],
      stack: 1,
      stwindowid: [7],
      NMMmV: [200000],
      nww: 1,
      level: 16,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 5,
    loot: 140,
    MmwnN: 79,
    wait: 10,
    mnw: 21,
    fuelleft: -1,
    WvV: -1,
    cantShootThrough: 0,
    mN: 1000,
    width: [30, 30, 30, 30],
    height: [30, 30, 30, 30],
    Wwv: [0, 0, 0, 0],
    nWn: [0, 0, 0, 0],
    inmapx: [35, 35, 35, 35],
    inmapy: [35, 35, 35, 35],
    putableimg: {
      source: "img/clear-blue-tesla-bot.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/redprint-tesla-bot.png",
      W: {
        m: 0,
      },
    },
    isDoor: 0,
    mwM: 0,
    behavior: 4,
    MWv: 0,
    nvN: 0,
    MMN: 0,
    WnW: 0,
    impactaudio: 4,
    destroyaudio: 7,
    instation: [
      {
        source: "img/tesla-bot0.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/tesla-bot1.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/tesla-bot2.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/tesla-bot3.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/tesla-bot4.png",
        W: {
          m: 0,
        },
      },
    ],
    WnVMV: {
      source: "img/day-lapabot-builder.png",
      W: {
        m: 0,
      },
    },
    NWm: 25,
    Mwm: 68,
    WmW: 2400000,
    health: 500,
    mW: 0,
    nMnVw: 315360000000,
    vvMMW: 8,
    vMvvV: 20000,
    mmNMn: 4,
    VVvmM: 1,
  },
  {
    id: 140,
    img: {
      source: [
        "img/inv-wire0-out.png",
        "img/inv-wire0-in.png",
        "img/inv-wire0-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Cable",
      description: "Create automatic mechanisms",
      WVn: [[127, 1]],
      stack: 3,
      stwindowid: [11],
      NMMmV: [15000],
      nww: 9,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 255,
    loot: 141,
    wait: 10,
    mnw: 21,
    fuelleft: -1,
    WvV: -1,
    cantShootThrough: 0,
    mN: 1000,
    width: [100, 100, 100, 100],
    height: [100, 100, 100, 100],
    Wwv: [0, 0, 0, 0],
    nWn: [0, 0, 0, 0],
    inmapx: [0, 0, 0, 0],
    inmapy: [0, 0, 0, 0],
    putableimg: {
      source: "img/clear-blue-wire0.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/redprint-wire0.png",
      W: {
        m: 0,
      },
    },
    Mvw: 0,
    VWN: 0,
    isDoor: 0,
    Vvm: 0,
    mwM: 0,
    behavior: 3,
    mwv: 0,
    MWv: [
      [1, 1, 0, 0],
      [0, 0, 1, 1],
      [1, 1, 0, 0],
      [0, 0, 1, 1],
    ],
    nvN: 0,
    MMN: 0,
    WnW: 0,
    impactaudio: 8,
    destroyaudio: 9,
    instation: {
      source: "img/day-wire0.png",
      W: {
        m: 0,
      },
    },
    NWm: 23,
    Mwm: 40,
    WmW: 315360000000,
    health: 250,
    mW: 0,
  },
  {
    id: 141,
    img: {
      source: [
        "img/inv-wire1-out.png",
        "img/inv-wire1-in.png",
        "img/inv-wire1-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Cable",
      description: "Create automatic mechanisms",
      WVn: [[127, 1]],
      stack: 3,
      stwindowid: [11],
      NMMmV: [15000],
      nww: 9,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 255,
    loot: 142,
    wait: 10,
    mnw: 21,
    fuelleft: -1,
    WvV: -1,
    cantShootThrough: 0,
    mN: 1000,
    width: [100, 100, 100, 100],
    height: [100, 100, 100, 100],
    Wwv: [0, 0, 0, 0],
    nWn: [0, 0, 0, 0],
    inmapx: [0, 0, 0, 0],
    inmapy: [0, 0, 0, 0],
    putableimg: {
      source: "img/clear-blue-wire1.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/redprint-wire1.png",
      W: {
        m: 0,
      },
    },
    Mvw: 0,
    VWN: 0,
    isDoor: 0,
    Vvm: 0,
    mwM: 0,
    behavior: 3,
    mwv: 0,
    MWv: [
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
    ],
    nvN: 0,
    MMN: 0,
    WnW: 0,
    impactaudio: 8,
    destroyaudio: 9,
    instation: {
      source: "img/day-wire1.png",
      W: {
        m: 0,
      },
    },
    NWm: 23,
    Mwm: 40,
    WmW: 315360000000,
    health: 250,
    mW: 0,
  },
  {
    id: 142,
    img: {
      source: [
        "img/inv-wire2-out.png",
        "img/inv-wire2-in.png",
        "img/inv-wire2-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Cable",
      description: "Create automatic mechanisms",
      WVn: [[127, 1]],
      stack: 3,
      stwindowid: [11],
      NMMmV: [15000],
      nww: 9,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 255,
    loot: 143,
    wait: 10,
    mnw: 21,
    fuelleft: -1,
    WvV: -1,
    cantShootThrough: 0,
    mN: 1000,
    width: [100, 100, 100, 100],
    height: [100, 100, 100, 100],
    Wwv: [0, 0, 0, 0],
    nWn: [0, 0, 0, 0],
    inmapx: [0, 0, 0, 0],
    inmapy: [0, 0, 0, 0],
    putableimg: {
      source: "img/clear-blue-wire2.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/redprint-wire2.png",
      W: {
        m: 0,
      },
    },
    Mvw: 0,
    VWN: 0,
    isDoor: 0,
    Vvm: 0,
    mwM: 0,
    behavior: 3,
    mwv: 0,
    MWv: [
      [0, 1, 0, 1],
      [0, 1, 1, 0],
      [1, 0, 1, 0],
      [1, 0, 0, 1],
    ],
    nvN: 0,
    MMN: 0,
    WnW: 0,
    impactaudio: 8,
    destroyaudio: 9,
    instation: {
      source: "img/day-wire2.png",
      W: {
        m: 0,
      },
    },
    NWm: 23,
    Mwm: 40,
    WmW: 315360000000,
    health: 250,
    mW: 0,
  },
  {
    id: 157,
    img: {
      source: [
        "img/inv-wire3-out.png",
        "img/inv-wire3-in.png",
        "img/inv-wire3-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Cable",
      description: "Create automatic mechanisms",
      WVn: [[127, 1]],
      stack: 3,
      stwindowid: [11],
      NMMmV: [15000],
      nww: 9,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 255,
    loot: 158,
    wait: 10,
    mnw: 21,
    fuelleft: -1,
    WvV: -1,
    cantShootThrough: 0,
    mN: 1000,
    width: [100, 100, 100, 100],
    height: [100, 100, 100, 100],
    Wwv: [0, 0, 0, 0],
    nWn: [0, 0, 0, 0],
    inmapx: [0, 0, 0, 0],
    inmapy: [0, 0, 0, 0],
    putableimg: {
      source: "img/clear-blue-wire3.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/redprint-wire3.png",
      W: {
        m: 0,
      },
    },
    Mvw: 0,
    VWN: 0,
    isDoor: 0,
    Vvm: 0,
    mwM: 0,
    behavior: 3,
    mwv: 0,
    MWv: [
      [0, 1, 1, 1],
      [1, 1, 1, 0],
      [1, 0, 1, 1],
      [1, 1, 0, 1],
    ],
    nvN: 0,
    MMN: 0,
    WnW: 0,
    impactaudio: 8,
    destroyaudio: 9,
    instation: {
      source: "img/day-wire3.png",
      W: {
        m: 0,
      },
    },
    NWm: 23,
    Mwm: 40,
    WmW: 315360000000,
    health: 250,
    mW: 0,
  },
  {
    id: 144,
    img: {
      source: [
        "img/inv-switch-out.png",
        "img/inv-switch-in.png",
        "img/inv-switch-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Switch",
      description: "Turn on/off mechanisms",
      WVn: [
        [8, 1],
        [127, 1],
      ],
      stack: 3,
      stwindowid: [11],
      NMMmV: [15000],
      nww: 9,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 255,
    loot: 145,
    wait: 10,
    mnw: 21,
    fuelleft: -1,
    WvV: -1,
    cantShootThrough: 0,
    mN: 1000,
    width: [100, 100, 100, 100],
    height: [100, 100, 100, 100],
    Wwv: [0, 0, 0, 0],
    nWn: [0, 0, 0, 0],
    inmapx: [0, 0, 0, 0],
    inmapy: [0, 0, 0, 0],
    putableimg: {
      source: "img/clear-blue-switch.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/redprint-switch.png",
      W: {
        m: 0,
      },
    },
    Mvw: 0,
    VWN: 0,
    isDoor: 0,
    Vvm: 0,
    mwM: 0,
    behavior: 3,
    mwv: 1,
    MWv: [
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
    ],
    nvN: 0,
    MMN: 0,
    WnW: 0,
    NnN: 37,
    wwN: {
      source: "img/e-turnon.png",
      W: {
        m: 0,
      },
    },
    impactaudio: 4,
    destroyaudio: 7,
    instation: [
      {
        source: "img/day-switch-off.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-switch-on.png",
        W: {
          m: 0,
        },
      },
    ],
    NWm: 25,
    Mwm: 80,
    WmW: 315360000000,
    health: 250,
    mW: 0,
  },
  {
    id: 145,
    img: {
      source: [
        "img/inv-switch-or-out.png",
        "img/inv-switch-or-in.png",
        "img/inv-switch-or-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Gate OR",
      description: "Activate only if an entry is on.",
      WVn: [
        [8, 1],
        [127, 1],
      ],
      stack: 3,
      stwindowid: [11],
      NMMmV: [15000],
      nww: 9,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 255,
    loot: 146,
    wait: 10,
    mnw: 21,
    fuelleft: -1,
    WvV: -1,
    cantShootThrough: 0,
    mN: 1000,
    width: [100, 100, 100, 100],
    height: [100, 100, 100, 100],
    Wwv: [0, 0, 0, 0],
    nWn: [0, 0, 0, 0],
    inmapx: [0, 0, 0, 0],
    inmapy: [0, 0, 0, 0],
    putableimg: {
      source: "img/clear-blue-switch-or.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/redprint-switch-or.png",
      W: {
        m: 0,
      },
    },
    Mvw: 0,
    VWN: 0,
    isDoor: 0,
    Vvm: 0,
    mwM: 0,
    behavior: 3,
    mwv: 1,
    MWv: [
      [1, 0, 0, 0],
      [0, 0, 0, 1],
      [0, 1, 0, 0],
      [0, 0, 1, 0],
    ],
    nvN: 0,
    MMN: 0,
    WnW: 0,
    impactaudio: 4,
    destroyaudio: 7,
    instation: {
      source: "img/day-switch-or.png",
      W: {
        m: 0,
      },
    },
    NWm: 25,
    Mwm: 80,
    WmW: 315360000000,
    health: 250,
    mW: 0,
  },
  {
    id: 146,
    img: {
      source: [
        "img/inv-switch-and-out.png",
        "img/inv-switch-and-in.png",
        "img/inv-switch-and-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Gate AND",
      description: "Activate only if all entries are on.",
      WVn: [
        [8, 1],
        [127, 1],
      ],
      stack: 3,
      stwindowid: [11],
      NMMmV: [15000],
      nww: 9,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 255,
    loot: 147,
    wait: 10,
    mnw: 21,
    fuelleft: -1,
    WvV: -1,
    cantShootThrough: 0,
    mN: 1000,
    width: [100, 100, 100, 100],
    height: [100, 100, 100, 100],
    Wwv: [0, 0, 0, 0],
    nWn: [0, 0, 0, 0],
    inmapx: [0, 0, 0, 0],
    inmapy: [0, 0, 0, 0],
    putableimg: {
      source: "img/clear-blue-switch-and.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/redprint-switch-and.png",
      W: {
        m: 0,
      },
    },
    Mvw: 0,
    VWN: 0,
    isDoor: 0,
    Vvm: 0,
    mwM: 0,
    behavior: 3,
    mwv: 1,
    MWv: [
      [1, 0, 0, 0],
      [0, 0, 0, 1],
      [0, 1, 0, 0],
      [0, 0, 1, 0],
    ],
    nvN: 0,
    MMN: 0,
    WnW: 0,
    impactaudio: 4,
    destroyaudio: 7,
    instation: {
      source: "img/day-switch-and.png",
      W: {
        m: 0,
      },
    },
    NWm: 25,
    Mwm: 80,
    WmW: 315360000000,
    health: 250,
    mW: 0,
  },
  {
    id: 147,
    img: {
      source: [
        "img/inv-switch-reverse-out.png",
        "img/inv-switch-reverse-in.png",
        "img/inv-switch-reverse-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Gate NOT",
      description: "Activate only if no entry is on.",
      WVn: [
        [8, 1],
        [127, 1],
      ],
      stack: 3,
      stwindowid: [11],
      NMMmV: [15000],
      nww: 9,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 255,
    loot: 148,
    wait: 10,
    mnw: 21,
    fuelleft: -1,
    WvV: -1,
    cantShootThrough: 0,
    mN: 1000,
    width: [100, 100, 100, 100],
    height: [100, 100, 100, 100],
    Wwv: [0, 0, 0, 0],
    nWn: [0, 0, 0, 0],
    inmapx: [0, 0, 0, 0],
    inmapy: [0, 0, 0, 0],
    putableimg: {
      source: "img/clear-blue-switch-reverse.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/redprint-switch-reverse.png",
      W: {
        m: 0,
      },
    },
    Mvw: 0,
    VWN: 0,
    isDoor: 0,
    Vvm: 0,
    mwM: 0,
    behavior: 3,
    mwv: 1,
    MWv: [
      [1, 0, 1, 1],
      [1, 1, 0, 1],
      [0, 1, 1, 1],
      [1, 1, 1, 0],
    ],
    nvN: 0,
    MMN: 0,
    WnW: 0,
    impactaudio: 4,
    destroyaudio: 7,
    instation: {
      source: "img/day-switch-reverse.png",
      W: {
        m: 0,
      },
    },
    NWm: 25,
    Mwm: 80,
    WmW: 315360000000,
    health: 250,
    mW: 0,
  },
  {
    id: 148,
    img: {
      source: [
        "img/inv-lamp-white-out.png",
        "img/inv-lamp-white-in.png",
        "img/inv-lamp-white-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Lamp",
      description: "Turn on when connected, damage ghoul",
      WVn: [
        [8, 1],
        [127, 1],
      ],
      stack: 3,
      stwindowid: [11],
      NMMmV: [15000],
      nww: 9,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 255,
    loot: 149,
    wait: 10,
    mnw: 21,
    fuelleft: -1,
    WvV: -1,
    cantShootThrough: 0,
    mN: 1000,
    width: [100, 100, 100, 100],
    height: [100, 100, 100, 100],
    Wwv: [0, 0, 0, 0],
    nWn: [0, 0, 0, 0],
    inmapx: [0, 0, 0, 0],
    inmapy: [0, 0, 0, 0],
    putableimg: {
      source: "img/clear-blue-lamp.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/redprint-lamp.png",
      W: {
        m: 0,
      },
    },
    Mvw: 0,
    VWN: 0,
    isDoor: 0,
    Vvm: 0,
    mwM: 0,
    behavior: 3,
    mwv: 0,
    MWv: [
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
    ],
    nvN: 0,
    MMN: 2,
    wwW: 22,
    WnW: 0,
    NnN: 36,
    wwN: {
      source: "img/e-light.png",
      W: {
        m: 0,
      },
    },
    impactaudio: 4,
    destroyaudio: 7,
    instation: {
      source: "img/day-lamp-off.png",
      W: {
        m: 0,
      },
    },
    wVnWm: [
      {
        source: "img/day-lamp-white.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-lamp-yellow.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-lamp-green.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-lamp-clear-blue.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-lamp-purple.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-lamp-pink.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-lamp-orange.png",
        W: {
          m: 0,
        },
      },
    ],
    MwmWn: [
      {
        source: "img/day-lamp-light-white.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-lamp-light-yellow.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-lamp-light-green.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-lamp-light-clear-blue.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-lamp-light-purple.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-lamp-light-pink.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-lamp-light-orange.png",
        W: {
          m: 0,
        },
      },
    ],
    NWm: 25,
    Mwm: 80,
    WmW: 315360000000,
    health: 600,
    mW: 0,
  },
  {
    id: 149,
    img: {
      source: [
        "img/inv-cable-wall-out.png",
        "img/inv-cable-wall-in.png",
        "img/inv-cable-wall-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Cable  - Wall",
      description: "Wall that can be connected to a cable",
      WVn: [
        [8, 8],
        [127, 1],
      ],
      stack: 1,
      stwindowid: [11],
      NMMmV: [15000],
      nww: 9,
      level: 7,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 255,
    loot: 150,
    wait: 10,
    mnw: 21,
    fuelleft: -1,
    WvV: 0,
    cantShootThrough: 1,
    mN: 1000,
    width: [100, 100, 100, 100],
    height: [100, 100, 100, 100],
    Wwv: [0, 0, 0, 0],
    nWn: [0, 0, 0, 0],
    inmapx: [0, 0, 0, 0],
    inmapy: [0, 0, 0, 0],
    putableimg: {
      source: "img/clear-blue-cable-wall.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/redprint-cable-wall.png",
      W: {
        m: 0,
      },
    },
    Mvw: 0,
    VWN: 0,
    isDoor: 0,
    Vvm: 1,
    mwM: 0,
    behavior: 3,
    mwv: 0,
    MWv: [
      [1, 1, 0, 0],
      [0, 0, 1, 1],
      [1, 1, 0, 0],
      [0, 0, 1, 1],
    ],
    nvN: 0,
    MMN: 1,
    WnW: 0,
    impactaudio: 4,
    destroyaudio: 7,
    instation: [
      {
        source: "img/day-cable-wall.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-cable-wall1.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-cable-wall2.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-cable-wall3.png",
        W: {
          m: 0,
        },
      },
    ],
    NWm: 25,
    Mwm: 40,
    WmW: 315360000000,
    health: 15000,
    mW: 0,
  },
  {
    id: 150,
    img: {
      source: [
        "img/inv-automatic-door-out.png",
        "img/inv-automatic-door-in.png",
        "img/inv-automatic-door-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Automatic Door",
      description: "Connect it to a switch to open and close it.",
      WVn: [
        [8, 8],
        [127, 2],
        [89, 1],
      ],
      stack: 1,
      stwindowid: [11],
      NMMmV: [15000],
      nww: 9,
      level: 7,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 255,
    loot: 151,
    wait: 10,
    mnw: 21,
    fuelleft: -1,
    WvV: 0,
    cantShootThrough: 1,
    mN: 1000,
    width: [100, 100, 100, 100],
    height: [100, 100, 100, 100],
    Wwv: [0, 0, 0, 0],
    nWn: [0, 0, 0, 0],
    inmapx: [0, 0, 0, 0],
    inmapy: [0, 0, 0, 0],
    putableimg: {
      source: "img/clear-blue-automatic-door.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/redprint-automatic-door.png",
      W: {
        m: 0,
      },
    },
    Mvw: 0,
    VWN: 0,
    isDoor: 0,
    Vvm: 1,
    mwM: 0,
    behavior: 3,
    mwv: 0,
    MWv: [
      [0, 1, 1, 1],
      [1, 1, 1, 0],
      [1, 0, 1, 1],
      [1, 1, 0, 1],
    ],
    nvN: 0,
    MMN: 1,
    WnW: 0,
    impactaudio: 4,
    destroyaudio: 7,
    instation: [
      [
        {
          source: "img/day-automatic-door-off.png",
          W: {
            m: 0,
          },
        },
        {
          source: "img/day-automatic-door1-off.png",
          W: {
            m: 0,
          },
        },
        {
          source: "img/day-automatic-door2-off.png",
          W: {
            m: 0,
          },
        },
        {
          source: "img/day-automatic-door3-off.png",
          W: {
            m: 0,
          },
        },
      ],
      [
        {
          source: "img/day-automatic-door-on.png",
          W: {
            m: 0,
          },
        },
        {
          source: "img/day-automatic-door1-on.png",
          W: {
            m: 0,
          },
        },
        {
          source: "img/day-automatic-door2-on.png",
          W: {
            m: 0,
          },
        },
        {
          source: "img/day-automatic-door3-on.png",
          W: {
            m: 0,
          },
        },
      ],
    ],
    NWm: 25,
    Mwm: 80,
    WmW: 315360000000,
    health: 15000,
    mW: 0,
  },
  {
    id: 151,
    img: {
      source: [
        "img/inv-platform-out.png",
        "img/inv-platform-in.png",
        "img/inv-platform-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Platform",
      description: "Weight detector",
      WVn: [
        [8, 1],
        [127, 1],
      ],
      stack: 3,
      stwindowid: [11],
      NMMmV: [15000],
      nww: 9,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 255,
    loot: 152,
    wait: 10,
    mnw: 21,
    fuelleft: -1,
    WvV: -1,
    cantShootThrough: 0,
    mN: 1000,
    width: [100, 100, 100, 100],
    height: [100, 100, 100, 100],
    Wwv: [0, 0, 0, 0],
    nWn: [0, 0, 0, 0],
    inmapx: [0, 0, 0, 0],
    inmapy: [0, 0, 0, 0],
    putableimg: {
      source: "img/clear-blue-platform-off.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/redprint-platform-off.png",
      W: {
        m: 0,
      },
    },
    Mvw: 0,
    VWN: 0,
    isDoor: 0,
    Vvm: 0,
    mwM: 0,
    behavior: 3,
    mwv: 1,
    MWv: [
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
    ],
    nvN: 0,
    MMN: 0,
    WnW: 0,
    impactaudio: 4,
    destroyaudio: 7,
    instation: {
      source: "img/day-platform-off.png",
      W: {
        m: 0,
      },
    },
    NWm: 21,
    Mwm: 80,
    WmW: 315360000000,
    health: 250,
    mW: 0,
  },
  {
    id: 152,
    img: {
      source: [
        "img/inv-stone-cave-out.png",
        "img/inv-stone-cave-in.png",
        "img/inv-stone-cave-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Stone Cave",
      description: "Build mountains.",
      WVn: [[2, 140]],
      stack: 1,
      stwindowid: [2],
      NMMmV: [30000],
      nww: -1,
      level: 99,
      WnNmW: -1,
      pointreq: 1,
    },
    mnw: 21,
    fuelleft: -1,
    WvV: 1,
    cantShootThrough: 1,
    stack: 255,
    loot: 153,
    wait: 10,
    mN: 1000,
    width: [100, 100, 100, 100],
    height: [100, 100, 100, 100],
    Wwv: [0, 0, 0, 0],
    nWn: [0, 0, 0, 0],
    inmapx: [0, 0, 0, 0],
    inmapy: [0, 0, 0, 0],
    putableimg: {
      source: "img/clear-blue-stone-cave.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/redprint-stone-cave.png",
      W: {
        m: 0,
      },
    },
    Mvw: 1,
    vVwVM: 152,
    VWN: 0,
    isDoor: 0,
    Vvm: 1,
    mwM: 0,
    behavior: 0,
    MWv: 0,
    nvN: 0,
    MMN: 1,
    WnW: 0,
    MmvNw: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    broken: [
      {
        source: "img/day-stone-cave-broken0.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-cave-broken1.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-cave-broken2.png",
        W: {
          m: 0,
        },
      },
    ],
    impactaudio: 2,
    destroyaudio: 6,
    instation: [
      {
        source: "img/day-stone-cave0.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-cave1.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-cave2.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-cave3.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-cave4.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-cave5.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-cave6.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-cave7.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-cave8.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-cave9.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-cave10.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-cave11.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-cave12.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-cave13.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-cave14.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-cave15.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-cave16.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-cave17.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-cave18.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-cave19.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-cave20.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-cave21.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-cave22.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-cave23.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-cave24.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-cave25.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-cave26.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-cave27.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-cave28.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-cave29.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-cave30.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-cave31.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-cave32.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-cave33.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-cave34.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-cave35.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-cave36.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-cave37.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-cave38.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-cave39.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-cave40.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-cave41.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-cave42.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-cave43.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-cave44.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-cave45.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-stone-cave46.png",
        W: {
          m: 0,
        },
      },
    ],
    NWm: 2,
    Mwm: 80,
    WmW: 315360000000,
    health: 300,
    mW: 0,
  },
  {
    id: 153,
    img: {
      source: [
        "img/inv-bunker-wall-out.png",
        "img/inv-bunker-wall-in.png",
        "img/inv-bunker-wall-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Bunker Wall",
      description: "Good old memory of the wasteland.",
      WVn: [
        [2, 150],
        [8, 12],
      ],
      stack: 1,
      stwindowid: [2],
      NMMmV: [30000],
      nww: -1,
      level: 99,
      WnNmW: -1,
      pointreq: 1,
    },
    mnw: 21,
    fuelleft: -1,
    WvV: 1,
    cantShootThrough: 1,
    stack: 255,
    loot: 154,
    wait: 10,
    mN: 1000,
    width: [100, 100, 100, 100],
    height: [100, 100, 100, 100],
    Wwv: [0, 0, 0, 0],
    nWn: [0, 0, 0, 0],
    inmapx: [0, 0, 0, 0],
    inmapy: [0, 0, 0, 0],
    putableimg: {
      source: "img/clear-blue-bunker-wall.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/redprint-bunker-wall.png",
      W: {
        m: 0,
      },
    },
    Mvw: 1,
    vVwVM: 152,
    VWN: 0,
    isDoor: 0,
    Vvm: 1,
    mwM: 0,
    behavior: 0,
    MWv: 0,
    nvN: 0,
    MMN: 1,
    WnW: 0,
    MmvNw: [
      1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    broken: [
      {
        source: "img/day-bunker-wall-broken0.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-bunker-wall-broken1.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-bunker-wall-broken2.png",
        W: {
          m: 0,
        },
      },
    ],
    impactaudio: 4,
    destroyaudio: 7,
    instation: [
      {
        source: "img/day-bunker-wall0.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-bunker-wall1.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-bunker-wall2.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-bunker-wall3.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-bunker-wall4.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-bunker-wall5.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-bunker-wall6.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-bunker-wall7.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-bunker-wall8.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-bunker-wall9.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-bunker-wall10.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-bunker-wall11.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-bunker-wall12.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-bunker-wall13.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-bunker-wall14.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-bunker-wall15.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-bunker-wall16.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-bunker-wall17.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-bunker-wall18.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-bunker-wall19.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-bunker-wall20.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-bunker-wall21.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-bunker-wall22.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-bunker-wall23.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-bunker-wall24.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-bunker-wall25.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-bunker-wall26.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-bunker-wall27.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-bunker-wall28.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-bunker-wall29.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-bunker-wall30.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-bunker-wall31.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-bunker-wall32.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-bunker-wall33.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-bunker-wall34.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-bunker-wall35.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-bunker-wall36.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-bunker-wall37.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-bunker-wall38.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-bunker-wall39.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-bunker-wall40.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-bunker-wall41.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-bunker-wall42.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-bunker-wall43.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-bunker-wall44.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-bunker-wall45.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-bunker-wall46.png",
        W: {
          m: 0,
        },
      },
    ],
    NWm: 3,
    Mwm: 80,
    WmW: 315360000000,
    health: 10000,
    mW: 0,
  },
  {
    id: 154,
    img: {
      source: [
        "img/inv-mustard-floor-out.png",
        "img/inv-mustard-floor-in.png",
        "img/inv-mustard-floor-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Golden Floor",
      description: "Players can't spawn on it",
      WVn: [[7, 2]],
      stack: 2,
      stwindowid: [2],
      NMMmV: [15000],
      nww: 3,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 255,
    loot: 155,
    wait: 10,
    mnw: 21,
    fuelleft: -1,
    WvV: 2,
    cantShootThrough: 0,
    mN: 1000,
    width: [100, 100, 100, 100],
    height: [100, 100, 100, 100],
    Wwv: [0, 0, 0, 0],
    nWn: [0, 0, 0, 0],
    inmapx: [0, 0, 0, 0],
    inmapy: [0, 0, 0, 0],
    putableimg: {
      source: "img/day-clear-blue-stone-floor.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/day-redprint-stone-floor.png",
      W: {
        m: 0,
      },
    },
    Mvw: 1,
    vVwVM: 154,
    VWN: 0,
    isDoor: 0,
    Vvm: 1,
    mwM: 0,
    behavior: 0,
    MWv: 0,
    nvN: 0,
    MMN: 0,
    WnW: 0,
    broken: [
      {
        source: "img/day-mustard-floor-broken0.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-mustard-floor-broken1.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-mustard-floor-broken2.png",
        W: {
          m: 0,
        },
      },
    ],
    impactaudio: 0,
    destroyaudio: 9,
    instation: [
      {
        source: "img/day-mustard-floor-0.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-mustard-floor-1.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-mustard-floor-2.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-mustard-floor-3.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-mustard-floor-4.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-mustard-floor-5.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-mustard-floor-6.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-mustard-floor-7.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-mustard-floor-8.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-mustard-floor-9.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-mustard-floor-10.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-mustard-floor-11.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-mustard-floor-12.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-mustard-floor-13.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-mustard-floor-14.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-mustard-floor-15.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-mustard-floor-16.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-mustard-floor-17.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-mustard-floor-18.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-mustard-floor-19.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-mustard-floor-20.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-mustard-floor-21.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-mustard-floor-22.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-mustard-floor-23.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-mustard-floor-24.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-mustard-floor-25.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-mustard-floor-26.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-mustard-floor-27.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-mustard-floor-28.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-mustard-floor-29.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-mustard-floor-30.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-mustard-floor-31.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-mustard-floor-32.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-mustard-floor-33.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-mustard-floor-34.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-mustard-floor-35.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-mustard-floor-36.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-mustard-floor-37.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-mustard-floor-38.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-mustard-floor-39.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-mustard-floor-40.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-mustard-floor-41.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-mustard-floor-42.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-mustard-floor-43.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-mustard-floor-44.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-mustard-floor-45.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-mustard-floor-46.png",
        W: {
          m: 0,
        },
      },
    ],
    NWm: 34,
    Mwm: 80,
    WmW: 315360000000,
    health: 3000,
    mW: 0,
  },
  {
    id: 155,
    img: {
      source: [
        "img/inv-red-floor-out.png",
        "img/inv-red-floor-in.png",
        "img/inv-red-floor-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Red floor",
      description: "Players can't spawn on it",
      WVn: [[7, 2]],
      stack: 2,
      stwindowid: [2],
      NMMmV: [15000],
      nww: 3,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 255,
    loot: 156,
    wait: 10,
    mnw: 21,
    fuelleft: -1,
    WvV: 2,
    cantShootThrough: 0,
    mN: 1000,
    width: [100, 100, 100, 100],
    height: [100, 100, 100, 100],
    Wwv: [0, 0, 0, 0],
    nWn: [0, 0, 0, 0],
    inmapx: [0, 0, 0, 0],
    inmapy: [0, 0, 0, 0],
    putableimg: {
      source: "img/day-clear-blue-stone-floor.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/day-redprint-stone-floor.png",
      W: {
        m: 0,
      },
    },
    Mvw: 1,
    vVwVM: 155,
    VWN: 0,
    isDoor: 0,
    Vvm: 1,
    mwM: 0,
    behavior: 0,
    MWv: 0,
    nvN: 0,
    MMN: 0,
    WnW: 0,
    broken: [
      {
        source: "img/day-red-floor-broken0.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-red-floor-broken1.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-red-floor-broken2.png",
        W: {
          m: 0,
        },
      },
    ],
    impactaudio: 0,
    destroyaudio: 9,
    instation: [
      {
        source: "img/day-red-floor-0.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-red-floor-1.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-red-floor-2.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-red-floor-3.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-red-floor-4.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-red-floor-5.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-red-floor-6.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-red-floor-7.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-red-floor-8.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-red-floor-9.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-red-floor-10.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-red-floor-11.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-red-floor-12.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-red-floor-13.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-red-floor-14.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-red-floor-15.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-red-floor-16.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-red-floor-17.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-red-floor-18.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-red-floor-19.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-red-floor-20.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-red-floor-21.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-red-floor-22.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-red-floor-23.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-red-floor-24.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-red-floor-25.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-red-floor-26.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-red-floor-27.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-red-floor-28.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-red-floor-29.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-red-floor-30.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-red-floor-31.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-red-floor-32.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-red-floor-33.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-red-floor-34.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-red-floor-35.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-red-floor-36.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-red-floor-37.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-red-floor-38.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-red-floor-39.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-red-floor-40.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-red-floor-41.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-red-floor-42.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-red-floor-43.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-red-floor-44.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-red-floor-45.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-red-floor-46.png",
        W: {
          m: 0,
        },
      },
    ],
    NWm: 31,
    Mwm: 80,
    WmW: 315360000000,
    health: 3000,
    mW: 0,
  },
  {
    id: 156,
    img: {
      source: [
        "img/inv-welding-machine-out.png",
        "img/inv-welding-machine-in.png",
        "img/inv-welding-machine-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Welding Machine",
      description: "Allow you to make logic gates",
      WVn: [
        [90, 2],
        [8, 4],
        [89, 1],
      ],
      stack: 1,
      stwindowid: [2],
      NMMmV: [50000],
      nww: 1,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    mnw: 21,
    fuelleft: -1,
    WvV: 0,
    cantShootThrough: 1,
    stwindowid: 11,
    stack: 255,
    loot: 157,
    wait: 10,
    mN: 1000,
    width: [100, 100, 100, 100],
    height: [100, 100, 100, 100],
    Wwv: [0, 0, 0, 0],
    nWn: [0, 0, 0, 0],
    inmapx: [0, 0, 0, 0],
    inmapy: [0, 0, 0, 0],
    putableimg: {
      source: "img/clear-blue-welding-machine.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/redprint-welding-machine.png",
      W: {
        m: 0,
      },
    },
    Mvw: 0,
    VWN: 0,
    isDoor: 0,
    Vvm: 0,
    mwM: 0,
    behavior: 0,
    MWv: 0,
    nvN: 0,
    MMN: 1,
    WnW: 0,
    NnN: 16,
    wwN: {
      source: "img/e-welding-machine.png",
      W: {
        m: 0,
      },
    },
    impactaudio: 4,
    destroyaudio: 7,
    instation: {
      source: "img/day-welding-machine.png",
      W: {
        m: 0,
      },
    },
    NWm: 25,
    Mwm: 80,
    WmW: 315360000000,
    health: 500,
    mW: 0,
  },
  {
    id: 157,
    img: {
      source: [
        "img/inv-wire4-out.png",
        "img/inv-wire4-in.png",
        "img/inv-wire4-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Cable  - Bridge",
      description: "Create automatic mechanisms",
      WVn: [[127, 1]],
      stack: 3,
      stwindowid: [11],
      NMMmV: [15000],
      nww: 9,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 255,
    loot: 158,
    wait: 10,
    mnw: 21,
    fuelleft: -1,
    WvV: -1,
    cantShootThrough: 0,
    mN: 1000,
    width: [100, 100, 100, 100],
    height: [100, 100, 100, 100],
    Wwv: [0, 0, 0, 0],
    nWn: [0, 0, 0, 0],
    inmapx: [0, 0, 0, 0],
    inmapy: [0, 0, 0, 0],
    putableimg: {
      source: "img/clear-blue-wire4.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/redprint-wire4.png",
      W: {
        m: 0,
      },
    },
    Mvw: 0,
    VWN: 0,
    isDoor: 0,
    Vvm: 0,
    mwM: 0,
    behavior: 3,
    mwv: 0,
    MWv: [
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
    ],
    nvN: 0,
    MMN: 0,
    WnW: 0,
    impactaudio: 8,
    destroyaudio: 9,
    instation: {
      source: "img/day-wire4.png",
      W: {
        m: 0,
      },
    },
    NWm: 23,
    Mwm: 40,
    WmW: 315360000000,
    health: 250,
    mW: 0,
  },
  {
    id: 158,
    img: {
      source: [
        "img/inv-timer-out.png",
        "img/inv-timer-in.png",
        "img/inv-timer-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Gate Timer",
      description: "Emit a signal regularly.",
      WVn: [
        [8, 1],
        [127, 1],
      ],
      stack: 3,
      stwindowid: [11],
      NMMmV: [15000],
      nww: 9,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 255,
    loot: 159,
    wait: 10,
    mnw: 21,
    fuelleft: -1,
    WvV: -1,
    cantShootThrough: 0,
    mN: 1000,
    width: [100, 100, 100, 100],
    height: [100, 100, 100, 100],
    Wwv: [0, 0, 0, 0],
    nWn: [0, 0, 0, 0],
    inmapx: [0, 0, 0, 0],
    inmapy: [0, 0, 0, 0],
    putableimg: {
      source: "img/clear-blue-timer.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/redprint-timer.png",
      W: {
        m: 0,
      },
    },
    Mvw: 0,
    VWN: 0,
    isDoor: 0,
    Vvm: 0,
    mwM: 0,
    behavior: 3,
    mwv: 1,
    MWv: [
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
    ],
    nvN: 0,
    MMN: 0,
    WnW: 0,
    NnN: 38,
    wwN: {
      source: "img/e-light.png",
      W: {
        m: 0,
      },
    },
    impactaudio: 4,
    destroyaudio: 7,
    instation: [
      {
        source: "img/day-timer-0.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-timer-1.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-timer-2.png",
        W: {
          m: 0,
        },
      },
      {
        source: "img/day-timer-3.png",
        W: {
          m: 0,
        },
      },
    ],
    NWm: 25,
    Mwm: 80,
    WmW: 315360000000,
    health: 250,
    mW: 0,
  },
  {
    id: 159,
    img: {
      source: [
        "img/inv-xor-out.png",
        "img/inv-xor-in.png",
        "img/inv-xor-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Gate Xor",
      description: "Activate only if only one entry is on.",
      WVn: [
        [8, 1],
        [127, 1],
      ],
      stack: 3,
      stwindowid: [11],
      NMMmV: [15000],
      nww: 9,
      level: -1,
      WnNmW: -1,
      pointreq: 1,
    },
    stack: 255,
    loot: 160,
    wait: 10,
    mnw: 21,
    fuelleft: -1,
    WvV: -1,
    cantShootThrough: 0,
    mN: 1000,
    width: [100, 100, 100, 100],
    height: [100, 100, 100, 100],
    Wwv: [0, 0, 0, 0],
    nWn: [0, 0, 0, 0],
    inmapx: [0, 0, 0, 0],
    inmapy: [0, 0, 0, 0],
    putableimg: {
      source: "img/clear-blue-xor.png",
      W: {
        m: 0,
      },
    },
    notputableimg: {
      source: "img/redprint-xor.png",
      W: {
        m: 0,
      },
    },
    Mvw: 0,
    VWN: 0,
    isDoor: 0,
    Vvm: 0,
    mwM: 0,
    behavior: 3,
    mwv: 1,
    MWv: [
      [1, 0, 0, 0],
      [0, 0, 0, 1],
      [0, 1, 0, 0],
      [0, 0, 1, 0],
    ],
    nvN: 0,
    MMN: 0,
    WnW: 0,
    impactaudio: 4,
    destroyaudio: 7,
    instation: {
      source: "img/day-xor.png",
      W: {
        m: 0,
      },
    },
    NWm: 25,
    Mwm: 80,
    WmW: 315360000000,
    health: 250,
    mW: 0,
  },
  {
    id: 160,
    img: {
      source: [
        "img/skill-eye1-out.png",
        "img/skill-eye1-in.png",
        "img/skill-eye1-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Vision 1",
      description: "Improve your vision",
      nww: 0,
      level: 0,
      WnNmW: -1,
      pointreq: 1,
    },
    scale: -0.25,
  },
  {
    id: 161,
    img: {
      source: [
        "img/skill-eye2-out.png",
        "img/skill-eye2-in.png",
        "img/skill-eye2-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Vision 2",
      description: "Improve your vision",
      nww: 0,
      level: 5,
      WnNmW: 160,
      pointreq: 1,
    },
    scale: -0.35,
  },
  {
    id: 162,
    img: {
      source: [
        "img/skill-eye3-out.png",
        "img/skill-eye3-in.png",
        "img/skill-eye3-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Vision 3",
      description: "Improve your vision",
      nww: 0,
      level: 7,
      WnNmW: 161,
      pointreq: 1,
    },
    scale: -0.45,
  },
  {
    id: 163,
    img: {
      source: [
        "img/skill-builder1-out.png",
        "img/skill-builder1-in.png",
        "img/skill-builder1-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Builder 1",
      description: "Multiplies some craft by two",
      nww: 0,
      level: 6,
      WnNmW: -1,
      pointreq: 2,
    },
  },
  {
    id: 164,
    img: {
      source: [
        "img/skill-builder2-out.png",
        "img/skill-builder2-in.png",
        "img/skill-builder2-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Builder 2",
      description: "Repair much faster",
      nww: 0,
      level: 18,
      WnNmW: 163,
      pointreq: 1,
    },
  },
  {
    id: 165,
    img: {
      source: [
        "img/skill-inv1-out.png",
        "img/skill-inv1-in.png",
        "img/skill-inv1-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Inventory 1",
      description: "Add a slot in your inventory",
      nww: 0,
      level: 0,
      WnNmW: -1,
      pointreq: 1,
    },
    bagexpensionby: 1,
  },
  {
    id: 166,
    img: {
      source: [
        "img/skill-inv2-out.png",
        "img/skill-inv2-in.png",
        "img/skill-inv2-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Inventory 2",
      description: "Add a slot in your inventory",
      nww: 0,
      level: 5,
      WnNmW: 165,
      pointreq: 1,
    },
    bagexpensionby: 1,
  },
  {
    id: 167,
    img: {
      source: [
        "img/skill-inv3-out.png",
        "img/skill-inv3-in.png",
        "img/skill-inv3-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Inventory 3",
      description: "Add a slot in your bag",
      nww: 0,
      level: 7,
      WnNmW: 166,
      pointreq: 1,
    },
    bagexpensionby: 1,
  },
  {
    id: 168,
    img: {
      source: [
        "img/skill-inv4-out.png",
        "img/skill-inv4-in.png",
        "img/skill-inv4-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Inventory 4",
      description: "Add two slots in your bag",
      nww: 0,
      level: 10,
      WnNmW: 167,
      pointreq: 2,
    },
    bagexpensionby: 2,
  },
  {
    id: 169,
    img: {
      source: [
        "img/skill-inv5-out.png",
        "img/skill-inv5-in.png",
        "img/skill-inv5-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Inventory 5",
      description: "Add three slots in your bag",
      nww: 0,
      level: 12,
      WnNmW: 168,
      pointreq: 3,
    },
    bagexpensionby: 3,
  },
  {
    id: 170,
    img: {
      source: [
        "img/skill-lightweight-out.png",
        "img/skill-lightweight-in.png",
        "img/skill-lightweight-click.png",
      ],
      W: [
        {
          m: 0,
        },
        {
          m: 0,
        },
        {
          m: 0,
        },
      ],
    },
    detail: {
      name: "Light Weight",
      description: "Less likely to trigger traps.",
      nww: 0,
      level: 8,
      WnNmW: -1,
      pointreq: 1,
    },
  },
];

const ClearedItems = items.map((item) => {
  let {
    id,
    img: { source = [] } = {},
    detail: { name, description, level, pointreq },
    stack,
    width,
    height,
    putableimg: { source: putableimgSource } = {},
    notputableimg: { source: notputableimgSource } = {},
    isDoor,
    broken, // Added broken field
    instation, // Added instation field
    blockMeshes,
    health,
  } = item;

  //console.log(typeof broken);
  //console.log(typeof instation);

  let ground_img = "";
  if (source.length > 0) {
    ground_img = source[0].replace("inv-", "day-ground-");
    ground_img = ground_img.replace("-out", "");
  }
  let skillCost = pointreq;
  return {
    id,
    img: { source: source.length > 0 ? source : undefined },
    detail: { name, description, level, skillCost },
    stack,
    width,
    height,
    putableimg: putableimgSource ? { source: putableimgSource } : undefined,
    notputableimg: notputableimgSource
      ? { source: notputableimgSource }
      : undefined,
    isDoor,
    broken: Array.isArray(broken)
      ? broken.map(({ source }) => ({ source }))
      : undefined,
    instation: Array.isArray(instation)
      ? instation.map(({ source }) => ({ source }))
      : undefined,

    ground_img,
    blockMeshes,
    health,
  };
});

const jsonOutput = JSON.stringify({ items: ClearedItems }, null, 2);
fs.writeFile("items.json", jsonOutput, "utf8", (err) => {
  if (err) {
    console.error("Error writing to file:", err);
  } else {
    console.log("JSON data has been written to items.json");
  }
});
