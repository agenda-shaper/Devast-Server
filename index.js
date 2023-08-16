//@ts-check

const items = require(__dirname + "/data/items");
console.log(items);

let ai = 5;

class Projectile {
  constructor(speed, rotation, x, y, type, frames) {
    this.speed = speed;
    this.rotation = rotation;
    this.oldLocation = { x: x, y: y };
    this.newLocation = { x: x, y: y };
    this.type = type; // bullet type (number) ak47 - 10
    this.remainingFrames = frames;
  }

  act() {
    let tiles = Game.BlockTiles;

    // calculate based on rotation where the new location will be
    this.newLocation.x = this.oldLocation.x + this.speed; // for now only shoots to the right
    //this.newLocation.y = this.oldLocation.y + this.speed;

    if (
      this.newLocation.x > Game.worldBorders.xMax ||
      this.newLocation.y > Game.worldBorders.yMax ||
      this.newLocation.x < Game.worldBorders.xMin ||
      this.newLocation.y < Game.worldBorders.yMin
    ) {
      // delete projectile without checking | ask chatgpt how to delete own class so it removes itself from Game.projectiles array too
      this.speed = 0;
      this.remainingFrames = 0;
    }

    let tile =
      tiles[Math.max(1, Math.min(150, Math.ceil(this.newLocation.x / 100)))][
        Math.max(1, Math.min(150, Math.ceil(this.newLocation.y / 100)))
      ];

    if (Game.checkCollision(this.newLocation, tile)) {
      this.speed = 0;
      this.remainingFrames = 0;
    }

    // send projectile data
    Game.players[1].ws.send(SendProjectile(this));

    this.oldLocation = this.newLocation;

    this.remainingFrames -= 1;
  }
}

class Inventory {
  constructor() {
    this.maxSlots = 8; // Max slots
    this.items = [];
    this.startItems = [
      // 4 number per item - id | count | 1 | maxStack
      55, 50, 1, 255, 54, 80, 1, 255, 30, 10, 1, 255, 125, 10, 1, 255, 25, 1, 1,
      1,
    ];
  }
}

class PlayerVitalStats {
  constructor() {
    this.health = 255;
    this.hunger = 255;
    this.cold = 255;
    this.stamina = 255;
    this.radiation = 255;
  }
}

class Player {
  constructor() {
    this.userid = 0;
    this.ws = null;
    this.nick = " ";
    this.token = 0;
    this.tokenid = 0;
    this.level = 0;
    this.score = 0;
    this.x = 0;
    this.y = 0;
    this.coolDown = 0;
    this.mousePressed = 0; // 0 - not pressed, 1 - pressed
    this.shiftPressed = 0; // 0 - not pressed, 1 - pressed
    this.movingTo = 0; // 0 - idle | 1 - left | 2 - right | 4 - down | 8 - up | 5 - left + down | 6 - right + down | 9 - left + up | 10 - right + up
    this.rotation = 0; // 360 degrees
    this.admin = 0;
    this.skin = 0; // 0 - default skin
    this.action = 1; // 3 for punching ?
    this.effect = 0; // 31 | 23 | 15 | 26 effect        26 - white dots running  23 - allow runs | 15 walking no runs allowed
    this.wearingid = 0; // 0 - not wearing anything, id for item wearing
    this.holdingid = 0; // 0 - not holding anything, id for item holding
    this.buildingid = 0; // building framework blue id for item that building
    this.buildLimit = 255; // limit for max buildings
    this.serverMode = 0; // 0 - normal, others - ghoulStuff
    this.ownedTiles = []; // array of tiles owned by the player
    this.vital = new PlayerVitalStats();
    this.inventory = new Inventory();
  }

  setLocation(x, y) {
    this.x = x;
    this.y = y;
  }

