import BlogPost from "./BlogPost";

function Body() {
  return (
    <>
      <BlogPost
        title="How to get rich"
        text="In a quiet little town nestled between rolling hills and vibrant green fields, life moved at a gentle pace. The sun rose each morning, casting a warm golden glow over the charming cottages and bustling markets. Locals greeted each other with friendly smiles and waves, fostering a sense of community that felt like family. Children played in the park, their laughter mingling with the cheerful chirping of birds, while the scent of freshly baked bread wafted through the air from the nearby bakery. As the day unfolded, the town came alive with stories shared, dreams pursued, and a timeless rhythm that made every moment feel special."
        author="Harry Potter"
        date="11/24/1999"
        readingTime="5 min"
        likes="120"
      />
      <BlogPost
        title="Crazy experience in New Zealand"
        text="Beneath the vast expanse of a starry night sky, a small group of friends gathered around a crackling campfire. The flames danced playfully, casting flickering shadows on their faces as they shared tales of adventure and laughter. The cool breeze carried the faint scent of pine and the distant sound of a babbling brook. Each story sparked memories, weaving a tapestry of their friendship that felt unbreakable. As they roasted marshmallows and watched the stars twinkle above, the world around them faded away, leaving only the warmth of the fire and the joy of being together in that perfect moment."
        author="Legolas Fairbanks"
        date="4 BCE"
        readingTime="21 min"
        likes="320,000"
      />
      <BlogPost
        title="Metro life in 2024"
        text="In the heart of the city, where the skyline brushed against the clouds, a vibrant art festival transformed the streets into a canvas of creativity. Artists from all corners came together to showcase their masterpieces, each piece telling a unique story that resonated with the onlookers. Colorful murals adorned the walls, while sculptures captivated passersby with their intricate designs. Street performers added to the lively atmosphere, their music and dance inviting everyone to join in the celebration. As dusk settled in, the twinkling lights illuminated the art, creating a magical ambiance that brought the community together, inspiring conversations and connections that would last long after the festival ended."
        author="Peter Jumps"
        date="12/24/1990"
        readingTime="12 min"
        likes="3"
      />
    </>
  );
}

export default Body;
