---
name: cinematic-video
description: Generates cinematic video loops and background textures using Veo 3.1.
---
# Video Asset Strategy

## 1. Technical Specs (Veo 3.1)
* **Format:** MP4, 24fps.
* **Duration:** 8-second seamless loops for backgrounds.
* **Resolution:** 1080p (default) or 4K (Ultra tier only).

## 2. Cinematic Movements
* Instruct the agent to use specific camera movements for "Wow Factor":
    * "Slow dolly in" for product reveals.
    * "Static shot with atmospheric particles" for backgrounds.
    * "Drone sweep" for environment headers.

## 3. Integration with Frontend
* When a video is generated, the agent must automatically update the `Hero.tsx` component to use a `<video>` tag with `muted`, `loop`, and `playsInline` attributes.