  movement(shiftSpeed = 20) {
    // shiftspeed normal = 1.8
    let borders = Game.worldBorders;
    let tiles = Game.BlockTiles;
    let speed = 1;
    if (this.shiftPressed) {
      speed = shiftSpeed;
    }

    let newX = this.x; // new x position of the player after movement
    let newY = this.y; // new y position of the player after movement
    switch (this.movingTo) {
      case 1: // left
        newX = this.x - 4 * speed;
        break;
      case 2: // right
        newX = this.x + 4 * speed;
        break;
      case 4: // down
        newY = this.y + 4 * speed;
        break;
      case 8: // up
        newY = this.y - 4 * speed;
        break;
      case 5: // left + down
        newX = this.x - 3 * speed;
        newY = this.y + 3 * speed;
        break;
      case 6: // right + down
        newX = this.x + 3 * speed;
        newY = this.y + 3 * speed;
        break;
      case 9: // left + up
        newX = this.x - 3 * speed;
        newY = this.y - 3 * speed;
        break;
      case 10: // right + up
        newX = this.x + 3 * speed;
        newY = this.y - 3 * speed;
    }

    // Edit to prevent player from moving outside the world borders
    newX = Math.max(borders.xMin + 25, Math.min(borders.xMax - 25, newX));
    newY = Math.max(borders.yMin + 25, Math.min(borders.yMax - 25, newY));

    // 50x50 player collision box
    // Get 4 locations of the hitbox diagonal endings + the center point
    let Point0 = { x: newX, y: this.y }; // center
    let Point1 = { x: newX - 25, y: this.y - 25 };
    let Point2 = { x: newX + 25, y: this.y - 25 };
    let Point3 = { x: newX - 25, y: this.y + 25 };
    let Point4 = { x: newX + 25, y: this.y + 25 };

    // Get Tiles of each point
    let Tile0 =
      tiles[Math.max(1, Math.min(150, Math.ceil(Point0.x / 100)))][
        Math.max(1, Math.min(150, Math.ceil(Point0.y / 100)))
      ];
    let Tile1 =
      tiles[Math.max(1, Math.min(150, Math.ceil(Point1.x / 100)))][
        Math.max(1, Math.min(150, Math.ceil(Point1.y / 100)))
      ];
    let Tile2 =
      tiles[Math.max(1, Math.min(150, Math.ceil(Point2.x / 100)))][
        Math.max(1, Math.min(150, Math.ceil(Point2.y / 100)))
      ];
    let Tile3 =
      tiles[Math.max(1, Math.min(150, Math.ceil(Point3.x / 100)))][
        Math.max(1, Math.min(150, Math.ceil(Point3.y / 100)))
      ];
    let Tile4 =
      tiles[Math.max(1, Math.min(150, Math.ceil(Point4.x / 100)))][
        Math.max(1, Math.min(150, Math.ceil(Point4.y / 100)))
      ];

    if (
      Game.checkCollision(Point0, Tile0) ||
      Game.checkCollision(Point1, Tile1) ||
      Game.checkCollision(Point2, Tile2) ||
      Game.checkCollision(Point3, Tile3) ||
      Game.checkCollision(Point4, Tile4)
    ) {
      console.log("Collision detected");
      newX = this.x;
    }

    // now check for Y

    // 50x50 player collision box
    // Get 4 locations of the hitbox diagonal endings + the center point
    Point0 = { x: newX, y: newY }; // center
    Point1 = { x: newX - 25, y: newY - 25 };
    Point2 = { x: newX + 25, y: newY - 25 };
    Point3 = { x: newX - 25, y: newY + 25 };
    Point4 = { x: newX + 25, y: newY + 25 };

    // Get Tiles of each point
    Tile0 =
      tiles[Math.max(1, Math.min(150, Math.ceil(Point0.x / 100)))][
        Math.max(1, Math.min(150, Math.ceil(Point0.y / 100)))
      ];
    Tile1 =
      tiles[Math.max(1, Math.min(150, Math.ceil(Point1.x / 100)))][
        Math.max(1, Math.min(150, Math.ceil(Point1.y / 100)))
      ];
    Tile2 =
      tiles[Math.max(1, Math.min(150, Math.ceil(Point2.x / 100)))][
        Math.max(1, Math.min(150, Math.ceil(Point2.y / 100)))
      ];
    Tile3 =
      tiles[Math.max(1, Math.min(150, Math.ceil(Point3.x / 100)))][
        Math.max(1, Math.min(150, Math.ceil(Point3.y / 100)))
      ];
    Tile4 =
      tiles[Math.max(1, Math.min(150, Math.ceil(Point4.x / 100)))][
        Math.max(1, Math.min(150, Math.ceil(Point4.y / 100)))
      ];

    if (
      Game.checkCollision(Point0, Tile0) ||
      Game.checkCollision(Point1, Tile1) ||
      Game.checkCollision(Point2, Tile2) ||
      Game.checkCollision(Point3, Tile3) ||
      Game.checkCollision(Point4, Tile4)
    ) {
      console.log("Collision detected");
      newY = this.y;
    }

    // Update the player's position
    this.x = newX;
    this.y = newY;
  }

