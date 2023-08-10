//@ts-check

const items = require(__dirname + "/data/items");

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
    if (typeof event === "string") {
      // This is a text message (string)
      console.log("Received string:", event);
    } else {
      // This is binary data
      const buffer = Buffer.from(event);
      console.log("Received binary:", buffer);
    }
    ws.send("Case8");
  });

  // ws.on("message", (event) => {
  //   // @ts-ignore
  //   const buffer = Buffer.from(event);
  //   const string = buffer.toString("utf8");
  //   const data = JSON.parse(string);
  //   console.log(data);

  //   ws.send("Case8");
  // });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

console.log("WebSocket server listening on port 3000");
