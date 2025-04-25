{
  "type": "create:sequenced_assembly",
  "ingredient": {
    "tag": "minecraft:andesite"
  },
  "loops": 1,
  "results": [
    {
      "item": "minecraft:tuff"
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
