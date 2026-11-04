# A Little World for Vishnu ?? ? Birthday Website

A beautiful, emotional, and interactive digital birthday scrapbook crafted especially for **Vishnu Prasath** by his best friend & favourite irritator, **Shivani**.

This website is designed as a dreamy, heartfelt digital gift with baby-blue aesthetics, Polaroid-style memories, handwritten love notes, an interactive memory vault, a 60-second wish ceremony, a lifetime friendship contract, and deep personal messages.

---

## ?? Visual Theme & Design Language

- **Color Palette**: Baby Blue (`#E0F2FE`, `#BAE6FD`), Sky Blue (`#38BDF8`, `#0284C7`), Soft White (`#F8FAFC`), Powder Blue, with subtle Navy Blue accents.
- **Typography**: 
  - Headings: *Playfair Display* (Classic, elegant serif)
  - Notes & Emotional Letters: *Caveat* (Warm, realistic handwritten font)
  - Body & UI: *Plus Jakarta Sans* (Clean, modern sans-serif)
- **Scrapbook Details**: Real Polaroid frames with subtle rotations, washi-tape decorations, paper textures, delicate drop shadows, glowing stars, and ambient sparkles.
- **Audio Experience**: Dedicated Tamil dedication song player (*Alaakaa Loova*) with animated spinning vinyl record and equalizer waveform, plus a persistent mini-player so the music keeps playing throughout the entire journey.

---

## ??? Website Journey (Section Flow)

1. **Page 01 ? Welcome Screen**
   - Heading: `"HAPPY BIRTHDAY TO MY FAVORITE PERSON"`
   - Name: `"Vishnu Prasath"`
   - Subtitle: `"A little something made just for you."`
   - Smooth button `"Open Your Surprise ?"` leading directly to the soundtrack.
   
2. **Page 02 ? These Are For You ? (The Music Player)**
   - Dedication Tamil song: `public/assets/music/birthday_song.mp3` (*Alaakaa Loova* by Sai Abhyankkar)
   - Interactive vinyl player with play/pause, scrub bar, duration, volume control with mute, and pulsating equalizer bars.
   - Quote: *"Some songs just remind me of you."*
   
3. **Page 03 ? 13 Reasons Why You're Special (Scrapbook Board)**
   - Features all 13 individual photographs (`recent_01.jpg` ? `recent_13.jpg`)
   - Exact numerical mappings:
     1. `recent_01` ? My Biggest Supporter
     2. `recent_02` ? My Good Listener
     3. `recent_03` ? My Personal Caretaker
     4. `recent_04` ? My Professional Irritator
     5. `recent_05` ? My Happiness Booster
     6. `recent_06` ? My Non-Judgemental Person
     7. `recent_07` ? My Favourite Sloth
     8. `recent_08` ? My Little Ghost
     9. `recent_09` ? My Backup Person
     10. `recent_10` ? My First Best Male Friend
     11. `recent_11` ? My Partner in Every Fight
     12. `recent_12` ? My Comfort Person
     13. `recent_13` ? My Favourite Human Being
   - Interactive zoom modal upon clicking any Polaroid.

4. **Page 04 ? Little Secret: Memory Vault**
   - Locked safe box diary interface.
   - Password: `INFINITE` (case-insensitive & trimmed).
   - Upon unlocking:
     - Reveals the 2 special memory photographs (`memory_01.jpg` and `memory_02.jpg`).
     - Displays the exact heartfelt message:
       > *"No matter how difficult my day gets, one call with you makes me laugh again.*
       > *You never let me sit with my sadness for too long.*
       > *Even when I come with endless complaints, fights and irritation, you patiently listen.*
       > *You have been there for me whenever I needed someone the most.*
       > *I hope life gives you every, every happiness you deserve. May all your dreams come true sooner than you imagine."*

5. **Page 05 ? A Beautiful Letter For You**
   - Interactive sealed baby-blue envelope with a wax heart seal.
   - Realistic multi-stage animation: flap opens, letter slides out, and unfolds.
   - Handwritten birthday letter with signature:
     > *"With lots of love,*
     > *Your favourite irritator. ????"*

6. **Page 06 ? Make a Wish ??**
   - Custom SVG birthday cake with a lit candle and glowing flickering flame.
   - Clicking `"MAKE A WISH ?"` starts an exact 60-second wish timer with circular visual progress.
   - Candle remains safely lit during the entire wish-making time.
   - When timer finishes, the `"BLOW ??"` button appears.
   - Clicking `"BLOW"` puts out the flame with a realistic smoke animation and triggers a confetti celebration!

7. **Page 07 ? Friendship Contract**
   - Question: *"Are you willing to sign the contract of being my friend for the rest of your life?"*
   - Playful dodging `NO` button that smoothly jumps away within its container when hovered or tapped.
   - Fixed `YES ?` button that stamps and certifies the official Lifetime Friendship Agreement!

8. **Page 08 ? Final Emotional Page**
   - Heading: `"Thank You."`
   - 6 emotional friendship statements.
   - Climax quote:
     > **"Love you lots, my kutty paiya ?"**
     > *"I never want to miss you."*
   - Interactive `"Send a tight hug back to Shivani ?"` button with celebratory heart bursts.

---

## ?? Directory Structure

```text
Vishnu-Birthday/
?
??? public/
?   ??? assets/
?       ??? individual/
?       ?   ??? recent_01.jpg ... recent_13.jpg
?       ??? memories/
?       ?   ??? memory_01.jpg
?       ?   ??? memory_02.jpg
?       ??? music/
?           ??? birthday_song.mp3
?
??? src/
?   ??? components/
?   ?   ??? AudioPlayer.tsx
?   ?   ??? BirthdayCake.tsx
?   ?   ??? EnvelopeLetter.tsx
?   ?   ??? FinalEmotional.tsx
?   ?   ??? FloatingStars.tsx
?   ?   ??? FriendshipContract.tsx
?   ?   ??? MemoryVault.tsx
?   ?   ??? Navbar.tsx
?   ?   ??? ScrapbookGallery.tsx
?   ?   ??? WelcomeSection.tsx
?   ??? context/
?   ?   ??? AudioContext.tsx
?   ??? App.tsx
?   ??? index.css
?   ??? main.tsx
?   ??? types.ts
?
??? index.html
??? package.json
??? tailwind.config.js
??? tsconfig.json
??? vite.config.ts
??? README.md
```

---

## ?? Setup & Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your web browser.

3. **Build for production**:
   ```bash
   npm run build
   ```
   The production-ready static files are generated in `dist/`.

4. **Preview production build locally**:
   ```bash
   npm run preview
   ```

---

## ?? Deployment Instructions

### Deploy to Vercel:
1. Push this repository to GitHub.
2. Go to [Vercel](https://vercel.com) and import the repository.
3. Framework Preset: `Vite`
4. Root Directory: `./`
5. Click **Deploy**.

### Deploy to Netlify:
1. Connect repository in [Netlify](https://netlify.com).
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Click **Deploy Site**.