  reset() {
    Object.assign(this, new Player());
  }
}

class Tile {
  constructor(
    xTile,
    yTile,
    ownerid = 0,
    blockid = 0,
    tokenid = 0,
    Collision = 0,
    zIndex = 3,
    rotation = 1
  ) {
    this.ownerid = ownerid;
    this.blockid = blockid;
    this.tokenid = tokenid; // 0 - 255 per player
    this.Collision = Collision;
    this.rotation = rotation; // 0 | 1 | 2 | 3
    this.zIndex = zIndex; // 3 - on top of players, 4 - under players
    this.action = 1; // 1 - normal, animate block movement (particles)
    this.tilePos = { x: xTile, y: yTile };
    this.width = [0, 0, 0, 0];
    this.height = [0, 0, 0, 0];
    this.cantShootThrough = 0; // 0 - can shoot through, 1 - cant
    this.childOf = { x: 0, y: 0 }; // 0,0 - standalone block, if has tile id - child block of other tile (like smelter side)
  }
}

class GameEngine {
  constructor() {
    this.players = [];
    this.BlockTiles = [];
    this.Projectiles = [];
    this.serverType = 0; // 0 - normal, for ghoulmode
    this.maxPlayers = 119;
    this.randomSpawn = false;
    this.spawnpoint = { x: 300, y: 300 };
    this.worldBorders = {
      xMin: 1,
      yMin: 1,
      xMax: 14999,
      yMax: 14999,
    };

    for (let i = 0; i <= 150; i++) {
      // 150x150 map fill tiles
      let row = [];
      for (let j = 0; j <= 150; j++) {
        let tile = new Tile(i, j);
        row.push(tile);
      }
      this.BlockTiles.push(row);
    }
    for (let i = 0; i <= this.maxPlayers; i++) {
      let player = new Player();
      this.players.push(player);
    }
    console.log(this.players.length);
  }

  addClan(clan) {
    this.clans.push(clan);
  }

  SpawnPlayer(websocket, id, tokenid, token, nick) {
    let newPlayer = true;

    if (typeof id === "number" && id > 0 && id < this.maxPlayers) {
      // id is a valid number within the allowed range
      const checkPlayer = Game.players[id];
      if (
        typeof id === "number" &&
        checkPlayer.userid === id &&
        typeof token === "string" &&
        checkPlayer.token === token
      ) {
        // player already exists
        newPlayer = false;
      }
    }

    let player = Game.players[id];

    if (newPlayer) {
      id = Game.generateNewId();
      player = Game.players[id];
      player.userid = id;

      if (token.length !== 20) {
        token = Game.generateNewToken();
      }
      player.token = token;

      if (typeof nick !== "string") {
        nick = " ";
      } else if (nick.length < 1) {
        nick = " ";
      }

      nick = nick.substring(0, 16); // max 16 characters

      player.nick = nick;

      if (Game.randomSpawn) {
        player.x = Math.max(100, Math.floor(Math.random() * 14900));
        player.y = Math.max(100, Math.floor(Math.random() * 14900));
        // Later add a check to prevent player from spawning inside a collision tile
      } else {
        player.x = Game.spawnpoint.x;
        player.y = Game.spawnpoint.y;
      }

      if (player.inventory.startItems.length > 0) {
        player.inventory.items = player.inventory.startItems;
      }
    }

    player.ws = websocket;

    console.log("New player: " + player.nick + " with id: " + player.userid);

    return player;
  }

  generateNewId() {
    for (let i = 1; i < this.players.length; i++) {
      if (this.players[i].userid == 0) {
        return i;
      }
    }
    return -1;
  }

