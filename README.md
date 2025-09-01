# Comedy Dowry Calculator 😂

<img src="src/assets/Screenshot (426).png">

This project is a fun little web application built using React and Tailwind CSS. It's a humorous take on the idea of contributions in a relationship, presented in a playful, over-the-top way.

## Purpose

This calculator is purely for entertainment purposes and should not be taken seriously. It's designed to provide a light-hearted experience and spark some laughter.

## 🌐 Project Live Link

To see a live demo of the project, please visit: [Live Demo](https://dowry-calculator.vercel.app/)

## Features

- Calculate a fun “payment” range based on input values.
- Playful messages for special name or input combinations.
- Attractive, responsive UI with hover effects.
- Empty input handling — shows “No data found 😅” if values are missing.

## How It Works (Calculation Logic)

The calculation is based on a funny, playful logic:

1. **Who “pays”?**

   - The person earning more “pays” the calculated amount.
   - If the **girl earns more → she pays**, if the **boy earns more → he pays**.

2. **Base amount**

   - 40% of the higher earner's salary is considered as the base value.
   - Salary is converted into rupees based on selected units: thousand, lakh, or crore.

3. **Education multiplier**

   - Higher education increases the amount:
     - 12th → ×1.1
     - Bachelor → ×1.3
     - Master → ×1.5
     - PhD → ×1.7
     - Diploma → ×1.05
     - No degree → ×0.9

4. **Job multiplier**

   - Certain professions add more weight:
     - Doctor → ×1.6
     - Government → ×1.4
     - Engineer → ×1.2
     - Business → ×1.3
     - Startup Founder → ×1.5
     - Artist → ×1.1

5. **Minimum and maximum range**

   - Minimum = 70% of base amount or ₹50,000 (whichever is higher)
   - Maximum = 120% of base amount
   - Provides a playful range, not an exact figure.

6. **Empty input check**
   - If either salary or name is missing, the result shows **“No data found 😅”** instead of calculating.

## Disclaimer

This is just a fun project. The results don’t mean anything serious.
Love, care, respect, and trust are what truly matter ❤️
