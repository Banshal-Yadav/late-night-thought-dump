# late-night-thought-dump 🌙

an AI web app for when your brain won't shut up at 2am.

type what's eating you alive. get a structured, no-fluff response. no toxic positivity. just clarity.


## preview

---
a space for when your brain won't shut up at 2am.

dump your thought. get a structured breakdown — what happened, what to do right now, and a real talk that doesn't sugarcoat it.



![app screenshot](src/screenshots/example2.png)
*when the deadline is tomorrow and your brain won't pick a side*
---


![app screenshot](src/screenshots/example_ss.png)
*dump your thought, get clarity - not comfort*
---
no journaling prompts. no motivational quotes. just clarity when you need it most.
## requirements
- [LM Studio](https://lmstudio.ai/) running locally with a model loaded
- CORS enabled in LM Studio server settings
- use provided system instruction

## setup
```bash
npm install
npm run dev
```

in `src/Input-component/TakeInput.jsx`, replace the model name with yours:
```js
model: "your-model-name-here"
```

## stack
react + vite + lm studio (local AI)
