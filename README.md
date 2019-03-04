ASK Constants contains a number of strings exported as constants to help reduce spelling mistakes in projects built with the amazing [Alexa Skills Kit SDK for Node.js](https://github.com/alexa/alexa-skills-kit-sdk-for-nodejs).

## Disclaimer

**This package is in no way affiliated with or endorsed by Amazon or the Alexa team.**

## Installation

Install `ask-constants` as a dependency:

```bash
$ npm i ask-constants
```

## Usage

My most common use case is combining built-in intents with custom intents.

```typescript
// constants.ts
import * as constants from "ask-constants";

export const INTENTS = {
  ...constants.intents,

  custom: {
    DO_SOMETHING_COOL: "DoSomethingCool",
  },
};

// intent-handlers.ts
import { INTENTS } from "./constants";

export const IntentHandler = {
  [INTENTS.AMAZON.HELP]: () => response, // some ask handler
};
```

## Feedback

These constants were adapated to my workflow and common use-cases. If you have ideas on how to improve or expand them, please start a discussion via Github issues. Cheers.
