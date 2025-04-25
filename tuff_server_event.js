//create recipe for tuff from assmbley
ServerEvents.recipes(event => {
event.custom({
  {
    "type": "create:sequenced_assembly",
    "ingredient": {
      "tag": "minecraft:andesite"
    },
    "loops": 1,
    "results": [
      {
        "item": "minecraft:tuff",
        "count": 10
      }
    ],
    "sequence": [
      {
        "type": "create:filling",
        "ingredients": [
          {
            "item": ""
          },
          {
            "amount": 500,
            "fluid": "minecraft:lava",
            "nbt": {}
          }
        ],
        "results": [
          {
            "item": ""
          }
        ]
      },
      {
        "type": "create:item_application",
        "ingredients": [
          {
            "item": "minecraft:diorite"
          }
        ],
        "results": [
          {
            "item": ""
          }
        ]
      },
      {
        "type": "create:compacting",
        "heatRequirement" : superheated
        "ingredients": [
          {
            "item": ""
          }
        ],
        "results": [
          {
            "item": ""
          }
        ]
      }
    ],
    "transitionalItem": {
      "item": ""
    }
  }
})
})
  