  generateNewToken() {
    let token = "";
    let possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 20; i++)
      token += possible.charAt(Math.floor(Math.random() * possible.length));
    return token;
  }

  switchHoldingAction(player) {
    if (!player.mousePressed || player.coolDown > 0) return 0;

    switch (player.holdingid) {
      case 0: // naked arms
        player.action = 3;
        player.coolDown = 300;
        setTimeout(() => {
          player.coolDown = 0;
        }, player.coolDown);
        break;
      case 10: // ak47
        player.action = 3;
        ai += 1;

        let bullet = new Projectile(
          30, // speed
          player.rotation,
          player.x,
          player.y,
          10, // projectile type
          60 // frames (how long before bullet dies) or max distance
        );

        Game.Projectiles.push(bullet);

        player.coolDown = 180;
        setTimeout(() => {
          player.coolDown = 0;
        }, player.coolDown);
        console.log("ak shot");
        break;
    }
  }

  render(player) {
    // ! not using this function yet
    let playerXtile = Math.ceil(player.x / 100);
    let playerYtile = Math.ceil(player.y / 100);
    let topLeftX = playerXtile - 1;
    let topLeftY = playerYtile - 1;

    let renderArray = [];

    for (let y = topLeftY; y < topLeftY + 1; y++) {
      for (let x = topLeftX; x < topLeftX + 1; x++) {
        let tileData = getTileData(Game.BlockTiles[x][y]); // get the data for the current tile
        renderArray.push(tileData);
      }
    }
    console.log("renderArray: " + renderArray.length);
    return renderArray;
  }

  updatePlayer(player) {
    if (player.movingTo) player.movement(); // update player position

    if (player.shiftPressed) player.effect = 26; // update player effect
    else player.effect = 23;

    this.switchHoldingAction(player);
  }

  checkCollision(Point, block) {
    // Check if the block has collision
    if (block.Collision == 0) return false;

    let BlockX = block.tilePos.x * 100;
    let BlockY = block.tilePos.y * 100;

    if (block.childOf.x > 0) {
      console.log("child of tile");
      return true; // dont check hitboxes if child tile (most are basic unwalkable squares)
    }

    // Calculate hitbox location based on rotation
    switch (block.rotation) {
      case 0:
        return (
          Point.x > BlockX - block.width[0] &&
          Point.x < BlockX &&
          Point.y > BlockY - block.height[0] &&
          Point.y < BlockY
        );
      case 1:
        BlockX -= 100;
        BlockY -= 100;
        return (
          Point.x > BlockX &&
          Point.x < BlockX + block.width[1] &&
          Point.y > BlockY &&
          Point.y < BlockY + block.height[1]
        );
      case 2:
        BlockX -= 100;
        BlockY -= 100;
        return (
          Point.x > BlockX &&
          Point.x < BlockX + block.width[2] &&
          Point.y > BlockY &&
          Point.y < BlockY + block.height[2]
        );
      case 3:
        return (
          Point.x > BlockX - block.width[3] &&
          Point.x < BlockX &&
          Point.y > BlockY - block.height[3] &&
          Point.y < BlockY
        );
    }
  }

  createBlock(tile, player) {
    if (player.ownedTiles.length + 1 >= player.buildLimit) {
      console.log("player reached build limit");
      return;
    }

    tile.ownerid = player.userid;
    tile.blockid = player.buildingid;
    tile.Collision = 1;
    tile.tokenid = player.ownedTiles.length;

    tile.width = items[tile.blockid - 1].width;
    tile.height = items[tile.blockid - 1].height;

    let width = tile.width[tile.rotation];
    let height = tile.height[tile.rotation];

    // check if block is bigger than one tile ~(smelter, research bench)
    if (width > 100) {
      let leftTile = Game.BlockTiles[tile.tilePos.x - 1][tile.tilePos.y];
      let rightTile = Game.BlockTiles[tile.tilePos.x + 1][tile.tilePos.y];

      leftTile.Collision = 1;
      leftTile.childOf.x = tile.tilePos.x;
      leftTile.childOf.y = tile.tilePos.y;

      rightTile.Collision = 1;
      rightTile.childOf.x = tile.tilePos.x;
      rightTile.childOf.y = tile.tilePos.y;
    }
    if (height > 100) {
      let upperTile = Game.BlockTiles[tile.tilePos.x][tile.tilePos.y - 1];
      let lowerTile = Game.BlockTiles[tile.tilePos.x][tile.tilePos.y + 1];

      upperTile.Collision = 1;
      upperTile.childOf.x = tile.tilePos.x;
      upperTile.childOf.y = tile.tilePos.y;

      lowerTile.Collision = 1;
      lowerTile.childOf.x = tile.tilePos.x;
      lowerTile.childOf.y = tile.tilePos.y;
    }
    tile.cantShootThrough = items[tile.blockid - 1].cantShootThrough;

    player.ownedTiles.push(tile);

    console.log(
      "new block: owner: " + player.userid,
      " block: " + player.buildingid
    );
    console.log("Position: " + tile.tilePos.x + " " + tile.tilePos.y);
    SendTileData(tile);
  }

  Run60fps() {
    for (let i = 0; i < this.players.length; i++) {
      // cycle through all players
      let player = this.players[i];
      if (player.ws == null) continue; // if player is empty, skip
      //console.log("updating player")

      let objectArray = [0, 0];

      this.updatePlayer(player); // engine update everything

      objectArray = objectArray.concat(getPlayerData(player));

      for (let i = 0; i < this.Projectiles.length; i++) {
        // loop through all active projectiles
        this.Projectiles[i].act(); // should return locations so check if its in player render distance
      }
      let buffer = new Uint8Array(objectArray);
      player.ws.send(buffer);
      player.action = 1;
      //console.log("player updated")
    }
  }
}

