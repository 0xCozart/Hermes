## Personalized AAC App with Subjective Testing

### Concept

- The app presents a series of images and sounds to assess user preferences.
- AI analyzes selections to create a **personalized communication board**.
- The app continuously adapts based on usage patterns and sensory feedback.

---

### Core Features

#### 1. Image Selection Test

- Display multiple image styles:
  - Cartoon
  - Realistic
  - Abstract
- AI observes selections to determine the most effective visual set.
- Adjust color schemes for visual comfort.

#### 2. Sound Preference Test

- Present a variety of voice options:
  - Different tones
  - Speeds
  - Genders
- Let the user/caregiver choose the most pleasant or clear voice.
- Dynamically adjust TTS engine (pitch, cadence, volume).

#### 3. Emotional Context Training

- Incorporate facial expression recognition (if using a device with a camera).
- Gauge positive or negative reactions to certain stimuli.
- Automatically adjust communication choices based on comfort levels.

---

### Tech Implementation

#### Image Generation

- Use **DALL·E** or **Stable Diffusion** for dynamic image creation.

#### Sound Tuning

- Integrate with **Google Cloud Text-to-Speech API**.
- Adjust voice profiles dynamically based on preferences.

#### Feedback Loop

- Use a lightweight **reinforcement learning model** to adjust and improve communication accuracy over time.

---

### Potential Flow

1. Initial Setup:
   - Subjective test for image and sound preferences.
2. Communication Board Creation:
   - Auto-generate the most suitable set of images and sounds.
3. Continuous Improvement:
   - Adaptive learning based on usage patterns.

---
