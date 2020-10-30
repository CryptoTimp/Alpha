var settings = {
    Version: "0.5",
    APIKey: `2X6NwCa2uto2YSX0WSCKX1Xiyu2DzwzRd0AWA2M3YSyCHTVNAtDWearxekW7Eflt`,
    APISecret: `A7O6GaCv2YhNNveoOpgrN5kpFVyPpNyLMuRrDAxKb0IfAlpIugiDq7eG6XDZhJxM`,
    marketWatch: {
      fundingThreshold: 0.05,
      upTickColour: "green",
      upTickBackground: "black",
      downTickColour: "red",
      downTickBackground: "black",
      triggerColour: "purple",
      thresholdHourly: 1,
      threshold6Hourly: 3,
      thresholdDaily: 5,
      thresholdWeekly: 10,
    },
    LiquidationTOS:{
      sizeThreshold: 1000,
      tableLength: 75,
      highlightThreshold1: 100000,
      highlightThreshold2: 500000,
      highlightThreshold3: 1000000,
      highlightThreshold1Colour: "steelblue",
      highlightThreshold2Colour: "tomato",
      highlightThreshold3Colour: "red",
      upTickColour: "green",
      downTickColour: "red",
    },
    BinanceTOS:{
      sizeThreshold: 1000,
      tableLength: 75,
      highlightThreshold1: 100000,
      highlightThreshold2: 500000,
      highlightThreshold3: 1000000,
      highlightThreshold1Colour: "purple",
      highlightThreshold2Colour: "blue",
      highlightThreshold3Colour: "crimson",
      upTickColour: "green",
      downTickColour: "red",
    },
    BitMEXTOS: {
      sizeThreshold: 1000,
      tableLength: 75,
      highlightThreshold1: 100000,
      highlightThreshold2: 500000,
      highlightThreshold3: 1000000,
      highlightThreshold1Colour: "purple",
      highlightThreshold2Colour: "blue",
      highlightThreshold3Colour: "crimson",
      upTickColour: "green",
      downTickColour: "red",
    },
    UserTrades:{
      amtTrades: 100,
    },
    OpenOrders:{
      amtOrders: 20,
    },
    RiskLadder:{
      priceRange: 500,
      consolidation: 1,
      entryPriceColour: "blue",
      entryPriceLabel: "Entry",
      bidColour: "#228B22",
      askColour: "#8B0000",
    },
    CorrelationMatrix:{
      timeframe: "1m",
      
    }
  
  }
  module.exports = settings