let Game = new GameEngine();

function CreatePlayerForWebsocket(player) {
  let ws = player.ws;

  /*
  let nicknamesArray = [2]; // Case 2 - player names
  for (let i = 1; i <= maxPlayers; i++) {
    nicknamesArray.push(Game.players[i].nick);
  }
  nicknamesArray.push(player.token);
  
  */

  let nicknamesArray = [2]
    .concat(Array(Game.maxPlayers).fill(" "))
    .concat(player.token); // Case 2 - player names
  ws.send(JSON.stringify(nicknamesArray));

  let clansArray = [5]; // Case 5 - clan names
  for (let i = 0; i < 18; i++) {
    if (Game.clans[i]) {
      clansArray.push(Game.clans[i].name);
    } else {
      clansArray.push(0);
    }
  }
  ws.send(JSON.stringify(clansArray));

  console.log(player.userid);
  let BasicInt8Array = [
    9, // case 9
    player.userid,
    0, // ?
    3,
    120,
    Game.serverType,
    127,
    88,
  ]; // Case 9 - players data
  for (let i = 0; i < 4; i++) {
    // 9 items per player
    let playerData = [
      i + 50, // player id
      50, // clan stuff
      0, // mostly 0 something with timedate
      0, // timedate again
      0, // PLAYER.ghoulmode type, normal=0
      0, // ? mainly 0
      255, // token id calculations
      255, // also token id calculations
      0, // something with score
      0, // something with score
    ];
    BasicInt8Array = BasicInt8Array.concat(playerData);
  }
  const ByteUint8Array = new Uint8Array(BasicInt8Array);
  ws.send(ByteUint8Array);

  const Case66 = new Uint8Array([
    // Case 66 - IDK
    66,

    107, // every number * 100 and into array
    33, // all numbers the same almost every time
    141,
    34,
    51,
    27,
    110,
    128,
    103,
    109,
    95,
    127,
    22,
    34,
    61,
    62,
    93,
    98,
    82,
    118,
    29,
    8,
    58,
    103,
  ]);
  ws.send(Case66);
  /*
  const score = player.score;
  const Case42levels = new Uint8Array([
    // Case 42 - player level and exp
    42,
    player.level,
    (score & 0xff000000) >>> 24, // SERVG.PLAYER.expf = (((message[2] << 24) + (message[3] << 16)) + (message[4] << 8)) + message[5];
    (score & 0xff0000) >>> 16,
    (score & 0xff00) >>> 8,
    score & 0xff,
  ]); // from 6th item it loops and unlocks skills data, here it doesnt unlock nothing
  ws.send(Case42levels);*/

  const Case42Levels = new Int16Array([42, 0, 0]);
  ws.send(Case42Levels);

  const Case12vital = new Uint8Array([
    12, // case 12 vital data bars
    player.vital.health, // health
    player.vital.hunger, // hunger
    player.vital.cold, // cold             // I THINK THIS IS THE CURRENT VALUES
    player.vital.stamina, // stamina
    player.vital.radiation, // radiation
  ]);
  ws.send(Case12vital);

  const Case13exp = new Int16Array([
    13, // case 13 EXP    // SERVG.PLAYER.exp = (array[1] << 16) + array[2];
    0, // first
    0,
  ]);
  ws.send(Case13exp);

  var Case15inventory = [15]; // case 15
  let inventoryItems = player.inventory.items;
  for (let i = 0; i < inventoryItems.length; i++) {
    Case15inventory.push(inventoryItems[i]);
  }
  var Case15Uint16inventory = new Uint8Array(Case15inventory);
  ws.send(Case15Uint16inventory);

  const Case19 = new Uint8Array([19]); // ? case 19 BLANK
  ws.send(Case19);

  const Case63vital_info = new Int16Array([
    63, // case 63  Vitality Info

    255, // health max
    50, // number / 10000
    0, // number / 10000

    255, // hunger max
    12, // number / 10000
    0, // number / 10000

    255, // cold max
    50, // number / 10000
    35, // number / 10000

    255, // stamina max
    150, // number / 10000
    300, // number / 10000

    255, // radiation max
    30, // number / 10000
    240, // number / 10000
  ]);
  ws.send(Case63vital_info);

  const Case64 = new Uint8Array([64, 0]); // only this IDK what is it
  ws.send(Case64);

  // NOW THE MAIN MAP LOADING / BUILDINGS / ETC
  // THIS IS THE CASE FOR SENDING EVERY SINGLE TICK DATA TO CLIENT
  // Case 0

  // on player create huge, then smaller sizes
  /*var Case0ArrayInt8 = [0, 1];

  var entityCountMaybe = 1;

  for (let i = 0; i < entityCountMaybe; i++) {
    var dataEntities = [
      player.userid, // entity id | user id
      11, // entity number ( this one checks if already exists and connects with existing on same id)
      200,
      0,
      1,
      15,
      0,
      0,

      0, // locations
      1,
      0,
      1,

      0,
      1,
      0,
      1,

      0,
      0, // many times 0
    ];
    Case0ArrayInt8 = Case0ArrayInt8.concat(dataEntities);
  }
  */
  // int8 and int16 arrays are on the same entities

  const Case0ArrayInt16 = new Int16Array([
    256,
    2049,
    214,
    5889,
    0,
    124, // location.x  ???
    14867, // location.y  ???
    124, // x again
    14867, // y again
    0,
  ]);

  //const Case0Int8Array = new Int8Array(Case0ArrayInt8);
  //const Case0UInt8Array = new Uint8Array(Case0ArrayInt8);
  const Case0Int16Array = new Int16Array(Case0ArrayInt16);

  //ws.send(Case0Int16Array); // ! fix this
  console.log("test");
  let DataArray = [0, 1];
  DataArray = DataArray.concat(getPlayerData(player));
  console.log(DataArray);
  let buffer = new Uint8Array(DataArray);
  player.ws.send(buffer);

  /*
  // Calculate the size of the combined ArrayBuffer
  var arrayBufferSizeCase0 = Case0Int8Array.byteLength + Case0UInt8Array.byteLength + Case0Int16Array.byteLength;

  // Create the combined ArrayBuffer
  var arrayBufferCase0 = new ArrayBuffer(arrayBufferSizeCase0);

  // Create a DataView for the combined ArrayBuffer
  var viewCase0 = new DataView(arrayBufferCase0);

  // Set the values of the Int8Array in the ArrayBuffer
  viewCase0.setInt8(0, ...Case0Int8Array);

  // Set the values of the Uint8Array in the ArrayBuffer
  viewCase0.setUint8(Case0Int8Array.byteLength, ...Case0UInt8Array);

  // Set the values of the Int16Array in the ArrayBuffer
  viewCase0.setInt16(Case0Int8Array.byteLength + Case0UInt8Array.byteLength, ...Case0Int16Array);*/

  // Send the combined ArrayBuffer
  //ws.send(arrayBufferCase0);

  // Later Case 8 just to keep connection alive, blank data only 8 number
}

