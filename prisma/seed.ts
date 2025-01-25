import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const events = [
  {
    id: 1,
    name: "DJ Practice Session",
    slug: "dj-practice-session",
    city: "Pune",
    location: "Pune Music Hall",
    date: "2030-10-12T00:00:00.000Z",
    organizerName: "DJ Inc.",
    imageUrl:
      "https://lh5.googleusercontent.com/p/AF1QipOIOH42tfb11g7aDt2X6tREIPS4lJ8xRo_LpLlK=w408-h306-k-no",
    description:
      "Join us for an immersive DJ practice session at the DJ Beats Workshop! Whether you're a beginner aspiring to spin the decks or an experienced DJ looking to refine your skills, this event is tailored just for you. Dive into the world of beats, mixes, and electronic rhythms under the guidance of seasoned DJs and music producers. Showcase your skills during our open decks session. Share your favorite tracks, experiment with live remixing, and receive applause and feedback from a supportive audience.",
  },
  {
    id: 2,
    name: "Harmony Festival",
    slug: "harmony-festival",
    city: "Pune",
    location: "Pune Convention Center",
    date: "2030-11-15T00:00:00.000Z",
    organizerName: "Music Enthusiasts LLC",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7u-mgaJcIQKYJaxy7XMeXFOMiVgqcItHgRg&s",
    description:
      "Harmony Festival is a celebration of all music genres, bringing together musicians, artists, and music enthusiasts from around the world. Experience a day filled with live performances, interactive workshops, and a vibrant atmosphere of creativity and harmony. Join us for an unforgettable musical journey!",
  },
  {
    id: 3,
    name: "3D Animation Workshop",
    slug: "3d-animation-workshop",
    city: "Pune",
    location: "Pune Convention Center",
    date: "2030-12-08T00:00:00.000Z",
    organizerName: "3D Animators Inc.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7u-mgaJcIQKYJaxy7XMeXFOMiVgqcItHgRg&s",
    description:
      "Dive into the captivating world of 3D animation at our exclusive 3D Animation Masterclass! Whether you're an aspiring animator, a student studying animation, or a professional looking to enhance your skills, this workshop offers a unique opportunity to learn from industry experts and elevate your animation prowess.",
  },
  {
    id: 4,
    name: "Rock the City Concert",
    slug: "rock-the-city-concert",
    city: "Pune",
    location: "Pune Music Hall",
    date: "2030-11-18T00:00:00.000Z",
    organizerName: "Rock On Productions",
    imageUrl:
      "https://content.jdmagicbox.com/comp/pune/m6/020pxx20.xx20.180507141030.a2m6/catalogue/buntara-bhavana-cultural-center-pune-pune-banquet-halls-26j3o.jpg",
    description:
      "Get ready to rock out at Rock the City Concert! Experience electrifying performances by top rock bands, enjoy high-energy music, and immerse yourself in an unforgettable night of pure rock and roll.",
  },
  {
    id: 5,
    name: "Artisan Craft Fair",
    slug: "artisan-craft-fair",
    city: "Mumbai",
    location: "Mumbai Exhibition Center",
    date: "2030-12-01T00:00:00.000Z",
    organizerName: "Craftsmanship Guild",
    imageUrl:
      "https://images.venuebookingz.com/27300-1663751416-wm-jio-world-centre.jpg",
    description:
      "Discover unique handmade crafts and artworks at the Artisan Craft Fair. Meet talented artisans, shop for one-of-a-kind items, and support local craftsmanship. Join us for a day of creativity and craftsmanship.",
  },
  {
    id: 6,
    name: "Jazz Fusion Night",
    slug: "jazz-fusion-night",
    city: "Pune",
    location: "Pune Jazz Lounge",
    date: "2030-11-29T00:00:00.000Z",
    organizerName: "Groove Masters Productions",
    imageUrl:
      "https://www.holidify.com/images/cmsuploads/compressed/in_20191011173047.jpg",
    description:
      "Indulge in the smooth melodies and rhythmic beats of jazz fusion at Jazz Fusion Night. Experience world-class jazz performances, savor delicious cocktails, and immerse yourself in the soulful ambiance of live jazz music.",
  },
  {
    id: 7,
    name: "Indie Music Showcase",
    slug: "indie-music-showcase",
    city: "Pune",
    location: "Pune Indie Spot",
    date: "2030-11-25T00:00:00.000Z",
    organizerName: "Indie Vibes Records",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS669IzhriOxSthToYt3O0jSr5CeuuASCKpAQ&s",
    description:
      "Discover the next big indie artists at the Indie Music Showcase. Experience live performances by emerging talents, support independent music, and be part of a vibrant community of music enthusiasts and artists.",
  },
  {
    id: 8,
    name: "Global Food Festival",
    slug: "global-food-festival",
    city: "Mumbai",
    location: "Mumbai Waterfront Park",
    date: "2030-10-30T00:00:00.000Z",
    organizerName: "Foodie Ventures Inc.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0WKnnGfnmrIxjZqtozVXZz7nsgf-fS9D88A&s",
    description:
      "Embark on a culinary journey around the world at the Global Food Festival. Delight your taste buds with international cuisines, cooking demonstrations, and food tastings. Experience the flavors of different cultures in one delicious event.",
  },
  {
    id: 9,
    name: "Tech Innovators Summit",
    slug: "tech-innovators-summit",
    city: "Mumbai",
    location: "Mumbai Convention Center",
    date: "2030-11-15T00:00:00.000Z",
    organizerName: "InnovateTech Inc.",
    imageUrl:
      "https://cdn.asp.events/CLIENT_InfoComm_807A12DE_5056_B731_4C911D504F318565/sites/infocomm-2025/media/photos/TechInnovationStage-3500.jpg",
    description:
      "The Tech Innovators Summit is where visionaries, entrepreneurs, and tech enthusiasts converge. Explore the latest technological advancements, attend insightful keynotes from industry leaders, and participate in hands-on workshops. Connect with innovators, pitch your ideas, and be a part of shaping the future of technology.",
  },
  {
    id: 10,
    name: "Enchanted Garden Gala",
    slug: "enchanted-garden-gala",
    city: "Pune",
    location: "Pune Museum of Art",
    date: "2030-12-02T00:00:00.000Z",
    organizerName: "Cultural Garden Society",
    imageUrl:
      "https://www.fabhotels.com/blog/wp-content/uploads/2018/10/1000x650-153.jpg",
    description:
      "Step into a world of wonder at the Enchanted Garden Gala, a magical evening of art, music, and fantasy. Explore enchanting garden installations, experience live performances by world-class musicians and dancers, and indulge in gourmet delicacies. Dress in your most glamorous attire and immerse yourself in a night of elegance and enchantment.",
  },
  {
    id: 11,
    name: "Comedy Extravaganza",
    slug: "comedy-extravaganza",
    city: "Pune",
    location: "The Comedy Clubhouse",
    date: "2030-11-06T00:00:00.000Z",
    organizerName: "Laugh Productions",
    imageUrl:
      "data:image/png;base64,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",
    description:
      "Prepare for a night of laughter with top comedians from around the world. Enjoy stand-up, improv, and sketches that will have you in stitches!",
  },
  {
    id: 12,
    name: "Science and Space Expo",
    slug: "science-space-expo",
    city: "Mumbai",
    location: "Mumbai Science Center",
    date: "2030-10-29T00:00:00.000Z",
    organizerName: "Cosmic Explorers Society",
    imageUrl:
      "https://nehrusciencecentre.in/wp-content/uploads/2022/03/Hall-of-Aviation-and-Space-2.jpg",
    description:
      "Explore the wonders of science and space at this interactive expo. Engage in hands-on experiments, meet scientists, and learn about the mysteries of the universe.",
  },
  {
    id: 13,
    name: "Fashion Runway",
    slug: "fashion-runway",
    city: "Pune",
    location: "Pune Fashion Week Venue",
    date: "2030-11-12T00:00:00.000Z",
    organizerName: "Chic Trends Agency",
    imageUrl:
      "https://media.graphcms.com/resize=w:720/E5PHHvcCRKi7UvExcwRm",
    description:
      "Witness the latest trends on the runway. Top designers will showcase their collections, setting the stage for the future of fashion.",
  },
  {
    id: 14,
    name: "Culinary Masterclass",
    slug: "culinary-masterclass",
    city: "Mumbai",
    location: "Mumbai Epicurean Institute",
    date: "2030-12-02T00:00:00.000Z",
    organizerName: "Gourmet Chefs Society",
    imageUrl:
      "https://streetbuzz.co.in/newsapp/storage/attachments/1/65ff3563d5b15_thumb.png",
    description:
      "Join renowned chefs for a culinary journey. Learn cooking techniques, taste exquisite dishes, and elevate your skills in the art of gastronomy.",
  },
  {
    id: 15,
    name: "Film Buffs Symposium",
    slug: "film-buffs-symposium",
    city: "Pune",
    location: "Pune Film Institute",
    date: "2030-11-08T00:00:00.000Z",
    organizerName: "Cinema Society",
    imageUrl:
      "https://news.northeastern.edu/wp-content/uploads/2013/08/theater_600.jpg",
    description:
      "A gathering for film enthusiasts! Screen classic movies, engage in discussions with filmmakers, and gain insights into the world of cinema.",
  },
  {
    id: 16,
    name: "Literary Salon",
    slug: "literary-salon",
    city: "Mumbai",
    location: "Mumbai & Co. Bookstore",
    date: "2030-12-15T00:00:00.000Z",
    organizerName: "Words Society",
    imageUrl:
      "https://kidsstoppress.com/wp-content/uploads/2021/09/images_salons-for-kids-in-mumbai_kidsstoppress-scaled.jpg",
    description:
      "Celebrate the written word at this literary gathering. Listen to readings by acclaimed authors, participate in book discussions, and embrace the magic of storytelling.",
  },
  {
    id: 17,
    name: "Wellness Expo",
    slug: "wellness-expo",
    city: "Pune",
    location: "Pune Convention Center",
    date: "2030-11-30T00:00:00.000Z",
    organizerName: "Wellness Warriors Inc.",
    imageUrl:
      "https://content3.jdmagicbox.com/v2/comp/mumbai/x3/022pxx22.xx22.230221200304.z4x3/catalogue/nehru-centre-hall-of-harmony-worli-mumbai-auditoriums-OdfEgcanRr.jpg",
    description:
      "Immerse yourself in the world of fitness and well-being. Attend fitness classes, learn about nutrition, and explore holistic approaches to health.",
  },
  {
    id: 18,
    name: "Digital Art Symposium",
    slug: "digital-art-symposium",
    city: "Mumbai",
    location: "Mumbai Art Gallery",
    date: "2030-11-01T00:00:00.000Z",
    organizerName: "Tech Creatives Collective",
    imageUrl:
      "https://i.pinimg.com/1200x/d2/0f/cd/d20fcdaa25670ff3c35301fdd99a5f48.jpg",
    description:
      "Discover the intersection of technology and art. Experience digital art installations, attend VR workshops, and meet digital artists pushing creative boundaries.",
  },
  {
    id: 19,
    name: "Dance Fusion Festival",
    slug: "dance-fusion-festival",
    city: "Pune",
    location: "Pune Street Dance Studio",
    date: "2030-11-28T00:00:00.000Z",
    organizerName: "Rhythm Revolution",
    imageUrl:
      "https://images.unsplash.com/photo-1642178225043-f299072af862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Experience a blend of dance styles from around the world. Participate in dance workshops, watch electrifying performances, and dance the night away.",
  },
];

async function main() {
  console.log(`Start seeding ...`);

  for (const event of events) {
    const result = await prisma.festivoEvent.upsert({
      where: { id: event.id },
      update: {
        imageUrl: event.imageUrl,
        location: event.location,
      },
      create: event,
    });
    console.log(`Created event with id: ${result.id}`);
  }

  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
