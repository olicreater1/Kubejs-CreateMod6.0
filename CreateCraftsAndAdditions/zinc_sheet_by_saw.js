//makes create crafts and additions zinc sheets by mechanical saw
ServerEvents.recipes(event => {
event.custom({
  "type": "create:cutting",
    "ingredients": [
      {
      "item": "create:zinc_ingot"
      }
    ],
    "processingTime": 200,
    "results":[
      {
        "count": 1,
        "item":"createaddition:zinc_sheet"
      }
    ]
  })
})