function SendPlayerEntity(player, resetEntities = 0) {
  let oldX = player.x;
  let oldY = player.y;

  let entityObject = [
    0, // case 0
    resetEntities, // 1 - clear all entities and replace | 0 add to existing, dont clear

    player.userid, // (for non players - owner id)
    8, // entity number id ???
    Math.round((player.rotation * 255) / 360), // converted from 0 - 360 to 0 - 255
    0, // something with how entity replaces itself, 0 - instant, others - trying to walk to that place
    player.action, // action | 3 - attack, 1 - idle
    player.effect, // 31 | 23 | 15 | 26 effect        26 - white dots running  23 - allow runs, basic  15 walking no runs allowed
    0, // 0   also something with absolute ID if 1 then other entity creation
    0, // 0

    // entity movement
    oldX & 0xff, // start position
    oldX >>> 8,
    oldY & 0xff,
    oldY >>> 8,

    player.x & 0xff, // finish position-
    player.x >>> 8,
    player.y & 0xff,
    player.y >>> 8,

    player.wearingid, // number of what wearing
    player.holdingid, // number of what holding
  ];

  //console.log(oldX + " " + oldY + " " + entity.x + " " + entity.y);
  /*console.log(
    "Byte array:" +
      (Game.players[0].x >>> 8) +
      " " +
      (Game.players[0].x & 0xff) +
      " " +
      (Game.players[0].y >>> 8) +
      " " +
      (Game.players[0].y & 0xff)
  );*/
  return entityObject;
}

