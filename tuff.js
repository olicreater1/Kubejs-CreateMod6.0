{
  "type": "create:sequenced_assembly",
  "ingredient": {
    "tag": "forge:dusts/obsidian"
  },
  "loops": 1,
  "results": [
    {
      "item": "create:sturdy_sheet"
    }
  ],
  "sequence": [
    {
      "type": "create:filling",
      "ingredients": [
        {
          "item": "create:unprocessed_obsidian_sheet"
        },
        {
          "amount": 500,
          "fluid": "minecraft:lava",
          "nbt": {}
        }
      ],
      "results": [
        {
          "item": "create:unprocessed_obsidian_sheet"
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
          "item": "create:unprocessed_obsidian_sheet"
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
