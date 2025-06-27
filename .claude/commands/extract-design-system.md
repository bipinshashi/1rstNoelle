# Extract Design System Command

## Goal
Extract a generalized and reusable design system from the screenshots provided in `$ARGUMENTS`, without including specific image content, so that frontend developers or AI agents can reference the JSON as a style foundation for building consistent UIs.

## Task

### 1. Analyze the screenshots provided in `$ARGUMENTS` to infer:
   - **Color palette**
   - **Typography rules**
   - **Spacing guidelines**
   - **Layout structure** (grids, cards, containers, etc.)
   - **UI components** (buttons, inputs, tables, etc.)
   - **Border radius, shadows, and other visual styling patterns**

### 2. Create a `design-system.json` file that:
   - Clearly defines these rules
   - Can be used to replicate the visual language in a consistent way

### 3. Output the JSON to the `prd` folder with the name: `design-system.json`

## Constraints
- The design system JSON should be agnostic to any specific website/brand
- Do not include actual image URLs or specific content from the screenshots
- Focus on extractable patterns and rules that can be reused
- Ensure the JSON structure is well-organized and developer-friendly