function getPlayerData(player) {
  let oldX = player.x;
  let oldY = player.y;

  let entityObject = [
    player.userid, // (for non players - owner id)
    8, // entity number id ???
    Math.round((player.rotation * 255) / 360), // converted from 0 - 360 to 0 - 255
    0, // something with how entity replaces itself, 0 - instant, others - trying to walk to that place
    player.action, // action | 3 - attack, 1 - idle
    player.effect, // 31 | 23 | 15 | 26 effect        26 - white dots running  23 - allow runs, basic  15 walking no runs allowed
    0, // 0   also something with absolute ID if 1 then other entity creation
    0, // 0

    // entity movement
    oldX & 0xff, // start position
    oldX >>> 8,
    oldY & 0xff,
    oldY >>> 8,

    player.x & 0xff, // finish position-
    player.x >>> 8,
    player.y & 0xff,
    player.y >>> 8,

    player.wearingid, // number of what wearing
    player.holdingid, // number of what holding
  ];
  return entityObject;
}

function SendTileData(tile, resetEntities = 0) {
  let xPos = tile.tilePos.x * 100 - 50;
  let yPos = tile.tilePos.y * 100 - 50;
  /*for (let i = ai; i < items.length; i++) {
    if ("putableimg" in items[i] && items[i].stack > 50) {
      ai = i + 1;
      break;
    }
  }
  console.log(ai);
  console.log(items[ai].detail.name);
  const packedValue1 = Math.floor(ai / 2);
  const packedValue2 = ai % 2 === 0 ? 0 : 128;
  ai++;*/

  const EntityBlock = new Uint8Array([
    0, // case 0
    resetEntities, // 1 clear all entities and replace | 0 add to existing, dont clear

    tile.ownerid, // owner userid
    tile.tokenid, // tile token id (0 - 255 per player)
    0, //
    tile.zIndex, // z layer?  3 - on player, 4 - below player
    tile.action, // block action 1 - idle
    0, //
    1, // try 0
    0,

    xPos & 0xff, // action start position
    xPos >>> 8,
    yPos & 0xff,
    yPos >>> 8,

    xPos & 0xff, // action finish position
    xPos >>> 8,
    yPos & 0xff,
    yPos >>> 8,

    (tile.blockid % 2) * 128 + tile.rotation * 32, // 0 / 32 / 64 / 96  |  128 / 160 / 192 / 224  2 blocks fit, 4 numbers for rotation
    Math.floor(tile.blockid / 2), // block id 1 apart is 2 apart how the upper value is     on 34 | 96 = Output: 8768  every 32 numbers new block
    /*
    3,
    11,
    38,
    0,
    1,
    15,
    0,
    0,

    176,
    1,
    31,
    1,

    176,
    1,
    31,
    1,

    0,
    21*/
  ]);
  console.log(EntityBlock);
  let ws = Game.players[tile.ownerid].ws;
  ws.send(EntityBlock);
}

