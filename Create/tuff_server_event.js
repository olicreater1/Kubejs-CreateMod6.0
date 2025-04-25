//create recipe for tuff from compacting andesite, charcoal, and lava
ServerEvents.recipes(event => {
event.custom({
{
  "type": "create:compacting",
  "ingredients": [
    {
      "item": "minecraft:charcoal"
    },
    {
      "item": "minecraft:andesite"
    },
    {
      "amount": 100,
      "fluid": "minecraft:lava",
      "nbt": {}
    }
  ],
  "results": [
    {
      "item": "minecraft:tuff"
    }
  ]
}
})
})
