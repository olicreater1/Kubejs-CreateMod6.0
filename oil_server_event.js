//oil from compacting superheated bones
ServerEvents.recipes(event => {
event.custom({
{
  "type": "create:compacting",
  "heatRequirement":"superheated"
  "ingredients": [
    {
      "amount":10,
      "item": "minecraft:bone"
    },
        {
      "amount":10,
      "item": "minecraft:wheat_seeds"
    },
  ],
  "results": [
    {
      "amount":1000,
      "item": "createdieselgenerators:crude_oil",
      "nbt":{}
    }
  ]
}
})
})