function getTileData(tile) {
  let xPos = tile.tilePos.x * 100 - 50;
  let yPos = tile.tilePos.y * 100 - 50;

  let EntityBlock = [
    tile.ownerid, // owner userid
    tile.tokenid, // tile token id (0 - 255 per player)
    0, // ?
    tile.zIndex, // 3 - on player, 4 - below player
    tile.action, // block action 1 - idle, 2 - animate punch
    0, // ?
    1, // ? try 0
    0, // ?

    xPos & 0xff, // action start position
    xPos >>> 8,
    yPos & 0xff,
    yPos >>> 8,

    xPos & 0xff, // action finish position
    xPos >>> 8,
    yPos & 0xff,
    yPos >>> 8,

    (tile.blockid % 2) * 128 + tile.rotation * 32, // 0 / 32 / 64 / 96  |  128 / 160 / 192 / 224  2 blocks fit, 4 numbers for rotation
    Math.floor(tile.blockid / 2), // block id 1 apart is 2 apart how the upper value is     on 34 | 96 = Output: 8768  every 32 numbers new block
  ];

  return EntityBlock;
}

function SendProjectile(projectile, resetEntities = 0) {
  const EntityBlockTEST = new Uint8Array([
    0, // case 0
    resetEntities, // if not 1 spawns unlimited entities? this for all webdata

    ai, // owner id?
    ai, // token id?
    Math.round((projectile.rotation * 255) / 360), // rotation?
    2, // entity type (player,projectile, etc)
    1,
    100, // projectile speed
    0, // ? idk ?
    ai,

    projectile.oldLocation.x & 0xff, // action start position
    projectile.oldLocation.x >>> 8,
    projectile.oldLocation.y & 0xff,
    projectile.oldLocation.y >>> 8,

    projectile.newLocation.x & 0xff, // action finish position
    projectile.newLocation.x >>> 8,
    projectile.newLocation.y & 0xff,
    projectile.newLocation.y >>> 8,

    0,
    0,
  ]);
  Game.players[1].ws.send(EntityBlockTEST);
}

function SwitchCaseAction(data, player) {
  console.log(data);
  switch (data[0]) {
    case 2:
      player.movingTo = data[1];
      break;
    case 4: // click pressed
      console.log("mouse click pressed");
      player.mousePressed = 1;
      break;
    case 5: // click released
      console.log("mouse click released");
      player.mousePressed = 0;
      break;
    case 6: // rotation
      //console.log("case rotation " + data[1] + " degrees");
      player.rotation = data[1];
      break;
    case 7: // shift state 0 - not pressed 1 - pressed
      player.shiftPressed = data[1];
      break;
    case 8: // select item from inventory
      //if (items[data[1]-1].hasProperty) // check what item type

      if (player.holdingid > 0) {
        player.holdingid = 0;
        player.buildingid = 0;
        const Case38startBuilding = new Uint8Array([38, player.buildingid]);
        player.ws.send(Case38startBuilding);
        break;
      }

      if (data[1] == 25) {
        player.holdingid = 10;
      } else {
        player.buildingid = data[1];
        player.holdingid = 21; // building map framework
        const Case38startBuilding = new Uint8Array([38, player.buildingid]);
        player.ws.send(Case38startBuilding);
      }
      break;
    default: // unknown case
      console.log(data);
  }
}

const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 3000 });

wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.on("message", (event) => {
    // @ts-ignore
    const buffer = Buffer.from(event);
    const string = buffer.toString("utf8");
    const data = JSON.parse(string);

    if (data[0] == 30) {
      // new player connection
      let token = data[1];
      let tokenid = data[2];
      let id = data[3];
      let nick = data[4];

      let playerTemp = Game.SpawnPlayer(ws, id, tokenid, token, nick);

      ws.data = {
        id: playerTemp.userid,
      };
    }
    let player = Game.players[ws.data.id];
    SwitchCaseAction(data, player);

    // keep connection alive
    const Case8 = new Uint8Array([8]);
    ws.send(Case8);
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

console.log("WebSocket server listening on port 3000");
